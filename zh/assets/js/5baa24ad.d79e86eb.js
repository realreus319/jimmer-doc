"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[205],{56778:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const l={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,s),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>N});var r=t(96540),l=t(18215),a=t(44319),s=t(56347),i=t(94280),o=t(73024),u=t(58417),c=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=b({queryString:t,groupId:l}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,c.Dv)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),g=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(46916);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==r&&(u(n),s(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,l.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function N(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},75191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"query/group","title":"\u805a\u5408\u548c\u5206\u7ec4","description":"\u805a\u5408","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/group.mdx","sourceDirName":"query","slug":"/query/group","permalink":"/jimmer-doc/zh/docs/query/group","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/group.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"\u805a\u5408\u548c\u5206\u7ec4"},"sidebar":"tutorialSidebar","previous":{"title":"\u52a8\u6001\u6392\u5e8f","permalink":"/jimmer-doc/zh/docs/query/dynamic-order"},"next":{"title":"\u667a\u80fd\u5206\u9875","permalink":"/jimmer-doc/zh/docs/query/paging/"}}');var l=t(74848),a=t(28453),s=t(37244),i=t(56778);const o={sidebar_position:7,title:"\u805a\u5408\u548c\u5206\u7ec4"},u=void 0,c={},d=[{value:"\u805a\u5408",id:"\u805a\u5408",level:2},{value:"\u5206\u7ec4",id:"\u5206\u7ec4",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u805a\u5408",children:"\u805a\u5408"}),"\n",(0,l.jsxs)(s.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\nlong count = sqlClient\n    .createQuery(table)\n    .where(table.name().ilike("graphql"))\n    .select(\n        table\n            .asTableEx().authors().id()\n            // highlight-next-line\n            .count(true) // distinct: true\n    )\n    .fetchOne();\n'})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val count = sqlClient\n    .createQuery(Book::class) {\n        where(table.name.ilike("graphql"))\n        select(\n            // highlight-next-line\n            count(\n                table.asTableEx().authors.id,\n                distinct = true\n            )\n        )\n    }\n    .fetchOne()\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u4e3a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"select\n    // highlight-next-line\n    count(distinct tb_2_.AUTHOR_ID)\nfrom BOOK tb_1_\ninner join BOOK_AUTHOR_MAPPING tb_2_\n    on tb_1_.ID = tb_2_.BOOK_ID\nwhere\n    lower(tb_1_.NAME) like ? /* %graphql% */\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5206\u7ec4",children:"\u5206\u7ec4"}),"\n",(0,l.jsxs)(s.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"BookTable table = Tables.BOOK_TABLE;\n\nList<Tuple2<Long, BigDecimal>> tuples = sqlClient\n    .createQuery(table)\n    .groupBy(table.storeId()) \u2776\n    .select(\n            table.storeId(), \u2777\n            table.price().avg() \u2778\n    )\n    .execute();\n"})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val tuples: List<Tuple2<Long, BigDecimal>> = sqlClient\n    .createQuery(Book::class) {\n        groupBy(table.store.id) \u2776\n        select(\n            table.store.id, \u2777\n            avg(table.price).asNonNull() \u2778\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u2776 \u6309\u7167",(0,l.jsx)(n.code,{children:"BOOK"}),"\u8868\u7684\u5916\u952e",(0,l.jsx)(n.code,{children:"STORE_ID"}),"\u5206\u7ec4"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0cJimmer\u4e0d\u4f1a\u628a",(0,l.jsx)(n.code,{children:"table.store"}),"\u89c6\u4e3a\u8868\u8fde\u63a5\u64cd\u4f5c\uff0c\u800c\u662f\u6574\u4f53\u89c6",(0,l.jsx)(n.code,{children:"table.store.id"}),"\u4e3a\u5916\u952e\u5b57\u6bb5"]}),(0,l.jsxs)(n.p,{children:["\u8bf7\u53c2\u89c1",(0,l.jsx)(n.a,{href:"./dynamic-join/optimization#%E5%B9%BB%E8%BF%9E%E6%8E%A5",children:"\u5e7b\u8fde\u63a5"})]})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u2777 \u5206\u7ec4\u5217\u53ef\u4ee5\u88ab\u76f4\u63a5\u67e5\u8be2"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u2778 \u975e\u5206\u7ec4\u5217\u4e0d\u80fd\u76f4\u63a5\u67e5\u8be2\uff0c\u53ea\u80fd\u4f5c\u4e3a\u805a\u5408\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u53c2\u6570\u67e5\u8be2"}),"\n",(0,l.jsxs)(n.admonition,{type:"caution",children:[(0,l.jsxs)(n.p,{children:["Kotlin\u4ee3\u7801\u591a\u8c03\u7528\u4e86\u4e2a\u51fd\u6570\uff1a",(0,l.jsx)(n.code,{children:"asNonNull()"})]}),(0,l.jsxs)(n.p,{children:["\u5728Jimmer\u7684Kotlin DSL\u4e2d\uff0c\u805a\u5408\u51fd\u6570",(0,l.jsx)(n.code,{children:"avg"})," ",(0,l.jsxs)(n.em,{children:["(\u4ee5\u53ca",(0,l.jsx)(n.code,{children:"sum"}),"\u3001",(0,l.jsx)(n.code,{children:"min"}),"\u3001",(0,l.jsx)(n.code,{children:"max"}),")"]})," \u8fd4\u56de\u7c7b\u578b\u90fd\u662fNullable\u7684\u3002\u5728\u4e0d\u4f7f\u7528\u5206\u7ec4\u7684\u524d\u63d0\u4e0b\uff0c\u5bf9\u6ca1\u6709\u6570\u636e\u7684\u8868\u7684\u4efb\u4f55\u5217\u8fdb\u884c\u805a\u5408\u8fd0\u7b97\u90fd\u4f1a\u5f97\u5230null\u3002"]}),(0,l.jsx)(n.p,{children:"\u7136\u800c\uff0c\u548c\u5206\u7ec4\u914d\u5408\u4f7f\u7528\u540e\u4e0d\u518d\u5982\u6b64\u3002\u5206\u7ec4\u540e\uff0c\u6bcf\u4e00\u7ec4\u5185\u90e8\u81f3\u5c11\u6709\u4e00\u6761\u6570\u636e\uff0c\u5982\u679c\u88ab\u805a\u5408\u7684\u539f\u59cb\u5b57\u6bb5\u672c\u8eab\u975enull\uff0c\u5219\u805a\u5408\u540e\u7684\u7ed3\u679c\u4e0d\u4f1a\u4e3anull\u3002"}),(0,l.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c\u8fd9\u91cc\u901a\u8fc7",(0,l.jsx)(n.code,{children:"asNonNull()"}),"\u5c06Nullable\u8868\u8fbe\u5f0f\u8f6c\u6362\u4e3aNonNull\u8868\u8fbe\u5f0f\uff0c\u6700\u7ec8",(0,l.jsx)(n.code,{children:"execute()"}),"\u51fd\u6570\u67e5\u8be2\u5230\u7684\u6570\u636e\u7c7b\u578b\u662f",(0,l.jsx)(n.code,{children:"List<Tuple2<Long, BigDecimal>>"}),"\uff0c\u548c\u7b2c\u4e00\u884c\u660e\u786e\u6307\u5b9a\u53d8\u91cf",(0,l.jsx)(n.code,{children:"tuples"}),"\u7684\u7c7b\u578b\u76f8\u540c\u3002"]}),(0,l.jsxs)(n.p,{children:["\u5982\u679c\u53bb\u6389\u8fd9\u91cc\u7684",(0,l.jsx)(n.code,{children:"asNonNull()"}),"\uff0c",(0,l.jsx)(n.code,{children:"execute()"}),"\u51fd\u6570\u67e5\u8be2\u5230\u7684\u6570\u636e\u7c7b\u578b\u662f",(0,l.jsx)(n.code,{children:"List<Tuple2<Long, BigDecimal?>>"}),"\uff0c\u4ece\u800c\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002"]})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);