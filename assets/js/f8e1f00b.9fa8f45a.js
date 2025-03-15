"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6015],{37372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"showcase/recursive-query/node-control","title":"3.2 Control Recursion Of Node","description":"Query Dynamic Entities","source":"@site/docs/showcase/recursive-query/node-control.mdx","sourceDirName":"showcase/recursive-query","slug":"/showcase/recursive-query/node-control","permalink":"/jimmer-doc/docs/showcase/recursive-query/node-control","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/recursive-query/node-control.mdx","tags":[],"version":"current","lastUpdatedAt":1742063236000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"3.2 Control Recursion Of Node"},"sidebar":"tutorialSidebar","previous":{"title":"3.2 Limit Depth","permalink":"/jimmer-doc/docs/showcase/recursive-query/depth"},"next":{"title":"3.4 Multiple Properties","permalink":"/jimmer-doc/docs/showcase/recursive-query/multiple-props"}}');var a=t(74848),i=t(28453),o=t(11470),s=t(19365);const l={sidebar_position:3,title:"3.2 Control Recursion Of Node"},c=void 0,d={},u=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"query-dynamic-entities",children:"Query Dynamic Entities"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'TreeNodeTable table = TreeNodeTable.$;\n\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        table.fetch(\n            TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveChildNodes(cfg -> {\n                    cfg.recursive(it -> {\n                        // highlight-next-line\n                        return !it.getEntity().name().equals("Clothing");\n                    });\n                })\n        )\n    )\n    .execute();\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                `childNodes*` {\n                    recursive {\n                        // highlight-next-line\n                        entity.name != "Clothing"\n                    }\n                }\n            }\n        )\n    }\n    .execute()\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["If the name of the current tree node is equal to ",(0,a.jsx)(n.code,{children:"Clothing"}),", terminate the recursion, otherwise continue recursion. The result is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "id":1,\n        "name":"Home",\n        "childNodes":[\n            {\n                "id":2,\n                "name":"Food",\n                "childNodes":[\n                    {\n                        "id":3,\n                        "name":"Drinks",\n                        "childNodes":[\n                            {\n                                "id":4,\n                                "name":"Coca Cola",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":5,\n                                "name":"Fanta",\n                                "childNodes":[]\n                            }\n                        ]\n                    },\n                    {\n                        "id":6,\n                        "name":"Bread",\n                        "childNodes":[\n                            {\n                                "id":7,\n                                "name":"Baguette",\n                                "childNodes":[]\n                            },\n                            {\n                                "id":8,\n                                "name":"Ciabatta",\n                                "childNodes":[]\n                            }\n                        ]\n                    }\n                ]\n            },\n            // highlight-next-line\n            {"id":9,"name":"Clothing"}\n        ]\n    }\n]\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Clothing"})," object does not have the ",(0,a.jsx)(n.code,{children:"childNodes"})," property as ",(0,a.jsx)(n.code,{children:"[]"}),", but does not have the ",(0,a.jsx)(n.code,{children:"childNodes"})," property at all."]}),(0,a.jsxs)(n.p,{children:["This means whether the ",(0,a.jsx)(n.code,{children:"Clothing"})," object has subordinate objects is unknown, because the recursion process was prematurely terminated due to manual intervention."]})]}),"\n",(0,a.jsx)(n.h2,{id:"query-static-dto",children:"Query Static DTO"}),"\n",(0,a.jsxs)(n.p,{children:["Create a ",(0,a.jsx)(n.code,{children:"ChildNodesPropFilter"})," class that implements the ",(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.sql.fetcher.RecursionStrategy<E>"})," interface"]}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="ChildNodesRecursionStrategy.java"',children:'package com.yourcompany.yourpackage.strategy;\n\n...omitted import statements...\n\npublic class ChildNodesRecursionStrategy implements RecursionStrategy<TreeNode> {\n\n    @Override\n    public boolean isRecursive(Args<TreeNode> args) {\n        return !args.getEntity().name().equals("Clothing");\n    }\n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="ChildNodesRecursionStrategy.kt"',children:'package com.yourcompany.yourpackage.strategy\n\n...omitted import statements...\n\nclass ChildNodesRecursionStrategy : RecursionStrategy<TreeNode> {\n    override fun isRecursive(args: RecursionStrategy.Args<TreeNode>): Boolean {\n        return args.entity.name != "Clothing"\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"src/main/dto"})," folder, create a file with a .dto extension and edit the code as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"export com.yourcompany.yourproject.model.TreeNode\n    -> package com.yourcompany.yourproject.model.dto\n\n// highlight-next-line\nimport com.yourcompany.yourpackage.strategy.ChildNodesRecursionStrategy\n\nRecursiveTreeNodeView {\n    #allScalars(this)\n    \n    // highlight-next-line\n    !recursion(ChildNodesRecursionStrategy)\n    childNodes*\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Compile the project to generate the Java/Kotlin type ",(0,a.jsx)(n.code,{children:"RecursiveTreeNodeView"})]}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\n\nList<RecursiveTreeNodeView> rootNodes = sqlClient\n    .createQuery(table)\n    .where(table.parentId().isNull())\n    .select(\n        // highlight-next-line\n        table.fetch(RecursiveTreeNodeView.class)\n    )\n    .execute();\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        where(table.parentId.isNull())\n        select(\n            // highlight-next-line\n            table.fetch(RecursiveTreeNodeView::class)\n        )\n    }\n    .execute()\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"You'll get the following result:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"[\n    RecursiveTreeNodeView(\n        id=1, \n        name=Home, \n        childNodes=[\n            RecursiveTreeNodeView(\n                id=9, \n                // highlight-next-line\n                name=Clothing, \n                childNodes=null\n            ), \n            RecursiveTreeNodeView(\n                id=2, \n                name=Food, \n                childNodes=[\n                    RecursiveTreeNodeView(\n                        id=6, \n                        name=Bread, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=7, \n                                name=Baguette, \n                                childNodes=[]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=8, \n                                name=Ciabatta, \n                                childNodes=[]\n                            )\n                        ]\n                    ), \n                    RecursiveTreeNodeView(\n                        id=3, \n                        name=Drinks, \n                        childNodes=[\n                            RecursiveTreeNodeView(\n                                id=4, \n                                name=Coca Cola, \n                                childNodes=[]\n                            ), \n                            RecursiveTreeNodeView(\n                                id=5, \n                                name=Fanta, \n                                childNodes=[]\n                            )\n                        ]\n                    )\n                ]\n            )\n        ]\n    )\n]\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),a=t(34164),i=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:t,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),v=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function N(e){const n=g(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,f.jsx)(y,{...n,...e}),(0,f.jsx)(x,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,f.jsx)(N,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);