"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1949],{39183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(74848),r=t(28453),l=t(11470),i=t(19365);const s={sidebar_position:1,title:"4.1 \u57fa\u672c\u7528\u6cd5"},o=void 0,u={id:"showcase/where/usage",title:"4.1 \u57fa\u672c\u7528\u6cd5",description:"\u4ee5\u4e0b\u4e09\u79cd\u5199\u6cd5\u7b49\u4ef7",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/usage.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/usage",permalink:"/jimmer-doc/zh/docs/showcase/where/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/usage.mdx",tags:[],version:"current",lastUpdatedAt:1708391693e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"4.1 \u57fa\u672c\u7528\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"4. \u6761\u4ef6",permalink:"/jimmer-doc/zh/docs/showcase/where/"},next:{title:"4.2 \u52a8\u6001\u6761\u4ef6",permalink:"/jimmer-doc/zh/docs/showcase/where/dynamic-where"}},c={},d=[{value:"\u4f7f\u7528\u591a\u4e2awhere",id:"\u4f7f\u7528\u591a\u4e2awhere",level:2},{value:"where\u5e26\u591a\u4e2a\u53c2\u6570",id:"where\u5e26\u591a\u4e2a\u53c2\u6570",level:2},{value:"\u4f7f\u7528\u903b\u8f91\u4e0e",id:"\u4f7f\u7528\u903b\u8f91\u4e0e",level:2},{value:"\u5efa\u8bae",id:"\u5efa\u8bae",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e09\u79cd\u5199\u6cd5\u7b49\u4ef7"}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u591a\u4e2awhere",children:"\u4f7f\u7528\u591a\u4e2awhere"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String name = ...\u7565...;\nint edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.name().ilike(name))\n    // highlight-next-line\n    .where(table.edition().eq(edition))\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String = ...\u7565...\nval edition: Int = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(table.name ilike name)\n        // highlight-next-line\n        where(table.edition eq edition)\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"where\u5e26\u591a\u4e2a\u53c2\u6570",children:"where\u5e26\u591a\u4e2a\u53c2\u6570"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String name = ...\u7565...;\nint edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(\n        table.name().ilike(name),\n        table.edition().eq(edition)\n    )\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String = ...\u7565...\nval edition: Int = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(\n            table.name ilike name,\n            table.edition eq edition\n        )\n        select(table)\n    }\n    .execute();\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u903b\u8f91\u4e0e",children:"\u4f7f\u7528\u903b\u8f91\u4e0e"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"String name = ...\u7565...;\nint edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        // highlight-next-line\n        Predicate.and(\n            table.name().ilike(name),\n            table.edition().eq(edition)\n        )\n    )\n    .select(table)\n    .execute();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val name: String = ...\u7565...\nval edition: Int = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            and(\n                table.name ilike name,\n                table.edition eq edition\n            )\n        )\n        select(table)\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u5efa\u8bae",children:"\u5efa\u8bae"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0a\u4e09\u79cd\u5199\u6cd5\u5b8c\u5168\u7b49\u4ef7\u3002\u7136\u800c\uff0c\u6beb\u65e0\u7591\u95ee\uff0c\u7b2c\u4e00\u79cd\u662f\u6700\u7b80\u5355\u7684\uff0c\u6545\u800c\u63a8\u8350\u3002"})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var a=t(96540),r=t(18215),l=t(23104),i=t(56347),s=t(205),o=t(57485),u=t(31682),c=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=m({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),v=(()=>{const e=u??p;return b({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function j(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function k(e){const n=(0,g.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const r={},l=a.createContext(r);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);