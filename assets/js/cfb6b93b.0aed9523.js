"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/typescript-omit-utility-type",source:"@site/blog/2022-10-03-typescript-omit.md",title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",date:"2022-10-03T00:00:00.000Z",formattedDate:"October 3, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:3.525,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social.png",hide_table_of_contents:!1},prevItem:{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine"},nextItem:{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works"},relatedPosts:[{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",permalink:"/blog/typescript-record-type",formattedDate:"June 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.24,date:"2023-06-16T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Enum with Examples",description:"We'll explore TypeScript Enums with examples.",permalink:"/blog/typescript-enum",formattedDate:"May 21, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.67,date:"2023-05-21T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:4,date:"2022-10-10T00:00:00.000Z"}],authorPosts:[{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",permalink:"/blog/typescript-record-type",formattedDate:"June 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.24,date:"2023-06-16T00:00:00.000Z"},{title:"Setting Up the Invoicer App",description:"We start with setting up the Invoicer app by choosing Ant Design as a UI framework and Strapi as a dataprovider",permalink:"/blog/refine-react-invoice-generator-2",formattedDate:"April 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.165,date:"2023-04-11T00:00:00.000Z"},{title:"Setting Up the Client App",description:"We'll initialize our Pixels app using refine and get familiar with the boilerplate code to be created with the create refine-app CLI tool.",permalink:"/blog/refine-pixels-2",formattedDate:"February 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:13.64,date:"2023-02-15T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"TypeScript <code>Omit&lt;Type, Keys&gt;</code> Example",id:"typescript-omittype-keys-example",level:2},{value:"TypeScript <code>Omit&lt;&gt;</code> with Interface",id:"typescript-omit-with-interface",level:2},{value:"When to Avoid",id:"when-to-avoid",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const b={toc:m};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>"),". This is the second part of the series titled ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-pick-utility-type/"},"TypeScript Utility Type Series"),"."),(0,r.kt)("p",null,"In the previous post, we went through an example where we derived a ",(0,r.kt)("inlineCode",{parentName:"p"},"GuestUser")," type by picking a few properties from the base type, ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick<>"),". We hinted that if the number of properties to be picked are more than those being discarded, picking becomes less convenient. In that case, we should prefer using ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,r.kt)("p",null,"In this post, we will consider an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>")," by creating a type for our ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," entity."),(0,r.kt)("p",null,"Step we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#typescript-omittype-keys-example"},"TypeScript Omit Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#typescript-omit-with-interface"},"TypeScript Omit with Interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#when-to-avoid"},"When to Avoid"))),(0,r.kt)("h2",{id:"typescript-omittype-keys-example"},"TypeScript ",(0,r.kt)("inlineCode",{parentName:"h2"},"Omit<Type, Keys>")," Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>"),", like ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick<>"),", takes a base type as the first argument. It takes an union type of the keys to be omitted as the second argument and returns the derived type that excludes those properties."),(0,r.kt)("p",null,"Looking back at the ERD, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," entity has all the same properties as ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperbUser")," - except ",(0,r.kt)("inlineCode",{parentName:"p"},"roles"),":"),(0,r.kt)("div",{class:"img-container","align-items":"center"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/ts-omit-visualize.png",alt:"TypeScript Omit Type"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Deriving a ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," type from the ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperbUser")," plainly requires us to omit only the ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," property, as opposed to picking all the rest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type SuperbUser = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password: string,\n  firstName: string,\n  lastName: string,\n  roles: ('Admin' | 'Editor' | 'Author')[]\n};\n\ntype Subscriber = Omit<SuperbUser, 'roles'>;\n")),(0,r.kt)("p",null,"So, in this case, TypeScript ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>")," offers us convenience over ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick<>"),". We can now create a subscriber object that has ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," property removed from its fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\',\n  password: \'12345678\',\n  firstName: \'Abdullah\',\n  lastName: \'Numan\'\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,r.kt)("p",null,"Notice, if we navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriber.roles")," it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("p",null,"Now, let's try adding ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriber"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"subscriber.roles = ['Reader', 'Commenter']; // Property 'roles' does not exist on type 'Subscriber'.\n\nconsole.log(subscriber.roles); // [\"Reader\", \"Commenter\"]\n")),(0,r.kt)("p",null,"And TypeScript grunts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// Property 'roles' does not exist on type 'Subscriber'.\n")),(0,r.kt)("p",null,"If we look at ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log(subscriber.roles);")," though, we can see that our assignment actually sets the property and value of ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriber.roles"),". TypeScript only yells at us at development, but doesn't help us with this in runtime. JavaScript sets the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe.roles"),"."),(0,r.kt)("p",null,"So, caution there, as it is an important distinction that TypeScript is applying omit at development, not JavaScript. TypeScript does not check for any consequence of the written code ",(0,r.kt)("strong",{parentName:"p"},"after")," it is compiled to JavaScript. So, it is crucial to leverage TypeScript linter suggestions to strictly check omit while developing."),(0,r.kt)("hr",null),(0,r.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"typescript-omit-with-interface"},"TypeScript ",(0,r.kt)("inlineCode",{parentName:"h2"},"Omit<>")," with Interface"),(0,r.kt)("p",null,"Like it was in ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick<>"),", we can use an interface for ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperbUser")," and the results will be the same:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: (\'Admin\' | \'Editor\' | \'Author\')[]\n};\n\ntype Subscriber = Omit<SuperbUser, \'roles\'>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\',\n  password: \'12345678\',\n  firstName: \'Abdullah\',\n  lastName: \'Numan\'\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,r.kt)("h2",{id:"when-to-avoid"},"When to Avoid"),(0,r.kt)("p",null,"As with ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick<>"),", the second argument to Typescript Omit also takes a union of keys. So, if we need to omit any other property, we can add them to the second argument with the pipe operator ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Subscriber = Omit<SuperbUser, 'roles' | 'firstName' | ...>;\n")),(0,r.kt)("p",null,"We should avoid using ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>")," and prefer ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick<>")," when we have more properties to omit than to pick."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, we delved into ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>")," with an example of deriving a type for our ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriber")," entity by omitting a property from our base type, ",(0,r.kt)("inlineCode",{parentName:"p"},"SuperbUser"),". We saw that ",(0,r.kt)("inlineCode",{parentName:"p"},"Omit<>")," is the opposite equivalent of ",(0,r.kt)("inlineCode",{parentName:"p"},"Pick<>")," and is more convenient when we want to pick more properties and omit less from a base type."),(0,r.kt)("p",null,"In the next article, we'll cover object type transformations using ",(0,r.kt)("inlineCode",{parentName:"p"},"Partial<Type>"),"."))}h.isMDXComponent=!0}}]);