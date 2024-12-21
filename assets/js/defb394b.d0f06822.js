"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3892],{60722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"mutation/save-command/mysql","title":"MySQL Issues","description":"1. Basic Concepts","source":"@site/docs/mutation/save-command/mysql.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/mysql","permalink":"/jimmer-doc/docs/mutation/save-command/mysql","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/mysql.mdx","tags":[],"version":"current","lastUpdatedAt":1734792351000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"MySQL Issues"},"sidebar":"tutorialSidebar","previous":{"title":"Pessimistic Locking","permalink":"/jimmer-doc/docs/mutation/save-command/pessimistic-locking"},"next":{"title":"Input DTO","permalink":"/jimmer-doc/docs/mutation/save-command/input-dto/"}}');var s=t(74848),a=t(28453),o=t(11470),l=t(19365);const r={sidebar_position:10,title:"MySQL Issues"},c=void 0,d={},h=[{value:"1. Basic Concepts",id:"1-basic-concepts",level:2},{value:"2. Preparation",id:"2-preparation",level:2},{value:"2.1. Enabling MySQL Batch Operations",id:"21-enabling-mysql-batch-operations",level:3},{value:"2.2. Explicitly Indicating Acceptance of Dumb Batch Operations",id:"22-explicitly-indicating-acceptance-of-dumb-batch-operations",level:3},{value:"3. Simple Examples",id:"3-simple-examples",level:2},{value:"3.1 Specifying Object IDs",id:"31-specifying-object-ids",level:3},{value:"3.2 Not Specifying Object IDs",id:"32-not-specifying-object-ids",level:3},{value:"4. Complex Cases",id:"4-complex-cases",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1-basic-concepts",children:"1. Basic Concepts"}),"\n",(0,s.jsx)(n.p,{children:"As emphasized in previous articles, Jimmer does not enable batch queries for MySQL by default. This is because MySQL has two deficiencies in its support for batch queries:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"rewriteBatchedStatements"})," parameter must be explicitly specified in the JDBC connection string to enable MySQL's batch operation capability, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"jdbc:mysql://localhost:3306/mydb?rewriteBatchedStatements=true\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"rewriteBatchedStatements"})," is not specified, although JDBC Batch operations can still be executed, it's actually using a fake implementation.\nIt provides no performance benefits and is essentially no different from using multiple individual SQL statements."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Once MySQL's batch operations are really enabled, necessary return information is lost, such as:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Cannot return JDBC's ",(0,s.jsx)(n.code,{children:"generatedKeys"}),", which means the id of entities without an id property cannot be automatically filled.\nThis is a very important and common requirement for id allocation strategies based on SQL identity."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cannot return the number of affected rows for any operation"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Jimmer refers to this type of MySQL batch operation as a ",(0,s.jsx)(n.strong,{children:"dumb batch operation"}),". Due to the substantial loss of functionality:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Unless users explicitly indicate that they can accept ",(0,s.jsx)(n.strong,{children:"dumb batch operations"}),", Jimmer will not use MySQL batch operations"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Even if users explicitly indicate that they can accept ",(0,s.jsx)(n.strong,{children:"dumb batch operations"}),", Jimmer will only try to use MySQL batch operations when possible, but does not guarantee it will always do so. This is one of the key points we'll discuss in this article."]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-preparation",children:"2. Preparation"}),"\n",(0,s.jsx)(n.h3,{id:"21-enabling-mysql-batch-operations",children:"2.1. Enabling MySQL Batch Operations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Modify the database connection string"}),"\n",(0,s.jsxs)(n.p,{children:["Specify ",(0,s.jsx)(n.code,{children:"rewriteBatchedStatements"})," in the connection string, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"jdbc:mysql://localhost:3306/mydb?rewriteBatchedStatements=true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enable explicit batch operation support for sqlClient, there are two equivalent methods, choose either:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Using Jimmer's Spring Boot Starter"}),"\n",(0,s.jsxs)(n.p,{children:["Edit ",(0,s.jsx)(n.code,{children:"application.yml"})," or ",(0,s.jsx)(n.code,{children:"application.properties"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="application.yml"',children:"jimmer:\n    # highlight-next-line\n    explicit-batch-enabled: true\n    ...other configurations omitted...\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Using Jimmer's Core API"}),"\n",(0,s.jsxs)(o.A,{groupId:"language",children:[(0,s.jsx)(l.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlCient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setExplicitBatchEnabled(true)\n    ...other configurations omitted...\n    .build();\n"})})}),(0,s.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = sqlCient {\n    // highlight-next-line\n    setExplicitBatchEnabled(true)\n    ...other configurations omitted...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"22-explicitly-indicating-acceptance-of-dumb-batch-operations",children:"2.2. Explicitly Indicating Acceptance of Dumb Batch Operations"}),"\n",(0,s.jsx)(n.p,{children:"There are two methods to explicitly indicate to Jimmer that dumb batch operations are acceptable:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Global Configuration ",(0,s.jsx)(n.em,{children:"(not recommended)"})]}),"\n",(0,s.jsx)(n.p,{children:"Global configuration can be done in two ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Using Jimmer's Spring Boot Starter"}),"\n",(0,s.jsxs)(n.p,{children:["Edit ",(0,s.jsx)(n.code,{children:"application.yml"})," or ",(0,s.jsx)(n.code,{children:"application.properties"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="application.yml"',children:"jimmer:\n    # highlight-next-line\n    dumb-batch-acceptable: true\n    ...other configurations omitted...\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Using Jimmer's Core API"}),"\n",(0,s.jsxs)(o.A,{groupId:"language",children:[(0,s.jsx)(l.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlCient = JSqlClient\n    .newBuilder()\n    # highlight-next-line\n    .setDumbBatchAcceptable(true)\n    ...other configurations omitted...\n    .build();\n"})})}),(0,s.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = sqlCient {\n    # highlight-next-line\n    setDumbBatchAcceptable(true)\n    ...other configurations omitted...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save Command Level Configuration ",(0,s.jsx)(n.em,{children:"(recommended)"})]}),"\n",(0,s.jsxs)(o.A,{groupId:"language",children:[(0,s.jsx)(l.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"List<Book> books = ...omitted...;\n\nsqlClient\n    .saveEntitiesCommand(books)\n    // highlight-next-line\n    .setDumbBatchAcceptable(true)\n    .execute();\n"})})}),(0,s.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val books = ...omitted...;\n\nsqlClient.saveEntities(books) {\n    // highlight-next-line\n    setDumbBatchAcceptable(true)\n}\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can also use the simpler parameterless call ",(0,s.jsx)(n.code,{children:"setDumbBatchAcceptable()"})]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Explicitly indicating acceptance of dumb batch operations will result in substantial loss of functionality, so it's more recommended to enable it at the save command level"})}),"\n",(0,s.jsx)(n.h2,{id:"3-simple-examples",children:"3. Simple Examples"}),"\n",(0,s.jsx)(n.h3,{id:"31-specifying-object-ids",children:"3.1 Specifying Object IDs"}),"\n",(0,s.jsxs)(n.p,{children:["Assuming ",(0,s.jsx)(n.code,{children:"jimmer.explicit-batch-enabled"})," has been specified, execute the following code:"]}),"\n",(0,s.jsxs)(o.A,{groupId:"language",children:[(0,s.jsx)(l.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'List<Book> books = Arrays.asList(\n    Immutables.createBook(draft -> {\n        draft.setId(11L);\n        draft.setPrice(new BigDecimal("59.99"));\n    }),\n    Immutables.createBook(draft -> {\n        draft.setId(12L);\n        draft.setPrice(new BigDecimal("68.99"));\n    })\n);\n\nsqlClient\n    .saveEntitiesCommand(books)\n    .setMode(SaveMode.UPDATE_ONLY)\n    // highlight-next-line\n    .setDumbBatchAcceptable()\n    .execute();\n'})})}),(0,s.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val books = listOf(\n    Book {\n        id = 11L\n        price = BigDecimal("59.99")\n    },\n    Book {\n        id = 12L\n        price = BigDecimal("68.99")\n    }\n)\n\nsqlClient.updateEntities(books) {\n    // highlight-next-line\n    setDumbBatchAcceptable()\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"In this case, Jimmer will generate batch operation SQL for MySQL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset PRICE = ?\nwhere ID = ?\n-- highlight-next-line\n/* batch-0: [59.99, 11] */\n-- highlight-next-line\n/* batch-0: [57.99, 12] */\n"})}),"\n",(0,s.jsx)(n.h3,{id:"32-not-specifying-object-ids",children:"3.2 Not Specifying Object IDs"}),"\n",(0,s.jsxs)(n.p,{children:["Assuming ",(0,s.jsx)(n.code,{children:"jimmer.explicit-batch-enabled"})," has been specified, execute the following code:"]}),"\n",(0,s.jsxs)(o.A,{groupId:"language",children:[(0,s.jsx)(l.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'List<Book> books = Arrays.asList(\n    Immutables.createBook(draft -> {\n        // highlight-next-line\n        // No id\n        draft.setName("SQL in Action");\n        draft.setEdition(4);\n        draft.setPrice(new BigDecimal("59.99"));\n        draft.setStoreId(2L);\n    }),\n    Immutables.createBook(draft -> {\n        // highlight-next-line\n        // No id\n        draft.setName("LINQ in Action");\n        draft.setEdition(5);\n        draft.setPrice(new BigDecimal("68.99"));\n        draft.setStoreId(2L);\n    })\n);\n\nList<Book> insertedBooks = sqlClient\n    .saveEntitiesCommand(books)\n    .setMode(SaveMode.INSERT_ONLY)\n    .setDumbBatchAcceptable()\n    .execute()\n    .getItems()\n    .stream()\n    .map(BatchSaveResult.Item::getModifiedEntity)\n    .collect(Collectors.toList());\nfor (Book insertedBook : insertedBooks) {\n    System.out.println(insertedBook);\n}\n'})})}),(0,s.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val books = listOf(\n    Book {\n        // highlight-next-line\n        // No id\n        name = "SQL in Action"\n        edtion = 4\n        price = BigDecimal("59.99")\n        storeId = 2L\n    },\n    Book {\n        // highlight-next-line\n        // No id\n        name = "LINQ in Action"\n        edtion = 5\n        price = BigDecimal("68.99")\n        storeId = 2L\n    }\n)\n\nval insertedBooks = \n    sqlClient.insertEntities(books) {\n        setDumbBatchAcceptable()\n    }.items.map { \n        it.modifiedEntity \n    }\nfor (insertedBook in insertedBooks) {\n    println(insertedBook);\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"In this case, Jimmer will generate batch operation SQL for MySQL:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    NAME, EDITION, PRICE, STORE_ID\n) values(\n    ?, ?, ?, ?\n)\n-- highlight-next-line\n/* batch-0: [SQL in Action, 4, 59.99, 2] */\n-- highlight-next-line\n/* batch-0: [LINQ in Action, 5, 57.99, 2] */\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The output is as follows ",(0,s.jsx)(n.em,{children:"(formatted for readability)"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    // highlight-next-line\n    // No id\n    "name":"SQL in Action",\n    "edition":4,\n    "price":59.99,\n    "store":{"id":2}\n}\n{\n    // highlight-next-line\n    // No id\n    "name":"LINQ in Action",\n    "edition":5,\n    "price":68.99,\n    "store":{"id":2}\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Here we see the first instance of lost functionality - after saving, the objects still have no ids, and we cannot know what ids the database assigned to the newly inserted data."}),(0,s.jsx)(n.p,{children:"This is a substantial loss of functionality, which is why Jimmer requires developers to explicitly configure that dumb batch operations are acceptable, and recommends doing so at the command level."})]}),"\n",(0,s.jsx)(n.h2,{id:"4-complex-cases",children:"4. Complex Cases"}),"\n",(0,s.jsx)(n.p,{children:"Even when users have completed all the configurations to enable batch operations for MySQL, Jimmer only tries to use batch operations when possible but does not guarantee their use."}),"\n",(0,s.jsx)(n.p,{children:"This is because dumb batch operations don't automatically populate ids for objects lacking id property. If such an object has other associated objects, the missing id will make it impossible to manage these associations."}),"\n",(0,s.jsx)(n.p,{children:"Therefore, Jimmer specifies conditions for enabling MySQL batch queries:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowSpan:4,children:(0,s.jsx)(n.p,{children:"OR"})}),(0,s.jsx)("td",{colSpan:2,children:(0,s.jsx)(n.p,{children:"Current object has an id"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowSpan:3,children:(0,s.jsx)(n.p,{children:"AND"})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Current object is not a pre-associated object of other objects"})})]}),(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:(0,s.jsx)(n.p,{children:"Current object has no deeper post-associations"})})}),(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["If the current object is a post-associated object of others, the association save mode is not ",(0,s.jsx)(n.code,{children:"REPLACE"})]}),(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["That mens no ",(0,s.jsx)(n.a,{href:"./association/dissociation",children:"dissociation operations"})]}),"\n"]})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["Assuming ",(0,s.jsx)(n.code,{children:"jimmer.explicit-batch-enabled"})," has been specified, here's the code to insert a data structure with depth 2:"]}),"\n",(0,s.jsxs)(o.A,{groupId:"language",children:[(0,s.jsx)(l.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'List<BookStore> stores = Arrays.asList(\n    Immutables.createBookStore(draft -> {\n        draft.setName("MANNING");\n        draft.addIntoBooks(book -> {\n            book.setName("SQL in Action");\n            book.setEdition(1);\n            book.setPrice(new BigDecimal("49.9"));\n        });\n        draft.addIntoBooks(book -> {\n            book.setName("LINQ in Action");\n            book.setEdition(1);\n            book.setPrice(new BigDecimal("39.9"));\n        });\n    }),\n    Immutables.createBookStore(draft -> {\n        draft.setName("AMAZON");\n        draft.addIntoBooks(book -> {\n            book.setName("C++ Primer");\n            book.setEdition(5);\n            book.setPrice(new BigDecimal("44.02"));\n        });\n        draft.addIntoBooks(book -> {\n            book.setName("Programming RUST");\n            book.setEdition(1);\n            book.setPrice(new BigDecimal("71.99"));\n        });\n    })\n);\n\nsqlClient\n    .saveEntitiesCommand(stores)\n    .setMode(SaveMode.INSERT_ONLY)\n    .setAssociatedModeAll(AssociatedSaveMode.APPEND)\n    // highlight-next-line\n    .setDumbBatchAcceptable()\n    .execute();\n'})})}),(0,s.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val stores = listOf(\n    BookStore {\n        name = "MANNING"\n        books().addBy {\n            name = "SQL in Action"\n            edition = 1\n            price = BigDecimal("49.9")\n        }\n        books().addBy {\n            name = "LINQ in Action"\n            edition = 1\n            price = BigDecimal("39.9")\n        }\n    },\n    BookStore {\n        name = "AMAZON"\n        books().addBy {\n            name = "C++ Primer"\n            edition = 5\n            price = BigDecimal("44.02")\n        }\n        books().addBy {\n            name = "Programming RUST"\n            edition = 1\n            price = BigDecimal("71.99")\n        }\n    }\n)\n\nsqlClient.insertEntities(stores) {\n    // highlight-next-line\n    setDumbBatchAcceptable()\n}\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"Obviously:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For first-level ",(0,s.jsx)(n.code,{children:"BookStore"})," objects, we must get their ids after insertion to establish associations with second-level objects. Therefore, MySQL batch operations cannot be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For second-level ",(0,s.jsx)(n.code,{children:"Book"})," objects, since they are the deepest associated objects, we don't need their ids after insertion. Therefore, MySQL batch operations can be used."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Two SQL statements will be generated:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["INSERT operation for two root objects ",(0,s.jsx)(n.em,{children:"(batch operation must be abandoned)"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* MANNING */\n)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* AMAZON */\n)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["INSERT operation for 4 associated objects ",(0,s.jsx)(n.em,{children:"(using batch operation)"})]}),"\n",(0,s.jsx)(n.p,{children:"Assuming after saving the root objects in the previous SQL:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MANNING"}),"'s id is ",(0,s.jsx)(n.code,{children:"2"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AMAZON"}),"'s id is ",(0,s.jsx)(n.code,{children:"100"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following SQL is generated:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    NAME, EDITION, PRICE, STORE_ID\n) values(?, ?, ?, ?)\n/* batch-0: [SQL in Action, 1, 49.9, 2] */\n/* batch-1: [LINQ in Action, 1, 39.9, 2] */\n/* batch-2: [C++ Primer, 5, 44.02, 100] */\n/* batch-3: [Programming RUST, 1, 71.99, 100] */\n"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(96540),s=t(34164),a=t(23104),o=t(56347),l=t(205),r=t(57485),c=t(31682),d=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=u(e),[o,r]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,h]=p({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=c??b;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&r(j)}),[j]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),x(e)}),[h,x,a]),tabValues:a}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function f(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=r.indexOf(n),s=l[t].value;s!==i&&(c(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=r.indexOf(e.currentTarget)+1;n=r[t]??r[0];break}case"ArrowLeft":{const t=r.indexOf(e.currentTarget)-1;n=r[t]??r[r.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>r.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);