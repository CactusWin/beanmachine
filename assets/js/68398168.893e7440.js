"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4717],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return c},withMDXComponents:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),m=function(e){return function(n){var r=c(n.components);return t.createElement(e,o({},n,{components:r}))}},c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=i,d=m["".concat(a,".").concat(u)]||m[u]||f[u]||o;return r?t.createElement(d,s(s({ref:n},p),{},{components:r})):t.createElement(d,s({ref:n},p))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78074:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={id:"uniform_metropolis_hastings",title:"Single Site Uniform Metropolis-Hastings",sidebar_label:"Single Site Uniform Metropolis-Hastings",slug:"/uniform_metropolis_hastings"},l=void 0,p={unversionedId:"framework_topics/inference/uniform_metropolis_hastings",id:"framework_topics/inference/uniform_metropolis_hastings",isDocsHomePage:!1,title:"Single Site Uniform Metropolis-Hastings",description:"Single Site Uniform Metropolis-Hastings is used to infer over variables that have discrete support, for example random variables with Bernoulli and Categorical distributions. The Single Site Uniform Sampler works very similarly to the Single-Site Ancestral Metropolis Hastings. In fact, the only difference arises in Step 1, i.e, in the way that this sampler proposes a new value. Steps 2-4 are the same.",source:"@site/../docs/framework_topics/inference/uniform_metropolis_hastings.md",sourceDirName:"framework_topics/inference",slug:"/uniform_metropolis_hastings",permalink:"/docs/uniform_metropolis_hastings",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/framework_topics/inference/uniform_metropolis_hastings.md",tags:[],version:"current",frontMatter:{id:"uniform_metropolis_hastings",title:"Single Site Uniform Metropolis-Hastings",sidebar_label:"Single Site Uniform Metropolis-Hastings",slug:"/uniform_metropolis_hastings"},sidebar:"someSidebar",previous:{title:"Single-site Ancestral Metropolis-Hastings",permalink:"/docs/ancestral_metropolis_hastings"},next:{title:"Single-Site Random Walk Metropolis Hastings",permalink:"/docs/random_walk"}},m=[],c={toc:m};function u(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.mdx)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Single Site Uniform Metropolis-Hastings is used to infer over variables that have discrete support, for example random variables with Bernoulli and Categorical distributions. The Single Site Uniform Sampler works very similarly to the Single-Site Ancestral Metropolis Hastings. In fact, the only difference arises in Step 1, i.e, in the way that this sampler proposes a new value. Steps 2-4 are the same."),(0,o.mdx)("p",null,"In Single Site Uniform MH, for random variables with discrete support, instead of sampling from the prior, the proposer samples from a distribution which assigns equal probability across all values in support (hence the name, uniform). For any random variables with continuous support, this inference method resorts to Single Site Ancestral MH."),(0,o.mdx)("p",null,"Here is an example of how to use Single Site Uniform Metropolis Hastings to perform inference in Bean Machine."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"from beanmachine.ppl.inference.single_site_uniform_mh import SingleSiteUniformMetropolisHastings\n\nmh = SingleSiteUniformMetropolisHastings()\ncoin_samples = mh.infer(queries, observations, num_samples, num_chains, run_in_parallel)\n")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"TODO Remove the explanation of parameters below; they have already been explained in ",(0,o.mdx)("inlineCode",{parentName:"em"},"overview/inference/inference.md"),", with the exception of ",(0,o.mdx)("inlineCode",{parentName:"em"},"run_in_paralell"))),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"queries "),": List of random variables that we want to get posterior samples for\n",(0,o.mdx)("inlineCode",{parentName:"p"},"observations"),": Dict, where key is the random variable, and value is the value of the random variable\n",(0,o.mdx)("inlineCode",{parentName:"p"},"num_samples"),": number of samples to run inference for\n",(0,o.mdx)("inlineCode",{parentName:"p"},"num_chains"),": number of chains to run inference for\n",(0,o.mdx)("inlineCode",{parentName:"p"},"run_in_parallel"),": True if you want the chains to run in parallel"))}u.isMDXComponent=!0}}]);