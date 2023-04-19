"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),p=r(67392),s=r(7094),l=r(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:m,groupId:h,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,p.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[C,x]=(0,a.useState)(b),R=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=h){const e=y[h];null!=e&&e!==C&&k.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,r=R.indexOf(t),n=k[r].value;n!==C&&(w(t),x(n),null!=h&&N(h,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;r=R[t]??R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;r=R[t]??R[R.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},k.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>R.push(e),onKeyDown:T,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},4263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(65488),i=r(85162);const p={id:"router-provider",title:"Router Provider",sidebar_label:"Router Provider"},s=void 0,l={unversionedId:"api-reference/core/providers/router-provider",id:"api-reference/core/providers/router-provider",title:"Router Provider",description:"refine provides a simple interface from the routerProvider prop to infer the resource from route, pass, parse and sync the query parameters and handle navigation operations. This provider and its properties are optional but it is recommended to use it to get the most out of refine. Rather than restricting and limiting our users to specific routing libraries or practices, we have designed the routerProvider interface to communicate with the router libraries rather than managing them.",source:"@site/docs/api-reference/core/providers/router-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/router-provider",permalink:"/docs/api-reference/core/providers/router-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/providers/router-provider.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681908020,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{id:"router-provider",title:"Router Provider",sidebar_label:"Router Provider"},sidebar:"someSidebar",previous:{title:"Notification Provider",permalink:"/docs/api-reference/core/providers/notification-provider"},next:{title:"useCan",permalink:"/docs/api-reference/core/hooks/accessControl/useCan"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Creating a router provider",id:"creating-a-router-provider",level:2},{value:"<code>go</code>",id:"go",level:3},{value:"<code>back</code>",id:"back",level:3},{value:"<code>parse</code>",id:"parse",level:3},{value:"<code>Link</code>",id:"link",level:3},{value:"Source Code for the Existing Router Providers",id:"source-code-for-the-existing-router-providers",level:3},{value:"Legacy Router Provider",id:"legacy-router-provider",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," provides a simple interface from the ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop to infer the resource from route, pass, parse and sync the query parameters and handle navigation operations. This provider and its properties are optional but it is recommended to use it to get the most out of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Rather than restricting and limiting our users to specific routing libraries or practices, we have designed the ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," interface to communicate with the router libraries rather than managing them."),(0,a.kt)("p",null,"A router provider may contain the following methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const routerProvider: {\n    go?: () => ({\n        to?: string;\n        query?: Record<string, unknown>;\n        hash?: string;\n        options?: {\n            keepQuery?: boolean;\n            keepHash?: boolean;\n        };\n        type?: "push" | "replace" | "path";\n    }) => void | string;\n    back?: () => () => void;\n    parse?: () => () => {\n        resource?: IResourceItem;\n        id?: BaseKey;\n        action?: Action;\n        pathname?: string;\n        params?: {\n            filters?: CrudFilters;\n            sorters?: CrudSorting;\n            current?: number;\n            pageSize?: number;\n            [key: string]: any;\n        }\n    };\n    Link?: React.ComponentType<{ to: string; children?: React.ReactNode; }>;\n};\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"refine")," includes many out-of-the-box router providers to use in your projects like"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/react-router-v6"},"React Router V6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nextjs-router"},"Next.js Router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/remix"},"Remix Router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/react-router"},"React Router V5")," (Only available for ",(0,a.kt)("inlineCode",{parentName:"li"},"legacyRouterProvider"),")"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also create your own router provider or easily customize the existing ones to suit your needs. The existing implementations are pretty simple and straightforward. Do not hesitate to check the source code of the existing router providers when creating your own.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To activate router provider in ",(0,a.kt)("strong",{parentName:"p"},"refine"),", we have to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component."),(0,a.kt)(o.Z,{defaultValue:"react-router-v6",values:[{label:"React Router V6",value:"react-router-v6"},{label:"Next.js Router",value:"nextjs"},{label:"Remix Router",value:"remix"},{label:"React Router V5 (Legacy)",value:"react-router"},{label:"React Location (Legacy)",value:"react-location"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"react-router-v6",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\n\nimport { BrowserRouter } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                // highlight-next-line\n                routerProvider={routerProvider}\n                /* ... */\n            >\n                {/* ... */}\n            </Refine>\n        </BrowserRouter>\n    );\n};\n'))),(0,a.kt)(i.Z,{value:"react-router",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@pankod/refine-react-router";\n\nconst App: React.FC = () => {\n    return <Refine legacyRouterProvider={routerProvider} />;\n};\n'))),(0,a.kt)(i.Z,{value:"react-location",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@pankod/refine-react-location";\n\nconst App: React.FC = () => {\n    return <Refine legacyRouterProvider={routerProvider} />;\n};\n'))),(0,a.kt)(i.Z,{value:"nextjs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/_app.tsx"',title:'"pages/_app.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/nextjs-router";\nimport { AppProps } from "next/app";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n    return (\n        <Refine routerProvider={routerProvider}>\n            <Component {...pageProps} />\n        </Refine>\n    );\n}\n'))),(0,a.kt)(i.Z,{value:"remix",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/root.tsx"',title:'"app/root.tsx"'},'import type { MetaFunction } from "@remix-run/node";\nimport {\n    Links,\n    LiveReload,\n    Meta,\n    Outlet,\n    Scripts,\n    ScrollRestoration,\n} from "@remix-run/react";\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/remix-router";\n\nexport const meta: MetaFunction = () => ({\n    charset: "utf-8",\n    title: "New Remix + Refine App",\n    viewport: "width=device-width,initial-scale=1",\n});\n\nexport default function App() {\n    return (\n        <html lang="en">\n            <head>\n                <Meta />\n                <Links />\n            </head>\n            <body>\n                <Refine routerProvider={routerProvider}>\n                    <Outlet />\n                </Refine>\n                <ScrollRestoration />\n                <Scripts />\n                <LiveReload />\n            </body>\n        </html>\n    );\n}\n')))),(0,a.kt)("h2",{id:"creating-a-router-provider"},"Creating a router provider"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider"),"methods are designed to be as simple as possible and to be compatible with any router library. ",(0,a.kt)("strong",{parentName:"p"},"refine")," also exports some helper functions to make it easier to create a customized ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," for your needs."),(0,a.kt)("h3",{id:"go"},(0,a.kt)("inlineCode",{parentName:"h3"},"go")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," method is used to navigate to a specific page. It accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," parameter which is the path of the page to navigate to. It also accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hash"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," parameters to customize the navigation. The ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," parameter is used to specify the type of navigation. It can be ",(0,a.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"replace"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"path"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," type returns the path to navigate, which can be used in links or redirects. The ",(0,a.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," types navigate to the path."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"to")," parameter is ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". In this case, we expect ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," function to use the current path and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hash")," parameters to it."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"query")," is passed as an object to let the router library handle the query string. In our implementations, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"qs")," library to stringify the query object which supports nested objects. The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," is also parsed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"parse")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider"),", this allows us to implement custom ways of stringifying and parsing the queries."),(0,a.kt)("h3",{id:"back"},(0,a.kt)("inlineCode",{parentName:"h3"},"back")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"back")," method is used to navigate back to the previous page. It has no parameters and has no return value."),(0,a.kt)("h3",{id:"parse"},(0,a.kt)("inlineCode",{parentName:"h3"},"parse")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"parse")," method is used to parse the current path and return the current ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," of the page as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"pathname")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"params")," of the page."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"params")," is an object that contains both the URL parameters and the query parameters. We use ",(0,a.kt)("inlineCode",{parentName:"p"},"qs")," library to parse the query string and return the query parameters as an object. But you can use any other library or implement your own way of parsing the query string."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is the name of the resource that is used in the current page and also defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component. This can be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if there's no matching resource route."),(0,a.kt)("p",null,"Matching the resource route can be done with the help of the ",(0,a.kt)("inlineCode",{parentName:"p"},"matchResourceFromRoute")," function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"id")," is the id of the record that is used in the current page. This can be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if there's no matching parameter."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"action")," is the name of the action that is used in the current page. This can be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," if there's no matching route for a resource action."),(0,a.kt)("h3",{id:"link"},(0,a.kt)("inlineCode",{parentName:"h3"},"Link")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component is used to create links to other pages. It accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," parameter which is the path of the page to navigate to. It's meant to be used internally in UI packages and other parts of ",(0,a.kt)("strong",{parentName:"p"},"refine")," to complement the router library. It's not meant to be used directly in the application."),(0,a.kt)("h3",{id:"source-code-for-the-existing-router-providers"},"Source Code for the Existing Router Providers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/packages/react-router-v6/src/bindings.tsx"},"React Router V6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/packages/nextjs-router/src/pages/bindings.tsx"},"Next.js Router")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/packages/remix/src/bindings.tsx"},"Remix Router"))),(0,a.kt)("h2",{id:"legacy-router-provider"},"Legacy Router Provider"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine"),"'s v4 release is backward compatible and supports the legacy router provider implementations until v5. The legacy router provider implementations are still available at ",(0,a.kt)("inlineCode",{parentName:"p"},"/legacy")," paths in the router provider packages. For example, the legacy router provider implementation for React Router V6 is available at ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6/legacy"),"."),(0,a.kt)("p",null,"If you want to use a legacy router provider, you can pass them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine />")," component using the ",(0,a.kt)("inlineCode",{parentName:"p"},"legacyRouterProvider")," prop."))}m.isMDXComponent=!0}}]);