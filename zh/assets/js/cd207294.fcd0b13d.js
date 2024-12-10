"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2416],{50480:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"quick-view/precondition","title":"\u524d\u63d0","description":"\u4e3a\u4e86\u5feb\u901f\u9884\u89c8Jimmer\u6700\u4e3b\u8981\u7684\u7279\u6027\uff0c\u8fd9\u91cc\u9700\u8981\u7ed9\u51fa\u51e0\u4e2a\u5b9e\u4f53\uff0c\u4f5c\u4e3a\u672c\u7ae0\u8282\u6240\u6709\u8ba8\u8bba\u7684\u57fa\u672c\u524d\u63d0\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/precondition.mdx","sourceDirName":"quick-view","slug":"/quick-view/precondition","permalink":"/jimmer-doc/zh/docs/quick-view/precondition","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/precondition.mdx","tags":[],"version":"current","lastUpdatedAt":1704307186000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"\u524d\u63d0"},"sidebar":"tutorialSidebar","previous":{"title":"\u5feb\u901f\u9884\u89c8 \u2605","permalink":"/jimmer-doc/zh/docs/quick-view/"},"next":{"title":"1. \u67e5\u8be2\u4efb\u610f\u5f62\u72b6","permalink":"/jimmer-doc/zh/docs/quick-view/fetch/"}}');var l=i(74848),I=i(28453),t=i(11470),r=i(19365);const d={sidebar_position:1,title:"\u524d\u63d0"},c=void 0,o={},s=[{value:"\u5b9e\u4f53\u7684\u5730\u4f4d",id:"\u5b9e\u4f53\u7684\u5730\u4f4d",level:2},{value:"\u5b9e\u4f53\u4e4b\u95f4\u7684UML\u5173\u7cfb",id:"\u5b9e\u4f53\u4e4b\u95f4\u7684uml\u5173\u7cfb",level:2},{value:"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49",id:"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"BookStore",id:"bookstore",level:3},{value:"Book",id:"book",level:3},{value:"Author",id:"author",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,I.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u4e3a\u4e86\u5feb\u901f\u9884\u89c8Jimmer\u6700\u4e3b\u8981\u7684\u7279\u6027\uff0c\u8fd9\u91cc\u9700\u8981\u7ed9\u51fa\u51e0\u4e2a\u5b9e\u4f53\uff0c\u4f5c\u4e3a\u672c\u7ae0\u8282\u6240\u6709\u8ba8\u8bba\u7684\u57fa\u672c\u524d\u63d0\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u4f53\u7684\u5730\u4f4d",children:"\u5b9e\u4f53\u7684\u5730\u4f4d"}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5728Jimmer\u5e94\u7528\u4e2d\uff0c\u552f\u4e00\u91cd\u8981\u7684\u5c31\u662f\u5168\u5c40\u7edf\u4e00\u7684ORM\u5b9e\u4f53\u6a21\u578b\u3002"})}),(0,l.jsx)(n.p,{children:"\u5168\u5c40\u5b9e\u4f53\u6a21\u578b\u968f\u7740\u6570\u636e\u5e93\u7684\u8bbe\u8ba1\u7684\u5b9a\u578b\u800c\u5b9a\u578b\uff0c\u548c\u5177\u4f53\u67e5\u8be2/\u4fee\u6539\u4e1a\u52a1\u5bf9\u4ea4\u4e92\u683c\u5f0f\u7684\u8bc9\u6c42\u65e0\u5173\uff0c\u76f8\u5bf9\u7a33\u5b9a\u3002"}),(0,l.jsx)(n.p,{children:"\u81f3\u4e8e\u6bcf\u4e2a\u67e5\u8be2/\u4fee\u6539\u4e1a\u52a1\u9700\u8981\u4ea4\u4e92\u4ec0\u4e48\u6837\u7684DTO\u7c7b\u578b\uff0c\u5b8c\u5168\u4e0d\u91cd\u8981\u3002"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8981\u4e48\u6839\u672c\u4e0d\u9700\u8981DTO, \u6bd4\u5982",(0,l.jsx)(n.a,{href:"./fetch/export/entity",children:"\u5feb\u901f\u9884\u89c8/\u67e5\u8be2\u4efb\u610f\u5f62\u72b6/\u66b4\u9732\u529f\u80fd/\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f53"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8981\u4e48\u901a\u8fc7",(0,l.jsx)(n.a,{href:"../object/view/dto-language",children:"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/DTO\u8bed\u8a00"}),"\u5feb\u901f\u751f\u6210DTO\u7c7b\u578b\uff0c\u8ba9DTO\u53d8\u5f97\u6781\u5176\u5ec9\u4ef7\u3002"]}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"\u53ea\u6709\u76f8\u5bf9\u7a33\u5b9a\u7684\u5b9e\u4f53\u6a21\u578b\u624d\u662f\u91cd\u8981\u7684\u3002\u6240\u4ee5\uff0cJimmer\u975e\u5e38\u5584\u4e8e\u5904\u7406\u9700\u6c42\u7684\u53d8\u52a8\u3002"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u4f53\u4e4b\u95f4\u7684uml\u5173\u7cfb",children:"\u5b9e\u4f53\u4e4b\u95f4\u7684UML\u5173\u7cfb"}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u5217\u4e3e\u4e09\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff0c",(0,l.jsx)(n.code,{children:"BookStore"}),"\u3001",(0,l.jsx)(n.code,{children:"Book"}),"\u3001",(0,l.jsx)(n.code,{children:"Author"}),"\u548c",(0,l.jsx)(n.code,{children:"TreeNode"}),"\uff0c\u4f5c\u4e3a\u5f53\u524d\u7ae0\u8282\u6240\u6709\u8ba8\u8bba\u7684\u524d\u63d0\u5047\u8bbe\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"uml",src:i(78276).A+"",width:"431",height:"202"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49",children:"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49"}),"\n",(0,l.jsx)(n.h3,{id:"bookstore",children:"BookStore"}),"\n",(0,l.jsxs)(t.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface BookStore {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    Long id();\n\n    String name();\n\n    @Nullable\n    String website();\n\n    @OneToMany(mappedBy = "store")\n    List<Book> books();\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface BookStore {\n\n    @Id\n    @@GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    val name: String\n\n    val website: String?\n\n    @OneToMany(mappedBy = "store")\n    val books: List<Book>\n}\n'})})})]}),"\n",(0,l.jsx)(n.h3,{id:"book",children:"Book"}),"\n",(0,l.jsxs)(t.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    Long id();\n\n    @Key\n    String name();\n\n    @Key\n    int edition();\n\n    BigDecimal price();\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();\n}\n"})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    @Key\n    val name: String\n\n    @Key\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n}\n"})})})]}),"\n",(0,l.jsx)(n.h3,{id:"author",children:"Author"}),"\n",(0,l.jsxs)(t.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    UUID id();\n\n    @Key\n    String firstName();\n\n    @Key\n    String lastName();\n\n    Gender gender();\n\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    @Key\n    val firstName String\n\n    @Key\n    val lastName: String\n\n    val gender: Gender\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n}\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u5176\u4e2d\uff0cGender\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u679a\u4e3e\u7c7b\u578b"}),"\n",(0,l.jsxs)(t.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"public enum Gender { MALE, FEMALE }\n"})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"enum class Gender { MALE, FEMALE }\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,I.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>t});i(96540);var a=i(34164);const l={tabItem:"tabItem_Ymn6"};var I=i(74848);function t(e){let{children:n,hidden:i,className:t}=e;return(0,I.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,t),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>N});var a=i(96540),l=i(34164),I=i(23104),t=i(56347),r=i(205),d=i(57485),c=i(31682),o=i(70679);function s(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return s(e).map((e=>{let{props:{value:n,label:i,attributes:a,default:l}}=e;return{value:n,label:i,attributes:a,default:l}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:i}=e;const l=(0,t.W6)(),I=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,d.aZ)(I),(0,a.useCallback)((e=>{if(!I)return;const n=new URLSearchParams(l.location.search);n.set(I,e),l.replace({...l.location,search:n.toString()})}),[I,l])]}function Z(e){const{defaultValue:n,queryString:i=!1,groupId:l}=e,I=u(e),[t,d]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=i.find((e=>e.default))??i[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:I}))),[c,s]=g({queryString:i,groupId:l}),[Z,j]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,I]=(0,o.Dv)(i);return[l,(0,a.useCallback)((e=>{i&&I.set(e)}),[i,I])]}({groupId:l}),b=(()=>{const e=c??Z;return m({value:e,tabValues:I})?e:null})();(0,r.A)((()=>{b&&d(b)}),[b]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:I}))throw new Error(`Can't select invalid tab value=${e}`);d(e),s(e),j(e)}),[s,j,I]),tabValues:I}}var j=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var h=i(74848);function M(e){let{className:n,block:i,selectedValue:a,selectValue:t,tabValues:r}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,I.a_)(),o=e=>{const n=e.currentTarget,i=d.indexOf(n),l=r[i].value;l!==a&&(c(n),t(l))},s=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const i=d.indexOf(e.currentTarget)+1;n=d[i]??d[0];break}case"ArrowLeft":{const i=d.indexOf(e.currentTarget)-1;n=d[i]??d[d.length-1];break}}n?.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":i},n),children:r.map((e=>{let{value:n,label:i,attributes:I}=e;return(0,h.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:s,onClick:o,...I,className:(0,l.A)("tabs__item",b.tabItem,I?.className,{"tabs__item--active":a===n}),children:i??n},n)}))})}function p(e){let{lazy:n,children:i,selectedValue:I}=e;const t=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===I));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})))})}function D(e){const n=Z(e);return(0,h.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,h.jsx)(M,{...n,...e}),(0,h.jsx)(p,{...n,...e})]})}function N(e){const n=(0,j.A)();return(0,h.jsx)(D,{...e,children:s(e.children)},String(n))}},78276:(e,n,i)=>{i.d(n,{A:()=>a});const a="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iNDMxIiBoZWlnaHQ9IjIwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMDIiPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTAiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDExIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxMiIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDEzIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkJvb2tTdG9yZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLDI1KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMTUiIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MSAwUSA4NSAwIDg1IDRMIDg1IDI5USA4NSAzMyA4MSAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDE2Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAxNyIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjVweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMTgiIGR5PSIxNiIgeD0iNDIuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxOSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5Cb29rPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48L2c+PC9nPjxnIGlkPSJTdmdqc0cxMDIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjEsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAyMSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMjIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDIzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAyNCIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDI1IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkF1dGhvcjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMTQ0KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMjciIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MyAwUSA4NyAwIDg3IDRMIDg3IDI5USA4NyAzMyA4MyAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDI4Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAyOSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjdweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMzAiIGR5PSIxNiIgeD0iNDMuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAzMSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5UcmVlTm9kZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAzMiI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMzMiIGQ9Ik0xMTEgNDJMMTQxLjUgNDJMMTQxLjUgNDJMMTcyIDQyIiBzdHJva2U9IiM3ZjdmN2YiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxyZWN0IGlkPSJTdmdqc1JlY3QxMDM0IiB3aWR0aD0iMjEiIGhlaWdodD0iMTYiIHg9IjEzMSIgeT0iMzQiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48dGV4dCBpZD0iU3ZnanNUZXh0MTAzNSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iMjFweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249InRvcCIgbGluZUhlaWdodD0iMTZweCIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSIzMS4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM2IiBkeT0iMTYiIHg9IjE0MS41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM3IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjxnIGlkPSJTdmdqc0cxMDM4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAzOSIgZD0iTTI1OSA0MkwyODkuNSA0MkwyODkuNSA0MkwzMjAgNDIiIHN0cm9rZT0iIzdmOGI5OCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+PHJlY3QgaWQ9IlN2Z2pzUmVjdDEwNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNiIgeD0iMjc3LjUiIHk9IjM0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PHRleHQgaWQ9IlN2Z2pzVGV4dDEwNDEiIGZvbnQtZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTNweCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMzMjMyMzIiIGZvbnQtd2VpZ2h0PSI0MDAiIGFsaWduPSJ0b3AiIGxpbmVIZWlnaHQ9IjE2cHgiIGFuY2hvcj0ibWlkZGxlIiBmYW1pbHk9IuW+rui9r+mbhem7kSIgc2l6ZT0iMTNweCIgd2VpZ2h0PSI0MDAiIGZvbnQtc3R5bGU9IiIgb3BhY2l0eT0iMSIgeT0iMzEuMzc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MiIgZHk9IjE2IiB4PSIyODkuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MyIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5NOk48L3RzcGFuPjwvdHNwYW4+PC90ZXh0PjwvZz48ZyBpZD0iU3ZnanNHMTA0NCI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwNDUiIGQ9Ik02OC45ODMzMzU2NDc2NjYwMSAxNDMuMDAwMTM4ODU5OTYwNEw2OC41IDExNEwxNDIgMTE0TDE0MiAxNjFMMTEzIDE2MSIgc3Ryb2tlPSIjN2Y4Yjk4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjwvcGF0aD48cmVjdCBpZD0iU3ZnanNSZWN0MTA0NiIgd2lkdGg9IjIxIiBoZWlnaHQ9IjE2IiB4PSIxMTguMjQ3OTE2ODExMzIyNTEiIHk9IjEwNiIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pjx0ZXh0IGlkPSJTdmdqc1RleHQxMDQ3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIyMXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0idG9wIiBsaW5lSGVpZ2h0PSIxNnB4IiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjEwMy4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ4IiBkeT0iMTYiIHg9IjEyOC43NDc5MTY4MTEzMjI1Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ5IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var a=i(96540);const l={},I=a.createContext(l);function t(e){const n=a.useContext(I);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(I.Provider,{value:n},e.children)}}}]);