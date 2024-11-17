"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3227],{56778:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var a=s(18215);const t={tabItem:"tabItem_Ymn6"};var i=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,r),hidden:s,children:n})}},37244:(e,n,s)=>{s.d(n,{A:()=>v});var a=s(96540),t=s(18215),i=s(44319),r=s(56347),l=s(94280),o=s(73024),c=s(58417),d=s(44031);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const t=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=h(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=b({queryString:s,groupId:t}),[j,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Dv)(s);return[t,(0,a.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),_=(()=>{const e=c??j;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{_&&o(_)}),[_]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=s(46916);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function m(e){let{className:n,block:s,selectedValue:a,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),t=l[s].value;t!==a&&(c(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.A)("tabs__item",_.tabItem,i?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function A(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function f(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",_.tabList),children:[(0,g.jsx)(m,{...n,...e}),(0,g.jsx)(A,{...n,...e})]})}function v(e){const n=(0,p.A)();return(0,g.jsx)(f,{...e,children:u(e.children)},String(n))}},73010:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"query/associations","title":"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868","description":"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/associations.mdx","sourceDirName":"query","slug":"/query/associations","permalink":"/jimmer-doc/zh/docs/query/associations","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/associations.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13,"title":"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868"},"sidebar":"tutorialSidebar","previous":{"title":"\u5b50\u67e5\u8be2","permalink":"/jimmer-doc/zh/docs/query/sub-query"},"next":{"title":"\u8d85\u7ea7QBE\u67e5\u8be2","permalink":"/jimmer-doc/zh/docs/query/super_qbe"}}');var t=s(74848),i=s(28453),r=s(37244),l=s(56778);const o={sidebar_position:13,title:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868"},c=void 0,d={},u=[{value:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868",id:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868",level:2},{value:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868",id:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868",level:2},{value:"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4",id:"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4",level:2},{value:"1. \u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd",id:"1-\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd",level:3},{value:"2. \u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd",id:"2-\u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868",children:"\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u7684\u4e2d\u95f4\u8868"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u8fd9\u6bb5\u5b9e\u4f53\u63a5\u53e3\u5b9a\u4e49\u4ee3\u7801"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    List<Author> authors();\n\n    ...omit other code...\n}\n'})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_ID"\n    )\n    val authors: List<Author>\n\n    ...omit other code...\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c",(0,t.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"}),"\u8868\u4f5c\u4e3a\u4e2d\u95f4\u8868\u88ab\u4f7f\u7528\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7684BOOK\u8868\uff0cJava\u4ee3\u7801\u6709\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5b9e\u4f53\u63a5\u53e3Book\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u5e93\u7684AUTHOR\u8868\uff0cJava\u4ee3\u7801\u6709\u4e0e\u4e4b\u5bf9\u5e94\u7684\u5b9e\u4f53\u63a5\u53e3Author\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u6570\u636e\u5e93\u4e2d\u7684BOOK_AUTHOR_MAPPING\u8868\uff0c\u5728Java\u4ee3\u7801\u4e2d\u6ca1\u6709\u5bf9\u5e94\u7684\u5b9e\u4f53\u63a5\u53e3\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5373\uff0c\u4e2d\u95f4\u8868\u88ab\u5bf9\u8c61\u6a21\u578b\u9690\u85cf\u4e86\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868",children:"\u76f4\u63a5\u67e5\u8be2\u4e2d\u95f4\u8868"}),"\n",(0,t.jsx)(n.p,{children:"Jimmer\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6709\u8da3\u7684\u529f\u80fd\uff0c\u5373\u4fbf\u4e2d\u95f4\u8868\u88ab\u9690\u85cf\u6ca1\u6709\u5bf9\u5e94\u5b9e\u4f53\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u5176\u76f4\u63a5\u67e5\u8be2\u3002"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"AssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n    \nList<Association<Book, Author>> associations =\n    sqlClient\n        // highlight-next-line\n        .createAssociationQuery(association)\n        .where(association.source().id().eq(3L))\n        .select(association)\n        .execute();\nassociations.forEach(System.out::println);\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        select(table)\n    }\n    .execute()\nassociations.forEach(::println)\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0cJava\u7684",(0,t.jsx)(n.code,{children:"createAssociationQuery"}),"\u6216Kotlin\u7684",(0,t.jsx)(n.code,{children:"queries.forList"}),"\u8868\u793a\u57fa\u4e8e\u4e2d\u95f4\u8868\u521b\u5efa\u67e5\u8be2\uff0c\u800c\u975e\u57fa\u4e8e\u5b9e\u4f53\u8868\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684Java\u4ee3\u7801\u793a\u8303\u4e3a\u4e86\u517c\u5bb9Java8\uff0c\u7b2c\u4e00\u884c\u7684\u53d8\u91cf",(0,t.jsx)(n.code,{children:"association"}),"\u7684\u7c7b\u578b\u6bd4\u8f83\u590d\u6742\u3002\u5efa\u8bae\u63d0\u9ad8Java\u7684\u7248\u672c\uff0c\u91c7\u7528",(0,t.jsx)(n.code,{children:"var"}),"\u5173\u952e\u5b57\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.BOOK_ID, \n    tb_1_.AUTHOR_ID \n/* highlight-next-line */\nfrom BOOK_AUTHOR_MAPPING as tb_1_\nwhere tb_1_.BOOK_ID = ? /* 3 */\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u679c\u7136\uff0c\u8fd9\u662f\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Association{\n    source={\n        "id":3\n    }, target={\n        "id":1\n    }\n}\nAssociation{\n    source={\n        "id":3\n    }, \n    target={\n        "id":2\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u6570\u636e\u662f\u4e00\u7cfb\u5217Association\u5bf9\u8c61"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"package org.babyfish.jimmer.sql.association;\n\npublic class Association<S, T> {\n\n    public Association(S source, T target) {\n        this.source = source;\n        this.target = target;\n    }\n\n    public S source() {\n        return source;\n    }\n\n    public T target() {\n        return target;\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Association<S, T>"}),"\u8868\u793a\u4ece",(0,t.jsx)(n.code,{children:"S"}),"\u7c7b\u578b\u6307\u5411",(0,t.jsx)(n.code,{children:"T"}),"\u7c7b\u578b\u5173\u8054\u7684\u4e2d\u95f4\u8868\u5b9e\u4f53\u3002\u4e2d\u95f4\u8868\u5b9e\u4f53\u662f\u4f2a\u5b9e\u4f53\uff0c\u6ca1\u6709id\u3002\u5b83\u53ea\u6709\u4e24\u4e2a\u5c5e\u6027:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"source"}),": \u4e2d\u95f4\u8868\u6307\u5411\u5df1\u65b9\u7684\u5916\u952e\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61(\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5c31\u662f",(0,t.jsx)(n.code,{children:"Book"}),"\u5bf9\u8c61)\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"target"}),": \u4e2d\u95f4\u8868\u6307\u5411\u5bf9\u65b9\u7684\u5916\u952e\u6240\u5bf9\u5e94\u7684\u5bf9\u8c61(\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5c31\u662f",(0,t.jsx)(n.code,{children:"Author"}),"\u5bf9\u8c61)\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5e76\u672a\u4f7f\u7528\u5bf9\u8c61\u6293\u53d6\u5668\u5b9a\u4e49Association\u7684\u5bf9\u8c61\u683c\u5f0f\uff08\u4e8b\u5b9e\u4e0aAssociation\u4e5f\u4e0d\u652f\u6301\u5bf9\u8c61\u6293\u53d6\u5668\uff09\uff0c\u56e0\u6b64\u5bf9\u8c61\u7684",(0,t.jsx)(n.code,{children:"source"}),"\u548c",(0,t.jsx)(n.code,{children:"target"}),"\u5173\u8054\u5c5e\u6027\u4ec5\u5305\u542b\u5bf9\u8c61id\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Author"}),"\u4e5f\u6709\u4e00\u4e2a\u4ece\u52a8\u7684\u591a\u5bf9\u591a\u5173\u8054",(0,t.jsx)(n.code,{children:"Author.books"}),", \u5b83\u662f",(0,t.jsx)(n.code,{children:"Book.authors"}),"\u7684\u955c\u50cf\u3002"]}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\n}\n'})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u57fa\u4e8e",(0,t.jsx)(n.code,{children:"Author.books"}),"\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e2d\u95f4\u8868\u67e5\u8be2\uff0c\u4f46\u662f",(0,t.jsx)(n.code,{children:"source"}),"\u4ee3\u8868Author\uff0c\u800c",(0,t.jsx)(n.code,{children:"target"}),"\u4ee3\u8868Book\u3002\u548c\u5f53\u524d\u4f8b\u5b50\u76f8\u53cd\u3002"]}),"\n"]}),"\n"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u53ea\u67e5\u8be2\u4e86\u4e2d\u95f4\u8868\u672c\u8eab\u3002\u6240\u4ee5\uff0c",(0,t.jsx)(n.code,{children:"source"}),"\u548c",(0,t.jsx)(n.code,{children:"target"}),"\u5bf9\u8c61\u4e2d\u53ea\u6709id\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u83b7\u53d6\u5b8c\u6574\u7684",(0,t.jsx)(n.code,{children:"source"}),"\u548c",(0,t.jsx)(n.code,{children:"target"}),"\u5bf9\u8c61\uff0c\u53ef\u4ee5\u8868\u8fde\u63a5\uff0c\u7136\u540e\u5229\u7528\u5143\u7ec4\u8fdb\u884c\u8fd4\u56de\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"AssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n\nList<Tuple2<Book, Author>> tuples =\n    sqlClient\n        .createAssociationQuery(association)\n        .where(association.source().id().eq(3L))\n        // highlight-next-line\n        .select(\n            association.source(),\n            association.target()\n        )\n        .execute();\ntuples.forEach(System.out::println);\n"})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val associations = sqlClient\n    .queries\n    .forList(Book::authors) {\n        where(table.source.id eq 3L)\n        // highlight-next-line\n        select(\n            table.source,\n            table.target\n        )\n    }\n    .execute()\nassociations.forEach(::println)\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u751f\u6210\u7684SQL\u5982\u4e0b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n\n    /* source() */\n    tb_1_.BOOK_ID, \n    tb_2_.NAME, \n    tb_2_.EDITION, \n    tb_2_.PRICE, \n    tb_2_.STORE_ID, \n\n    /* target() */\n    tb_1_.AUTHOR_ID, \n    tb_3_.FIRST_NAME, \n    tb_3_.LAST_NAME, \n    tb_3_.GENDER\n\nfrom BOOK_AUTHOR_MAPPING as tb_1_ \ninner join BOOK as tb_2_ \n    on tb_1_.BOOK_ID = tb_2_.ID \ninner join AUTHOR as tb_3_ \n    on tb_1_.AUTHOR_ID = tb_3_.ID \nwhere tb_1_.BOOK_ID = ? /* 3 */\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u6253\u5370\u7ed3\u679c\u5982\u4e0b\uff08\u539f\u8f93\u51fa\u662f\u7d27\u51d1\u7684\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Tuple2{\n    _1={\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51.00,\n        "store":{\n            "id":1\n        }\n    }, \n    _2={\n        "id":1,\n        "firstName":"Alex",\n        "lastName":"Banks",\n        "gender":"MALE"\n    }\n}\nTuple2{\n    _1={\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51.00,\n        "store":{\n            "id":1\n        }\n    }, \n    _2={\n        "id":2,\n        "firstName":"Eve",\n        "lastName":"Procello",\n        "gender":"MALE"\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["\u5173\u8054\u5bf9\u8c61",(0,t.jsx)(n.code,{children:"Association<S, T>"}),"\u5f88\u7b80\u5355\u4e5f\u5f88\u7279\u6b8a\uff0c\u4e0d\u652f\u6301\u4e5f\u4e0d\u9700\u8981",(0,t.jsx)(n.a,{href:"./object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u3002"]}),(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c\u8fd9\u91cc\u4ec5\u6307",(0,t.jsx)(n.code,{children:"Association<S, T>"}),"\u5bf9\u8c61",(0,t.jsx)("b",{children:"\u672c\u8eab"}),"\u4e0d\u652f\u6301\uff0c\u5176\u5173\u8054\u5c5e\u6027",(0,t.jsx)(n.code,{children:"source"}),"\u548c",(0,t.jsx)(n.code,{children:"target"}),"\u4ecd\u7136\u652f\u6301",(0,t.jsx)(n.a,{href:"./object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\uff0c\u5982\uff1a"]}),(0,t.jsx)(r.A,{groupId:"language",children:(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"select(\n    table\n        .source\n        // highlight-next-line\n        .fetchBy {\n            allScalarFields()\n            store { \n                allScalarFields()\n            }\n        },\n    table.target\n)\n"})})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4",children:"\u548c\u975e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u5bf9\u6bd4"}),"\n",(0,t.jsx)(n.p,{children:"\u8bfb\u8005\u53ef\u80fd\u4f1a\u8ba4\u4e3a\uff0c\u57fa\u4e8e\u4e2d\u95f4\u8868\u67e5\u8be2\u7684\u67e5\u8be2\u5b58\u5728\u7684\u4ef7\u503c\uff0c\u662f\u4e3a\u4e86\u8ba9\u5f00\u53d1\u4eba\u5458\u5199\u51fa\u6027\u80fd\u66f4\u9ad8\u7684\u67e5\u8be2\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f46\u5176\u5b9e\u4e0d\u662f\u8fd9\u6837\u7684\u3002\u7531\u4e8e",(0,t.jsx)(n.a,{href:"./dynamic-join/optimization#%E5%B9%BB%E8%BF%9E%E6%8E%A5",children:"\u5e7b\u8fde\u63a5"}),"\u548c",(0,t.jsx)(n.a,{href:"./dynamic-join/optimization#%E5%8D%8A%E8%BF%9E%E6%8E%A5",children:"\u534a\u8fde\u63a5"}),"\u8fd9\u4e24\u4e2a\u4f18\u5316\u624b\u6bb5\u7684\u5b58\u5728\uff0c\u65e0\u8bba\u662f\u5426\u4f7f\u7528\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\uff0c\u90fd\u80fd\u8fbe\u5230\u5f88\u597d\u7684\u6027\u80fd\u3002\u662f\u5426\u9009\u62e9\u4f7f\u7528\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\uff0c\u5b8c\u5168\u770b\u7528\u6237\u81ea\u5df1\u559c\u597d\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"1-\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd",children:"1. \u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u4e00\u4e2a\u529f\u80fd"}),"\n",(0,t.jsx)(n.p,{children:"\u4e4b\u524d\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u6f14\u793a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u9876\u7ea7\u67e5\u8be2\uff1b\u800c\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5b50\u67e5\u8be2\u3002"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\nAssociationTable<Book, BookTableEx, Author, AuthorTableEx> association =\n    AssociationTable.of(BookTableEx.class, BookTableEx::authors);\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        table.id().in(\n            // highlight-next-line\n            sqlClient\n                .createAssociationSubQuery(association)\n                .where(\n                    association\n                        .target() \u2776\n                        .firstName().eq("Alex")\n                )\n                .select(\n                    association\n                        .source() \u2777\n                        .id()\n                )\n        )\n    )\n    .select(table)\n    .execute();\n'})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQueries.forList(Book::authors) {\n                    where(\n                        table\n                        .target \u2776\n                        .firstName eq "Alex"\n                    )\n                    select(\n                        table\n                        .source \u2777\n                        .id\n                    )\n                }\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Java\u7684",(0,t.jsx)(n.code,{children:"createAssociationSubQuery"}),"\u548cKotlin\u7684",(0,t.jsx)(n.code,{children:"subQueries.forList"}),"\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5b50\u67e5\u8be2\u3002\u8be5\u67e5\u8be2\u7528\u6237\u5bfb\u627e\u6240\u6709\u5305\u542b",(0,t.jsx)(n.code,{children:"firstName"}),'\u4e3a"Alex"\u7684\u4f5c\u8005\u7684\u4e66\u7c4d\u3002']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2776\u5904",(0,t.jsx)(n.code,{children:"association.target"}),"\u662f\u771f\u6b63\u7684\u8868\u8fde\u63a5\uff0c\u4f1a\u751f\u6210SQL JOIN\u8fde\u63a5",(0,t.jsx)(n.code,{children:"AUTHOR"}),"\u8868\u8fdb\u884c\u6761\u4ef6\u5224\u65ad\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2777\u5904",(0,t.jsx)(n.code,{children:"association.source"}),"\u662f\u7531\u4e8e",(0,t.jsx)(n.a,{href:"./dynamic-join/optimization#%E5%B9%BB%E8%BF%9E%E6%8E%A5",children:"\u5e7b\u8fde\u63a5"}),"\uff0c\u5e76\u4e0d\u4f1a\u751f\u6210SQL join\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \nfrom BOOK as tb_1_ \nwhere \n    tb_1_.ID in (\n        /* highlight-next-line */\n        select \n            tb_2_.BOOK_ID \n        from BOOK_AUTHOR_MAPPING as tb_2_ \n        inner join AUTHOR as tb_3_ \n            on tb_2_.AUTHOR_ID = tb_3_.ID \n        where tb_3_.FIRST_NAME = ?\n    )\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-\u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd",children:"2. \u4e0d\u57fa\u4e8e\u4e2d\u95f4\u8868\u5b50\u67e5\u8be2\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd"}),"\n",(0,t.jsxs)(r.A,{groupId:"language",children:[(0,t.jsx)(l.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable book = Tables.BOOK_TABLE;\nAuthorTableEx author = TableExes.AUTHOR_TABLE_EX;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .where(\n        book.id().in(sqlClient\n            // highlight-next-line\n            .createSubQuery(author)\n            .where(author.firstName().eq("Alex"))\n            .select(\n                author.books().id() \u2776\n            )\n        )\n    )\n    .select(book)\n    .execute();\n'})})}),(0,t.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table.id valueIn\n                // highlight-next-line\n                subQuery(Author::class) {\n                    where(table.firstName eq "Alex")\n                    select(\n                        table.books.id \u2776\n                    )\n                }\n        )\n        select(table)\n    }\n    .execute()\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u2776\u5904",(0,t.jsx)(n.code,{children:"author.books"}),"\u662f",(0,t.jsx)(n.a,{href:"./dynamic-join/optimization#%E5%8D%8A%E8%BF%9E%E6%8E%A5",children:"\u534a\u8fde\u63a5"}),"\uff0c\u6240\u4ee5\u4ec5\u4ec5\u751f\u6210\u4ece\u8868",(0,t.jsx)(n.code,{children:"AUTHOR"}),"\u5230\u4e2d\u95f4\u8868",(0,t.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"}),"\u7684SQL JOIN\uff0c\u800c\u4e0d\u4f1a\u8fdb\u4e00\u6b65SQL JOIN\u5230",(0,t.jsx)(n.code,{children:"BOOK\u8868"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select \n\n    tb_1_.ID, \n    tb_1_.NAME, \n    tb_1_.EDITION, \n    tb_1_.PRICE, \n    tb_1_.STORE_ID \n\nfrom BOOK as tb_1_ \nwhere \n    tb_1_.ID in (\n        /* highlight-next-line */\n        select \n            tb_3_.BOOK_ID \n        from AUTHOR as tb_2_ \n        inner join BOOK_AUTHOR_MAPPING as tb_3_ \n            on tb_2_.ID = tb_3_.AUTHOR_ID \n        where tb_2_.FIRST_NAME = ?\n    )\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u6bd4\u8fd9\u4e24\u4e2aSQL\uff0c\u4e0d\u96be\u53d1\u73b0\uff0c\u5b83\u4eec\u529f\u80fd\u4e00\u6837\uff0c\u6027\u80fd\u4e00\u6837\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u67e5\u8be2\uff0c\u53ea\u662f\u4e3a\u5f00\u53d1\u4eba\u5458\u591a\u63d0\u4f9b\u4e00\u79cd\u4ee3\u7801\u4e66\u5199\u98ce\u683c\uff0c\u5e76\u4e0d\u5177\u5907\u4e0d\u53ef\u53d6\u4ee3\u6027\uff0c\u7528\u5176\u4ed6\u624b\u6bb5\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u529f\u80fd\u548c\u6027\u80fd\u5f62\u540c\u7684\u67e5\u8be2\u3002"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var a=s(96540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);