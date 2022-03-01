# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

from typing import Optional, Type, Callable

import beanmachine.ppl.compiler.bmg_nodes as bn
import beanmachine.ppl.compiler.bmg_types as bt
from beanmachine.ppl.compiler.bm_graph_builder import BMGraphBuilder
from beanmachine.ppl.compiler.bmg_node_types import is_supported_by_bmg
from beanmachine.ppl.compiler.bmg_types import PositiveReal
from beanmachine.ppl.compiler.error_report import BMGError, UnsupportedNode, ErrorReport
from beanmachine.ppl.compiler.fix_problem import (
    Fatal,
    NodeFixerResult,
    NodeFixer,
    GraphFixer,
    ancestors_first_graph_fixer,
    node_fixer_first_match,
)
from beanmachine.ppl.compiler.graph_labels import get_edge_label
from beanmachine.ppl.compiler.lattice_typer import LatticeTyper


def _guard(t: Type, fixer: Callable) -> NodeFixer:
    def guarded(node: bn.BMGNode) -> Optional[bn.BMGNode]:
        return fixer(node) if isinstance(node, t) else None

    return guarded


class UnsupportedNodeFixer:
    """This class takes a Bean Machine Graph builder and attempts to
    fix all uses of unsupported operators by replacing them with semantically
    equivalent nodes that are supported by BMG."""

    _bmg: BMGraphBuilder
    _typer: LatticeTyper
    _graph_fixer: GraphFixer
    errors: ErrorReport

    def __init__(self, bmg: BMGraphBuilder, typer: LatticeTyper) -> None:
        self._bmg = bmg
        self._typer = typer
        node_fixer = node_fixer_first_match(
            [
                _guard(bn.Chi2Node, self._replace_chi2),
                _guard(bn.DivisionNode, self._replace_division),
                _guard(bn.IndexNode, self._replace_index),
                _guard(bn.ItemNode, self._replace_item),
                _guard(bn.LogSumExpTorchNode, self._replace_lse),
                _guard(bn.MultiplicationNode, self._fix_matrix_scale),
                _guard(bn.SwitchNode, self._replace_switch),
                _guard(bn.TensorNode, self._replace_tensor),
                _guard(bn.UniformNode, self._replace_uniform),
            ]
        )
        self._graph_fixer = ancestors_first_graph_fixer(bmg, typer, node_fixer)
        self.errors = ErrorReport()

    def fix_problems(self) -> None:
        self._graph_fixer()

    def _replace_division(self, node: bn.DivisionNode) -> Optional[bn.BMGNode]:
        # BMG has no division node. We replace division by a constant with
        # a multiplication:
        #
        # x / const --> x * (1 / const)
        #
        # And we replace division by a non-constant with a power:
        #
        # x / y --> x * (y ** (-1))
        #
        r = node.right
        if isinstance(r, bn.ConstantNode):
            return self._bmg.add_multiplication(
                node.left, self._bmg.add_constant(1.0 / r.value)
            )
        neg1 = self._bmg.add_constant(-1.0)
        powr = self._bmg.add_power(r, neg1)
        return self._bmg.add_multiplication(node.left, powr)

    def _replace_uniform(self, node: bn.UniformNode) -> Optional[bn.BMGNode]:
        # TODO: Suppose we have something like Uniform(1.0, 2.0).  Can we replace that
        # with (Flat() + 1.0) ? The problem is that if there is an observation on
        # a sample of the original uniform, we need to modify the observation to
        # point to the sample, not the addition, and then we need to modify the value
        # of the observation. But this is doable. Revisit this question later.
        # For now, we can simply say that a uniform distribution over 0.0 to 1.0 can
        # be replaced with a flat.
        low = node.low
        high = node.high
        if (
            isinstance(low, bn.ConstantNode)
            and float(low.value) == 0.0
            and isinstance(high, bn.ConstantNode)
            and float(high.value) == 1.0
        ):
            return self._bmg.add_flat()
        return None

    def _replace_chi2(self, node: bn.Chi2Node) -> bn.BMGNode:
        # Chi2(x), which BMG does not support, is exactly equivalent
        # to Gamma(x * 0.5, 0.5), which BMG does support.
        half = self._bmg.add_constant_of_type(0.5, PositiveReal)
        mult = self._bmg.add_multiplication(node.df, half)
        return self._bmg.add_gamma(mult, half)

    def _replace_index_one_column(self, node: bn.IndexNode) -> bn.BMGNode:
        left = node.left
        right = node.right
        typer = self._typer
        assert isinstance(typer, LatticeTyper)

        # It is possible during rewrites to end up with a constant for both
        # operands of the index; in that case, fold the index away entirely.

        # If we have a ToMatrix indexed by a constant, we can similarly
        # eliminate the indexing operation.

        # If we have Index(ColumnIndex(ToMatrix(elements), Const1), Const2)
        # then we can again eliminate the indexing altogether.

        if isinstance(right, bn.ConstantNode) and typer.is_natural(right):
            r = int(right.value)
            if isinstance(left, bn.ConstantNode):
                return self._bmg.add_constant(left.value[r])
            if isinstance(left, bn.ToMatrixNode):
                return left.inputs[r + 2]
            if isinstance(left, bn.ColumnIndexNode):
                collection = left.left
                if isinstance(collection, bn.ToMatrixNode):
                    column_index = left.right
                    if isinstance(column_index, bn.ConstantNode) and typer.is_natural(
                        column_index
                    ):
                        c = int(column_index.value)
                        rows = int(collection.rows.value)
                        return collection.inputs[rows * c + r + 2]

        # We cannot optimize it away; add a vector index operation.
        return self._bmg.add_vector_index(left, right)

    def _replace_index_multi_column(self, node: bn.IndexNode) -> bn.BMGNode:
        left = node.left
        right = node.right
        typer = self._typer
        assert isinstance(typer, LatticeTyper)

        # It is possible during rewrites to end up with a constant for both
        # operands of the index; in that case, fold the index away entirely.

        if isinstance(right, bn.ConstantNode) and typer.is_natural(right):
            r = int(right.value)
            if isinstance(left, bn.ConstantNode):
                return self._bmg.add_constant(left.value[r])
            # TODO: If left is a ToMatrixNode then we can construct a second
            # ToMatrixNode that has just the entries we need.

        # We cannot optimize it away.
        return self._bmg.add_column_index(left, right)

    def _replace_index(self, node: bn.IndexNode) -> Optional[bn.BMGNode]:
        # * If we have an index into a one-column matrix, replace it with
        #   a vector index.
        # * If we have an index into a multi-column matrix, replace it with
        #   a column index
        left = node.left
        node_type = self._typer[left]
        if not isinstance(node_type, bt.BMGMatrixType):
            return None
        if node_type.columns == 1:
            return self._replace_index_one_column(node)
        return self._replace_index_multi_column(node)

    def _replace_item(self, node: bn.ItemNode) -> Optional[bn.BMGNode]:
        # "item()" is an identity for our purposes. We just remove it.
        return node.inputs[0]

    def _replace_lse(self, node: bn.LogSumExpTorchNode) -> Optional[bn.BMGNode]:
        # We only support compiling models where dim=0 and keepDims=False.
        if not bn.is_zero(node.inputs[1]) or not bn.is_zero(node.inputs[2]):
            return None

        # We require that the input to LSE be a single column.
        operand = node.inputs[0]
        operand_type = self._typer[operand]
        if not isinstance(operand_type, bt.BMGMatrixType) or operand_type.columns != 1:
            return None

        # If the input is a TO_MATRIX operation then we can just feed its inputs
        # directly into the n-ary LSE BMG node.
        if isinstance(operand, bn.ToMatrixNode):
            # The first two inputs are the size.
            assert len(operand.inputs) >= 3
            # If the matrix is a singleton then logsumexp is an identity.
            if len(operand.inputs) == 3:
                return operand.inputs[2]
            elements = operand.inputs.inputs[2:]
            assert isinstance(elements, list)
            return self._bmg.add_logsumexp(*elements)

        # Otherwise, just generate the vector LSE BMG node.
        return self._bmg.add_logsumexp_vector(operand)

    def _replace_tensor(self, node: bn.TensorNode) -> Optional[bn.BMGNode]:
        # Replace a 1-d or 2-d tensor with a TO_MATRIX node.
        size = node._size
        if len(size) > 2:
            return None
        # This is the row and column count of the torch tensor.
        # In BMG, matrices are column-major, so we'll swap them.
        r, c = bt._size_to_rc(size)
        # ToMatrixNode requires naturals.
        rows = self._bmg.add_natural(c)
        cols = self._bmg.add_natural(r)
        tm = self._bmg.add_to_matrix(rows, cols, *node.inputs.inputs)
        return tm

    def _replace_bool_switch(self, node: bn.SwitchNode) -> bn.BMGNode:
        # If the switched value is a Boolean then we can turn this into an if-then-else.
        assert (len(node.inputs) - 1) / 2 == 2
        assert isinstance(node.inputs[1], bn.ConstantNode)
        assert isinstance(node.inputs[3], bn.ConstantNode)
        if bn.is_zero(node.inputs[1]):
            assert bn.is_one(node.inputs[3])
            return self._bmg.add_if_then_else(
                node.inputs[0], node.inputs[4], node.inputs[2]
            )
        else:
            assert bn.is_one(node.inputs[1])
            assert bn.is_zero(node.inputs[3])
            return self._bmg.add_if_then_else(
                node.inputs[0], node.inputs[2], node.inputs[4]
            )

    def _replace_natural_switch(self, node: bn.SwitchNode) -> Optional[bn.BMGNode]:
        # If:
        #
        # * the switched value is natural, and
        # * the cases are 0, 1, 2, ... n

        # then we can generate Choice(choice, [stochastic_values]).
        #
        # TODO: If we have a contiguous set of cases, say {2, 3, 4}, then
        # we could generate the choice from the elements and the index could
        # be the choice node minus two.
        #
        # TODO: If we have a slightly noncontiguous set of cases, say {0, 1, 3},
        # then we can generate a choice with a dummy value of the appropriate type
        # in the missing place.
        #
        # TODO: If we have arbitrary natural cases, say 1, 10, 101, then we could
        # add an integer equality operation to BMG and generate a nested IfThenElse.

        # Do we have contiguous cases 0, ..., n?
        num_cases = (len(node.inputs) - 1) // 2

        cases = set()
        for i in range(num_cases):
            c = node.inputs[i * 2 + 1]
            assert isinstance(c, bn.ConstantNode)
            cases.add(int(c.value))

        if min(cases) != 0 or max(cases) != num_cases - 1 or len(cases) != num_cases:
            return None

        # We're all set; generate a choice.
        values = [None] * num_cases
        for i in range(num_cases):
            c = node.inputs[i * 2 + 1]
            assert isinstance(c, bn.ConstantNode)
            v = node.inputs[i * 2 + 2]
            values[int(c.value)] = v  # pyre-ignore
        assert None not in values
        return self._bmg.add_choice(node.inputs[0], *values)

    def _replace_switch(self, node: bn.SwitchNode) -> Optional[bn.BMGNode]:
        # inputs[0] is the value used to perform the switch; there are
        # then pairs of constants and values.  It should be impossible
        # to have an even number of inputs.
        assert len(node.inputs) % 2 == 1

        choice = node.inputs[0]

        num_cases = (len(node.inputs) - 1) // 2
        # It should be impossible to have a switch with no cases.
        assert num_cases > 0

        # It is possible but weird to have a switch with exactly one case.
        # In this scenario we can eliminate the switch entirely by simply
        # replacing it with its lone case value.

        # TODO: Consider producing a warning for this situation, because
        # the user's model is probably wrong if they think they are stochastically
        # choosing a random variable but always get the same one.

        if num_cases == 1:
            assert isinstance(node.inputs[1], bn.ConstantNode)
            return node.inputs[2]

        # There are at least two cases.  We should never have two cases to choose from
        # but a constant choice!

        assert not isinstance(choice, bn.ConstantNode)

        tc = self._typer[choice]
        if tc == bt.Boolean:
            return self._replace_bool_switch(node)
        if tc == bt.Natural:
            return self._replace_natural_switch(node)

        # TODO: Generate a better error message for switches that we cannot yet
        # turn into BMG nodes.
        return None

    def _fix_matrix_scale(self, n: bn.BMGNode) -> Optional[bn.BMGNode]:
        # Double check we can proceed, and that exactly one is scalar
        if not self._fixable_matrix_scale(n):
            return None
        # We'll need to name the inputs and their types
        left, right = n.inputs
        left_type, right_type = [self._typer[i] for i in n.inputs]
        # Let's assume the first is the scalr one
        scalar, matrix = left, right
        # Fix it if necessary
        if right_type.is_singleton():
            scalar = right
            matrix = left
        return self._bmg.add_matrix_scale(scalar, matrix)

    def _fixable_matrix_scale(self, n: bn.BMGNode) -> bool:
        # A matrix multiplication is fixable (to matrix_scale) if it is
        # a binary multiplication with non-singlton result type
        # and the type of one argument is matrix and the other is scalar
        if not isinstance(n, bn.MultiplicationNode) or not (len(n.inputs) == 2):
            return False
        # The return type of the node should be matrix
        if not (self._typer[n]).is_singleton():
            return False
        # Now let's check the types of the inputs
        input_types = [self._typer[i] for i in n.inputs]
        # If both are scalar, then there is nothing to do
        if all(t.is_singleton() for t in input_types):
            return False  # Both are scalar
        # If both are matrices, then there is nothing to do
        if all(not (t.is_singleton()) for t in input_types):
            return False  # Both are matrices
        return True


