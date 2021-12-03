"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7386],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return l},withMDXComponents:function(){return d}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){return function(a){var t=l(a.components);return n.createElement(e,i({},a,{components:t}))}},l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=l(t),c=r,h=d["".concat(o,".").concat(c)]||d[c]||u[c]||i;return t?n.createElement(h,s(s({ref:a},p),{},{components:t})):n.createElement(h,s({ref:a},p))}));function x(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},67221:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/introduction"},m=void 0,p={unversionedId:"overview/introduction/introduction",id:"overview/introduction/introduction",isDocsHomePage:!1,title:"Introduction",description:"Bean Machine is a probabilistic programming language that makes developing and deploying generative probabilistic models intuitive and efficient.",source:"@site/../docs/overview/introduction/introduction.md",sourceDirName:"overview/introduction",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/overview/introduction/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/introduction"},sidebar:"someSidebar",next:{title:"Quick Start",permalink:"/docs/quickstart"}},d=[{value:"Why Generative models?",id:"why-generative-models",children:[],level:2},{value:"Generative Probabilistic Models",id:"generative-probabilistic-models",children:[],level:2},{value:"Inference",id:"inference",children:[],level:2},{value:"Where Does Bean Machine Fit In?",id:"where-does-bean-machine-fit-in",children:[],level:2},{value:"Target Audience",id:"target-audience",children:[],level:2}],l={toc:d};function c(e){var a=e.components,s=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},l,s,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Bean Machine is a probabilistic programming language that makes developing and deploying generative probabilistic models intuitive and efficient."),(0,i.mdx)("h2",{id:"why-generative-models"},"Why Generative models?"),(0,i.mdx)("p",null,"Bean Machine's generative modeling is concerned not only with providing useful predictions (as traditional ML techniques do), but also with estimating the uncertainty inherent in the problem at hand in the form of probability distributions. Estimating uncertainty helps ensure that predictions are reliable and robust."),(0,i.mdx)("p",null,"Generative modeling with Bean Machine offers many benefits:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Uncertainty estimation."),"  Predictions are quantified with reliable measures of uncertainty in the form of probability distributions. An analyst can understand not only the system's prediction, but also the relative likelihood of other possibilities."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Expressivity."),"  It's extremely easy to encode a rich model directly in source code. This allows one to match the structure of the model to the structure of the problem."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Interpretability."),"  Because the model matches the domain, one can query intermediate variables within the model as conceptually meaningful properties. This can be used to interpret ",(0,i.mdx)("em",{parentName:"li"},"why")," a particular prediction was made, and can aid the model development process.")),(0,i.mdx)("h2",{id:"generative-probabilistic-models"},"Generative Probabilistic Models"),(0,i.mdx)("p",null,"A generative probabilistic model consists of ",(0,i.mdx)("strong",{parentName:"p"},"random variables")," and ",(0,i.mdx)("strong",{parentName:"p"},"conditional probability distributions")," (CPDs) that encode knowledge about some domain. For example, consider a simplified model for the spread of infectious diseases, where we wish to express the idea that the average number of new cases on a given day is proportional to the current number of infections, with the proportionality constant being the daily reproduction rate of the disease. In order to express this mathematically, it is common practice to rely on ",(0,i.mdx)("em",{parentName:"p"},"elementary probability distributions")," (EPDs) with well known statistics, such as the ",(0,i.mdx)("em",{parentName:"p"},"Poisson")," distribution here:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"num_new_cases ~ Poisson(reproduction_rate * num_infected)\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:t(55302).Z})),(0,i.mdx)("p",null,"Let's fix for now the value of ",(0,i.mdx)("inlineCode",{parentName:"p"},"num_infected"),", then the above statement gives the CPD of the random variable ",(0,i.mdx)("inlineCode",{parentName:"p"},"num_new_cases"),", conditioned on the value of its ",(0,i.mdx)("strong",{parentName:"p"},"parent")," random variable ",(0,i.mdx)("inlineCode",{parentName:"p"},"reproduction_rate"),". Since the parameter of the Poisson distribution is also its mean, this CPD is consistent with the knowledge that we were trying to express."),(0,i.mdx)("p",null,"A well-formed generative model must specify the EPD or CPD of each random variable, and the ",(0,i.mdx)("strong",{parentName:"p"},"directed graph")," induced by all the parent-child relationships among random variables must be ",(0,i.mdx)("strong",{parentName:"p"},"acyclic"),". To complete our model, we must therefore also specify a distribution for the random variable ",(0,i.mdx)("inlineCode",{parentName:"p"},"reproduction_rate"),". In the case of new diseases, where we don't know anything yet about the actual reproduction rate, this poses a seemingly intractable problem. In the ",(0,i.mdx)("strong",{parentName:"p"},"Bayesian approach")," to this problem, we specify the probability distributions of random variables without parents as our ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("em",{parentName:"strong"},"a priori"))," beliefs (i.e., before seeing any data) about them. So, in this example, if infectious disease experts believe that a new disease would have a daily reproduction rate which is strictly positive and could be expected to be drawn from a distribution with a mean of 0.1, then we could express this belief with the help of another EPD, the ",(0,i.mdx)("em",{parentName:"p"},"Exponential")," distribution, as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"reproduction_rate ~ Exponential(1 / 0.1)\n")),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:t(84378).Z})),(0,i.mdx)("h2",{id:"inference"},"Inference"),(0,i.mdx)("p",null,"Given a generative model, the natural next step is to use it to perform inference. Inference is the process of combining a ",(0,i.mdx)("strong",{parentName:"p"},"model")," with ",(0,i.mdx)("strong",{parentName:"p"},"data")," to obtain ",(0,i.mdx)("strong",{parentName:"p"},"insights"),", in the form of ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("em",{parentName:"strong"},"a posteriori"))," beliefs over values of interest. Our documentation refers to the data as ",(0,i.mdx)("em",{parentName:"p"},'"observations"'),", to the values of interest as ",(0,i.mdx)("em",{parentName:"p"},'"queried random variables"'),", and to the insights as ",(0,i.mdx)("em",{parentName:"p"},'"posterior distributions"'),"."),(0,i.mdx)("p",null,"In our example above, let's say we observe that ",(0,i.mdx)("inlineCode",{parentName:"p"},"num_infected = 1087980")," and that ",(0,i.mdx)("inlineCode",{parentName:"p"},"num_new_cases = 238154"),". Now, given this observation, we might want to query the posterior distribution for ",(0,i.mdx)("inlineCode",{parentName:"p"},"reproduction_rate"),". Mathematically speaking, we seek the following CPD:"),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"math math-inline"},(0,i.mdx)("span",{parentName:"span",className:"katex"},(0,i.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,i.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.mdx)("semantics",{parentName:"math"},(0,i.mdx)("mrow",{parentName:"semantics"},(0,i.mdx)("mi",{parentName:"mrow",mathvariant:"double-struck"},"P"),(0,i.mdx)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.mdx)("mtext",{parentName:"mrow",mathvariant:"monospace"},"reproduction_rate"),(0,i.mdx)("mtext",{parentName:"mrow"},"\u2009"),(0,i.mdx)("mo",{parentName:"mrow"},"\u2223"),(0,i.mdx)("mtext",{parentName:"mrow"},"\u2009"),(0,i.mdx)("mtext",{parentName:"mrow",mathvariant:"monospace"},"num_infected"),(0,i.mdx)("mo",{parentName:"mrow"},"="),(0,i.mdx)("mn",{parentName:"mrow"},"1087980"),(0,i.mdx)("mo",{parentName:"mrow",separator:"true"},","),(0,i.mdx)("mtext",{parentName:"mrow"},"\u2005\u200a"),(0,i.mdx)("mtext",{parentName:"mrow",mathvariant:"monospace"},"num_new_cases"),(0,i.mdx)("mo",{parentName:"mrow"},"="),(0,i.mdx)("mn",{parentName:"mrow"},"238154"),(0,i.mdx)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\mathbb{P}(\\texttt{reproduction\\_rate} \\,\\mid\\, \\texttt{num\\_infected}=1087980,\\; \\texttt{num\\_new\\_cases} = 238154)")))),(0,i.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.mdx)("span",{parentName:"span",className:"base"},(0,i.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.mdx)("span",{parentName:"span",className:"mord"},(0,i.mdx)("span",{parentName:"span",className:"mord mathbb"},"P")),(0,i.mdx)("span",{parentName:"span",className:"mopen"},"("),(0,i.mdx)("span",{parentName:"span",className:"mord text"},(0,i.mdx)("span",{parentName:"span",className:"mord texttt"},"reproduction_rate")),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.mdx)("span",{parentName:"span",className:"mrel"},"\u2223"),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.mdx)("span",{parentName:"span",className:"base"},(0,i.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.70625em",verticalAlign:"-0.09514em"}}),(0,i.mdx)("span",{parentName:"span",className:"mord text"},(0,i.mdx)("span",{parentName:"span",className:"mord texttt"},"num_infected")),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.mdx)("span",{parentName:"span",className:"base"},(0,i.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.8388800000000001em",verticalAlign:"-0.19444em"}}),(0,i.mdx)("span",{parentName:"span",className:"mord"},"1"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"0"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"8"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"7"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"9"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"8"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"0"),(0,i.mdx)("span",{parentName:"span",className:"mpunct"},","),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,i.mdx)("span",{parentName:"span",className:"mord text"},(0,i.mdx)("span",{parentName:"span",className:"mord texttt"},"num_new_cases")),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,i.mdx)("span",{parentName:"span",className:"mrel"},"="),(0,i.mdx)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,i.mdx)("span",{parentName:"span",className:"base"},(0,i.mdx)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.mdx)("span",{parentName:"span",className:"mord"},"2"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"3"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"8"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"1"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"5"),(0,i.mdx)("span",{parentName:"span",className:"mord"},"4"),(0,i.mdx)("span",{parentName:"span",className:"mclose"},")")))))),(0,i.mdx)("p",null,"One way to understand the semantics of the inference task is to think of a generative probabilistic model as specifying a distribution over possible ",(0,i.mdx)("strong",{parentName:"p"},"worlds"),". A world can be thought of as an assignment of specific admissible values to all random variables in the model. So, for example, some possible worlds in our case are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"reproduction_rate = 0.01, num_new_cases = 9000"),","),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"reproduction_rate = 0.1, num_new_cases = 90000"),", or"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"reproduction_rate = 0.9, num_new_cases = 800000"),".")),(0,i.mdx)("p",null,"Our generative model specifies a ",(0,i.mdx)("em",{parentName:"p"},"joint")," probability distribution over each of these worlds, based on the ",(0,i.mdx)("em",{parentName:"p"},"prior")," distribution we've chosen for ",(0,i.mdx)("inlineCode",{parentName:"p"},"reproduction_rate")," and the ",(0,i.mdx)("em",{parentName:"p"},"likelihood")," of ",(0,i.mdx)("inlineCode",{parentName:"p"},"num_new_cases")," given some ",(0,i.mdx)("inlineCode",{parentName:"p"},"reproduction_rate"),". Now, the inference task is to restrict attention to only those worlds in which ",(0,i.mdx)("inlineCode",{parentName:"p"},"num_new_cases = 238154"),". We're interested in learning the resulting ",(0,i.mdx)("em",{parentName:"p"},"posterior")," distribution over ",(0,i.mdx)("inlineCode",{parentName:"p"},"reproduction_rate")," assignments within these worlds that are compatible with our observation."),(0,i.mdx)("h2",{id:"where-does-bean-machine-fit-in"},"Where Does Bean Machine Fit In?"),(0,i.mdx)("p",null,"In the rest of this Overview we'll introduce you to Bean Machine's syntax, and show you how it can be used to learn about problems like this one. Traditionally, lots of painstaking, hand-crafted work has gone into modeling generative scenarios. Bean Machine aims to handle all of the manual work involved in fitting data to your model, leaving you to focus on the exciting part: the problem itself! Keep on reading to find out how."),(0,i.mdx)("h2",{id:"target-audience"},"Target Audience"),(0,i.mdx)("p",null,"While we hope that the guides you'll find here are relevant to anyone with an ML background, there are excellent resources available if this is your first exposure to Bayesian analysis! We highly recommend the excellent YouTube series ",(0,i.mdx)("em",{parentName:"p"},(0,i.mdx)("a",{parentName:"em",href:"https://www.youtube.com/playlist?list=PLDcUM9US4XdNM4Edgs7weiyIguLSToZRI"},"Statistical Rethinking")),", which walks through Bayesian thinking and probabilistic modeling. For a more hands-on experience, you can check out the free, online tutorial ",(0,i.mdx)("em",{parentName:"p"},(0,i.mdx)("a",{parentName:"em",href:"https://camdavidsonpilon.github.io/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers/#contents"},"Bayesian Methods for Hackers")),"."))}c.isMDXComponent=!0},84378:function(e,a,t){a.Z=t.p+"assets/images/exponential_10-efd1ffd10a5e6115b52868fd955e31fa.png"},55302:function(e,a,t){a.Z=t.p+"assets/images/poisson_3-efa1b689adff7f22f127cbbc33a787a2.png"}}]);