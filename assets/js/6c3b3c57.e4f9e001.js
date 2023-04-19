"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(f,p(p({ref:t},c),{},{components:r})):o.createElement(f,p({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={id:"meta-properties",title:"Meta Properties Example","example-tags":["meta","antd","vite","refine-hooks","data-provider"]},p=void 0,i={unversionedId:"examples/meta-properties",id:"examples/meta-properties",title:"Meta Properties Example",description:"In this example, we will show you how to use the meta property to pass additional parameters to the data provider methods. It contains the following features:",source:"@site/docs/examples/meta-properties.md",sourceDirName:"examples",slug:"/examples/meta-properties",permalink:"/docs/examples/meta-properties",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/meta-properties.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681908020,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{id:"meta-properties",title:"Meta Properties Example","example-tags":["meta","antd","vite","refine-hooks","data-provider"]}},l={},s=[],c=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this example, we will show you how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"meta")," property to pass additional parameters to the data provider methods. It contains the following features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Setting global meta properties"),(0,n.kt)("li",{parentName:"ul"},"Passing meta properties with hook"),(0,n.kt)("li",{parentName:"ul"},"Overriding global meta properties with hook")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation for more information ","\u2192")),(0,n.kt)(c,{path:"with-meta-properties",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);