# TODO: We should make a rewriter that detects stochastic index
# into list.  We will need to detect if the list is (1) all
# numbers, in which case we can make a constant matrix out of it,
# (2) mix of numbers and stochastic elements, in which case we can
# make it into a TO_MATRIX node, or (3) wrong shape or contents,
# in which case we must give an error.  We will likely want to
# move this check for unsupported constant value to AFTER that rewrite.

# TODO: We have an ordering problem in the fixers:
# Consider a model with (tensor([[c(), c()],[c(), c()]]) * 10.0).exp() in it,
# where c() is a sample from Chi2(1.0).
#
# The devectorizer skips rewriting the tensor multiplied by scalar operation
# because matrix scale rewriter will do so. However it does devectorize the
# exp(); it adds index ops to extract the four values from the multiplication.
#
# Now, which runs first, the unsupported node fixer or the matrix scale fixer?
#
# * Unsupported node fixer must run first so that the Chi2(1.0) is rewritten into
#   supported Gamma(0.5, 0.5) before the matrix scale fixer needs to know the type
#   of the multiplication. But...
# * Matrix scale fixer must run first so that unsupported node fixer can correctly
#   rewrite and optimize the index operations.
#
# We have a chicken-and-egg problem here.
#
# The long-term solution is:
#
# * Extract the error reporting functionality from the unsupported node rewriter
#   into its own pass.  Unsupported node rewriter just makes a best effort to rewrite.
#   (DONE)
# * All rewriting passes run in turn making best efforts to rewrite until a fixpoint is
#   reached; THEN we check for remaining errors.
#   (IN PROGRESS)
#
# However, that principled solution will require some minor rearchitecting of the
# graph rewriters. For now, what we'll do is move the matrix scale fixer INTO the
# unsupported node fixer. Since we rewrite from ancestors to descendants, we'll
# rewrite the chi2, and then the multiplication, and then the index nodes, which is
# the order we need to do them in.


