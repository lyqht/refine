"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25612],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60224:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n.p+"assets/images/basic-de284651459ae0385d39d3191bcd4bce.png",l=n.p+"assets/images/pagination-524c4e5bc248105b18b3ff61ee135948.gif",s=n.p+"assets/images/sorting-2298eb30356cc85e1a2e226e1ec709e2.gif",p=n.p+"assets/images/filtering-b21d91e4ae79e278087cf43e7c7d3cd9.gif",c=["components"],d={id:"react-table",title:"React Table"},m=void 0,u={unversionedId:"packages/react-table",id:"packages/react-table",isDocsHomePage:!1,title:"React Table",description:"refine offers a React Table adapter(@pankod/refine-react-table) that allows you to use the React Table library with refine. Thus, you can manage your server-side data fetching operations.",source:"@site/docs/packages/react-table.md",sourceDirName:"packages",slug:"/packages/react-table",permalink:"/docs/packages/react-table",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/packages/react-table.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1655457132,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"react-table",title:"React Table"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/ui-frameworks/mui/components/fields/url"},next:{title:"useForm",permalink:"/docs/packages/react-hook-form/useForm"}},h=[{value:"Installation",id:"installation",children:[],level:2},{value:"Basic Usage",id:"basic-usage",children:[{value:"Create <code>&lt;PostList&gt;</code> component",id:"create-postlist-component",children:[],level:3},{value:"Create basic table",id:"create-basic-table",children:[],level:3}],level:2},{value:"Pagination",id:"pagination",children:[],level:2},{value:"Sorting",id:"sorting",children:[],level:2},{value:"Filtering",id:"filtering",children:[],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",children:[],level:2}],g={toc:h};function k(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," offers a ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com"},"React Table")," adapter(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/react-table"},"@pankod/refine-react-table"),") that allows you to use the React Table library with ",(0,o.kt)("strong",{parentName:"p"},"refine"),". Thus, you can manage your server-side data fetching operations."),(0,o.kt)("p",null,"All of React Table's features are supported and you can use all of the React Table's examples with no changes just copy and paste them into your project."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/react-table"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-table"))," library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @pankod/refine-react-table\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For typescript users, you need to add React Table types to your project."))),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"In this documentation, we'll step-by-step create an example of a headless table with sorting, filtering, and pagination capabilities."),(0,o.kt)("p",null,"Let's say you have a endpoint that returns the following data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'[\n    {\n        "id": 182,\n        "title": "A aspernatur rerum molestiae.",\n        "content": "Natus molestias incidunt voluptatibus. Libero delectus facilis...",\n        "status": "published",\n        "createdAt": "2021-04-18T00:09:11.607Z"\n    },\n    {\n        "id": 989,\n        "title": "A molestiae vel voluptatem enim.",\n        "content": "Voluptas consequatur quia beatae. Ipsa est qui culpa deleniti...",\n        "status": "draft",\n        "createdAt": "2020-01-28T02:57:58.892Z"\n    }\n]\n')),(0,o.kt)("h3",{id:"create-postlist-component"},"Create ",(0,o.kt)("inlineCode",{parentName:"h3"},"<PostList>")," component"),(0,o.kt)("p",null,"We simply create a ",(0,o.kt)("inlineCode",{parentName:"p"},"<PostList>")," component and pass to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component as a resource. All the implementation we will do from now on will be in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PostList>")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},"export const PostList: React.FC = () => {\n    return <></>;\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "./App.css";\n\n//highlight-next-line\nimport { PostList } from "pages/posts/list";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            routerProvider={routerProvider}\n            //highlight-next-line\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show basic table style"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/App.css"',title:'"src/App.css"'},"table {\n    border-spacing: 0;\n    border: 1px solid black;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n    border-bottom: 0;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n    border-right: 0;\n}\n")))),(0,o.kt)("h3",{id:"create-basic-table"},"Create basic table"),(0,o.kt)("p",null,"Firts, we need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from the ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-table")," library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'//highlight-next-line\nimport { useTable } from "@pankod/refine-react-table";\n\nexport const PostList: React.FC = () => {\n    return <></>;\n};\n')),(0,o.kt)("p",null,"Define columns what we want to display in the table. Then, return the headless table with using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," does not expect any data to be passed to it. It will fetch data from the data provider by resource."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'//highlight-next-line\nimport { useTable, Column } from "@pankod/refine-react-table";\n\nexport const PostList: React.FC = () => {\n    //highlight-start\n    const columns: Array<Column> = React.useMemo(\n        () => [\n            {\n                id: "id",\n                Header: "ID",\n                accessor: "id",\n            },\n            {\n                id: "title",\n                Header: "Title",\n                accessor: "title",\n            },\n            {\n                id: "status",\n                Header: "Status",\n                accessor: "status",\n            },\n            {\n                id: "createdAt",\n                Header: "CreatedAt",\n                accessor: "createdAt",\n            },\n        ],\n        [],\n    );\n    //highlight-end\n\n    //highlight-start\n    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =\n        useTable({ columns });\n    //highlight-end\n\n    return (\n        //highlight-start\n        <table {...getTableProps()}>\n            <thead>\n                {headerGroups.map((headerGroup) => (\n                    <tr {...headerGroup.getHeaderGroupProps()}>\n                        {headerGroup.headers.map((column) => (\n                            <th {...column.getHeaderProps()}>\n                                {column.render("Header")}\n                            </th>\n                        ))}\n                    </tr>\n                ))}\n            </thead>\n            <tbody {...getTableBodyProps()}>\n                {rows.map((row, i) => {\n                    prepareRow(row);\n                    return (\n                        <tr {...row.getRowProps()}>\n                            {row.cells.map((cell) => {\n                                return (\n                                    <td {...cell.getCellProps()}>\n                                        {cell.render("Cell")}\n                                    </td>\n                                );\n                            })}\n                        </tr>\n                    );\n                })}\n            </tbody>\n        </table>\n        //highlight-end\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This example is the same as the basic example in the ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com"},"React Table")," documentation."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/docs/examples/basic"},"Refer to the basic example of React Table. ","\u2192")))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i,alt:"Basic Table"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"pagination"},"Pagination"),(0,o.kt)("p",null,"We need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"usePagination")," plugin and inject it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook in order to use the pagination feature. React Table provides a bunch of methods that we can use to control the pagination. For example, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setPageSize")," method to set the current ",(0,o.kt)("inlineCode",{parentName:"p"},"pageSize"),". Every change in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pageSize")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pageIndex")," will trigger a new request to the data provider."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/docs/api/usePagination#usepagination"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"usePagination")," documentation for detailed information. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'//highlight-next-line\nimport { useTable, Column, usePagination } from "@pankod/refine-react-table";\n\nexport const PostList: React.FC = () => {\n    const columns: Array<Column> = React.useMemo(...); // Defined in the previous section\n\n    const {\n        getTableProps,\n        getTableBodyProps,\n        headerGroups,\n        prepareRow,\n        //highlight-next-line\n        page, // Instead of using \'rows\', we\'ll use page\n        //highlight-start\n        canPreviousPage,\n        canNextPage,\n        pageOptions,\n        pageCount,\n        gotoPage,\n        nextPage,\n        previousPage,\n        setPageSize,\n        state: { pageIndex, pageSize },\n        //highlight-end\n        //highlight-next-line\n    } = useTable({ columns }, usePagination);\n\n    return (\n        <>\n            <table {...getTableProps()}>\n                <thead>\n                    {headerGroups.map((headerGroup) => (\n                        <tr {...headerGroup.getHeaderGroupProps()}>\n                            {headerGroup.headers.map((column) => (\n                                <th {...column.getHeaderProps()}>\n                                    {column.render("Header")}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody {...getTableBodyProps()}>\n                    //highlight-next-line\n                    {page.map((row, i) => {\n                        prepareRow(row);\n                        return (\n                            <tr {...row.getRowProps()}>\n                                {row.cells.map((cell) => {\n                                    return (\n                                        <td {...cell.getCellProps()}>\n                                            {cell.render("Cell")}\n                                        </td>\n                                    );\n                                })}\n                            </tr>\n                        );\n                    })}\n                </tbody>\n            </table>\n\n            // Pagination can be built however you\'d like.\n            // This is just a very basic UI implementation:\n            //highlight-start\n            <div className="pagination">\n                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>\n                    {"<<"}\n                </button>\n                <button\n                    onClick={() => previousPage()}\n                    disabled={!canPreviousPage}\n                >\n                    {"<"}\n                </button>\n                <button onClick={() => nextPage()} disabled={!canNextPage}>\n                    {">"}\n                </button>\n                <button\n                    onClick={() => gotoPage(pageCount - 1)}\n                    disabled={!canNextPage}\n                >\n                    {">>"}\n                </button>\n                <span>\n                    Page\n                    <strong>\n                        {pageIndex + 1} of {pageOptions.length}\n                    </strong>\n                </span>\n                <span>\n                    | Go to page:\n                    <input\n                        type="number"\n                        defaultValue={pageIndex + 1}\n                        onChange={(e) => {\n                            const page = e.target.value\n                                ? Number(e.target.value) - 1\n                                : 0;\n                            gotoPage(page);\n                        }}\n                        style={{ width: "100px" }}\n                    />\n                </span> <select\n                    value={pageSize}\n                    onChange={(e) => {\n                        setPageSize(Number(e.target.value));\n                    }}\n                >\n                    {[10, 20, 30, 40, 50].map((pageSize) => (\n                        <option key={pageSize} value={pageSize}>\n                            Show {pageSize}\n                        </option>\n                    ))}\n                </select>\n            </div>\n            //highlight-end\n        </>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This example is the same as the pagination example in the ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com"},"React Table")," documentation."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/docs/examples/pagination"},"Refer to the pagination example of React Table. ","\u2192")))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l,alt:"Pagination Table"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"sorting"},"Sorting"),(0,o.kt)("p",null,"We need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSortBy")," plugin and inject it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook in order to use the sorting feature. React Table provides a bunch of methods that we can use to control the sorting. For example, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"toggleSortBy")," method to set the current ",(0,o.kt)("inlineCode",{parentName:"p"},"sortBy")," value. Every change in the ",(0,o.kt)("inlineCode",{parentName:"p"},"sortBy")," will trigger a new request to the data provider."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/docs/api/useSortBy#usesortby"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"useSortBy")," documentation for detailed information. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'import {\n    useTable,\n    Column,\n    usePagination,\n    //highlight-next-line\n    useSortBy,\n} from "@pankod/refine-react-table";\n\nexport const PostList: React.FC = () => {\n    const columns: Array<Column> = React.useMemo(...); // Defined in the previous section\n\n    const {\n        getTableProps,\n        getTableBodyProps,\n        headerGroups,\n        prepareRow,\n        page\n        canPreviousPage,\n        canNextPage,\n        pageOptions,\n        pageCount,\n        gotoPage,\n        nextPage,\n        previousPage,\n        setPageSize,\n        state: { pageIndex, pageSize },\n        //highlight-next-line\n    } = useTable({ columns }, useSortBy, usePagination);\n\n    return (\n        <>\n            <table {...getTableProps()}>\n                <thead>\n                    {headerGroups.map((headerGroup) => (\n                        <tr {...headerGroup.getHeaderGroupProps()}>\n                            {headerGroup.headers.map((column) => (\n                                // Add the sorting props to control sorting. For this example\n                                // we can add them into the header props\n                                //highlight-start\n                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>\n                                    {column.render("Header")}\n                                    // Add a sort direction indicator\n                                    <span>\n                                    {column.isSorted\n                                        ? column.isSortedDesc\n                                        ? \' \ud83d\udd3d\'\n                                        : \' \ud83d\udd3c\'\n                                        : \'\'}\n                                    </span>\n                                </th>\n                                //highlight-end\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody {...getTableBodyProps()}>\n                    {page.map((row, i) => {\n                        prepareRow(row);\n                        return (\n                            <tr {...row.getRowProps()}>\n                                {row.cells.map((cell) => {\n                                    return (\n                                        <td {...cell.getCellProps()}>\n                                            {cell.render("Cell")}\n                                        </td>\n                                    );\n                                })}\n                            </tr>\n                        );\n                    })}\n                </tbody>\n            </table>\n\n            <div className="pagination">\n                // Pagination defined in the previous section\n            </div>\n        </>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This example is the same as the sorting example in the ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com"},"React Table")," documentation."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/docs/examples/pagination"},"Refer to the pagination example of React Table. ","\u2192")))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:s,alt:"Sortable Table"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"filtering"},"Filtering"),(0,o.kt)("p",null,"We need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"useFilters")," plugin and inject it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook in order to use filtering. React Table provides a bunch of methods that we can use to control the filtering. For example, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setFilter")," method to set the current ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," value. However, with which column we are going to filter, we need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," prop for that column. This ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," prop must be ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/interfaceReferences#crudoperators"},(0,o.kt)("inlineCode",{parentName:"a"},"CrudOperators"))," type. Every change in the ",(0,o.kt)("inlineCode",{parentName:"p"},"filter")," will trigger a new request to the data provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/list.tsx"',title:'"src/posts/list.tsx"'},'import {\n    useTable,\n    Column,\n    usePagination,\n    useSortBy,\n    //highlight-next-line\n    useFilters,\n} from "@pankod/refine-react-table";\n\nexport const PostList: React.FC = () => {\n    const columns: Array<Column> = React.useMemo(\n        () => [\n            {\n                id: "id",\n                Header: "ID",\n                accessor: "id",\n            },\n            {\n                id: "title",\n                Header: "Title",\n                accessor: "title",\n                //highlight-next-line\n                filter: "contains",\n            },\n            {\n                id: "status",\n                Header: "Status",\n                accessor: "status",\n            },\n            {\n                id: "createdAt",\n                Header: "CreatedAt",\n                accessor: "createdAt",\n            },\n        ],\n        [],\n    );\n\n    const {\n        getTableProps,\n        getTableBodyProps,\n        headerGroups,\n        prepareRow,\n        page,\n        canPreviousPage,\n        canNextPage,\n        pageOptions,\n        pageCount,\n        gotoPage,\n        nextPage,\n        previousPage,\n        setPageSize,\n        //highlight-start\n        setFilter,\n        state: { pageIndex, pageSize, filters },\n    } = useTable({ columns }, useFilters, useSortBy, usePagination);\n    //highlight-end\n\n    return (\n        <>\n            //highlight-start\n            <div className="filtering">\n                <label htmlFor="title">Title</label>\n                <input\n                    id="title"\n                    type="text"\n                    value={\n                        filters.find((filter) => filter.id === "title")?.value\n                    }\n                    onChange={(event) => setFilter("title", event.target.value)}\n                />\n            </div>\n            //highlight-end\n            <table {...getTableProps()}>\n                <thead>\n                    {headerGroups.map((headerGroup) => (\n                        <tr {...headerGroup.getHeaderGroupProps()}>\n                            {headerGroup.headers.map((column) => (\n                                <th\n                                    {...column.getHeaderProps(\n                                        column.getSortByToggleProps(),\n                                    )}\n                                >\n                                    {column.render("Header")}\n                                    <span>\n                                        {column.isSorted\n                                            ? column.isSortedDesc\n                                                ? " \ud83d\udd3d"\n                                                : " \ud83d\udd3c"\n                                            : ""}\n                                    </span>\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody {...getTableBodyProps()}>\n                    {page.map((row, i) => {\n                        prepareRow(row);\n                        return (\n                            <tr {...row.getRowProps()}>\n                                {row.cells.map((cell) => {\n                                    return (\n                                        <td {...cell.getCellProps()}>\n                                            {cell.render("Cell")}\n                                        </td>\n                                    );\n                                })}\n                            </tr>\n                        );\n                    })}\n                </tbody>\n            </table>\n            <div className="pagination">\n                // Pagination defined in the previous section\n            </div>\n        </>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:p,alt:"Filtering"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"Supports all the properties supported by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook are available in the ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com"},"React Table")," documentation. Also, we added the following property:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"refineCoreProps"),": You can define all properties provided by ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/useTable"},(0,o.kt)("inlineCode",{parentName:"a"},"useTable"))," here. You can see all of them in ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/useTable#properties"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, we can define the ",(0,o.kt)("inlineCode",{parentName:"p"},"refineCoreProps")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook as:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/refine-react-table";\n\nconst { ... } = useTable({\n    ...,\n    refineCoreProps: {\n        resource: "posts",\n        syncWithLocation: true,\n        // You can define all properties provided by refine useTable\n    },\n});\n')),(0,o.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Desription"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TData"),(0,o.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TError"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("p",null,"Returns all the properties returned by ",(0,o.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com"},"React Table")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook. Also, we added the following return values:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"refineCore"),": Returns all values returned by ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/useTable"},(0,o.kt)("inlineCode",{parentName:"a"},"useTable")),". You can see all of them in ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/useTable##return-values"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, we can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"refineCore")," return value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook as:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@pankod/refine-react-table";\n\nconst {\n    refineCore: { tableQueryResult, ... },\n} = useTable({ ... });\n')),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("iframe",{src:"https://stackblitz.com/github/pankod/refine/tree/master/examples/reactTable/basic/?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-react-table-example"}))}k.isMDXComponent=!0}}]);