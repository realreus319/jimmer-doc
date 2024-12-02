"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[101],{70210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"configuration/database-validation","title":"Database Validation","description":"Function Introduction","source":"@site/docs/configuration/database-validation.mdx","sourceDirName":"configuration","slug":"/configuration/database-validation","permalink":"/jimmer-doc/docs/configuration/database-validation","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/configuration/database-validation.mdx","tags":[],"version":"current","lastUpdatedAt":1711320943000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"Database Validation"},"sidebar":"tutorialSidebar","previous":{"title":"Trigger Type","permalink":"/jimmer-doc/docs/configuration/trigger-type"},"next":{"title":"Microservice","permalink":"/jimmer-doc/docs/configuration/micro-service"}}');var i=t(74848),s=t(28453),r=t(11470),l=t(19365);const o={sidebar_position:9,title:"Database Validation"},d=void 0,c={},h=[{value:"Function Introduction",id:"function-introduction",level:2},{value:"Enable Validation",id:"enable-validation",level:2},{value:"Resolve Table Conflicts",id:"resolve-table-conflicts",level:2},{value:"Temporarily ignore partial validation",id:"temporarily-ignore-partial-validation",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"function-introduction",children:"Function Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Admittedly, Jimmer's strongly typed SQL DSL can expose problems as much as possible at compile time, and most errors can be prevented before testing. But this is not enough."}),"\n",(0,i.jsxs)(n.p,{children:["The strongly typed SQL DSL can only improve the reliability of the ",(0,i.jsx)(n.code,{children:"entity model -> business code"})," link, but cannot guarantee the reliability of the ",(0,i.jsx)(n.code,{children:"database structure -> entity model"})," link."]}),"\n",(0,i.jsx)(n.p,{children:"There is also a derived problem. If developers get reliable applications in the test environment, how to ensure that the application remains reliable after being transplanted to the production environment?"}),"\n",(0,i.jsx)(n.p,{children:"Database validation is a very important feature that is used to verify the consistency between the database structure and the entity model definition."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Validation Rules"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify that table names, column names, sequence names are consistent with definitions in the entity model."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify that the nullity of columns is consistent with the definitions of properties in the entity model."}),"\n",(0,i.jsxs)(n.p,{children:["If a property is decorated with ",(0,i.jsx)(n.code,{children:"@OneToOne(inputNotNull = true)"})," or ",(0,i.jsx)(n.code,{children:"@ManyToOne(inputNotNull = true)"}),",\nthe nullity of the property itself is ignored. it is considered that the corresponding foreign key in the data cannot be null."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For the id property of each entity in the entity model, verify that the database has a primary key constraint that exactly matches."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For true foreign keys defined in the entity model (see ",(0,i.jsx)(n.a,{href:"../mapping/base/foreignkey",children:"True and False Foreign Keys"}),"), verify that the database has exactly matching foreign key constraints."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"enable-validation",children:"Enable Validation"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to start validation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use Spring Boot Starter"}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"application.yml"})," ",(0,i.jsx)(n.em,{children:"(or application.properties)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"jimmer:\n    database-validation-mode: ERROR \n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use underlying API"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    ...Omit other configurations...\n    .build();\n"})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    ...Omit other configurations...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DatabaseValidationMode"})," is an enum type with three values:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NONE"}),": Don't validate database structure, this is the default behavior."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"WARNING"}),": Validate database structure, if the database structure is inconsistent with the entity model definition, it does not prevent the program from running, just prints warning information in the log."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ERROR"}),": Validate database structure, if the database structure is inconsistent with the entity model definition, an exception will be thrown to prevent the program from running."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"resolve-table-conflicts",children:"Resolve Table Conflicts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Entity types must correspond to a table in the database, whether the table name is explicitly configured by the developer via ",(0,i.jsx)(n.code,{children:"@Table"})," or automatically determined by the ",(0,i.jsx)(n.a,{href:"../mapping/base/naming-strategy",children:"naming strategy"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Association properties based on join tables must correspond to a real join table in the database, whether the table name is explicitly configured by the developer via ",(0,i.jsx)(n.code,{children:"@JoinTable"})," or automatically determined by the ",(0,i.jsx)(n.a,{href:"../mapping/base/naming-strategy",children:"naming strategy"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ID whose auto growth strategy is ",(0,i.jsx)(n.code,{children:"SEQUENCE"})," must correspond to a sequence in the database, whether the sequence name is explicitly configured by the developer via ",(0,i.jsx)(n.code,{children:"@GeneratedValue"})," or automatically determined by the ",(0,i.jsx)(n.a,{href:"../mapping/base/naming-strategy",children:"naming strategy"})," ."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the program starts, Jimmer needs to query the database metadata to verify whether these tables or sequences exist. And if they exist, whether their internal structures are correct ",(0,i.jsx)(n.em,{children:"(for tables)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["However, since database often support multiple sub-databases, and sub-databases can authorize each other, the JDBC connection may see tables with the same name in different database users, such as ",(0,i.jsx)(n.code,{children:"db1.BOOK"}),", ",(0,i.jsx)(n.code,{children:"db2.BOOK"}),", and ",(0,i.jsx)(n.code,{children:"db3.BOOK"}),". This is called table conflict."]}),"\n",(0,i.jsxs)(n.p,{children:['Of course, Jimmer can extract the database name from the JDBC connection metadata, for example, extract "db1" from ',(0,i.jsx)(n.code,{children:"jdbc:mysql://localhost:3306/db1"}),", and first look for table information in the automatically extracted sub-database for verification.\nHowever, this method is not always valid. As long as the specified table cannot be found in the current sub-database, it will look for it in other sub-databases, which may lead to table conflict issues."]}),"\n",(0,i.jsx)(n.p,{children:"To solve this problem, the following two methods are available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Specify strict table names or sequence names, for example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Change ",(0,i.jsx)(n.code,{children:'@Table(name = "BOOK")'})," to ",(0,i.jsx)(n.code,{children:'@Table(name = "db1.BOOK")'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Change ",(0,i.jsx)(n.code,{children:'@JoinTable(name = "BOOK_AUTHOR_MAPPING")'})," to ",(0,i.jsx)(n.code,{children:'@JoinTable(name = "db1.BOOK_AUTHOR_MAPPING")'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Change ",(0,i.jsx)(n.code,{children:'@GeneratedValue(sequenceName = "BOOK_ID_SEQ")'})," to ",(0,i.jsx)(n.code,{children:'@GeneratedValue(sequenceName = "db1.BOOK_ID_SEQ")'}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Explicitly specify the sub-database name used for validation, which can be divided into two methods:"}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to start validation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use Spring Boot Starter"}),"\n",(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"application.yml"})," ",(0,i.jsx)(n.em,{children:"(or application.properties)"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"jimmer:\ndatabase-validation:\n    mode: ERROR\n    # highlight-next-line  \n    catalog: db1\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jimmer.database-validation-mode"})," and ",(0,i.jsx)(n.code,{children:"jimmer.database-validation.mode"})," are equivalent"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use underlying API"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    // highlight-next-line\n    .setDatabaseValidationCatalog("db1")\n    ...Omit other configurations...\n    .build();\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val sqlClient = newKSqlClient {\n    setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    // highlight-next-line\n    setDatabaseValidationCatalog("db1")\n    ...Omit other configurations...\n}\n'})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Similarly, schema can also be specified, for example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Direct configuration: ",(0,i.jsx)(n.code,{children:'@Table(name = "mydatabase.myschema.BOOK")'})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure in SpringBoot's ",(0,i.jsx)(n.code,{children:"application.yml"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"jimmer:\n  database-validation:\n    mode: ERROR\n    catalog: mydatabase\n    # highlight-next-line\n    schema: myschema\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Underlying API configuration"}),"\n",(0,i.jsxs)(r.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    .setDatabaseValidationCatalog("mydatabase")\n    // highlight-next-line\n    setDatabaseValidationSchema("myschema")\n    ...Omit other configurations...\n    .build();\n'})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val sqlClient = newKSqlClient {\n    setDatabaseValidationMode(\n        DatabaseValidationMode.ERROR\n    )\n    setDatabaseValidationCatalog("mydatabase")\n    // highlight-next-line\n    setDatabaseValidationSchema("myschema")\n    ...Omit other configurations...\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"temporarily-ignore-partial-validation",children:"Temporarily ignore partial validation"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes developers are developing a new feature that is incomplete and cannot be verified. Developers will naturally not run unfinished features and expect unfinished parts not to verify the database structure."}),"\n",(0,i.jsxs)(n.p,{children:["For this, Jimmer provides the annotation ",(0,i.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.DatabaseValidationIgnore"}),". This annotation has the following two usages:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Annotate entity interfaces to indicate that the entire entity does not need to be verified."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Annotate entity properties to indicate that specific properties do not need to be verified."}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),i=t(18215),s=t(23104),r=t(56347),l=t(205),o=t(57485),d=t(31682),c=t(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,h]=p({queryString:t,groupId:i}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=d??b;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==a&&(d(n),r(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(96540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);