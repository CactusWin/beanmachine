"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7383],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){return function(n){var t=m(n.components);return a.createElement(e,i({},n,{components:t}))}},m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(t),c=r,h=p["".concat(o,".").concat(c)]||p[c]||u[c]||i;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},13982:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"variable",title:"Worlds and Variables",sidebar_label:"Worlds and Variables",slug:"/variable"},s=void 0,d={unversionedId:"framework_topics/custom_proposers/variable",id:"framework_topics/custom_proposers/variable",isDocsHomePage:!1,title:"Worlds and Variables",description:"A crucial part of Bean Machine inference is its ability track the state of inference using Worlds. During inference, the World represents the state of the variables and their dependencies. The World is a graphical data structure where each node in the graph represents a Variable containing information about the variable's value, distribution, probability, etc. The edges between nodes represent the dependencies between variables. Each variable tracks its parent variables as well as its children variables.",source:"@site/../docs/framework_topics/custom_proposers/variable.md",sourceDirName:"framework_topics/custom_proposers",slug:"/variable",permalink:"/docs/variable",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/framework_topics/custom_proposers/variable.md",tags:[],version:"current",frontMatter:{id:"variable",title:"Worlds and Variables",sidebar_label:"Worlds and Variables",slug:"/variable"},sidebar:"someSidebar",previous:{title:"Custom Proposers",permalink:"/docs/custom_proposers"},next:{title:"Model Evaluation in Bean Machine: Diagnostics Module",permalink:"/docs/diagnostics"}},p=[{value:"RVIdentifier",id:"rvidentifier",children:[],level:4},{value:"Variable",id:"variable",children:[],level:4},{value:"World",id:"world",children:[],level:4}],m={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"A crucial part of Bean Machine inference is its ability track the state of inference using ",(0,i.mdx)("inlineCode",{parentName:"p"},"World"),"s. During inference, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"World")," represents the state of the variables and their dependencies. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"World")," is a graphical data structure where each node in the graph represents a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Variable")," containing information about the variable's value, distribution, probability, etc. The edges between nodes represent the dependencies between variables. Each variable tracks its parent variables as well as its children variables."),(0,i.mdx)("h4",{id:"rvidentifier"},"RVIdentifier"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"RVIdentifier")," is a dataclass used to identify the random variable and does not contain any of the inference information. It only consists of the variable's ",(0,i.mdx)("inlineCode",{parentName:"p"},"function")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"arguments")," as supplied in the model declaration."),(0,i.mdx)("h4",{id:"variable"},"Variable"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Variable")," class represents random variables in a model. Each ",(0,i.mdx)("inlineCode",{parentName:"p"},"RVIdentifier")," has a corresponding ",(0,i.mdx)("inlineCode",{parentName:"p"},"Variable")," and has the following attributes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"distribution: Distribution")," - the distribution of the variable according to the model in this particular ",(0,i.mdx)("inlineCode",{parentName:"li"},"World")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"value: Tensor")," - the value of the variable at the current state of inference"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"parent: Set[Optional[RVIdentifier]]")," - the set of random variables called within the function declaration of the random variable"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"children: Set[Optional[RVIdentifier]]")," - the set of random variables which call this variable in their function declaration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"log_prob: Tensor")," - the log probability of the value with the prior distribution"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"proposal_distribution: ProposalDistribution")," - the proposal distribution used during inference"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"is_discrete: bool")," - an indicator of whether it is a discrete variable as opposed to a continuous variable"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"transform: Transform")," - a Transform to be applied in order to reshape the state space; see ",(0,i.mdx)("a",{parentName:"li",href:"/docs/transforms"},"Transform")," documentation"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"transformed_value: Tensor")," - the value of the variable in the transformed space. This value will be the same as ",(0,i.mdx)("inlineCode",{parentName:"li"},"value")," when no transforms are specified."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"jacobian: Tensor")," - the log Jacobian determinant of the transforms")),(0,i.mdx)("p",null,"When writing custom proposers, the two most relevant functions within the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Variable")," API are"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-py"},"transform_value(self, value: Tensor) -> Tensor\ninverse_transform_value(self, transformed_value: Tensor) -> Tensor\n")),(0,i.mdx)("p",null,"If a custom proposer needs to operate on the transformed space of values, then it will typically use ",(0,i.mdx)("inlineCode",{parentName:"p"},"variable.transformed_value")," as the starting point in the transformed space for computing a new proposed value. The new proposed value is then in the transformed space, but because custom proposer's ",(0,i.mdx)("inlineCode",{parentName:"p"},"propose")," method must return a value in the ",(0,i.mdx)("em",{parentName:"p"},"original")," space, one must obtain the latter using ",(0,i.mdx)("inlineCode",{parentName:"p"},"Variable.inverse_transform_value"),". Naturally, if the custom proposer does not need a transformed space, then it can simply use ",(0,i.mdx)("inlineCode",{parentName:"p"},"variable.value")," and return the proposed new value without any need to transform it back to the original space."),(0,i.mdx)("h4",{id:"world"},"World"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"World")," tracks the variables through the ",(0,i.mdx)("inlineCode",{parentName:"p"},"WorldVars")," class, which associates each ",(0,i.mdx)("inlineCode",{parentName:"p"},"RVIdentifier")," to a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Variable"),". When new values are proposed to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"World")," and the world is updated to reflect these changes, these changes are stored in the world's ",(0,i.mdx)("inlineCode",{parentName:"p"},"DiffStack"),", which is a stack of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Diff"),"s, each tracking Variables with differing values probabilities, parents, children, etc."),(0,i.mdx)("p",null,"When writing custom proposers for random variables, it is often important to access the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Variable")," corresponding to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"RVIdentifier")," to see the current value, sample from the variable's prior distribution, etc. This can be done through the function"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-py"},"get_node_in_world(node: RVIdentifier, to_be_copied = False, to_create_new_diff = False)\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"to_be_copied"),": a flag indicating if the world should copy this variable to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"DiffStack")," and start tracking changes. Within the ",(0,i.mdx)("inlineCode",{parentName:"li"},"proposal")," method of a proposer, this should generally be set to False, as the world will automatically add the proposed value for the Variable to a ",(0,i.mdx)("inlineCode",{parentName:"li"},"Diff")," once the proposal method is completed."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"to_create_new_diff"),": whether an additional diff with these changes should be added to the top of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"DiffStack"),". This should generally be set to False.")))}c.isMDXComponent=!0}}]);