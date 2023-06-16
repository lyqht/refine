"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",slug:"create-full-stack-app-with-refine",authors:"melih",tags:["refine","react","nextjs","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/social.jpg",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/create-full-stack-app-with-refine",source:"@site/blog/2022-04-29-create-full-stack-app.md",title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",date:"2022-04-29T00:00:00.000Z",formattedDate:"April 29, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:8.095,hasTruncateMarker:!1,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",slug:"create-full-stack-app-with-refine",authors:"melih",tags:["refine","react","nextjs","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/social.jpg",hide_table_of_contents:!1},prevItem:{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources"},nextItem:{title:"The Advantages and Disadvantages of Working on Open Source Projects",permalink:"/blog/open-source-advantages-disadvantages"},relatedPosts:[{title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.405,date:"2021-10-04T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:22.615,date:"2022-11-17T00:00:00.000Z"},{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.485,date:"2022-10-07T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.085,date:"2022-03-29T00:00:00.000Z"},{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.44,date:"2022-01-18T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.125,date:"2021-10-25T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"What is Refine?",id:"what-is-refine",level:2},{value:"Why Should Use Refine?",id:"why-should-use-refine",level:2},{value:"Key features\u200b",id:"key-features",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"Create Full Stack App",id:"create-full-stack-app",level:2},{value:"How to use Refine",id:"how-to-use-refine",level:2},{value:"Create a Refine Project",id:"create-a-refine-project",level:3},{value:"Refine Demo Apps",id:"refine-demo-apps",level:2},{value:"Powerful Features of Refine",id:"powerful-features-of-refine",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,i.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,i.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,i.kt)("p",{parentName:"admonition"},"You should know that ",(0,i.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,i.kt)("p",null,"We frequently require quick development and sometimes flexibility while developing a Full Stack application. Aside from speed and flexibility, we must establish the application architecture correctly at the start so that we are not subjected to any more needless work throughout the development process."),(0,i.kt)("p",null,"In this article, we will use the ",(0,i.kt)("strong",{parentName:"p"},"refine")," framework to develop a full stack application. ",(0,i.kt)("strong",{parentName:"p"},"Refine")," will provide us with the speed and flexibility we are looking for, while assisting with the overall project architecture during web application development."),(0,i.kt)("h2",{id:"what-is-refine"},"What is Refine?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is a React-based framework for rapid building of internal tools. It's is a a collection of helper ",(0,i.kt)("inlineCode",{parentName:"p"},"hooks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"components")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"providers"),". They are all decoupled from your UI components and business logic, so they never keep you from customizing your UI or coding your own flow."),(0,i.kt)("p",null,"Refine offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to ",(0,i.kt)("inlineCode",{parentName:"p"},"admin panels"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B2B")," applications and ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboards"),"."),(0,i.kt)("h2",{id:"why-should-use-refine"},"Why Should Use Refine?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," offers you almost everything you need while developing an ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin Panel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Dashboard"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B2B")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"B2C")," application, with many features it provides. It does not limit you in situations that may arise during project development and offers you the opportunity to customize it."),(0,i.kt)("p",null,"With the Data Provider feature it provides, you don't need to think about your API or GraphQL queries and write extra queries! Thanks to Refine hooks, you can easily fetching the data in your database and manage your state structure. In addition to quickly fetch and manage your data, you can easily design your UI with ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," and ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/getting-started/overview/"},"Material UI (comming soon)")," ready components used as out-of-the-box by ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"headless")," React framework. It can be used independently of the UI. You can easily use all the features of refinement with any UI library."),(0,i.kt)("h3",{id:"key-features"},"Key features\u200b"),(0,i.kt)("p",null,"\ud83d\udd25 Headless : Works with any UI framework"),(0,i.kt)("p",null,"\u2699\ufe0f Zero-configuration : One-line setup with superplate. It takes less than a minute to start a project."),(0,i.kt)("p",null,"\ud83d\udce6 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI."),(0,i.kt)("p",null,"\ud83d\udd0c Backend Agnostic : Connects to any custom backend. Built-in support for REST API, GraphQL, NestJs CRUD, Airtable, Strapi, Strapi v4, Strapi GraphQL, Supabase, Hasura, Nhost, Appwrite, Firebase, and Directus."),(0,i.kt)("p",null,"\ud83d\udcdd Native Typescript Core : You can always opt out for plain JavaScript."),(0,i.kt)("p",null,"\ud83d\udc1c Enterprise UI : Works seamlessly with Ant Design System. (Support for multiple UI frameworks is on the Roadmap)"),(0,i.kt)("p",null,"\ud83d\udcdd Boilerplate-free Code : Keeps your codebase clean and readable."),(0,i.kt)("p",null,"To learn more about ",(0,i.kt)("strong",{parentName:"p"},"refine")," features, we recommend that you read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/"},"Overview")," document."),(0,i.kt)("h3",{id:"benchmark"},"Benchmark"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine"),", by removing unnecessary repetition in your code, reduces number of lines of code and makes it easier to maintain. Below is a size comparison for an example project:"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/getting-started/benchmark.png",alt:"Refine Benchmark"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"create-full-stack-app"},"Create Full Stack App"),(0,i.kt)("p",null,"As we mentioned above, you can easily handle any API and GraphQL queries without writing extra code thanks to the ",(0,i.kt)("strong",{parentName:"p"},"refine")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},"Data Provider")," hooks. If you do not have a custom backend, you can choose one of the following backend providers that work in harmony with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," includes many out-of-the-box data providers to use in your projects like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/airtable"},"Airtable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/appwrite"},"Appwrite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/graphql"},"GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nestjsx-crud"},"NestJS CRUD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/nhost"},"Nhost")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/simple-rest"},"Simple REST API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi"},"Strapi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql"},"Strapi GraphQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi v4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/supabase"},"Supabase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/master/packages/medusa"},"Medusa"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider/"},"Refer to the ",(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider")," documentation for detailed usage. ","\u2192")),(0,i.kt)("p",null,"You can develop a full-featured web application by using any your custom backend or the above backend providers with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"Check out the Full Stack application examples created with ",(0,i.kt)("strong",{parentName:"p"},"refine")," and out-of-the-box data providers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui/"},"E-commerce Example")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/refine-react-admin-invoice-genarator/"},"Invoice Genarator Example | Part I")," - ",(0,i.kt)("a",{parentName:"li",href:"/blog/refine-invoice-generator/"},"Invoice Genarator Example | Part II")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/awesome-react-windows95-ui-with-refine/"},"Windows95 UI Admin Panel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi/"},"Feedback Admin Panel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/customizable-admin-panel-with-nestjs/"},"Job Posting Admin Panel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/blog/e-mail-subscription-panel-with-refine/"},"E-mail Subscription Example"))),(0,i.kt)("h2",{id:"how-to-use-refine"},"How to use Refine"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"refine")," is very simple to use. Its examples and structure are handled in their simplest form. It is very successful in terms of documentation. You can find the answers you are looking for or a very detailed explanation of how to use a feature in the documentation."),(0,i.kt)("p",null,"Let's see how to use it!"),(0,i.kt)("h3",{id:"create-a-refine-project"},"Create a Refine Project"),(0,i.kt)("p",null,"Let's start by creating our ",(0,i.kt)("strong",{parentName:"p"},"refine")," project. You can use the superplate to create a refine project. superplate will quickly create our refine project according to the features we choose."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest my-first-refine-project -- -p refine-react -b v3\n")),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/create.gif",alt:"Create Refine App"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Creating your project is that easy. All the packages you need and choose come ready-made."),(0,i.kt)("p",null,"Our project is ready. Now let's consider the process of fetching items from an API with 1000 items and listing only their titles.\nFirst, we will use libraries such as axios, fetch to fetch the data. Then after the data comes, we will show it in the UI. If there is a change in the state, we will have to change them from the beginning and think about them. Even in its simplest form, it can be challenging to handle."),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"refine"),", with just a few lines of code,\nBesides basic operations (such as data fetching), you can manage and manipulate state changes in your user interface. You can also manage filtering, sorting and pagination of your data by adding just a few simple lines of code."),(0,i.kt)("p",null,"Let's see how we can use these processes and features that we talked about with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"We will use refine's ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.fake-rest.refine.dev/")," API to fetch the titles we mentioned. Thanks to the project we set up with superplate, our ",(0,i.kt)("inlineCode",{parentName:"p"},"App.tsx")," comes ready. Now let's create a list component with Refine and see how to fetch the titles."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "title": "Facilis voluptas sit consequatur commodi.",\n    "slug": "enim-possimus-nostrum",\n    "content": "Laborum consequatur illo illum sit. Dolorem et recusandae consequatur qui voluptas fuga mollitia voluptate. Et excepturi magnam. Et fugiat doloribus et. Ipsa aperiam et. Qui saepe repudiandae quam tempora. Eos necessitatibus voluptatem facilis maxime. Nobis et accusantium rerum libero tempore earum autem suscipit quas. Dolorem consequatur quam. Repellat praesentium veniam tempora excepturi iste veritatis quia sit.",\n    "hit": 798263\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        />\n    );\n};\n\nexport default App;\n')),(0,i.kt)("h3",null," Step I "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/PostList.tsx"',title:'"src/pages/PostList.tsx"'},'//highlight-start\nimport { List, Table, useTable } from "@refinedev/antd";\n//highlight-end\n\nexport const PostList: React.FC = () => {\n    //highlight-next-line\n    const { tableProps } = useTable<IPost>();\n    return (\n        //highlight-start\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="TITLE" />\n            </Table>\n        </List>\n        //highlight-end\n    );\n};\n\ninterface IPost {\n    title: string;\n}\n')),(0,i.kt)("h3",null," Step II "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport "@refinedev/antd/dist/reset.css";\n//highlight-next-line\nimport { PostList } from "pages/post";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            //highlight-next-line\n            resource={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/first.png",alt:"Refine Posts Page"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"As you have seen, we have listed and paginated the titles coming from an API by writing just a few lines of code, thanks to the ",(0,i.kt)("strong",{parentName:"p"},"refine")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"refine-antd")," package. This is the simplest example of refinement. It is possible to do much more, and the Dashboard you need, B2B, B2C, Admin Panel and any web application you want with refine in a very short time and in a very flexible way."),(0,i.kt)("h2",{id:"refine-demo-apps"},"Refine Demo Apps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refine Client Example -> ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/demo/"},"Refine Headless + Refine Core + Next.js (SSR) + Tailwind CSS"))),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/client_home.png",alt:"Refine Client App"}),(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/client_menu.png",alt:"Refine Client App"}),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refine Admin Panel Example -> ",(0,i.kt)("a",{parentName:"li",href:"https://example.admin.refine.dev/"},"Refine Antd + Refine Core "))),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/dashboard.png",alt:"Refine Dashboard"}),(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/products.png",alt:"Refine Admin Panel Producst Page"}),(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/reviews.png",alt:"Refine Reviews Page"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"powerful-features-of-refine"},"Powerful Features of Refine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Headless"),(0,i.kt)("li",{parentName:"ul"},"Next.js/SSR Support \ud83d\ude80\ud83d\ude80\ud83d\ude80"),(0,i.kt)("li",{parentName:"ul"},"Realtime"),(0,i.kt)("li",{parentName:"ul"},"Access Control (RBAC, LDAP, ACL, ABAC, etc.)"),(0,i.kt)("li",{parentName:"ul"},"i18n (internationalization)"),(0,i.kt)("li",{parentName:"ul"},"Audit Log(Comming Soon)"),(0,i.kt)("li",{parentName:"ul"},"Material UI Support(Comming Soon)"),(0,i.kt)("li",{parentName:"ul"},"CSV Import/Export"),(0,i.kt)("li",{parentName:"ul"},"Multi Level Menu"),(0,i.kt)("li",{parentName:"ul"},"GraphQL Support"),(0,i.kt)("li",{parentName:"ul"},"Dynamic Multi-level Menus"),(0,i.kt)("li",{parentName:"ul"},"All features of ",(0,i.kt)("strong",{parentName:"li"},"refine")," are available as ",(0,i.kt)("strong",{parentName:"li"},"open source"),".")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/"},"For more information about all ",(0,i.kt)("strong",{parentName:"a"},"refine")," features and ",(0,i.kt)("strong",{parentName:"a"},"refine")," \u2192")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/comparison/"},"Comparison | Refine vs React-Admin vs AdminBro vs Retool \u2192")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article, we went through ",(0,i.kt)("strong",{parentName:"p"},"refine")," and showed you how to create a full stack application with backend providers that are integrated with it. You may rapidly and flexibly create a web application with ",(0,i.kt)("strong",{parentName:"p"},"refine"),". ",(0,i.kt)("strong",{parentName:"p"},"refine")," is a very successful and developing open source ",(0,i.kt)("inlineCode",{parentName:"p"},"internal tool")," framework. It solves the deficiencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"B2B"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"B2"),"C and ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin panel")," development processes well and offers features suitable for needs."),(0,i.kt)("p",null,"One of the biggest features that distinguishes ",(0,i.kt)("strong",{parentName:"p"},"refine")," from other frameworks is that it is customizable. Combined with ",(0,i.kt)("em",{parentName:"p"},"refine")," ",(0,i.kt)("inlineCode",{parentName:"p"},"headless"),", it now provides more customization options. This provides a great deal of convenience in the project you will develop."),(0,i.kt)("p",null,"You can develop any web application or admin panel you want in a very short time with ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"Give ",(0,i.kt)("strong",{parentName:"p"},"refine")," a star on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"GitHub")," if you like it - your support will help us continue making this tool amazing!"))}m.isMDXComponent=!0}}]);