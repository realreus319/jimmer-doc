"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3557],{56778:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(18215);const l={tabItem:"tabItem_Ymn6"};var r=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(l.tabItem,a),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(96540),l=t(18215),r=t(44319),a=t(56347),s=t(94280),o=t(73024),c=t(58417),d=t(44031);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:l}}=e;return{value:n,label:t,attributes:i,default:l}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const l=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=u(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,h]=b({queryString:t,groupId:l}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,d.Dv)(t);return[l,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),j=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=t(46916);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(74848);function f(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),l=s[t].value;l!==i&&(c(n),a(l))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,l.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,m.jsx)(f,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function k(e){const n=(0,g.A)();return(0,m.jsx)(y,{...e,children:h(e.children)},String(n))}},93729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"query/object-fetcher/props","title":"Ordinary Properties","description":"Fetching Scalar Fields","source":"@site/docs/query/object-fetcher/props.mdx","sourceDirName":"query/object-fetcher","slug":"/query/object-fetcher/props","permalink":"/jimmer-doc/docs/query/object-fetcher/props","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/object-fetcher/props.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Ordinary Properties"},"sidebar":"tutorialSidebar","previous":{"title":"Basic Usage","permalink":"/jimmer-doc/docs/query/object-fetcher/usage"},"next":{"title":"Associations","permalink":"/jimmer-doc/docs/query/object-fetcher/association"}}');var l=t(74848),r=t(28453),a=t(37244),s=t(56778);const o={sidebar_position:2,title:"Ordinary Properties"},c=void 0,d={},h=[{value:"Fetching Scalar Fields",id:"fetching-scalar-fields",level:2},{value:"Fetching Multiple Fields",id:"fetching-multiple-fields",level:2},{value:"Fetching All Scalar Fields",id:"fetching-all-scalar-fields",level:2},{value:"Negative Properties",id:"negative-properties",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"fetching-scalar-fields",children:"Fetching Scalar Fields"}),"\n",(0,l.jsx)(n.p,{children:"Scalar fields refer to all non-associative fields in a database table. Taking fetching the book name as an example:"}),"\n",(0,l.jsxs)(a.A,{groupId:"language",children:[(0,l.jsx)(s.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"\nBookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            // highlight-next-line\n            Fetchers.BOOK_FETCHER.name()\n        )\n    )\n    .execute();\n\n"})})}),(0,l.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy { \n                // highlight-next-line\n                name()\n            }\n        )\n    }\n    .execute()\n\n"})})})]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["For Java, the Annotation processor will automatically generate a Fetcher class for each entity interface, which is ",(0,l.jsx)(n.code,{children:"BookFetcher"})," in this example."]})}),"\n",(0,l.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    /* highlight-next-line */\n    tb_1_.NAME  \nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ?\n"})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.mdxAdmonitionTitle,{}),(0,l.jsxs)(n.p,{children:["The Java code does not call the ",(0,l.jsx)(n.code,{children:"id()"})," method of BookFetcher, but we can see the SQL statement still queries the id property of the object."]}),(0,l.jsx)(n.p,{children:"The id property is treated specially and will always be queried, not controlled by object fetchers."}),(0,l.jsxs)(n.p,{children:["In fact, the auto-generated BookFetcher class does not even have an ",(0,l.jsx)(n.code,{children:"id()"})," method, because it is not needed."]})]}),"\n",(0,l.jsx)(n.p,{children:"The printed result is (original output is compact, formatted here for readability):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        // highlight-next-line\n        "name":"Learning GraphQL"\n    },\n    ...Other objects omitted...  \n]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"fetching-multiple-fields",children:"Fetching Multiple Fields"}),"\n",(0,l.jsxs)(a.A,{groupId:"language",children:[(0,l.jsx)(s.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n                // highlight-next-line\n                .name()\n                // highlight-next-line\n                .edition()\n        )\n    )\n    .execute();\n"})})}),(0,l.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                // highlight-next-line\n                name()\n                // highlight-next-line\n                edition()\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsx)(n.p,{children:"Object fetchers are immutable objects, each method call returns a new object fetcher."}),(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.strong,{children:"Java"})," code above:"]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Fetchers.BOOK_FETCHER"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Fetchers.BOOK_FETCHER.name()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"Fetchers.BOOK_FETCHER.name().edition()"})}),"\n"]}),(0,l.jsx)(n.p,{children:"are three different object fetchers, each immutable."}),(0,l.jsx)(n.p,{children:"Object fetchers can be freely shared using static variables since they are immutable."})]}),"\n",(0,l.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    /* highlight-next-line */  \n    tb_1_.NAME,\n    /* highlight-next-line */\n    tb_1_.EDITION   \nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ?\n"})}),"\n",(0,l.jsx)(n.p,{children:"The printed result is (original output is compact, formatted here for readability):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        // highlight-next-line\n        "name":"Learning GraphQL",\n        // highlight-next-line\n        "edition":1\n    },\n    ...Other objects omitted...\n]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"fetching-all-scalar-fields",children:"Fetching All Scalar Fields"}),"\n",(0,l.jsxs)(n.p,{children:["In some scenarios, fetching all non-associative fields is a very common operation, so ",(0,l.jsx)(n.code,{children:"allScalarFields()"})," is provided to load all non-associative fields."]}),"\n",(0,l.jsxs)(a.A,{groupId:"language",children:[(0,l.jsx)(s.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            // highlight-next-line\n            Fetchers.BOOK_FETCHER.allScalarFields()\n        )\n    )\n    .execute(); \n"})})}),(0,l.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                // highlight-next-line\n                allScalarFields()\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    // highlight-start \n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE \n    // highlight-end\nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ?\n"})}),"\n",(0,l.jsx)(n.p,{children:"The printed result is (original output is compact, formatted here for readability):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":3,\n    // highlight-start\n    "name":"Learning GraphQL", \n    "edition":3,\n    "price":51.00\n    // highlight-end\n}\n// Other objects omitted\n'})}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"allScalarFields()"})," only loads non-associative fields. In the example we can see it queries ",(0,l.jsx)(n.code,{children:"id"}),", ",(0,l.jsx)(n.code,{children:"name"}),", ",(0,l.jsx)(n.code,{children:"edition"}),", ",(0,l.jsx)(n.code,{children:"price"}),", but does not query the association properties ",(0,l.jsx)(n.code,{children:"store"})," and ",(0,l.jsx)(n.code,{children:"authors"}),"."]}),(0,l.jsxs)(n.p,{children:["Fetching association properties will be covered in ",(0,l.jsx)(n.a,{href:"./association",children:"the next document"}),"."]})]}),"\n",(0,l.jsx)(n.h2,{id:"negative-properties",children:"Negative Properties"}),"\n",(0,l.jsx)(n.p,{children:"The previously discussed properties are positive properties that incrementally add fields to query. But in some cases, we only need to exclude some specific fields, while querying all other fields."}),"\n",(0,l.jsx)(n.p,{children:"This is when negative properties can be used to exclude unneeded fields."}),"\n",(0,l.jsxs)(a.A,{groupId:"language",children:[(0,l.jsx)(s.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n            .allScalarFields()\n            // highlight-next-line\n            .edition(false)\n        )\n    )\n    .execute();\n"})})}),(0,l.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                edition(false)\n            }\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"edition(false)"})," uses false as a parameter, making it a negative property."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The properties of ",(0,l.jsx)(n.code,{children:"allScalarFields()"})," are ",(0,l.jsx)(n.code,{children:"id + name + edition + price"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"edition(false)"})," means ",(0,l.jsx)(n.code,{children:"-edition"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["So in combination, the finally fetched properties are ",(0,l.jsx)(n.code,{children:"id + name + price"})]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["For positive properties, ",(0,l.jsx)(n.code,{children:"edition()"})," and ",(0,l.jsx)(n.code,{children:"edition(true)"})," are equivalent"]}),"\n",(0,l.jsxs)(n.li,{children:["When most properties need to be fetched and only a few excluded, using ",(0,l.jsx)(n.code,{children:"allScalarFields"})," with negative properties can be very useful"]}),"\n"]})}),"\n",(0,l.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.PRICE    \nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ? \n"})}),"\n",(0,l.jsx)(n.p,{children:"The printed result is (original output is compact, formatted here for readability):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "price":51.00\n        // `edition` is not here        \n    },\n    ...Other objects omitted...\n]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const l={},r=i.createContext(l);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);