"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6842],{77186:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"graphql/concept","title":"\u57fa\u672c\u6982\u5ff5","description":"\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/graphql/concept.mdx","sourceDirName":"graphql","slug":"/graphql/concept","permalink":"/jimmer-doc/zh/docs/graphql/concept","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/graphql/concept.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"\u57fa\u672c\u6982\u5ff5"},"sidebar":"tutorialSidebar","previous":{"title":"GraphQL\u7bc7","permalink":"/jimmer-doc/zh/docs/graphql/"},"next":{"title":"Query","permalink":"/jimmer-doc/zh/docs/graphql/query"}}');var a=n(74848),s=n(28453),i=n(11470),o=n(19365);const l={sidebar_position:1,title:"\u57fa\u672c\u6982\u5ff5"},c=void 0,u={},d=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"\u6982\u5ff5",children:"\u6982\u5ff5"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728",(0,a.jsx)(r.a,{href:"../spring",children:"Spring\u7bc7"}),"\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u5982\u4f55\u5229\u7528Jimmer\u5b9e\u73b0REST\u670d\u52a1\uff0c\u5e76\u4e3a\u4e4b\u81ea\u52a8\u751f\u6210\u5ba2\u6237\u7aef\u6240\u9700\u7684\u4ee3\u7801\uff0c\u6bd4\u5982TypeScript\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u4e0d\u4ec5\u5982\u6b64\uff0cJimmer\u8fd8\u652f\u6301\u53e6\u5916\u4e00\u79cd\u5f00\u53d1\u6a21\u5f0f\uff0c\u6784\u5efa",(0,a.jsx)(r.a,{href:"https://graphql.org/",children:"GraphQL"}),"\u670d\u52a1\u3002\u8fd9\u662f\u672c\u7cfb\u5217\u6587\u7ae0\u8981\u8ba8\u8bba\u7684\u5185\u5bb9\u3002"]}),"\n",(0,a.jsxs)(r.admonition,{type:"caution",children:[(0,a.jsx)(r.p,{children:"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u5e76\u4e0d\u652f\u6301\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\u3002"}),(0,a.jsxs)(r.p,{children:["\u56e0\u6b64\uff0c\u65e0\u6cd5\u901a\u8fc7GraphQL\u66b4\u9732\u7c7b\u4f3c\u4e8e",(0,a.jsx)(r.a,{href:"../query/object-fetcher/recursive",children:"\u5bf9\u8c61\u6293\u53d6\u5668\u7684\u9012\u5f52\u67e5\u8be2"}),"\u7684\u529f\u80fd\uff0c\u8fd9\u662f\u76ee\u524d\u4f7f\u7528GraphQL\u5fc5\u987b\u63a5\u53d7\u7684\u529f\u80fd\u727a\u7272\u3002"]})]}),"\n",(0,a.jsxs)(r.p,{children:["Jimmer\u5bf9GraphQL\u7684\u652f\u6301\u57fa\u4e8e",(0,a.jsx)(r.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),"\u5b9e\u73b0\u7684\u3002\n\u6240\u4ee5\uff0c\u9879\u76ee\u9700\u8981\u540c\u65f6\u5bfc\u5165Jimmer\u548cSpring GraphQL\u7684Spring Boot Starter\uff0c\u6bd4\u5982"]}),"\n",(0,a.jsxs)(i.A,{groupId:"buildTool",children:[(0,a.jsx)(o.A,{value:"maven",label:"Maven",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-xml",metastring:'title="pom.xml"',children:"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <dependencies>\n        <dependency>\n            <groupId>org.babyfish.jimmer</groupId>\n            <artifactId>jimmer-spring-boot-starter</artifactId>\n            <version>${jimmer.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-graphql</artifactId>\n            <version>${spring.boot.version}</version>\n        </dependency>\n        ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n    </dependencies>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"})})}),(0,a.jsx)(o.A,{value:"gradle",label:"Gradle",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"dependencies {\n    implementation \"org.babyfish.jimmer:jimmer-spring-boot-starter:${jimmerVersion}\"\n    implementation 'org.springframework.boot:spring-boot-starter-graphql'\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n"})})})]}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["\u5982\u679cJimmer\u5b9e\u4f53\u7c7b\u578b\u4e5f\u5b9a\u4e49\u5728GraphQL\u9879\u76ee\u4e2d\uff0c\u800c\u5e76\u672a\u72ec\u7acb\u5f62\u6210\u53e6\u5916\u4e00\u4e2a\u9879\u76ee\uff0c\u90a3\u4e48\u9884\u7f16\u8bd1\u5668 ",(0,a.jsx)(r.em,{children:"(\u5bf9Java\u800c\u8a00\uff0c\u662fAnnotation Processor\uff1b\u5bf9Kotlin\u800c\u8a00\uff0c\u662fKSP)"})," \u4e5f\u914d\u7f6e\u5728\u6784\u5efa\u811a\u672c\u4e2d\u3002"]}),(0,a.jsxs)(r.p,{children:["\u8fd9\u90e8\u5206\u5185\u5bb9\u5df2\u7ecf\u5728",(0,a.jsx)(r.a,{href:"../quick-view/get-started/generate-code",children:"\u751f\u6210\u4ee3\u7801"}),"\u4e00\u6587\u4e2d\u88ab\u8be6\u7ec6\u8bba\u8ff0\u8fc7\uff0c\u672c\u6587\u4e0d\u518d\u91cd\u590d\u3002"]})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),"\u662fSchema-First\u65b9\u6848\uff0c\u800c\u975eCode-First\u65b9\u6848\uff0c\n\u56e0\u6b64\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u4e3a\u9879\u76ee\u521b\u5efa\u6587\u4ef6",(0,a.jsx)(r.code,{children:"src/main/resources/graphql/schema.graphqls"}),"\uff0c\u5e76\u5728\u5176\u4e2d\u5b9a\u4e49GraphQL Schema\u3002"]}),"\n",(0,a.jsxs)(r.p,{children:["\u8fd9\u4e2a\u6587\u4ef6\u662f",(0,a.jsx)(r.a,{href:"https://spring.io/projects/spring-graphql",children:"Spring GraphQL"}),"\u7684\u8981\u6c42\uff0c\u5176\u5185\u5bb9GraphQL schema\u662f\u4e00\u79cd\u6807\u51c6\u7684\u8bed\u8a00\uff0c\u5b83\u4eec\u90fd\u548cJimmer\u65e0\u5173\uff0c\u672c\u6587\u4e0d\u505a\u89e3\u91ca\uff0c\u53ef\u53c2\u8003",(0,a.jsx)(r.a,{href:"https://github.com/babyfish-ct/jimmer-examples/blob/main/java/jimmer-sql-graphql/service/src/main/resources/graphql/schema.graphqls",children:"\u9644\u5e26\u4f8b\u5b50\u7684GraphQL Schema"}),"\u3002"]}),"\n",(0,a.jsx)(r.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,a.jsx)(r.admonition,{type:"caution",children:(0,a.jsxs)(r.p,{children:["\u76ee\u524d\u7248\u672c\u5b58\u5728\u9650\u5236\uff0c\u5728\u63d0\u4f9bGraphQL\u670d\u52a1\u65f6\uff0c\u8bf7\u52ff\u4f7f\u7528",(0,a.jsx)(r.a,{href:"../mapping/advanced/calculated/formula#%E5%9F%BA%E4%BA%8Esql%E7%9A%84%E8%AE%A1%E7%AE%97",children:"\u57fa\u4e8eSQL\u7684\u7b80\u5355\u8ba1\u7b97\u5c5e\u6027"})]})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>q});var t=n(96540),a=n(18215),s=n(23104),i=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function g(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,d]=m({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const r=e.currentTarget,n=l.indexOf(r),a=o[n].value;a!==t&&(c(r),i(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function x(e){let{lazy:r,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...r,...e}),(0,v.jsx)(x,{...r,...e})]})}function q(e){const r=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(r))}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);