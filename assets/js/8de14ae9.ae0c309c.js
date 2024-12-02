"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3190],{65191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"mutation/save-command/input-dto/null-handling","title":"Handle Null Values","description":"Input DTO is used for data input, so it provides powerful control over nullable properties in the objects submitted by the client, and standardizes this capability.","source":"@site/docs/mutation/save-command/input-dto/null-handling.mdx","sourceDirName":"mutation/save-command/input-dto","slug":"/mutation/save-command/input-dto/null-handling","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/null-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/input-dto/null-handling.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Handle Null Values"},"sidebar":"tutorialSidebar","previous":{"title":"Using DTO Language","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/dto-lang"},"next":{"title":"Using MapStruct","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/mapstruct"}}');var l=t(74848),s=t(28453),o=t(11470),r=t(19365);const a={sidebar_position:4,title:"Handle Null Values"},d=void 0,c={},h=[{value:"Null-related Issues in Data input",id:"null-related-issues-in-data-input",level:2},{value:"Review: Directly Saving Entity Objects",id:"review-directly-saving-entity-objects",level:3},{value:"Issues Faced by Input DTO",id:"issues-faced-by-input-dto",level:3},{value:"4 Ways to Handle Nullable Properties",id:"4-ways-to-handle-nullable-properties",level:2},{value:"1. fixed",id:"1-fixed",level:3},{value:"2. static",id:"2-static",level:3},{value:"3. dynamic",id:"3-dynamic",level:3},{value:"4. fuzzy",id:"4-fuzzy",level:3},{value:"Higher-Level Configurations",id:"higher-level-configurations",level:2},{value:"Caveats",id:"caveats",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Input DTO is used for data input, so it provides powerful control over nullable properties in the objects submitted by the client, and standardizes this capability."}),"\n",(0,l.jsx)(n.h2,{id:"null-related-issues-in-data-input",children:"Null-related Issues in Data input"}),"\n",(0,l.jsx)(n.h3,{id:"review-directly-saving-entity-objects",children:"Review: Directly Saving Entity Objects"}),"\n",(0,l.jsxs)(n.p,{children:["One of the most important features of Jimmer entities is the strict distinction between unknown data ",(0,l.jsx)(n.em,{children:"(not specifying object properties)"})," and no data ",(0,l.jsx)(n.em,{children:"(setting object properties to null)"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Let's temporarily set aside the concept of Input DTO and review the differences when directly saving data using Jimmer entities."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Setting nullable property to null"}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'Book book = BookDraft.$.produce(draft -> {\n    draft.setId(12L);\n    draft.setName("TURING");\n    // highlight-next-line\n    draft.setStoreId(null);\n});\nsqlClient.update(book);\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    id = 12L\n    name = "TURING"\n    // highlight-next-line\n    storeId = null\n}\nsqlClient.update(book);\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"The following SQL is generated:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    NAME = ?, /* TURING */\n    // highlight-next-line\n    STORE_ID = ? /* <null: long> */\nwhere\n    ID = ? /* 12 */`\n"})}),"\n",(0,l.jsx)(n.p,{children:"As you can see, by explicitly setting the object's property to null and executing the save command with an update operation,\nthe value in the database will be updated to null."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Not specifying nullable property at all"}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'Book book = BookDraft.$.produce(draft -> {\n    draft.setId(12L);\n    draft.setName("TURING");\n    // highlight-next-line\n    // `storeId` is not specified\n});\nsqlClient.update(book);\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    id = 12L\n    name = "TURING"\n    // highlight-next-line\n    // `storeId` is not specified\n}\nsqlClient.update(book);\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"The following SQL is generated:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    NAME = ? /* TURING */\n    // highlight-next-line\n    /* `STORE_ID` is not updated */\nwhere\n    ID = ? /* 12 */`\n"})}),"\n",(0,l.jsx)(n.p,{children:"As you can see, by not setting the object's property and executing the save command with an update operation,\nthe value in the database will not be updated."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsx)(n.p,{children:"This distinction is very important."}),(0,l.jsx)(n.p,{children:"In the subsequent content of this article, we will no longer discuss what SQL statements the ORM generated\nbecause we only need to focus on what the entity object obtained from the conversion of the Input DTO is."})]}),"\n",(0,l.jsx)(n.h3,{id:"issues-faced-by-input-dto",children:"Issues Faced by Input DTO"}),"\n",(0,l.jsx)(n.p,{children:"Now, let's define an Input DTO:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:'language-title="src/main/dto/Book.dto"',children:"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    id(store)\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For more details on the DTO language, please refer to the ",(0,l.jsx)(n.a,{href:"../../../object/view/dto-language",children:"relevant chapter"}),". Here, we focus on the Java/Kotlin code automatically generated by the Jimmer pre-compiler based on this DTO code."]}),"\n",(0,l.jsx)(n.p,{children:"The generated code is as follows:"}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",metastring:'title="BookUpdateInput.java"',children:'@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookUpdateInput implements Input<Book> {\n\n    private long id;\n\n    private String name;\n\n    // highlight-next-line\n    @Nullable\n    private Long storeId;\n\n    @Override\n    public Book toEntity() {\n        ...omitted...\n    }\n\n    ...other members omitted...\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookUpdateInput.kt"',children:'@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookUpdateInput(\n    val id: Long,\n    val name: String,\n    // highlight-next-line\n    val storeId: Long? = null\n) {\n\n    override fun toEntity(): Book = ...omitted...\n\n    ...other members omitted...\n}\n'})})})]}),"\n",(0,l.jsxs)(n.p,{children:["In the original entity, the associated property ",(0,l.jsx)(n.code,{children:"Book.store"})," is nullable. The DTO code does not change this here, so in the generated classes, the field ",(0,l.jsx)(n.code,{children:"storeId"})," is also nullable."]}),"\n",(0,l.jsxs)(n.p,{children:["If the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the ",(0,l.jsx)(n.code,{children:"BookUpdateInput"})," object uploaded by the user is null, is the user's intention to update the corresponding foreign key ",(0,l.jsx)(n.code,{children:"STORE_ID"})," in the database to null, or not to update it at all?"]}),"\n",(0,l.jsx)(n.p,{children:"In fact, both of these intentions are common. For a long time, developers have been very casual about the conventions for these two behaviors, and even if the API documentation mentions such details, the format is also very casual. This has led to difficulties in communication and understanding and has caused lasting damage to the industry."}),"\n",(0,l.jsx)(n.p,{children:"Input DTO provides a standardized definition for this issue, aiming to handle different intentions in a standardized manner."}),"\n",(0,l.jsx)(n.h2,{id:"4-ways-to-handle-nullable-properties",children:"4 Ways to Handle Nullable Properties"}),"\n",(0,l.jsxs)(n.p,{children:["To solve the problem raised above, the ",(0,l.jsx)(n.a,{href:"../../../object/view/dto-language",children:"DTO language"})," specifies that if a DTO property satisfies both of the following conditions:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"It is defined in an input type"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"It allows null values"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Then, a modifier representing the null handling mode can be added to the DTO property: it can be ",(0,l.jsx)(n.code,{children:"fixed"}),", ",(0,l.jsx)(n.code,{children:"static"}),", ",(0,l.jsx)(n.code,{children:"dynamic"}),", or ",(0,l.jsx)(n.code,{children:"fuzzy"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"For convenience in the subsequent discussion, let's assume that the following Web Controller exists:"}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'@RestController\npublic class BookController {\n\n    @PutMapping("/book")\n    public void update(\n        // highlight-next-line\n        @RequestBody BookUpdateInput input\n    ) {\n        Book book = input.toEntity();\n        System.out.println(book);\n        ...subsequent code omitted...\n    }\n\n    ...other members omitted...\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'@RestController\nclass BookController {\n\n    @PutMapping("/book")\n    fun update(\n        // highlight-next-line\n        @RequestBody input: BookUpdateInput\n    ) {\n        val book = input.toEntity()\n        println(book)\n        ...subsequent code omitted...\n    }\n\n    ...other members omitted...\n}\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"Here, we convert the Input DTO object uploaded by the user into a Jimmer entity and print it out."}),"\n",(0,l.jsx)(n.p,{children:"We only need to focus on the print result, as mentioned earlier, we only need to focus on what the entity object obtained from the conversion of the Input DTO is, and we do not need to discuss what SQL statements the ORM will generate."}),"\n",(0,l.jsx)(n.p,{children:"Therefore, the subsequent code is not important and is omitted."}),"\n",(0,l.jsx)(n.h3,{id:"1-fixed",children:"1. fixed"}),"\n",(0,l.jsx)(n.p,{children:"DTO code example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:'language-title="src/main/dto/Book.dto"',children:"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    fixed id(store)\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"This mode can also be called the super static mode."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["It does not allow the user to submit an ",(0,l.jsx)(n.code,{children:"Input DTO"})," without specifying certain properties. Even if they want a property to be null, they need to explicitly specify it."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If the property of the Input DTO is null, the corresponding property of the obtained Jimmer entity object will also be set to null, effectively modifying the corresponding field in the database to null."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Two ways for the client to submit data:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO with the ",(0,l.jsx)(n.code,{children:"storeId"})," property set to null"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line  \n    \"storeId\": null\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"That is, subsequent operations will update the corresponding field in the database to null."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO without the ",(0,l.jsx)(n.code,{children:"storeId"})," property"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}' \n"})}),"\n",(0,l.jsx)(n.p,{children:"This request will be rejected, HTTP error code 400, parameter error. If you check the Java log, you will see the following error:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:'Resolved [org.springframework.http.converter.HttpMessageNotReadableException:\nJSON parse error: Cannot construct instance of\n`org.doc.j.model.dto.BookUpdateInput$Builder`,\nproblem: An object whose type is "org.doc.j.model.dto.BookUpdateInput"\ncannot be deserialized by Jackson.\nThe current type is fixed input DTO so that\nall JSON properties must be specified explicitly,\n# highlight-next-line\nhowever, the property "storeId" is not specified by JSON explicitly.\nPlease either explicitly specify the property as null in the JSON,\nor specify the current input properties as static, dynamic or fuzzy\nin the DTO language]\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["If developer use the ",(0,l.jsx)(n.a,{href:"../../../client/api",children:"Automatic TypeScript Generation"})," feature in Jimmer, the generated typeScript code will require web developers to provide the ",(0,l.jsx)(n.code,{children:"storeId"})," property for the ",(0,l.jsx)(n.code,{children:"BookUpdateInput"})," object, otherwise client code cannot be compiled successfully."]})}),"\n",(0,l.jsx)(n.h3,{id:"2-static",children:"2. static"}),"\n",(0,l.jsx)(n.p,{children:"DTO code example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:'language-title="src/main/dto/Book.dto"',children:"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    static id(store)\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["When submitting an ",(0,l.jsx)(n.code,{children:"Input DTO"}),", the user can either set the ",(0,l.jsx)(n.code,{children:"storeId"})," property to null or not specify it at all."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Regardless of the user's choice, the behavior remains the same: the corresponding property of the obtained Jimmer entity object will definitely be set to null, effectively modifying the corresponding field in the database to null."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Two ways for the client to submit data:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO with the ",(0,l.jsx)(n.code,{children:"storeId"})," property set to null"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": null\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"That is, subsequent operations will update the corresponding field in the database to null."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO without the ",(0,l.jsx)(n.code,{children:"storeId"})," property"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"That is, subsequent operations will update the corresponding field in the database to null."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"The effects of the two operations are the same, and the final effect is only affected by the DTO shape, regardless of whether the user specified the DTO property or not."})}),"\n",(0,l.jsx)(n.h3,{id:"3-dynamic",children:"3. dynamic"}),"\n",(0,l.jsx)(n.p,{children:"DTO code example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:'language-title="src/main/dto/Book.dto"',children:"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    dynamic id(store)\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If the user chooses to set the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the DTO to null, then the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the final obtained Jimmer entity object will also be null, effectively modifying the corresponding field in the database to null."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If the user does not set the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the DTO at all, then the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the final obtained Jimmer entity object will also not be set, so the corresponding field in the database will not be updated."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Two ways for the client to submit data:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO with the ",(0,l.jsx)(n.code,{children:"storeId"})," property set to null"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": null\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":null\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"That is, subsequent operations will update the corresponding field in the database to null."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO without the ",(0,l.jsx)(n.code,{children:"storeId"})," property"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    // There is no storeId property here\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"That is, subsequent operations will not update the corresponding field in the database."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"The two ways of submitting data correspond to two completely different behaviors, suitable for professional client teams to have flexible control over the service behavior."})}),"\n",(0,l.jsx)(n.h3,{id:"4-fuzzy",children:"4. fuzzy"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"This mode sacrifices functionality for conservativeness and safety, and is the only mode with incomplete functionality."})}),"\n",(0,l.jsx)(n.p,{children:"DTO code example:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:'language-title="src/main/dto/Book.dto"',children:"input BookUpdateInput {\n    id!\n    name\n    // highlight-next-line\n    fuzzy id(store)\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If the user sets the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the DTO object to a non-null value, then the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the final obtained Jimmer entity object will be set accordingly, effectively modifying the corresponding field in the database to the specified value."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Otherwise ",(0,l.jsxs)(n.em,{children:["(whether the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the DTO object is set to null or not specified at all)"]}),", the ",(0,l.jsx)(n.code,{children:"storeId"})," property of the final obtained Jimmer entity object will not be set, so the corresponding field in the database will not be updated."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Three ways for the client to submit data:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO with the ",(0,l.jsx)(n.code,{children:"storeId"})," property set to null"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": null\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    // There is no storeId property here\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"That is, subsequent operations will not update the corresponding field in the database."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO without the ",(0,l.jsx)(n.code,{children:"storeId"})," property"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\"\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    // There is no storeId property here\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"That is, subsequent operations will not update the corresponding field in the database."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Submit an Input DTO with the ",(0,l.jsx)(n.code,{children:"storeId"})," property set to a non-null value"]}),"\n",(0,l.jsx)(n.p,{children:"The previous two ways cannot modify the corresponding field in the database unless a non-null value is specified, as follows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"curl -X 'PUT' \\\n'http://localhost:8080/book' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '{\n    \"id\": 12,\n    \"name\": \"TURING\",\n    # highlight-next-line\n    \"storeId\": 2\n}'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The print result ",(0,l.jsx)(n.em,{children:"(the final Jimmer entity object obtained)"})," is as follows:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    "id":12,\n    "name":"TURING",\n    // highlight-next-line\n    "store":3\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"This mode sacrifices the ability to modify the corresponding field in the database to null in exchange for absolute conservativeness and safety.\nIt is particularly suitable for client teams with less experience."})}),"\n",(0,l.jsx)(n.h2,{id:"higher-level-configurations",children:"Higher-Level Configurations"}),"\n",(0,l.jsxs)(n.p,{children:["In the examples above, the keywords ",(0,l.jsx)(n.code,{children:"fixed"}),", ",(0,l.jsx)(n.code,{children:"static"}),", ",(0,l.jsx)(n.code,{children:"dynamic"}),", and ",(0,l.jsx)(n.code,{children:"fuzzy"})," were used to modify the nullable properties of the Input DTO."]}),"\n",(0,l.jsx)(n.p,{children:"Field-level control is the most fine-grained. However, if there are many nullable properties in the Input DTO, configuring them one by one may be cumbersome."}),"\n",(0,l.jsx)(n.p,{children:"Jimmer provides configuration methods with a broader scope of influence:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Input type level"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"// highlight-next-line\ndynamic input XxxInput {\n    fixed nullableProp1\n    static nullableProp2\n    // highlight-next-line\n    nullableProp3\n    fuzzy nullableProp4\n    // highlight-next-line  \n    nullableProp5\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Here, the null handling mode is not declared for ",(0,l.jsx)(n.code,{children:"nullableProp3"})," and ",(0,l.jsx)(n.code,{children:"nullableProp5"}),", and they will share the configuration at the input type level ",(0,l.jsxs)(n.em,{children:["(in this case, ",(0,l.jsx)(n.code,{children:"dynamic"}),")"]}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Precompiler level"}),"\n",(0,l.jsxs)(n.p,{children:["If no configuration is found at the input type level, refer to the global configuration parameter ",(0,l.jsx)(n.code,{children:"jimmer.dto.defaultNullableInputModifier"})," of the precompiler ",(0,l.jsx)(n.em,{children:"(for Java, it is APT; for Kotlin, it is KSP)"}),"."]}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(r.A,{value:"java_maven",label:"Java(Maven)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-compiler-plugin</artifactId>\n    <version>3.13.0</version>\n    <configuration>\n        <compilerArgs>\n            \x3c!--highlight-next-line--\x3e\n            <arg>-Ajimmer.dto.defaultNullableInputModifier=fixed</arg>\n        </compilerArgs>\n    </configuration>\n</plugin>\n"})})}),(0,l.jsx)(r.A,{value:"java_gradle",label:"Java(Gradle)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",metastring:"gradle",children:'tasks.withType<JavaCompile>().configureEach {\n    // highlight-next-line\n    options.compilerArgs.add("-Ajimmer.dto.defaultNullableInputModifier=fixed")\n}\n'})})}),(0,l.jsx)(r.A,{value:"kotlin",label:"Kotlin(Gradle.kts)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",metastring:"gradle",children:'ksp {\n    // highlight-next-line\n    arg("jimmer.dto.defaultNullableInputModifier", "fixed")\n}\n'})})})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Final default mode"}),"\n",(0,l.jsxs)(n.p,{children:["If no configuration is provided at the precompiler level either, the final default is ",(0,l.jsx)(n.code,{children:"static"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsx)(n.p,{children:"Configurations at different levels may conflict, and the priorities among them are:"}),(0,l.jsxs)(n.p,{children:["Input property level config > Input type level config > Precompiler global config > Final default ",(0,l.jsx)(n.code,{children:"static"})]})]}),"\n",(0,l.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.p,{children:["For the ",(0,l.jsx)(n.code,{children:"fixed"})," and ",(0,l.jsx)(n.code,{children:"dynamic"})," modes, Jimmer requires the server-side to use ",(0,l.jsx)(n.a,{href:"https://github.com/FasterXML/jackson",children:"Jackson"})," for deserialization."]})}),"\n",(0,l.jsxs)(n.p,{children:["Therefore, if you plan to use the ",(0,l.jsx)(n.code,{children:"fixed"})," or ",(0,l.jsx)(n.code,{children:"dynamic"})," mode, please:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add ",(0,l.jsx)(n.code,{children:"@RequestBody"})]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["If you carefully look at the examples in this article, you will notice that ",(0,l.jsx)(n.code,{children:"@RequestBody"})," was used there."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Do not replace the Jackson Message Converter enabled by default in Spring Boot."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["In fact, not only the Input DTOs using the ",(0,l.jsx)(n.code,{children:"fixed"})," or ",(0,l.jsx)(n.code,{children:"dynamic"})," mode discussed in this article have this requirement; if the user needs to use the serialization/deserialization of Jimmer entities themselves, Jackson is also required."]}),"\n",(0,l.jsx)(n.p,{children:"Jackson is carefully designed to strike the perfect balance between functionality and performance. Therefore, Jimmer regards Jackson as an essential infrastructure."}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(18215);const l={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(l.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var i=t(96540),l=t(18215),s=t(23104),o=t(56347),r=t(205),a=t(57485),d=t(31682),c=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:l}}=e;return{value:n,label:t,attributes:i,default:l}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const l=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,s=u(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[d,h]=x({queryString:t,groupId:l}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,c.Dv)(t);return[l,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),f=(()=>{const e=d??m;return p({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:r}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=a.indexOf(n),l=r[t].value;l!==i&&(d(n),o(l))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:h,onClick:c,...s,className:(0,l.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function I(e){const n=(0,j.A)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const l={},s=i.createContext(l);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);