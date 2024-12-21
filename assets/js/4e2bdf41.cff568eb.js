"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4389],{37616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"mutation/save-command/association/owner","title":"Owner side","description":"Basic Concepts","source":"@site/docs/mutation/save-command/association/owner.mdx","sourceDirName":"mutation/save-command/association","slug":"/mutation/save-command/association/owner","permalink":"/jimmer-doc/docs/mutation/save-command/association/owner","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/association/owner.mdx","tags":[],"version":"current","lastUpdatedAt":1734792351000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Owner side"},"sidebar":"tutorialSidebar","previous":{"title":"Association classification","permalink":"/jimmer-doc/docs/mutation/save-command/association/classification"},"next":{"title":"Associated Save Mode","permalink":"/jimmer-doc/docs/mutation/save-command/association/associated-save-mode"}}');var o=t(74848),r=t(28453),i=t(11470),a=t(19365);const l={sidebar_position:2,title:"Owner side"},c=void 0,d={},h=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"1. Automatically Setting Reverse Associations for Child Objects",id:"1-automatically-setting-reverse-associations-for-child-objects",level:2},{value:"2. Configuring Whether Different Parent Objects Can Snatch for Child Objects",id:"2-configuring-whether-different-parent-objects-can-snatch-for-child-objects",level:2},{value:"Conservative Default Behavior",id:"conservative-default-behavior",level:3},{value:"Overriding Default Behavior Without Restrictions",id:"overriding-default-behavior-without-restrictions",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,o.jsxs)(n.p,{children:["The owned side only has ",(0,o.jsx)(n.code,{children:"@OneToMany"})," or ",(0,o.jsx)(n.code,{children:"@OneToOne"})," objects with ",(0,o.jsx)(n.code,{children:"mappedBy"}),". Taking ",(0,o.jsx)(n.code,{children:"@OneToMany"})," as an example:"]}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = true)\n    List<Book> books();\n}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = true)\n    val books: List<Book>\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"This association has a special functionality:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Automatically sets reverse associations for child objects"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configures whether different parent objects can snatch for child objects"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"1-automatically-setting-reverse-associations-for-child-objects",children:"1. Automatically Setting Reverse Associations for Child Objects"}),"\n",(0,o.jsx)(n.p,{children:"Assume we have the following entity:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:'@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNode.kt"',children:'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"@Key"})," properties of ",(0,o.jsx)(n.code,{children:"TreeNode"})," are ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"parent"}),". Apart from explicitly accepting the persistence mode for wild objects, the object being saved needs to either:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Specify the ",(0,o.jsx)(n.code,{children:"TreeNode.id"})," property"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Specify both ",(0,o.jsx)(n.code,{children:"TreeNode.name"})," and ",(0,o.jsx)(n.code,{children:"TreeNode.parent"})," properties"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"However, the following code works normally:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'TreeNode rootNode = Immutables.createTreeNode(root -> {\n    root.setName("Root");\n    root.setParent(null);\n    root.addIntoChildNodes(child -> {\n        child.setName("Child-1");\n        // For non-root objects, no need to specify the `parent` property\n    });\n    root.addIntoChildNodes(child -> {\n        child.setName("Child-2");\n        // For non-root objects, no need to specify the `parent` property\n    });\n});\nsqlClient\n    .saveCommand(rootNode)\n    .setTargetTransferModeAll(TargetTransferMode.ALLOWED)\n    .execute();\n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val rootNode = TreeNode {\n    name = "Root"\n    parent = null\n    childNodes().addBy {\n        name = "Child-1"\n        // For non-root objects, \n        // no need to specify the `parent` property\n    }\n    childNodes().addBy {\n        name = "Child-2"\n        // For non-root objects, \n        // no need to specify the `parent` property\n    }\n}\nsqlClient.save(rootNode) {\n    setTargetTransferModeAll(TargetTransferMode.ALLOWED)\n}\n'})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"setTargetTransferModeAll(TargetTransferMode.ALLOWED)"})," is not the focus here, readers can ignore it for now."]}),"\n",(0,o.jsxs)(n.p,{children:["Here, although the root object ",(0,o.jsxs)(n.em,{children:["(",(0,o.jsx)(n.code,{children:"Root"}),")"]})," has both ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"parent"})," properties specified,\nfor non-root objects ",(0,o.jsxs)(n.em,{children:["(",(0,o.jsx)(n.code,{children:"Child-1"}),", ",(0,o.jsx)(n.code,{children:"Child-2"}),")"]}),", only the ",(0,o.jsx)(n.code,{children:"name"})," property is specified, while the ",(0,o.jsx)(n.code,{children:"parent"})," property is not."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"TreeNode.childNodes"})," property is the reverse association of the ",(0,o.jsx)(n.code,{children:"TreeNode.parent"})," property."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For the owning side of many-to-one ",(0,o.jsx)(n.em,{children:"(or one-to-one)"})," associations ",(0,o.jsxs)(n.em,{children:["(here ",(0,o.jsx)(n.code,{children:"TreeNode.parent"}),")"]}),",\nonce child objects are specified for the parent object through its inverse one-to-many ",(0,o.jsx)(n.em,{children:"(or one-to-one)"})," association ",(0,o.jsxs)(n.em,{children:["(here ",(0,o.jsx)(n.code,{children:"TreeNode.childNodes"}),")"]}),",\nthe parent object reference for each child object in the collection will be automatically set."]})}),"\n",(0,o.jsx)(n.p,{children:"In this example, the object tree that the user originally expected to save was:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "name":"Root",\n    "parent":null,\n    "childNodes":[\n        {"name":"Child-1"},\n        {"name":"Child-2"}\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Assuming the database assigns auto-number 100 to the root element after insertion, Jimmer will automatically adjust this tree to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "id": 100,\n    "name":"Root",\n    "parent":null,\n    "childNodes":[\n        {\n            "name":"Child-1",\n            // highlight-next-line\n            "parent": {"id": 100}\n        },\n        {\n            "name":"Child-2",\n            // highlight-next-line\n            "parent": {"id": 100}\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, once the parent object is saved, the ",(0,o.jsx)(n.code,{children:"TreeNode.parent"})," property of all child objects will be automatically set. That is, when the ",(0,o.jsx)(n.code,{children:"id"})," property is not specified:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["From Jimmer's perspective, both ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"parent"})," properties of all ",(0,o.jsx)(n.code,{children:"TreeNode"})," objects are specified, meaning all ",(0,o.jsx)(n.code,{children:"@Key"})," properties are specified"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["From the user's perspective, only the root object needs to specify both ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"parent"})," properties, while all other objects only need to specify the ",(0,o.jsx)(n.code,{children:"name"})," property"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The above example will generate three SQL statements:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Query whether the root object exists based on ",(0,o.jsx)(n.code,{children:"@Key"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"Purpose: COMMAND(NULL_NOT_DISTINCT_REQUIRED)\nselect\n    tb_1_.NODE_ID,\n    tb_1_.NAME,\n    tb_1_.PARENT_ID\nfrom TREE_NODE tb_1_\nwhere\n        tb_1_.PARENT_ID is null\n    and\n        tb_1_.NAME = ? /* Root */\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here, the database's own ",(0,o.jsx)(n.code,{children:"UPSERT"})," capability is not used, instead an additional query is made to determine whether the subsequent operation should be ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["This is because the database's own ",(0,o.jsx)(n.code,{children:"UPSERT"})," capability relies on unique constraints ",(0,o.jsx)(n.em,{children:"(or unique indexes)"}),", and here, the ",(0,o.jsx)(n.code,{children:"parent"})," property of the root object being saved is null,\nand not all databases have the ability to define null behavior for unique constraints."]}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, by default, if the ",(0,o.jsx)(n.code,{children:"@Key"})," property of the object being saved is null, Jimmer will give up using the database's own UPSERT capability,\nexecute an additional query to determine whether the subsequent operation should be ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"}),", and report ",(0,o.jsx)(n.code,{children:"QueryReason.NULL_NOT_DISTINCT_REQUIRED"})," to developers."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Some databases, such as Postgres, can define null behavior for unique constraints.\nHow to solve this problem in such databases is not the focus of this article, please refer to the documentation comments of ",(0,o.jsx)(n.code,{children:"QueryReason.NULL_NOT_DISTINCT_REQUIRED"})," to learn more."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Assuming the above query determines that the object being saved does not exist in the database, simply insert the root object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"insert into TREE_NODE(NAME, PARENT_ID) \nvalues(?, ?)\n/* batch-0: [Root, DbNull{type=long}] */\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Save child objects ",(0,o.jsx)(n.em,{children:"(assuming the id is known to be 100 after saving the root object)"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"merge into TREE_NODE(\n    NAME, PARENT_ID\n) key(\n    NAME, PARENT_ID\n) values(?, ?)\n/* batch-0: [Child-1, 100] */\n/* batch-1: [Child-2, 100] */\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"2-configuring-whether-different-parent-objects-can-snatch-for-child-objects",children:"2. Configuring Whether Different Parent Objects Can Snatch for Child Objects"}),"\n",(0,o.jsx)(n.h3,{id:"conservative-default-behavior",children:"Conservative Default Behavior"}),"\n",(0,o.jsx)(n.p,{children:"Let's look at an example first:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'BookStore store = Immutables.createBookStore(draft -> {\n    draft.setName("MANNING");\n    draft.addIntoBooks(book -> {\n        book.setId(12L);\n    });\n    draft.addIntoBooks(book -> {\n        book.setId(1L);\n    });\n});\nsqlClient.save(store);\n'})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val store = BookStore {\n    name = "MANNING"\n    books().addBy {\n        id = 12L\n    }\n    books().addBy {\n        id = 1L\n    }\n}\nsqlClient.save(store)\n'})})})]}),"\n",(0,o.jsx)(n.p,{children:"Executing this code will generate the following SQL and result in an exception:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Saving the root object ",(0,o.jsx)(n.code,{children:"BookStore"}),":"]}),"\n",(0,o.jsxs)(i.A,{groupId:"database",children:[(0,o.jsx)(a.A,{value:"h2",label:"H2",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"merge into BOOK_STORE(\n    NAME\n) key(\n    NAME\n) values(\n    ? /* MANNING */\n)\n"})})}),(0,o.jsx)(a.A,{value:"mysql",label:"Mysql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* MANNING */\n) on duplicate key update\n    /* fake update to return all ids */ ID = last_insert_id(ID)\n"})})}),(0,o.jsx)(a.A,{value:"postgres",label:"Postgres",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* MANNING */\n) on conflict(\n    NAME\n) do update set\n    /* fake update to return all ids */ NAME = execluded.NAME\nreturning ID\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Saving the child objects ",(0,o.jsx)(n.code,{children:"Book"}),":"]}),"\n",(0,o.jsxs)(i.A,{groupId:"database",children:[(0,o.jsx)(a.A,{value:"h2",label:"H2",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"merge into BOOK(\n    ID, STORE_ID\n) key(ID) values(?, ?)\n/* batch-0: [12, 2] */\n/* batch-1: [1, 2] */\n"})})}),(0,o.jsxs)(a.A,{value:"mysql",label:"Mysql",children:[(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["By default, MySQL batch operations are not used.\nFor specific details, please refer to ",(0,o.jsx)(n.a,{href:"../mysql",children:"MySQL Issues"})]})}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    ID, STORE_ID\n) values(\n    ? /* 12 */, ? /* 2 */\n) on duplicate key update\n    STORE_ID = VALUES(STORE_ID)\n\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    ID, STORE_ID\n) values(\n    ? /* 1 */, ? /* 2 */\n) on duplicate key update\n    STORE_ID = VALUES(STORE_ID)\n"})}),"\n"]}),"\n"]})]}),(0,o.jsx)(a.A,{value:"postgres",label:"Postgres",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    ID, STORE_ID\n) values(\n    ?, ?\n) on conflict(\n    ID\n) do update set\n    STORE_ID = execluded.STORE_ID\nreturning ID\n/* batch-0: [12, 2] */\n/* batch-1: [1, 2] */\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Strangely, even though the id property of child objects is specified ",(0,o.jsxs)(n.em,{children:["(which usually means Jimmer will utilize the database's own ",(0,o.jsx)(n.code,{children:"UPSERT"})," capability)"]}),",\nJimmer still tries to determine whether the subsequent operation should be ",(0,o.jsx)(n.code,{children:"INSERT"})," or ",(0,o.jsx)(n.code,{children:"UPDATE"})," through a query, rather than using the database's own ",(0,o.jsx)(n.code,{children:"UPSERT"})," capability.\nMore importantly, Jimmer reports ",(0,o.jsx)(n.code,{children:"QueryReason.TARGET_NOT_TRANSFERABLE"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Finally, the above code will result in the following exception:"}),"\n",(0,o.jsxs)(i.A,{groupId:"database",children:[(0,o.jsx)(a.A,{value:"h2",label:"H2",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    STORE_ID = null\nwhere\n    STORE_ID = ?\nand\n    not (\n        ID = any(?)\n    )\n/* batch-0: [2, [12, 1]] */\n"})})}),(0,o.jsx)(a.A,{value:"mysql",label:"Mysql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    STORE_ID = null\nwhere\n    STORE_ID = ? /* 2 */\nand\n    ID not in(\n        ? /* 12 */,\n        ? /* 1 */\n    )\n"})})}),(0,o.jsx)(a.A,{value:"postgres",label:"Postgres",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset\n    STORE_ID = null\nwhere\n    STORE_ID = ?\nand\n    not (\n        ID = any(?)\n    )\n/* batch-0: [2, [12, 1]] */\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Book.store"})," is a many-to-one association, a ",(0,o.jsx)(n.code,{children:"Book"})," object can only belong to one ",(0,o.jsx)(n.code,{children:"BookStore"})," object and cannot belong to multiple ",(0,o.jsx)(n.code,{children:"BookStore"})," objects simultaneously."]}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, saving the data structure through the inverse one-to-many association ",(0,o.jsx)(n.code,{children:"BookStore.books"})," establishes an association between the current ",(0,o.jsx)(n.code,{children:"BookStore"})," parent object and another existing ",(0,o.jsx)(n.code,{children:"Book"})," object.\nIf the ",(0,o.jsx)(n.code,{children:"Book"})," object already belongs to another parent object, it will cause the current parent object to snatch for the child object from other parent objects. In other words, the child object migrates between different parent objects."]}),"\n",(0,o.jsx)(n.p,{children:"If this is expected behavior by the developers, then there's no problem. However, if this is not expected behavior, it may lead to unintended oversights."}),"\n",(0,o.jsx)(n.p,{children:"By default, Jimmer adopts a conservative strategy that prohibits child objects from transfering between different parent objects."}),"\n",(0,o.jsxs)(n.p,{children:["In this example, attempting to associate ",(0,o.jsx)(n.code,{children:"BookStore(MANNING)"})," with ",(0,o.jsx)(n.code,{children:"Book(12)"})," and ",(0,o.jsx)(n.code,{children:"Book(1)"}),",\nJimmer executes an additional query with ",(0,o.jsx)(n.code,{children:"QueryReason.TARGET_NOT_TRANSFERABLE"})," to check if any child objects are transfering between different parent objects."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Book(12)"})," already belongs to ",(0,o.jsx)(n.code,{children:"BookStore(MANNING)"}),", no transfer occurs, no problem"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Book(1)"})," doesn't belong to ",(0,o.jsx)(n.code,{children:"BookStore(MANNING)"})," but belongs to ",(0,o.jsx)(n.code,{children:"BookStore(O'REILLY)"}),", transfer occurs, therefore an exception is thrown."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The default behavior is very conservative. While it prevents competition for child objects between different parent objects ",(0,o.jsx)(n.em,{children:"(if developers consider such unintended competition harmful to business)"}),",\nit leads to additional queries and doesn't fully utilize the database's own ",(0,o.jsx)(n.code,{children:"UPSERT"})," capability, resulting in suboptimal performance."]}),"\n",(0,o.jsx)(n.p,{children:"If you believe better performance is more important than this conservative defensive behavior, Jimmer provides additional configuration to change this behavior."}),"\n",(0,o.jsx)(n.h3,{id:"overriding-default-behavior-without-restrictions",children:"Overriding Default Behavior Without Restrictions"}),"\n",(0,o.jsx)(n.p,{children:"To prioritize performance and remove these restrictions, there are two methods:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Save command level configuration, which can be divided into two types:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Precise configuration, removing restrictions for specific associations:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"BookStore store = ...omitted...;\nsqlClient\n    .saveCommand(store)\n    // highlight-next-line\n    .setTargetTransferMode(\n        BookStoreProps.BOOKS, \n        TargetTransferMode.ALLOWED\n    )\n    .execute();\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val store = BookStore {...omitted...}\nsqlClient.save(store) {\n    // highlight-next-line\n    setTargetTransferMode(\n        BookStore::books, \n        TargetTransferMode.ALLOWED\n    )\n}\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Blind configuration, removing restrictions for all associations:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"BookStore store = ...omitted...;\nsqlClient\n    .saveCommand(store)\n    // highlight-next-line\n    .setTargetTransferModeAll(\n        TargetTransferMode.ALLOWED\n    )\n    .execute();\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val store = BookStore {...omitted...}\nsqlClient.save(store) {\n    // highlight-next-line\n    setTargetTransferModeAll(\n        TargetTransferMode.ALLOWED\n    )\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Whether precise or blind configuration, the last parameter is the ",(0,o.jsx)(n.code,{children:"TargetTransferMode"})," enum, which has three values:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ALLOWED"}),": Allows child object transfer and tries to use the database's own ",(0,o.jsx)(n.code,{children:"UPSERT"})," capability whenever possible"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"NOT_ALLOWED"}),": Prohibits child object transfer, initiates additional queries with ",(0,o.jsx)(n.code,{children:"QueryReason.TARGET_NOT_TRANSFERABLE"})," for verification.\nIf child object transfer occurs, throws an exception"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"AUTO"})," (default): Current configuration is invalid, refers to lower priority configuration"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For precise configuration, refers to blind configuration"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For blind configuration, refers to global configuration"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Global configuration, which can be divided into two types:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Global configuration based on Jimmer API:"}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlCient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setTargetTransferable(true)\n    ...other configurations omitted...\n    .build();\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = sqlClient {\n    // highlight-next-line\n    setTargetTransferable(true)\n    ...other configurations omitted...\n}\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Global configuration based on Spring Boot if using Jimmer's spring-boot-starter:"}),"\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.code,{children:"application.yml"})," as an example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",metastring:'title = "application.yml"',children:"jimmer:\n    // highlight-next-line\n    target-transferable: true\n    ...other configurations omitted...\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Once Jimmer is configured through any of the above methods to not restrict child object transfer for the ",(0,o.jsx)(n.code,{children:"BookStore.books"})," association, modify the code as follows:"]}),"\n",(0,o.jsxs)(i.A,{groupId:"language",children:[(0,o.jsx)(a.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"public interface Book {\n\n    @ManyToOne\n    @Nullable\n    // Not related to the current discussion, \n    // please ignore for now\n    // highlight-next-line\n    @OnDissociate(DissociateAction.SET_NULL)\n    BookStore store();\n\n    ...other code omitted...\n}\n"})})}),(0,o.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"public interface Book {\n\n    @ManyToOne\n    // Not related to the current discussion, \n    // please ignore for now\n    // highlight-next-line\n    @OnDissociate(DissociateAction.SET_NULL)\n    val store: BookStore?\n\n    ...other code omitted...\n}\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Re-executing the code will generate the following SQL:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Saving the root object:"}),"\n",(0,o.jsxs)(i.A,{groupId:"database",children:[(0,o.jsx)(a.A,{value:"h2",label:"H2",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"merge into BOOK_STORE(\n    NAME\n) key(\n    NAME\n) values(\n    ? /* MANNING */\n)\n"})})}),(0,o.jsx)(a.A,{value:"mysql",label:"Mysql",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* MANNING */\n) on duplicate key update\n    /* fake update to return all ids */ ID = last_insert_id(ID)\n"})})}),(0,o.jsx)(a.A,{value:"postgres",label:"Postgres",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* MANNING */\n) on conflict(\n    NAME\n) do update set\n    /* fake update to return all ids */ NAME = execluded.NAME\nreturning ID\n"})})})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Establishing associations between root object and child objects:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"merge into BOOK(\n    ID, STORE_ID\n) key(ID) values(?, ?)\n/* batch-0: [12, 2] */\n/* batch-1: [1, 2] */\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Breaking associations between root object and no longer needed child objects:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"update BOOK\nset\n    STORE_ID = null\nwhere\n    STORE_ID = ?\n    and\n    not (\n        ID = any(?)\n    )\n/* batch-0: [2, [12, 1]] */\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To demonstrate performance-priority scenarios to users, the examples\n",(0,o.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command",children:"jimmer-examples/java/save-command"}),"\nand\n",(0,o.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt",children:"jimmer-examples/kotlin/save-command-kt"}),"\nboth use global configuration to allow child object transfer."]})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(34164);const o={tabItem:"tabItem_Ymn6"};var r=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var s=t(96540),o=t(34164),r=t(23104),i=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=p({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),g=(()=>{const e=c??x;return j({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==s&&(c(n),i(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function N(e){const n=(0,m.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);