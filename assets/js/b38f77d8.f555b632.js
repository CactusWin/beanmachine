"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1241],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return l}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){return function(n){var t=p(n.components);return a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,h=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},25825:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"inference",title:"Inference Methods",sidebar_label:"Inference Methods",slug:"/inference"},c=void 0,m={unversionedId:"framework_topics/inference/inference",id:"framework_topics/inference/inference",isDocsHomePage:!1,title:"Inference Methods",description:"Posterior distributions can often only be estimated, as the solution such problems in general have no closed-form. Bean Machine's inference methods include sequential sampling techniques known as Markov chain Monte Carlo (MCMC) to generate samples representative of this distribution. These posterior distribution samples are the main output of Bean Machine: with enough samples, they will reliably resemble the posterior distribution for the problem at hand.",source:"@site/../docs/framework_topics/inference/inference.md",sourceDirName:"framework_topics/inference",slug:"/inference",permalink:"/docs/inference",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/framework_topics/inference/inference.md",tags:[],version:"current",frontMatter:{id:"inference",title:"Inference Methods",sidebar_label:"Inference Methods",slug:"/inference"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/overview/installation/installation"},next:{title:"Single-Site Uniform MH",permalink:"/docs/uniform_metropolis_hastings"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Posterior distributions can often only be estimated, as the solution such problems in general have no closed-form. Bean Machine's inference methods include sequential sampling techniques known as ",(0,o.mdx)("a",{parentName:"p",href:"https://towardsdatascience.com/a-zero-math-introduction-to-markov-chain-monte-carlo-methods-dcba889e0c50"},"Markov chain Monte Carlo (MCMC)")," to generate samples representative of this distribution. These posterior distribution samples are the main output of Bean Machine: with enough samples, they will reliably resemble the posterior distribution for the problem at hand."),(0,o.mdx)("p",null,"To support inference algorithms, Bean Machine represents the model as a directed acyclic graph where each node is a random variable and edges between nodes represent dependencies between random variables. During a single iteration of inference, MCMC assigns a specific, concrete value to each of the unobserved random variable functions in your model. We refer to this assignment as a ",(0,o.mdx)("inlineCode",{parentName:"p"},"World")," in Bean Machine."),(0,o.mdx)("p",null,"Each world corresponds to a potential sample for the posterior distribution. An MCMC method evaluates how well a particular world would explain the observed data (and prior beliefs). MCMC methods will tend to retain worlds that explain the observed data well and add them as samples to the computed posterior distribution. MCMC methods will tend to discard worlds that do a poor job of explaining the observed data."),(0,o.mdx)("p",null,'In an MCMC method, worlds are computed sequentially. A new world is "proposed" based on the random variable assignments from the current world. In each inference step, an MCMC method iterates over all unobserved random variables and proposes a new value. The world is updated to reflect this change; that is, likelihoods are updated and new variables may be added or removed. This updated world will either replace the existing world or be discarded as determined by the specific inference method. The value associated with each variable at the ',(0,o.mdx)("span",{parentName:"p",className:"math math-inline"},(0,o.mdx)("span",{parentName:"span",className:"katex"},(0,o.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,o.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.mdx)("semantics",{parentName:"math"},(0,o.mdx)("mrow",{parentName:"semantics"},(0,o.mdx)("mi",{parentName:"mrow"},"i")),(0,o.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,o.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.mdx)("span",{parentName:"span",className:"base"},(0,o.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}}),(0,o.mdx)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"th inference step is returned as the ",(0,o.mdx)("span",{parentName:"p",className:"math math-inline"},(0,o.mdx)("span",{parentName:"span",className:"katex"},(0,o.mdx)("span",{parentName:"span",className:"katex-mathml"},(0,o.mdx)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.mdx)("semantics",{parentName:"math"},(0,o.mdx)("mrow",{parentName:"semantics"},(0,o.mdx)("mi",{parentName:"mrow"},"i")),(0,o.mdx)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i")))),(0,o.mdx)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.mdx)("span",{parentName:"span",className:"base"},(0,o.mdx)("span",{parentName:"span",className:"strut",style:{height:"0.65952em",verticalAlign:"0em"}}),(0,o.mdx)("span",{parentName:"span",className:"mord mathnormal"},"i"))))),"th sample for the variable."),(0,o.mdx)("p",null,"As you can imagine, there are a variety of ways of proposing new worlds from the current world, and even for deciding whether to accept or reject a proposed world. Lots of research goes into designing inference methods that are both flexible and performant for a wide class of models. Bean Machine supports many inference methods out-of-the-box, and which are described in the rest of this section of the documentation. This section also covers a particularly promising feature of Bean Machine, namely, programmable inference."))}d.isMDXComponent=!0}}]);