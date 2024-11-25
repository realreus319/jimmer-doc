"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7994],{29296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"mutation/save-command/input-dto/lonely","title":"Lonely Form","description":"This is a very crude solution, only for learning or very simple projects.","source":"@site/docs/mutation/save-command/input-dto/lonely.mdx","sourceDirName":"mutation/save-command/input-dto","slug":"/mutation/save-command/input-dto/lonely","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/lonely","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/input-dto/lonely.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Lonely Form"},"sidebar":"tutorialSidebar","previous":{"title":"Problem","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/problem"},"next":{"title":"Using DTO Language","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/dto-lang"}}');var r=t(74848),a=t(28453),s=t(11470),i=t(19365);const l={sidebar_position:2,title:"Lonely Form"},u=void 0,c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"This is a very crude solution, only for learning or very simple projects."})}),"\n",(0,r.jsx)(n.p,{children:"Limitation: Can only save single table data, cannot persist complex data structures."}),"\n",(0,r.jsxs)(n.p,{children:["Functionality: Resolves security issue ",(0,r.jsxs)(n.em,{children:["(this issue is discussed in ",(0,r.jsx)(n.a,{href:"./problem",children:"previous doc"}),")"]}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Advantage: No need to define Input DTOs."}),"\n",(0,r.jsxs)(n.p,{children:["Disadvantage: Does not resolve API ambiguity issue ",(0,r.jsxs)(n.em,{children:["(this issue is discussed in ",(0,r.jsx)(n.a,{href:"./problem",children:"previous doc"}),")"]}),"."]}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@PutMapping("/book")\npublic void saveBook(\n    @RequestBody Book book  \n) {\n    // highlight-next-line\n    if (!ImmutableObjects.isLonely(book)) {\n        throw new IllegalArgumentException("The input object is too complex");\n    }\n    bookRepository.save(book);\n}\n'})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line \n    @RequestBody book: Book\n) {\n    // highlight-next-line\n    if (!isLonely(book)) {\n        throw IllegalArgumentException("The input object is too complex")\n    }\n    bookRepository.save(input)\n} \n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"This example directly uses the Jimmer dynamic object as the parameter, without restricting the complexity of the passed data structure. But we added a validation to throw an exception if the parameter is not a lonely object, to ensure security."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"isLonely"})," is used to determine if a dynamic object is just a lonely object. A lonely object can only have two kinds of properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Scalar properties"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Association properties based on foreign keys, but can only be assigned ",(0,r.jsx)(n.code,{children:"null"})," or associated objects with only ",(0,r.jsx)(n.code,{children:"id"})," property."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["It is easy to see that the validation in the above code ensures all ",(0,r.jsx)(n.code,{children:"insert"})," or ",(0,r.jsx)(n.code,{children:"update"})," operations can only apply to one table."]}),"\n",(0,r.jsx)(n.p,{children:"If the developer thinks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restricting functionality to only modifying one table achieves the security limit needed"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The other API ambiguity issue is acceptable"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Then this is indeed a very crude but usable solution."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var o=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var o=t(96540),r=t(18215),a=t(23104),s=t(56347),i=t(205),l=t(57485),u=t(31682),c=t(70679);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[u,d]=m({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),v=(()=>{const e=u??b;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function x(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==o&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=b(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(j,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,y.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);