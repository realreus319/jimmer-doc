"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9071],{40366:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>u,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"mutation/save-command/input-dto/dto-lang","title":"Using DTO Language","description":"Jimmer provides DTO language.","source":"@site/docs/mutation/save-command/input-dto/dto-lang.mdx","sourceDirName":"mutation/save-command/input-dto","slug":"/mutation/save-command/input-dto/dto-lang","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/dto-lang","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/input-dto/dto-lang.mdx","tags":[],"version":"current","lastUpdatedAt":1731502434000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Using DTO Language"},"sidebar":"tutorialSidebar","previous":{"title":"Lonely Form","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/lonely"},"next":{"title":"Handle Null Values","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/null-handling"}}');var s=i(74848),o=i(28453),r=i(11470),a=i(19365),l=i(64087),d=i(46845),c=i(74400);const u={sidebar_position:3,title:"Using DTO Language"},h=void 0,p={},m=[{value:"Defining DTO Shape",id:"defining-dto-shape",level:2},{value:"Auto-Generated DTO Types",id:"auto-generated-dto-types",level:2},{value:"HTTP API",id:"http-api",level:2},{value:"Best Practices",id:"best-practices",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Jimmer provides ",(0,s.jsx)(n.a,{href:"../../../object/view/dto-language",children:"DTO language"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Developers can use this language to quickly define the shape of the Input DTO to be saved. After compilation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The corresponding Java/Kotlin Input DTO classes will be generated automatically"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The mutual conversion logic between Input DTOs and entities will be generated automatically"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The object fetcher that matches its shape will be automatically generated. ",(0,s.jsx)(n.em,{children:"(This feature is unrelated to input DTOs, so it is not discussed in this article)"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Developers use the auto-generated Input DTOs as method parameters, and persist them in one line of code ",(0,s.jsx)(n.em,{children:"(Internal logic: Call the auto-generated conversion logic to convert the Input DTO to a dynamic entity object, then directly persist using the save command)"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This is the most efficient way to eliminate the pain of Input DTO explosion."})}),"\n",(0,s.jsx)(n.h2,{id:"defining-dto-shape",children:"Defining DTO Shape"}),"\n",(0,s.jsxs)(n.p,{children:["This article focuses on explaining how to save static DTO types, not a systematic introduction to DTO language.\nPlease refer to ",(0,s.jsx)(n.a,{href:"../../../object/view/dto-language",children:"Object/DTO conversion/DTO Language"})," to know more."]}),"\n",(0,s.jsxs)(n.p,{children:["Assume the fully qualified name of the ",(0,s.jsx)(n.code,{children:"Book"})," class is ",(0,s.jsx)(n.code,{children:"com.yourcompany.yourproject.model.Book"}),". You can:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"In the project where entity is defined"}),", create directory ",(0,s.jsx)(n.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.code,{children:"src/main/dto"}),", create subdirectories following the package path of the entity, i.e. ",(0,s.jsx)(n.code,{children:"com/yourcompany/yourproject/model"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Under the directory created in previous step, create the file ",(0,s.jsx)(n.code,{children:"Book.dto"}),". The file must have the same name as the entity class and the extension must be ",(0,s.jsx)(n.code,{children:"dto"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Edit this file and use DTO language to define various DTO shapes for the Book entity:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto"',children:"# highlight-next-line\ninput BookInput {\n    \n    #allScalars(Book)\n    \n    id(store)\n\n    authors {\n        #allScalars(Author)\n        -id\n    }\n}\n\ninput SimpleBookInput { ... }\n\n...Other Input DTO shapes omitted...\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Input DTO shapes used as input parameters must be decorated with the ",(0,s.jsx)(n.code,{children:"input"})," modifier."]}),(0,s.jsxs)(n.p,{children:["The specific reasons are elaborated in ",(0,s.jsx)(n.a,{href:"../../../object/view/dto-language",children:"Object/DTO conversion/DTO Language"})," and not repeated here."]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"auto-generated-dto-types",children:"Auto-Generated DTO Types"}),"\n",(0,s.jsx)(n.p,{children:"Jimmer is responsible for compiling dto files and automatically generating DTO types conforming to these shapes."}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"If Java/Kotlin source files other than dto files are modified, directly clicking the Run button in IDE can trigger recompilation of dto files."}),(0,s.jsx)(n.p,{children:"However, if no Java/Kotlin files other than dto files are modified, simply clicking the Run button in IDE will not trigger dto file recompilation unless rebuild is explicitly triggered!"}),(0,s.jsxs)(n.p,{children:["If you are using Gradle as your build tool, you can also use the third-party Gradle plugin provided by the community to solve this problem: ",(0,s.jsx)(n.a,{href:"https://github.com/Enaium/jimmer-gradle",children:"jimmer-gradle"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Take ",(0,s.jsx)(n.code,{children:"BookInput"})," in the above code as an example. After successful compilation of this dto file, the following DTO types will be auto-generated:"]}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(a.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="BookInput.java"',children:'package com.yourcompany.yourproject.model.dto;\n\nimport com.yourcompany.yourproject.model.Book;\nimport org.babyfish.jimmer.Input;\n\n@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookInput implements Input<Book> {\n\n    @Nullable\n    private Long id; \u2776\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId; \u2777\n\n    private List<TargetOf_authors> authors; \u2778\n\n    public BookInput(Book book) { \u2779\n        ...\n    }\n\n    @Override\n    public Book toEntity() { \u277a\n        ...\n    }\n\n    @Data\n    public static class TargetOf_authors {\n\n        private String firstName;\n        \n        private String lastName;\n        \n        private Gender gender;\n\n        ...Other members omitted...\n    }\n\n    ...Other members omitted...\n}\n'})})}),(0,s.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookInput.kt"',children:'package com.yourcompany.yourproject.model.dto\n\nimport com.yourcompany.yourproject.model.Book\nimport org.babyfish.jimmer.Input\n\n@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookInput(\n    val id: Long? = null, \u2776\n    val name: String = "", \n    val edition: Int = 0,\n    val price: BigDecimal, \n    val storeId: Long? = null, \u2777\n    val authors: List<TargetOf_authors> = emptyList() \u2778\n): Input<Book> {\n\n    constructor(book: Book) : this(...) \u2779\n\n    override fun toEntity(): Book = ... \u277a\n\n    data class TargetOf_authors(\n        val firstName: String,\n        val lastName: String,\n        val gender: Gender\n    ) {\n        ...Other members omitted...\n    }\n\n    ...Other members omitted...\n}\n'})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2776 If the id is designated some auto-generation strategy, it is not required. This is also a feature of save commands, see details in ",(0,s.jsx)(n.a,{href:"../save-mode#summary",children:"Mutation/Save Command/Save Mode/Summary"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For Jimmer entities, ",(0,s.jsx)(n.code,{children:"id"})," cannot be null. Missing ",(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsx)(n.em,{children:"(i.e. not assigning it)"})," represents the object does not have an ",(0,s.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For Input DTOs, static POJO types do not have the concept of missing properties. ",(0,s.jsx)(n.code,{children:"null"})," represents missing ",(0,s.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n"]}),(0,s.jsxs)(n.p,{children:["This seems contradictory, but can be handled simply: If Input DTO's ",(0,s.jsx)(n.code,{children:"id"})," is ",(0,s.jsx)(n.code,{children:"null"}),", the converted entity object will not have an ",(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsxs)(n.em,{children:["(although ",(0,s.jsx)(n.code,{children:"id"})," of entity cannot be assigned ",(0,s.jsx)(n.code,{children:"null"}),", dynamic objects allow unspecified properties)"]}),"."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2777 Explicitly specifies this Input DTO wants to edit the entity's many-to-one association ",(0,s.jsx)(n.code,{children:"Book.store"})," using the ",(0,s.jsx)(c.l,{buttonText:"short association",children:(0,s.jsx)(l.M,{})})," mode."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2778 Explicitly specifies this Input DTO wants to edit the entity's many-to-many association ",(0,s.jsx)(n.code,{children:"Book.authors"})," using the ",(0,s.jsx)(c.l,{buttonText:"long association",children:(0,s.jsx)(d.Y,{})})," mode.\nThe type of associated objects is also fixed to the nested Input DTO type ",(0,s.jsx)(n.code,{children:"BookInput.TargetOf_authors"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u2779 Convert dynamic entity to static Input DTO"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u277a Convert static Input DTO to dynamic entity"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"http-api",children:"HTTP API"}),"\n",(0,s.jsx)(n.p,{children:"The DTO language generates relatively complete code, so we can quickly expose HTTP APIs to persist data:"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(a.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody BookInput input\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`  \n    // highlight-next-line\n    bookRepository.save(input); \n}\n'})})}),(0,s.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody input: BookInput\n) {\n    // `save(input)` is equivalent to `save(input.toEntity())`\n    // highlight-next-line\n    bookRepository.save(input)\n}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.p,{children:"In real projects, we often face the problem that entities may have many properties, and"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Relatively more properties need to be specified during insertion"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Relatively fewer properties need to be specified during modification"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Book"})," entity we consistently use as example has few properties and is inconvenient to demonstrate this."]}),"\n",(0,s.jsxs)(n.p,{children:["So I make up an entity type ",(0,s.jsx)(n.code,{children:"Product"})," with more properties:"]}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(a.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Product.java" ',children:"@Entity\npublic interface Product {\n\n    ...Many entity properties, omitted... \n}\n"})})}),(0,s.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Product.kt"',children:"@Entity  \ninterface Product {\n\n    ...Many entity properties, omitted...\n}\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For insertion which requires specifying relatively more properties, define ",(0,s.jsx)(n.code,{children:"CreateProductInput"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For modification which requires specifying relatively fewer properties, define ",(0,s.jsx)(n.code,{children:"UpdateProductInput"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["So the ",(0,s.jsx)(n.code,{children:"Product.dto"})," code looks like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"input CreateProductInput {\n    ...More properties, omitted...\n}\n\ninput UpdateProductInput {\n    ...Fewer properties, omitted... \n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After compilation, ",(0,s.jsx)(n.code,{children:"CreateProductInput"})," and ",(0,s.jsx)(n.code,{children:"UpdateProductInput"})," Java/Kotlin classes will be auto-generated. So we can quickly implement the following two HTTP APIs:"]}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(a.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@PostMapping("/product")\npublic void createProduct(\n    // `CreateProductInput` has relatively more properties  \n    // highlight-next-line\n    @RequestBody CreateProductInput input\n) {\n    productRepository.insert(input);\n}\n\n@PutMapping("/product")  \npublic void updateProduct(\n    // `UpdateProductInput` has relatively fewer properties\n    // highlight-next-line \n    @RequestBody UpdateProductInput input\n) {\n    productRepository.update(input);\n}\n'})})}),(0,s.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'@PostMapping("/product")\nfun createProduct(\n    // `CreateProductInput` has relatively more properties\n    // highlight-next-line\n    @RequestBody input: CreateProductInput  \n) {\n    productRepository.insert(input)\n}\n\n@PutMapping("/product")\nfun updateProduct(\n    // `UpdateProductInput` has relatively fewer properties \n    // highlight-next-line\n    @RequestBody input: UpdateProductInput\n) {\n    productRepository.update(input)\n} \n'})})})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["As you can see, no matter how many different ",(0,s.jsx)(n.code,{children:"Input DTO"})," types need to be defined for the same entity according to project requirements, we can quickly generate Input DTO types and related data conversion logic using DTO language, then persist in one line of code calling save commands."]}),(0,s.jsx)(n.p,{children:"Even if the project is more complex, e.g. people with different identities can edit data structures of different shapes, this pattern can still be applied repeatedly to handle such scenarios easily."})]})]})}function j(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},46845:(e,n,i)=>{i.d(n,{Y:()=>B});var t=i(96540),s=i(67733),o=i(67512),r=i(43581),a=i(80421),l=i(1489),d=i(71543),c=i(57416),u=i(53881),h=i(88933),p=i(46780),m=i(19591),x=i(618),j=i(73231),g=i(30854),v=i(16718),y=i(4671),f=i(67034),b=i(63051),A=i(15993),k=i(28968),I=i(13407),T=i(46831),C=i(44586),w=i(82470),O=i(16712),P=i(74848);const B=(0,t.memo)((()=>{const{i18n:e}=(0,C.A)(),n=(0,O.o)(),i=(0,t.useMemo)((()=>n?D:S),[n]),B=(0,t.useMemo)((()=>{const e=new Map;for(const n of i)e.set(n.id,n);return e}),[i]),q=(0,t.useMemo)((()=>n?N:_),[n]),L=(0,t.useMemo)((()=>{const e=new Map;for(const n of q)e.set(n.id,n);return e}),[q]),[R,z]=(0,w.e)((()=>({userId:1,province:B.get(1).province,city:B.get(1).city,address:B.get(1).address,items:[{__rowId:1,productId:1,name:L.get(1).name,quantity:2},{__rowId:2,productId:10,name:L.get(10).name,quantity:1}]}))),E=(0,t.useMemo)((()=>Math.max(...R.items.map((e=>e.__rowId)))+1),[R]),U=(0,t.useCallback)((e=>{const n=B.get(parseInt(e.target.value));void 0!==n&&z((e=>{e.userId=n.id,e.province=n.province,e.city=n.city,e.address=n.address}))}),[z,B]),F=(0,t.useCallback)((e=>{z((n=>{n.province=e.target.value}))}),[z]),J=(0,t.useCallback)((e=>{z((n=>{n.city=e.target.value}))}),[z]),G=(0,t.useCallback)((e=>{z((n=>{n.address=e.target.value}))}),[z]),W=(0,t.useCallback)(((e,n)=>{z((i=>{for(const t of i.items)if(t.__rowId===n){t.productId=parseInt(e.target.value),M(i);break}}))}),[z]),K=(0,t.useCallback)(((e,n)=>{z((i=>{for(const t of i.items)if(t.__rowId===n){t.quantity=parseInt(e.target.value),M(i);break}}))}),[z]),H=(0,t.useCallback)((e=>{z((n=>{for(let i=n.items.length-1;i>=0;--i)if(n.items[i].__rowId===e){n.items.splice(i,1);break}}))}),[z]),V=(0,t.useCallback)((()=>{z((e=>{e.items.push({__rowId:E,quantity:1})}))}),[z,E]),[Y,Q]=(0,t.useState)(!1),X=(0,t.useCallback)((()=>{Q(!0)}),[]),Z=(0,t.useCallback)((()=>{Q(!1)}),[]);return(0,P.jsxs)(c.A,{elevation:3,style:{padding:"1.5rem"},children:[(0,P.jsx)(s.A,{component:"form",noValidate:!0,autoComplete:"off",children:(0,P.jsxs)(l.Ay,{container:!0,spacing:2,children:[(0,P.jsx)(l.Ay,{item:!0,xs:4,children:(0,P.jsx)(r.A,{fullWidth:!0,select:!0,label:n?"\u8d2d\u4e70\u4eba":"Purchaser",value:R.userId,onChange:U,children:i.map((e=>(0,P.jsx)(a.A,{value:e.id,children:e.nickName},e.id)))})}),(0,P.jsx)(l.Ay,{item:!0,xs:4,children:(0,P.jsx)(r.A,{fullWidth:!0,label:n?"\u7701\u4efd":"Province",value:R.province,onChange:F})}),(0,P.jsx)(l.Ay,{item:!0,xs:4,children:(0,P.jsx)(r.A,{fullWidth:!0,label:n?"\u57ce\u5e02":"City",value:R.city,onChange:J})}),(0,P.jsx)(l.Ay,{item:!0,xs:12,children:(0,P.jsx)(r.A,{fullWidth:!0,label:n?"\u5730\u5740":"Address",value:R.address,onChange:G})}),(0,P.jsxs)(l.Ay,{item:!0,xs:12,children:[(0,P.jsx)(d.A,{textAlign:"left",children:n?"\u8ba2\u5355\u660e\u7ec6":"Order Items"}),(0,P.jsx)(m.A,{component:c.A,children:(0,P.jsxs)(u.A,{size:"small",children:[(0,P.jsx)(x.A,{children:(0,P.jsxs)(j.A,{children:[(0,P.jsx)(p.A,{children:n?"\u5546\u54c1":"Commodity"}),(0,P.jsx)(p.A,{children:n?"\u6570\u91cf":"Quantity"}),(0,P.jsx)(p.A,{children:n?"\u5355\u4ef7":"Unit price"}),(0,P.jsx)(p.A,{children:n?"\u660e\u7ec6\u4ef7":"Item price"}),(0,P.jsx)(p.A,{children:n?"\u5220\u9664":"Delete"})]})}),(0,P.jsx)(h.A,{children:R.items.map((e=>{const n=void 0!==e.productId?L.get(e.productId):void 0;return(0,P.jsxs)(j.A,{children:[(0,P.jsx)(p.A,{children:(0,P.jsx)(r.A,{select:!0,value:n?.id,variant:"standard",size:"small",onChange:n=>{W(n,e.__rowId)},children:q.map((e=>(0,P.jsx)(a.A,{value:e.id,children:e.name},e.id)))})}),(0,P.jsx)(p.A,{children:(0,P.jsx)(r.A,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:n=>{K(n,e.__rowId)}})}),(0,P.jsx)(p.A,{children:n?.price}),(0,P.jsx)(p.A,{children:void 0!==n&&n.price*e.quantity}),(0,P.jsx)(p.A,{children:(0,P.jsx)(y.A,{onClick:()=>H(e.__rowId),children:(0,P.jsx)(f.A,{})})})]},e.__rowId)}))}),(0,P.jsx)(g.A,{children:(0,P.jsx)(j.A,{children:(0,P.jsx)(p.A,{colSpan:5,children:(0,P.jsxs)(o.A,{onClick:V,children:[(0,P.jsx)(v.A,{}),n?"\u6dfb\u52a0":"Add"]})})})})]})})]}),(0,P.jsxs)(l.Ay,{item:!0,xs:12,children:[n?"\u603b\u989d":"Total price",":",R.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>L.get(e.productId).price*e.quantity)).reduce(((e,n)=>e+n),0)]}),(0,P.jsx)(l.Ay,{item:!0,xs:12,children:(0,P.jsx)(o.A,{variant:"contained",onClick:X,children:n?"\u63d0\u4ea4":"Submit"})})]})}),(0,P.jsxs)(b.A,{open:Y,onClose:Z,children:[(0,P.jsx)(T.A,{children:n?"\u4fe1\u606f":"Info"}),(0,P.jsx)(k.A,{children:(0,P.jsx)(I.A,{children:n?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,P.jsx)(A.A,{children:(0,P.jsx)(o.A,{onClick:Z,children:n?"\u5173\u95ed":"Close"})})]})]})})),D=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],S=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],N=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],_=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function M(e){const n=e.items,i=new Map;for(let t=0;t<n.length;t++){const e=n[t];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){n.splice(t--,1);continue}if(void 0===e.productId)continue;const s=i.get(e.productId);void 0===s?i.set(e.productId,e):(s.quantity+=e.quantity,n.splice(t--,1))}}},64087:(e,n,i)=>{i.d(n,{M:()=>y});var t=i(44586),s=i(31729),o=i(48440),r=i(80421),a=i(57416),l=i(18441),d=i(68999),c=i(43581),u=i(63051),h=i(46831),p=i(28968),m=i(15993),x=i(13407),j=i(67512),g=i(96540),v=i(74848);const y=(0,g.memo)((()=>{const[e,n]=(0,g.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),i=(0,g.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),y=(0,g.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),f=(0,g.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),b=(0,g.useCallback)((e=>{let i;const t=e.target.value;i="string"==typeof t?parseInt(t):t,-1===i&&(i=void 0),n((e=>({...e,storeId:i})))}),[]),A=(0,g.useCallback)((e=>{let i=[];console.log(e.target.value);const t=e.target.value;i="string"==typeof t?t.split(",").map((e=>parseInt(e))):t,n((e=>({...e,authorIds:i})))}),[]),{i18n:k}=(0,t.A)(),I=(0,g.useMemo)((()=>"zh"==k.currentLocale||"zh_cn"==k.currentLocale||"zh_CN"==k.currentLocale),[k.currentLocale]),[T,C]=(0,g.useState)(!1),w=(0,g.useCallback)((()=>{C(!0)}),[]),O=(0,g.useCallback)((()=>{C(!1)}),[]);return(0,v.jsxs)(a.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,v.jsxs)(d.A,{spacing:2,children:[(0,v.jsx)("h1",{children:"Book Form"}),(0,v.jsx)(c.A,{label:"Name",value:e.name,onChange:i,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,v.jsx)(c.A,{label:"Edition",type:"number",value:e.edition,onChange:y}),(0,v.jsx)(c.A,{label:"Price",type:"number",value:e.price,onChange:f}),(0,v.jsxs)(s.A,{fullWidth:!0,children:[(0,v.jsx)(o.A,{id:"store-select-label",children:"Store"}),(0,v.jsxs)(l.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:b,children:[(0,v.jsx)(r.A,{value:-1,children:"--NONE--"}),(0,v.jsx)(r.A,{value:1,children:"O'REILLY"}),(0,v.jsx)(r.A,{value:2,children:"MANNING"})]})]}),(0,v.jsxs)(s.A,{fullWidth:!0,children:[(0,v.jsx)(o.A,{id:"author-multi-select-label",children:"Authors"}),(0,v.jsxs)(l.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:A,children:[(0,v.jsx)(r.A,{value:1,children:"Eve Procello"}),(0,v.jsx)(r.A,{value:2,children:"Alex Banks"}),(0,v.jsx)(r.A,{value:3,children:"Dan Vanderkam"}),(0,v.jsx)(r.A,{value:4,children:"Boris Cherny"}),(0,v.jsx)(r.A,{value:5,children:"Samer Buna"})]})]}),(0,v.jsx)(s.A,{children:(0,v.jsx)(j.A,{onClick:w,variant:"contained",children:I?"\u63d0\u4ea4":"Submit"})})]}),(0,v.jsxs)(u.A,{open:T,onClose:O,children:[(0,v.jsx)(h.A,{children:I?"\u4fe1\u606f":"Info"}),(0,v.jsx)(p.A,{children:(0,v.jsx)(x.A,{children:I?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,v.jsx)(m.A,{children:(0,v.jsx)(j.A,{onClick:O,children:"\u5173\u95ed"})})]})]})}))},66971:(e,n,i)=>{i.d(n,{a:()=>x});var t=i(96540),s=i(72774),o=i(63051),r=i(28968),a=i(48875),l=i(44676),d=i(47859),c=i(4671),u=i(99343),h=i(7324),p=i(39781),m=i(74848);const x=(0,t.memo)((e=>{let{open:n,fullScreen:i=!1,title:a,maxWidth:x="md",onClose:g,children:v}=e;const[y,f]=(0,t.useState)(i),b=(0,t.useCallback)((()=>{f((e=>!e))}),[]);return(0,m.jsxs)(o.A,{open:n,onClose:g,fullScreen:y,TransitionComponent:j,maxWidth:x,children:[(0,m.jsx)(s.A,{sx:{position:"relative"},children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(d.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a}),(0,m.jsx)(c.A,{onClick:b,style:{color:"white"},children:y?(0,m.jsx)(h.A,{}):(0,m.jsx)(u.A,{})}),(0,m.jsx)(c.A,{"aria-label":"close",onClick:g,style:{color:"white"},children:(0,m.jsx)(p.A,{})})]})}),(0,m.jsx)(r.A,{children:v})]})})),j=t.forwardRef((function(e,n){return(0,m.jsx)(a.A,{direction:"up",ref:n,...e})}))},74400:(e,n,i)=>{i.d(n,{l:()=>a});var t=i(96540),s=i(67512),o=i(66971),r=i(74848);const a=(0,t.memo)((e=>{let{buttonText:n,fullScreen:i=!1,title:a=n,variant:l="outlined",large:d=!1,maxWidth:c,useOriginalText:u=!0,children:h}=e;const[p,m]=(0,t.useState)(!1),x=(0,t.useCallback)((e=>{m(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),j=(0,t.useCallback)((()=>{m(!1)}),[]),g=u?{textTransform:"none"}:{};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{"data-is-view-more-button":"true",onClick:x,variant:l,size:d?"large":"small",style:g,children:n}),(0,r.jsx)(o.a,{open:p,onClose:j,title:a,maxWidth:c,fullScreen:i,children:h})]})}))},16712:(e,n,i)=>{i.d(n,{o:()=>s});var t=i(44586);function s(){const{i18n:e}=(0,t.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}}}]);