class UnsupportedNodeReporter:
    _bmg: BMGraphBuilder
    _graph_fixer: GraphFixer
    errors: ErrorReport

    def __init__(self, bmg: BMGraphBuilder, typer: LatticeTyper) -> None:
        # TODO: Typer is unused; remove it. Right now fix_problems assumes
        # UnsupportedNodeRewriter __init__ takes a typer.
        self._bmg = bmg
        self._graph_fixer = ancestors_first_graph_fixer(
            bmg, typer, self._needs_fixing, self._get_error
        )
        self.errors = ErrorReport()

    def fix_problems(self) -> None:
        _, self.errors = self._graph_fixer()

    def _needs_fixing(self, n: bn.BMGNode) -> NodeFixerResult:
        # Constants that can be converted to constant nodes of the appropriate type
        # will be converted in the requirements checking pass. Here we just detect
        # constants that cannot possibly be supported because they are the wrong
        # dimensionality.

        if isinstance(n, bn.ConstantNode):
            t = bt.type_of_value(n.value)
            return Fatal if t == bt.Tensor or t == bt.Untypable else n
        return n if is_supported_by_bmg(n) else Fatal

    def _get_error(self, n: bn.BMGNode, index: int) -> Optional[BMGError]:
        # TODO: The edge labels used to visualize the graph in DOT
        # are not necessarily the best ones for displaying errors.
        # Consider fixing this.
        unsupported_node = n.inputs[index]
        return UnsupportedNode(
            unsupported_node,
            n,
            get_edge_label(n, index),
            self._bmg.execution_context.node_locations(unsupported_node),
        )
