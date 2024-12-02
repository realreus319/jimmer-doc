"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3406],{89137:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"mutation/save-command/lock","title":"Optimistic/Pessimistic Lock","description":"Save commands support both optimistic lock and pessimistic lock.","source":"@site/docs/mutation/save-command/lock.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/lock","permalink":"/jimmer-doc/docs/mutation/save-command/lock","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/lock.mdx","tags":[],"version":"current","lastUpdatedAt":1729456376000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"Optimistic/Pessimistic Lock"},"sidebar":"tutorialSidebar","previous":{"title":"Associated Id Checking","permalink":"/jimmer-doc/docs/mutation/save-command/id-checking"},"next":{"title":"Other Features","permalink":"/jimmer-doc/docs/mutation/save-command/other"}}');var o=i(74848),s=i(28453),r=i(11470),l=i(19365);const a={sidebar_position:9,title:"Optimistic/Pessimistic Lock"},c=void 0,d={},h=[{value:"Optimistic Lock",id:"optimistic-lock",level:2},{value:"Modify Entity Types",id:"modify-entity-types",level:3},{value:"Demo",id:"demo",level:3},{value:"Pessimistic Lock",id:"pessimistic-lock",level:2},{value:"Without Pessimistic Lock",id:"without-pessimistic-lock",level:3},{value:"Enabling Pessimistic Lock",id:"enabling-pessimistic-lock",level:3}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Save commands support both optimistic lock and pessimistic lock."}),"\n",(0,o.jsx)(n.h2,{id:"optimistic-lock",children:"Optimistic Lock"}),"\n",(0,o.jsxs)(n.p,{children:["Jimmer supports optimistic lock via the ",(0,o.jsx)(n.code,{children:"@org.babyfish.jimmer.sql.Version"})," annotation."]}),"\n",(0,o.jsx)(n.h3,{id:"modify-entity-types",children:"Modify Entity Types"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Modify ",(0,o.jsx)(n.code,{children:"BookStore"})]}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="BookStore.java"',children:"@Entity\npublic interface BookStore {\n\n    // highlight-next-line    \n    @Version        \n    int version();\n\n    ...other properties omitted...\n}\n"})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookStore.kt"',children:"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @Version\n    val version: Int\n    \n    ...other properties omitted...\n}\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Modify ",(0,o.jsx)(n.code,{children:"Book"})]}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity    \npublic interface Book {\n\n    // highlight-next-line\n    @Version\n    int version();\n\n    ...other properties omitted...\n}\n"})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Version\n    val version: Int\n\n    ...other properties omitted...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"demo",children:"Demo"}),"\n",(0,o.jsx)(n.p,{children:"Characteristics of optimistic lock:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When inserting objects ",(0,o.jsx)(n.em,{children:"(whether explicitly doing INSERT, or UPSERT determined to be INSERT)"}),", the ",(0,o.jsx)(n.code,{children:"version"})," of the object will be inserted into the database."]}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'BookStore savedData = sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("44.99"));\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val savedData = sqlClient.save(\n    BookStore {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n'})})})]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["For INSERT operations, if the ",(0,o.jsx)(n.code,{children:"version"})," of the object is not assigned, Jimmer will automatically insert ",(0,o.jsx)(n.strong,{children:"0"}),"."]}),(0,o.jsxs)(n.p,{children:["If you cannot ascertain whether a UPSERT save command will ultimately be determined as ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"}),", you should insist on specifying the ",(0,o.jsx)(n.code,{children:"version"})," property."]}),(0,o.jsxs)(n.p,{children:["The following example assumes we know for sure the ",(0,o.jsx)(n.code,{children:"save"})," will be determined as ",(0,o.jsx)(n.code,{children:"INSERT"})," rather than ",(0,o.jsx)(n.code,{children:"UPDATE"}),", so the ",(0,o.jsx)(n.code,{children:"version"})," properties are not specified."]})]}),"\n",(0,o.jsx)(n.p,{children:"No ids are specified so jimmer determines their existence by their key properties."}),"\n",(0,o.jsx)(n.p,{children:"Assuming none of the objects exist, 3 new records will be inserted."}),"\n",(0,o.jsxs)(n.p,{children:["No ",(0,o.jsx)(n.code,{children:"version"})," properties are specified, so they are filled with ",(0,o.jsx)(n.code,{children:"0"})," automatically."]}),"\n",(0,o.jsxs)(n.p,{children:["The final printed result will be ",(0,o.jsx)(n.em,{children:"(formatted for readability)"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id":100,\n    "name":"TURING",\n    // highlight-next-line\n    "version":0,\n    "books":[\n        {\n            "id":100,\n            "name":"Introduction to Algorithms",\n            "edition":3,\n            "price":44.99,\n            // highlight-next-line\n            "version":0,\n            "store":{\n                "id":100\n            }\n        },\n        {\n            "id":101,\n            "name":"The Pragmatic Programmer",\n            "edition":2,\n            "price":39.99,\n            // highlight-next-line\n            "version":0,\n            "store":{\n                "id":100\n            }\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Of course, if the user specifies ",(0,o.jsx)(n.code,{children:"version"})," for these objects, the specified values rather than 0 will be inserted."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When modifying objects ",(0,o.jsx)(n.em,{children:"(whether explicitly doing UPDATE, or UPSERT determined to be UPDATE)"}),", Jimmer will compare the ",(0,o.jsx)(n.code,{children:"version"})," passed by the user and the existing ",(0,o.jsx)(n.code,{children:"version"})," in the database for each object. If they differ, an exception will be thrown."]}),"\n",(0,o.jsx)(n.p,{children:"Let's modify the code a bit and execute again:"}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'BookStore savedData = sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            // highlight-next-line\n            draft.setVersion(0);\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("54.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n\n                // illegal version\n                // highlight-next-line\n                book.setVersion(9999);\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val savedData = sqlClient.save(\n    BookStore {\n        name = "TURING"\n        // highlight-next-line\n        version = 0\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n            // highlight-next-line\n            version = 0\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n\n            // illegal version\n            // highlight-next-line\n            version = 9999\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n'})})})]}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["For ",(0,o.jsx)(n.code,{children:"UPDATE"})," operations, if the ",(0,o.jsx)(n.code,{children:"version"})," of the object is not assigned, Jimmer will throw an exception."]}),(0,o.jsxs)(n.p,{children:["If you cannot determine whether a UPSERT save command will ultimately be ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"}),", you should insist on specifying the ",(0,o.jsx)(n.code,{children:"version"})," property."]})]}),"\n",(0,o.jsx)(n.p,{children:"Execute, since data already exists, the 3 objects will be updated."}),"\n",(0,o.jsxs)(n.p,{children:["Obviously, the last book's ",(0,o.jsx)(n.code,{children:"version"})," ",(0,o.jsx)(n.code,{children:"9999"})," is illegal. The above code will result in the following exception:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Exception Type: ",(0,o.jsx)(n.code,{children:"org.babyfish.jimmer.sql.runtime.SaveException"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Exception Code: ",(0,o.jsx)(n.code,{children:"org.babyfish.jimmer.sql.runtime.SaveErrorCode.ILLEGAL_VERSION"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Exception Message:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:'Save error caused by the path: "<root>.books": Cannot update the entity whose type is "org.doc.j.model.Book", id is "101" and version is "9999"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Let's modify the code again to use the correct ",(0,o.jsx)(n.code,{children:"version"})," for all objects:"]}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'BookStore savedData = sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            // highlight-next-line\n            draft.setVersion(0);\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("54.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val savedData = sqlClient.save(\n    BookStore {\n        name = "TURING"\n        // highlight-next-line\n        version = 0\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n            // highlight-next-line\n            version = 0\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n            // highlight-next-line\n            version = 0\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The final printed result will be ",(0,o.jsx)(n.em,{children:"(formatted for readability)"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id":100,\n    "name":"TURING",\n    // highlight-next-line\n    "version":1,\n    "books":[\n        {\n            "id":100,\n            "name":"Introduction to Algorithms",\n            "edition":3,\n            "price":54.99,\n            // highlight-next-line\n            "version":1,\n            "store":{\n                "id":100\n            }\n        },\n        {\n            "id":101,\n            "name":"The Pragmatic Programmer",\n            "edition":2,\n            "price":39.99,\n            // highlight-next-line\n            "version":1,\n            "store":{\n                "id":100\n            }\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"As you can see, the version is incremented by 1 automatically after data modification."}),(0,o.jsx)(n.p,{children:"In real projects, the version number of optimistic lock is often a hidden field in the form UI. If the form UI does not automatically redirect to other UI after saving, but keeps the UI unchanged to support multiple submissions, the hidden field should be updated with such return info after each successful save."})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"pessimistic-lock",children:"Pessimistic Lock"}),"\n",(0,o.jsx)(n.p,{children:"Unlike optimistic lock, pessimistic locks are very short-lived, only valid within a single jdbc transaction."}),"\n",(0,o.jsx)(n.p,{children:"Normally, Jimmer generates some query SQL to aid save command execution, such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determining whether a ",(0,o.jsx)(n.code,{children:"UPSERT"})," should ultimately be ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determining which associated objects need to be ",(0,o.jsx)(n.a,{href:"./dissociation",children:"dissociated"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Next, we compare the differences in these query SQL between using and not using pessimistic lock."}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["In the previous examples, to demonstrate optimistic lock, we assumed the ",(0,o.jsx)(n.code,{children:"BookStore"})," and ",(0,o.jsx)(n.code,{children:"Book"})," types both defined a ",(0,o.jsx)(n.code,{children:"version"})," property."]}),(0,o.jsx)(n.p,{children:"In the following examples to demonstrate pessimistic lock, we no longer make that assumption."})]}),"\n",(0,o.jsx)(n.h3,{id:"without-pessimistic-lock",children:"Without Pessimistic Lock"}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("44.99"));\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n            });\n        })\n);\n'})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'sqlClient.save(\n    BookStore {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n)\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"This generates 6 SQL statements:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the book store exists"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME\nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.NAME = ? /* TURING */ \n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determine ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})," based on previous query"]}),"\n",(0,o.jsx)(n.p,{children:"insert or update, omitted"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the 1st book exists"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* Introduction to Algorithms */\n    and\n        tb_1_.EDITION = ? /* 3 */\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determine ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})," based on previous query"]}),"\n",(0,o.jsx)(n.p,{children:"insert or update, omitted"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the 2nd book exists"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* The Pragmatic Programmer */\n    and\n        tb_1_.EDITION = ? /* 2 */\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determine ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})," based on previous query"]}),"\n",(0,o.jsx)(n.p,{children:"insert or update, omitted"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{}),(0,o.jsx)(n.p,{children:"These query statements are used to make conditional judgments to determine how to generate subsequent SQL."}),(0,o.jsx)(n.p,{children:"However, without pessimistic lock, the conditions and assumptions made via these queries can potentially be invalidated by concurrent operations, leading to exceptions when executing subsequent SQL."}),(0,o.jsx)(n.p,{children:"To avoid such concurrency issues, pessimistic lock can be enabled. Next we discuss how to implement pessimistic lock."})]}),"\n",(0,o.jsx)(n.h3,{id:"enabling-pessimistic-lock",children:"Enabling Pessimistic Lock"}),"\n",(0,o.jsx)(n.p,{children:"There are two ways to enable pessimistic lock:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Global configuration"}),"\n",(0,o.jsx)(n.p,{children:"There are two ways to enable pessimistic lock globally:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Via Spring Boot Starter configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Modify ",(0,o.jsx)(n.code,{children:"application.yml"})," ",(0,o.jsxs)(n.em,{children:["(or ",(0,o.jsx)(n.code,{children:"application.properties"}),")"]}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"jimmer:\n    default-lock-mode: PESSIMISTIC\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Via low-level API configuration"}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDefaultLockMode(LockMode.PESSIMISTIC)\n    ...other configurations omitted...\n    .build();\n"})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDefaultLockMode(LockMode.PESSIMISTIC)\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsxs)(n.p,{children:["This change modifies the global setting, and the original default value ",(0,o.jsx)(n.code,{children:"OPTIMISTIC"})," is compromised.\nThis means that unless a specific save command is set to optimistic locking mode,\nthe optimistic locking functionality described earlier disappears."]}),(0,o.jsx)(n.p,{children:"Therefore, in most cases, global configuration is not recommended, and the command-level configuration\nthat will be introduced later is more recommended."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Command-level configuration"}),"\n",(0,o.jsx)(n.p,{children:"Unlike global configuration affecting all save commands, command-level configuration only affects the current save command."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If pessimistic lock is already enabled globally, no need for command-level configuration."})}),"\n",(0,o.jsxs)(n.p,{children:["Calling ",(0,o.jsx)(n.code,{children:"setLockMode(LockMode)"})," on the save command enables pessimistic lock:"]}),"\n",(0,o.jsxs)(r.A,{groupId:"language",children:[(0,o.jsx)(l.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'sqlClient\n        .getEntities()\n        .saveCommand(\n                Immutables.createBookStore(draft -> {\n                    draft.setName("TURING");\n                    draft.addIntoBooks(book -> {\n                        book.setName("Introduction to Algorithms");\n                        book.setEdition(3);\n                        book.setPrice(new BigDecimal("44.99"));\n                    });\n                    draft.addIntoBooks(book -> {\n                        book.setName("The Pragmatic Programmer");\n                        book.setEdition(2);\n                        book.setPrice(new BigDecimal("39.99"));\n                    });\n                })\n        )\n        // highlight-next-line\n        .setLockMode(LockMode.PESSIMISTIC)\n        .execute();\n'})})}),(0,o.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'sqlClient.save(\n    BookStore {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n) {\n    // highlight-next-line\n    setLockMode(LockMode.PESSIMISTIC)\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Once pessimistic lock is enabled, the generated query statements will change significantly:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the book store exists"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME \nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.NAME = ? /* TURING */\n/* highlight-next-line */    \nfor update\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determine ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})," based on previous query"]}),"\n",(0,o.jsx)(n.p,{children:"insert or update, omitted"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the 1st book exists"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* Introduction to Algorithms */\n    and\n        tb_1_.EDITION = ? /* 3 */\n/* highlight-next-line */\nfor update\n\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determine ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})," based on previous query"]}),"\n",(0,o.jsx)(n.p,{children:"insert or update, omitted"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Check if the 2nd book exists"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID, \n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* The Pragmatic Programmer */\n    and \n        tb_1_.EDITION = ? /* 2 */\n/* highlight-next-line */\nfor update\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Determine ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})," based on previous query"]}),"\n",(0,o.jsx)(n.p,{children:"insert or update, omitted"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var t=i(18215);const o={tabItem:"tabItem_Ymn6"};var s=i(74848);function r(e){let{children:n,hidden:i,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,r),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>I});var t=i(96540),o=i(18215),s=i(23104),r=i(56347),l=i(205),a=i(57485),c=i(31682),d=i(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:o}}=e;return{value:n,label:i,attributes:t,default:o}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function u(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const o=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,a.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:i=!1,groupId:o}=e,s=m(e),[r,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,h]=p({queryString:i,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(i);return[o,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:o}),g=(()=>{const e=c??x;return u({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&a(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(74848);function f(e){let{className:n,block:i,selectedValue:t,selectValue:r,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,i=a.indexOf(n),o=l[i].value;o!==t&&(c(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=a.indexOf(e.currentTarget)+1;n=a[i]??a[0];break}case"ArrowLeft":{const i=a.indexOf(e.currentTarget)-1;n=a[i]??a[a.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function k(e){let{lazy:n,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(k,{...n,...e})]})}function I(e){const n=(0,j.A)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);