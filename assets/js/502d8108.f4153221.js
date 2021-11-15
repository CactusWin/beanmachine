"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6487],{3905:function(a,e,m){m.r(e),m.d(e,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return i}});var n=m(67294);function s(a,e,m){return e in a?Object.defineProperty(a,e,{value:m,enumerable:!0,configurable:!0,writable:!0}):a[e]=m,a}function t(){return t=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var m=arguments[e];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&(a[n]=m[n])}return a},t.apply(this,arguments)}function r(a,e){var m=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),m.push.apply(m,n)}return m}function p(a){for(var e=1;e<arguments.length;e++){var m=null!=arguments[e]?arguments[e]:{};e%2?r(Object(m),!0).forEach((function(e){s(a,e,m[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(m)):r(Object(m)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(m,e))}))}return a}function o(a,e){if(null==a)return{};var m,n,s=function(a,e){if(null==a)return{};var m,n,s={},t=Object.keys(a);for(n=0;n<t.length;n++)m=t[n],e.indexOf(m)>=0||(s[m]=a[m]);return s}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(n=0;n<t.length;n++)m=t[n],e.indexOf(m)>=0||Object.prototype.propertyIsEnumerable.call(a,m)&&(s[m]=a[m])}return s}var l=n.createContext({}),i=function(a){return function(e){var m=d(e.components);return n.createElement(a,t({},e,{components:m}))}},d=function(a){var e=n.useContext(l),m=e;return a&&(m="function"==typeof a?a(e):p(p({},e),a)),m},c=function(a){var e=d(a.components);return n.createElement(l.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},x=n.forwardRef((function(a,e){var m=a.components,s=a.mdxType,t=a.originalType,r=a.parentName,l=o(a,["components","mdxType","originalType","parentName"]),i=d(m),c=s,x=i["".concat(r,".").concat(c)]||i[c]||N[c]||t;return m?n.createElement(x,p(p({ref:e},l),{},{components:m})):n.createElement(x,p({ref:e},l))}));function h(a,e){var m=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var t=m.length,r=new Array(t);r[0]=x;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:s,r[1]=p;for(var l=2;l<t;l++)r[l]=m[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,m)}x.displayName="MDXCreateElement"},57960:function(a,e,m){m.r(e),m.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var n=m(87462),s=m(63366),t=(m(67294),m(3905)),r=["components"],p={},o=void 0,l={unversionedId:"framework_topics/programmable_inference/transforms",id:"framework_topics/programmable_inference/transforms",isDocsHomePage:!1,title:"transforms",description:"Transforms",source:"@site/../docs/framework_topics/programmable_inference/transforms.md",sourceDirName:"framework_topics/programmable_inference",slug:"/framework_topics/programmable_inference/transforms",permalink:"/docs/framework_topics/programmable_inference/transforms",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/framework_topics/programmable_inference/transforms.md",tags:[],version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"Programmable Inference",permalink:"/docs/framework_topics/programmable_inference/programmable_inference"},next:{title:"C++ Runtime",permalink:"/docs/overview/bmg/bmg"}},i=[{value:"Transforms",id:"transforms",children:[{value:"Specifying Transforms",id:"specifying-transforms",children:[{value:"Default Transforms",id:"default-transforms",children:[],level:4},{value:"Custom Transforms",id:"custom-transforms",children:[],level:4}],level:3}],level:2}],d={toc:i};function c(a){var e=a.components,m=(0,s.Z)(a,r);return(0,t.mdx)("wrapper",(0,n.Z)({},d,m,{components:e,mdxType:"MDXLayout"}),(0,t.mdx)("h2",{id:"transforms"},"Transforms"),(0,t.mdx)("p",null,"Bean Machine provides flexibility for users to specify transformations on a per-variable basis. This gives Bean Machine powerful functionality."),(0,t.mdx)("p",null,"Proposal algorithms will behave differently depending on the shape and constraints of the posterior, and often have specific requirements. It is useful to transform the posterior into an ideal shape and space for inference to be its most efficient. For example, the Hamiltonian Monte Carlo algorithm provided by Bean Machine requires the proposal distribution to be continuous and differentiable at all points in the real space. Therefore, for all variables with distributions constrained to subsets of the real numbers (such as non-negative ones, for example), HMC will require a transform to change the proposal distribution into the unconstrained space (for example, the transform ",(0,t.mdx)("inlineCode",{parentName:"p"},"log(x)")," will map points in the constrained space of all non-positive real numbers ",(0,t.mdx)("inlineCode",{parentName:"p"},"x")," into the unconstrained set of real numbers)."),(0,t.mdx)("p",null,"Bean Machine allows users to use default transformations for transforming constrained spaces into unconstrained spaces, or to specify custom transforms. Additionally, transforms can also be used in other ways such as specifying kernels for Gaussian processes."),(0,t.mdx)("p",null,"Transforms are supported within the ",(0,t.mdx)("inlineCode",{parentName:"p"},"Variable")," class by the following attributes: ",(0,t.mdx)("inlineCode",{parentName:"p"},"value"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"transformed_value")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"jacobian")," (a generalization of derivatives for multi-variable functions). These will be populated accordingly depending on the transforms specified. If there are no transforms, then ",(0,t.mdx)("inlineCode",{parentName:"p"},"transformed_value")," will be equivalent to ",(0,t.mdx)("inlineCode",{parentName:"p"},"value"),", and ",(0,t.mdx)("inlineCode",{parentName:"p"},"jacobian")," will be zero. The attribute ",(0,t.mdx)("inlineCode",{parentName:"p"},"transformed_value")," will be used throughout inference since it is in the unconstrained space required by the algorithm. See ",(0,t.mdx)("a",{parentName:"p",href:"/docs/framework_topics/custom_proposers/variable"},(0,t.mdx)("inlineCode",{parentName:"a"},"World")," and ",(0,t.mdx)("inlineCode",{parentName:"a"},"Variable")," API")," for more details."),(0,t.mdx)("h3",{id:"specifying-transforms"},"Specifying Transforms"),(0,t.mdx)("p",null,"Each proposer and inference method has the following optional parameters for initialization"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-py"},"transform_type: TransformType\ntransforms: Optional[List]\n")),(0,t.mdx)("p",null,"TODO: Why is ",(0,t.mdx)("inlineCode",{parentName:"p"},"transforms")," a list? Can we have more than one transform associated to a variable? How does that work?"),(0,t.mdx)("p",null,"There are three TransformTypes which can be specified"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"TransformType.NONE"),": no transform will be applied"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"TransformType.DEFAULT"),": transforms will convert the distribution to the unconstrained space"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"TransformType.CUSTOM"),": user-provided transforms will be applied")),(0,t.mdx)("h4",{id:"default-transforms"},"Default Transforms"),(0,t.mdx)("p",null,"The transform applied to each variable depends on the constraints of its distribution:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"No constraints: no transform"),(0,t.mdx)("li",{parentName:"ul"},"Lower bound ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"a")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"a"))))),": ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"f"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mo",{parentName:"mrow"},"="),(0,t.mdx)("mi",{parentName:"mrow"},"log"),(0,t.mdx)("mo",{parentName:"mrow"},"\u2061"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow"},"\u2212"),(0,t.mdx)("mi",{parentName:"mrow"},"a"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(X) = \\log(X - a)")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,t.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mop"},"lo",(0,t.mdx)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,t.mdx)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")")))))),(0,t.mdx)("li",{parentName:"ul"},"Upper bound ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"b")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),": ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"f"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mo",{parentName:"mrow"},"="),(0,t.mdx)("mi",{parentName:"mrow"},"log"),(0,t.mdx)("mo",{parentName:"mrow"},"\u2061"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mo",{parentName:"mrow"},"\u2212"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow"},"\u2212"),(0,t.mdx)("mi",{parentName:"mrow"},"b"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(X) = \\log(-(X - b))")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,t.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mop"},"lo",(0,t.mdx)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord"},"\u2212"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,t.mdx)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")")))))),(0,t.mdx)("li",{parentName:"ul"},"Simplex (",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,t.mdx)("mn",{parentName:"mrow"},"0"),(0,t.mdx)("mo",{parentName:"mrow",separator:"true"},","),(0,t.mdx)("mn",{parentName:"mrow"},"1"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[0,1]")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"["),(0,t.mdx)("span",{parentName:"span",className:"mord"},"0"),(0,t.mdx)("span",{parentName:"span",className:"mpunct"},","),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord"},"1"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},"]")))))," interval): ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"f"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mo",{parentName:"mrow"},"="),(0,t.mdx)("mtext",{parentName:"mrow"},"stick\xa0breaking"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(X) = \\text{stick breaking}(X)")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,t.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord text"},(0,t.mdx)("span",{parentName:"span",className:"mord"},"stick\xa0breaking")),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")")))))),(0,t.mdx)("li",{parentName:"ul"},"Lower bound ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"a")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and upper bound ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"b")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),": ",(0,t.mdx)("span",{parentName:"li",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"f"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mo",{parentName:"mrow"},"="),(0,t.mdx)("mtext",{parentName:"mrow"},"stick\xa0breaking"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"X"),(0,t.mdx)("mo",{parentName:"mrow"},"\u2212"),(0,t.mdx)("mi",{parentName:"mrow"},"a"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"b"),(0,t.mdx)("mo",{parentName:"mrow"},"\u2212"),(0,t.mdx)("mi",{parentName:"mrow"},"a"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(X) = \\text{stick breaking}((X - a) / (b - a))")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,t.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord text"},(0,t.mdx)("span",{parentName:"span",className:"mord"},"stick\xa0breaking")),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"X"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,t.mdx)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mord"},"/"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,t.mdx)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"))))))),(0,t.mdx)("p",null,"TODO: how are these transforms represented in code?"),(0,t.mdx)("p",null,'TODO: not every user will understand what "stick breaking" has to do with lower and upper bounds. Can we provide a version with it with a name directly related the ',(0,t.mdx)("span",{parentName:"p",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,t.mdx)("mn",{parentName:"mrow"},"0"),(0,t.mdx)("mo",{parentName:"mrow",separator:"true"},","),(0,t.mdx)("mn",{parentName:"mrow"},"1"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[0,1]")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"["),(0,t.mdx)("span",{parentName:"span",className:"mord"},"0"),(0,t.mdx)("span",{parentName:"span",className:"mpunct"},","),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord"},"1"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},"]")))))," interval?"),(0,t.mdx)("h4",{id:"custom-transforms"},"Custom Transforms"),(0,t.mdx)("p",null,"If ",(0,t.mdx)("inlineCode",{parentName:"p"},"TransformType.CUSTOM")," is specified, the user must also provide a list of transforms to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"transforms")," parameter of initialization."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-py"},"mh = SingleSiteNewtonianMonteCarlo(transform_type=TransformType.CUSTOM, transforms=[AffineTransform(2.0, 1.0)])\n")),(0,t.mdx)("p",null,"TODO: why are transforms attached to the inference algorithm? Shouldn't they be attached to a model, or a variable? What does it mean to provide a list of transforms to the algorithm? Does that mean the transform applies to all variable in the model? What happens if multiple transforms are provided?"),(0,t.mdx)("p",null,"For each transform, the user must provide the transform function, the inverse function, as well as the Jacobian calculation as described below. These transforms will be applied in order. For example, the list of transforms ",(0,t.mdx)("span",{parentName:"p",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,t.mdx)("mi",{parentName:"mrow"},"f"),(0,t.mdx)("mo",{parentName:"mrow",separator:"true"},","),(0,t.mdx)("mi",{parentName:"mrow"},"g"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"[f, g]")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"["),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.mdx)("span",{parentName:"span",className:"mpunct"},","),(0,t.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},"]")))))," applied to ",(0,t.mdx)("span",{parentName:"p",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"x")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," will result in the value ",(0,t.mdx)("span",{parentName:"p",className:"math math-inline"},(0,t.mdx)("span",{parentName:"span",className:"katex"},(0,t.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,t.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,t.mdx)("semantics",{parentName:"math"},(0,t.mdx)("mrow",{parentName:"semantics"},(0,t.mdx)("mi",{parentName:"mrow"},"g"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"f"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,t.mdx)("mi",{parentName:"mrow"},"x"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,t.mdx)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,t.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"g(f(x))")))),(0,t.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,t.mdx)("span",{parentName:"span",className:"base"},(0,t.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,t.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,t.mdx)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"),(0,t.mdx)("span",{parentName:"span",className:"mclose"},")"))))),". It is recommended to implement the ",(0,t.mdx)("inlineCode",{parentName:"p"},"Transform")," class from PyTorch."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-py"},'def __call__(self, x):\n  """\n  Computes the forward transformation\n  """\ndef inv(self, y):\n  """\n  Computes the inverse transformation\n  """\ndef log_abs_det_jacobian(self, x, y):\n  """\n  Computes the log of the absolute value of determinant of the Jacobian `log |dy/dx|`\n  """\n')))}c.isMDXComponent=!0}}]);