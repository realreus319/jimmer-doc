"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7634],{56778:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const i={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),i=t(18215),l=t(44319),s=t(56347),a=t(94280),o=t(73024),c=t(58417),u=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,u.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:i}),x=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(46916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),i=a[t].value;i!==r&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,i.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function _(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(_,{...e,children:d(e.children)},String(n))}},42350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"query/paging/deep-optimization","title":"\u6df1\u5206\u9875\u4f18\u5316","description":"\u5206\u9875\u67e5\u8be2\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5728\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5206\u9875\u533a\u95f4\u592a\u9760\u540e \uff08\u5373offset\u592a\u5927\uff09\uff0c\u4f1a\u5f15\u8d77\u6027\u80fd\u95ee\u9898\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/deep-optimization.mdx","sourceDirName":"query/paging","slug":"/query/paging/deep-optimization","permalink":"/jimmer-doc/zh/docs/query/paging/deep-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/paging/deep-optimization.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"\u6df1\u5206\u9875\u4f18\u5316"},"sidebar":"tutorialSidebar","previous":{"title":"\u53cd\u6392\u5e8f\u4f18\u5316","permalink":"/jimmer-doc/zh/docs/query/paging/reverse-sorting"},"next":{"title":"DSL\u8868\u8fbe\u5f0f","permalink":"/jimmer-doc/zh/docs/query/expression"}}');var i=t(74848),l=t(28453),s=t(37244),a=t(56778);const o={sidebar_position:4,title:"\u6df1\u5206\u9875\u4f18\u5316"},c=void 0,u={},d=[{value:"\u8bbe\u7f6e\u9608\u503c",id:"\u8bbe\u7f6e\u9608\u503c",level:2},{value:"\u6548\u7528",id:"\u6548\u7528",level:2},{value:"\u8bbe\u7f6e\u4e3a0",id:"\u8bbe\u7f6e\u4e3a0",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u5206\u9875\u67e5\u8be2\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5728\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u5206\u9875\u533a\u95f4\u592a\u9760\u540e ",(0,i.jsx)(n.em,{children:"\uff08\u5373offset\u592a\u5927\uff09"}),"\uff0c\u4f1a\u5f15\u8d77\u6027\u80fd\u95ee\u9898\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\uff0cJimmer\u652f\u6301\u6df1\u5206\u9875\u4f18\u5316\uff0c\u4e3a\u5206\u9875\u67e5\u8be2\u7684offset\u8bbe\u7f6e\u4e00\u4e2a\u9608\u503c",(0,i.jsx)(n.code,{children:"offset-optimizing-hreshold"}),"\uff0c\u4e00\u65e6offset\u8fbe\u5230\u8fd9\u4e2a\u9608\u503c\uff0c\u6539\u53d8\u5206\u9875\u67e5\u8be2\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbe\u7f6e\u9608\u503c",children:"\u8bbe\u7f6e\u9608\u503c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528Spring Boot Starter"}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539",(0,i.jsx)(n.code,{children:"application.yml"})," ",(0,i.jsx)(n.em,{children:"(\u6216application.properties)"}),"\uff0c\u6dfb\u52a0\u914d\u7f6e\u9879\u76ee",(0,i.jsx)(n.code,{children:"offset-optimizing-hreshold"}),"\uff0c\u5982\u4e0b"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"jimmer:\n    offset-optimizing-hreshold: 1000\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u5e95\u5c42API"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setOffsetOptimizingThreshold(1000)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setOffsetOptimizingThreshold(1000)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u8bbe\u7f6e\u8fd9\u4e2a\u9608\u503c\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a",(0,i.jsx)(n.code,{children:"Integer.MAX_VALUE"}),"\uff0c\u8fd9\u8868\u793a\u6ca1\u6709\u5206\u9875\u67e5\u8be2\u53ef\u4ee5\u542f\u7528\u8be5\u529f\u80fd\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u6548\u7528",children:"\u6548\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba8\u8bba\u6b64\u529f\u80fd\u65e0\u9700count-query\uff0c\u5173\u6ce8\u4e8edata-query\u5373\u53ef\u3002\u8ba9\u6211\u4eec\u6765\u770b\u8fd9\u4e2a\u7b80\u5355\u7684\u5206\u9875\u67e5\u8be2"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(a.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public List<Book> findBooks(int limit, int offset) {\n    BookTable table = Tables.BOOK_TABLE;\n    return sqlClient\n            .createQuery(table)\n            .select(table)\n            .limit(limit, offset)\n            .execute();\n}\n"})})}),(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(limit: Int, offset: Int): List<Book> =\n    sqlClient.createQuery(Book::class) {\n        select(table)\n    }\n    .limit(limit, offset)\n    .execute()\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0d\u540c\u7684\u65b9\u8a00\u5bf9\u5206\u9875\u67e5\u8be2\u7684\u652f\u6301\u4e0d\u76f8\u540c\uff0c\u5176\u4e2d\uff0cOracle\u8fd8\u6bd4\u590d\u6742\u3002\u8bf7\u53c2\u89c1",(0,i.jsx)(n.a,{href:"./usage#%E6%96%B9%E8%A8%80",children:"\u5206\u9875\u67e5\u8be2/\u7528\u6cd5#\u65b9\u8a00"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u7b80\u5316\u8ba8\u8bba\uff0c\u6211\u4eec\u5047\u8bbe\u7528\u6237\u91c7\u7528",(0,i.jsx)(n.code,{children:"org.babyfish.jimmer.sql.H2Dialect"}),"\uff0c\u8be5\u65b9\u8a00\u4e0b\u7684\u5206\u9875\u67e5\u8be2\u751f\u6210\u7684SQL\u5f88\u7b80\u5355\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5047\u5982",(0,i.jsx)(n.code,{children:"offset-optimizing-hreshold"}),"\u88ab\u8bbe\u7f6e\u4e3a1000"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5f53offset\u5c0f\u4e8e1000\u65f6\uff0c\u6bd4\u5982\u8c03\u7528",(0,i.jsx)(n.code,{children:"findBooks(10, 90)"}),"\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nlimit ? /* 10 */ offset ? /* 90 */\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5f53offset\u5927\u7ea6\u6216\u7b49\u4e8e1000\u65f6\uff0c\u6bd4\u5982\u8c03\u7528",(0,i.jsx)(n.code,{children:"findBooks(10, 1000)"}),"\uff0c\u751f\u6210\u7684SQL\u5982\u4e0b"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select\n    optimize_.ID,\n    optimize_.NAME,\n    optimize_.EDITION,\n    optimize_.PRICE,\n    optimize_.STORE_ID\nfrom (\n    select\n        tb_1_.ID optimize_core_id_\n        from BOOK tb_1_\n    limit ? /* 10 */ offset ? /* 1000 */\n) optimize_core_ inner join BOOK optimize_\n    on optimize_.ID = optimize_core_.optimize_core_id_\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u6b64\u53ef\u89c1\uff0c\u5f53offset\u8fc7\u5927\u65f6\uff0cJimmer\u4f1a\u5148\u5bf9id\u5217\u8fdb\u884c\u5206\u9875\u67e5\u8be2\uff0c\u518d\u628a\u5206\u9875\u540e\u7684id\u96c6\u5408\u8f6c\u5316\u4e3a\u5bf9\u8c61\u96c6\u5408\u3002\u5f53\u8868\u7684\u6570\u636e\u91cf\u5f88\u5927\u65f6\uff0c\u5f88\u6709\u7528\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbe\u7f6e\u4e3a0",children:"\u8bbe\u7f6e\u4e3a0"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e\u67d0\u4e9b\u6570\u636e\u5e93 ",(0,i.jsx)(n.em,{children:"(\u6bd4\u5982MySQL)"})," \u800c\u8a00\uff0c\u53ea\u8981\u8868\u7684\u6570\u636e\u91cf\u5927\uff0c\u54ea\u6015\u67e5\u8be2\u7b2c\u4e00\u9875 ",(0,i.jsx)(n.em,{children:"(offset\u4e3a0)"}),"\uff0c\u6027\u80fd\u4e5f\u4e0d\u7406\u60f3\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u65f6\uff0c\u4e0d\u59a8\u76f4\u63a5\u5c06",(0,i.jsx)(n.code,{children:"offset-optimizing-hreshold"}),"\u8bbe\u7f6e\u62100\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},l=r.createContext(i);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);