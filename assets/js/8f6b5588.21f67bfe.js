"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(99104),u=r(72389);const p="tabList__CuJ",s="tabItem_LNqP";function c(e){let{className:t,block:r,selectedValue:l,selectValue:u,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),a=p[r].value;a!==l&&(d(t),u(a))},h=e=>{var t;let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},p.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":l===t})}),r??t)})))}function d(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,l.Y)(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement(c,(0,a.Z)({},e,t)),n.createElement(d,(0,a.Z)({},e,t)))}function h(e){const t=(0,u.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},99104:(e,t,r)=>{r.d(t,{Y:()=>c});var a=r(67294),n=r(76775),o=r(91980);var i=r(50012);function l(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??l(r);return function(e){const t=(void 0===(a=(e,t)=>e.value===t.value)&&(a=(e,t)=>e===t),(r=e).filter(((e,t)=>r.findIndex((t=>a(t,e)))!==t)));var r,a;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function s(e){let{queryString:t=!1,groupId:r}=e;const i=(0,n.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function c(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=u(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,m]=s({queryString:r,groupId:n}),[h,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=d??h;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),f(e)}),[m,f,o]),tabValues:o}}},21598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(65488),i=r(85162);const l={id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}},u=void 0,p={unversionedId:"tutorial/getting-started/chakra-ui/create-project",id:"version-3.xx.xx/tutorial/getting-started/chakra-ui/create-project",title:"3. Create your refine project",description:"Launch the refine CLI setup",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/2-create-project.md",sourceDirName:"tutorial/1-getting-started/chakra-ui",slug:"/tutorial/getting-started/chakra-ui/create-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/chakra-ui/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/2-create-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1686909221,formattedLastUpdatedAt:"Jun 16, 2023",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},s={},c=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("Checklist"),h=d("ChecklistItem"),f={toc:c};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,n.kt)("p",null,"The easiest way to create a new project is to use the ",(0,n.kt)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Launch your terminal and type the following command using your preferred package manager:"),(0,n.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest -- -o refine-chakra-ui tutorial\n"))),(0,n.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create refine-app@latest -- -o refine-chakra-ui tutorial\n"))),(0,n.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create refine-app -- -o refine-chakra-ui tutorial\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Only support yarn@1 version."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,n.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-o refine-chakra-ui")," flag in the command above tells the CLI to install the project with the ",(0,n.kt)("inlineCode",{parentName:"p"},"refine-chakra-ui")," preset. This preset selects some options for you in accordance with this tutorial."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"We use a preset here to sync the tutorial content with the code. Outside of the tutorial, you can skip this flag and select your own options."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The CLI will ask if you agree to share your selection anonymously with the ",(0,n.kt)("strong",{parentName:"p"},"refine")," team. You can choose whatever you prefer."))),(0,n.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey."),(0,n.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Visual Studio Code and select the directory that was generated during your setup process.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,n.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal."),(0,n.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,n.kt)("p",null,"To preview your project as a web page while you work on it, the project must be running in development (dev) mode."),(0,n.kt)("h4",null,"Start the dev server"),(0,n.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,n.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,n.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,n.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,n.kt)("p",null,"You should see confirmation in the terminal that the ",(0,n.kt)("strong",{parentName:"p"},"refine")," app is running in dev mode."),(0,n.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,n.kt)("p",null,"Your project files contain all the code you need to run your website. To see a preview of your website in the browser:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet."),(0,n.kt)("p",{parentName:"li"},"(",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages"},"Next section")," will guide you through adding pages to your app.)"))),(0,n.kt)("p",null,"Here's what you should see:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n            />\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,n.kt)(m,{mdxType:"Checklist"},(0,n.kt)(h,{id:"getting-started-chakra",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,n.kt)(h,{id:"getting-started-chakra-2",mdxType:"ChecklistItem"},"I run the dev server and previewed my app.")))}v.isMDXComponent=!0}}]);