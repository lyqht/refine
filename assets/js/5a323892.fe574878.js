"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39279],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,f=m["".concat(u,".").concat(c)]||m[c]||l[c]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86509:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],d={id:"useDataGrid",title:"useDataGrid"},u=void 0,p={unversionedId:"examples/table/mui/useDataGrid",id:"examples/table/mui/useDataGrid",isDocsHomePage:!1,title:"useDataGrid",description:"You may use the useDataGrid hook to process your data with features compatible with the MUI X DataGrid and DataGridPro component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination.",source:"@site/docs/examples/table/mui/useDataGrid.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/useDataGrid",permalink:"/docs/examples/table/mui/useDataGrid",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/examples/table/mui/useDataGrid.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1655457132,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"useDataGrid",title:"useDataGrid"},sidebar:"someSidebar",previous:{title:"Table Filter",permalink:"/docs/examples/table/mui/filter"},next:{title:"useDeleteMany",permalink:"/docs/examples/table/mui/useDeleteMany"}},s=[{value:"With <code>DataGrid</code> Component",id:"with-datagrid-component",children:[],level:2},{value:"With <code>DataGridPro</code> Component",id:"with-datagridpro-component",children:[],level:2}],l={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to process your data with features compatible with the MUI X ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGrid")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGridPro")," component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/mui/hooks/useDataGrid"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useDataGrid")," hook documentation for more information. \u2192")),(0,o.kt)("h2",{id:"with-datagrid-component"},"With ",(0,o.kt)("inlineCode",{parentName:"h2"},"DataGrid")," Component"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/examples/table/mui/useDataGrid"},"View useDataGrid with ",(0,o.kt)("inlineCode",{parentName:"a"},"DataGrid")," component example source")),(0,o.kt)("iframe",{src:"https://stackblitz.com/github/pankod/refine/tree/master/examples/table/mui/useDataGrid?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-data-grid-example"}),(0,o.kt)("h2",{id:"with-datagridpro-component"},"With ",(0,o.kt)("inlineCode",{parentName:"h2"},"DataGridPro")," Component"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/examples/table/mui/dataGridPro"},"View useDataGrid with ",(0,o.kt)("inlineCode",{parentName:"a"},"DataGridPro")," component example source")),(0,o.kt)("iframe",{src:"https://stackblitz.com/github/pankod/refine/tree/master/examples/table/mui/dataGridPro?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-data-grid-example"}))}m.isMDXComponent=!0}}]);