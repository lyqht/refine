"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"testing",title:"Testing"},i=void 0,s={unversionedId:"testing",id:"testing",title:"Testing",description:"refine's components and hooks are made from small pieces of code. Each component or hook is designed to be testable and work independently of each other.",source:"@site/docs/testing.md",sourceDirName:".",slug:"/testing",permalink:"/docs/testing",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/testing.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1684410230,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{id:"testing",title:"Testing"},sidebar:"someSidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Licence",permalink:"/docs/licence"}},c={},p=[{value:"Example",id:"example",level:2}],l=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine"),"'s components and hooks are made from small pieces of code. Each component or hook is designed to be testable and work independently of each other."),(0,o.kt)("p",null,"So, you don't need unit testing, because ",(0,o.kt)("strong",{parentName:"p"},"refine")," is already tested by its maintainers. However, you can write unit tests in your own code (helper, definitions, etc.)."),(0,o.kt)("p",null,"We strongly recommend that you write end-to-end tests of your application. ",(0,o.kt)("strong",{parentName:"p"},"refine")," used the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"cypress")," framework as an example. You are free to write tests with any framework you want."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(l,{path:"with-cypress",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);