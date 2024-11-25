"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9027],{76609:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"mutation/save-command/lock","title":"\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501","description":"\u4fdd\u5b58\u6307\u4ee4\u652f\u6301\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/lock.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/lock","permalink":"/jimmer-doc/zh/docs/mutation/save-command/lock","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/lock.mdx","tags":[],"version":"current","lastUpdatedAt":1729456376000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501"},"sidebar":"tutorialSidebar","previous":{"title":"\u77ed\u5173\u8054id\u68c0\u67e5","permalink":"/jimmer-doc/zh/docs/mutation/save-command/id-checking"},"next":{"title":"\u5176\u5b83\u529f\u80fd","permalink":"/jimmer-doc/zh/docs/mutation/save-command/other"}}');var t=i(74848),l=i(28453),s=i(11470),o=i(19365);const a={sidebar_position:9,title:"\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501"},d=void 0,c={},h=[{value:"\u4e50\u89c2\u9501",id:"\u4e50\u89c2\u9501",level:2},{value:"\u4fee\u6539\u5b9e\u4f53\u7c7b\u578b",id:"\u4fee\u6539\u5b9e\u4f53\u7c7b\u578b",level:3},{value:"\u793a\u8303",id:"\u793a\u8303",level:3},{value:"\u60b2\u89c2\u9501",id:"\u60b2\u89c2\u9501",level:2},{value:"\u672a\u542f\u7528\u60b2\u89c2\u9501",id:"\u672a\u542f\u7528\u60b2\u89c2\u9501",level:3},{value:"\u542f\u7528\u60b2\u89c2\u9501",id:"\u542f\u7528\u60b2\u89c2\u9501",level:3}];function u(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"\u4fdd\u5b58\u6307\u4ee4\u652f\u6301\u4e50\u89c2\u9501\u548c\u60b2\u89c2\u9501\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4e50\u89c2\u9501",children:"\u4e50\u89c2\u9501"}),"\n",(0,t.jsxs)(e.p,{children:["Jimmer\u4f7f\u7528\u6ce8\u89e3",(0,t.jsx)(e.code,{children:"@org.babyfish.jimmer.sql.Version"}),"\u652f\u6301\u4e50\u89c2\u9501\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u4fee\u6539\u5b9e\u4f53\u7c7b\u578b",children:"\u4fee\u6539\u5b9e\u4f53\u7c7b\u578b"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u4fee\u6539",(0,t.jsx)(e.code,{children:"BookStore"})]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",metastring:'title="BookStore.java"',children:"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @Version\n    int version();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",metastring:'title="BookStore.kt"',children:"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @Version\n    val version: Int\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u4fee\u6539",(0,t.jsx)(e.code,{children:"Book"})]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Version\n    int version();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Version\n    val version: Int\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"\u793a\u8303",children:"\u793a\u8303"}),"\n",(0,t.jsx)(e.p,{children:"\u4e50\u89c2\u9501\u7684\u7279\u6027"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5f53\u63d2\u5165\u5bf9\u8c61\u65f6 ",(0,t.jsx)(e.em,{children:"(\u65e0\u8bba\u660e\u786e\u5730\u8fdb\u884cINSERT\u64cd\u4f5c\uff0c\u8fd8\u662fUPSERT\u64cd\u4f5c\u88ab\u5224\u5b9a\u4e3aINSERT)"}),"\uff0c\u5c06\u5bf9\u8c61\u7684",(0,t.jsx)(e.code,{children:"version"}),"\u63d2\u5165\u5230\u6570\u636e\u5e93\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4f8b\u5b50\u5982\u4e0b"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'BookStore savedData = sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("44.99"));\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:'val savedData = sqlClient.save(\n    BookStore {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n'})})})]}),"\n",(0,t.jsxs)(e.admonition,{type:"tip",children:[(0,t.jsxs)(e.p,{children:["\u5bf9\u63d2\u5165\u64cd\u4f5c\u800c\u8a00\uff0c\u5982\u679c\u5bf9\u8c61\u7684version\u5e76\u672a\u88ab\u8d4b\u503c\uff0cJimmer\u81ea\u52a8\u63d2\u5165",(0,t.jsx)(e.strong,{children:"0"}),"\u3002"]}),(0,t.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u65e0\u6cd5\u65ad\u8a00\u67d0\u4e2aUPSERT\u6a21\u5f0f\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u4f1a\u88ab\u5224\u5b9a\u4e3a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"}),"\uff0c\u5219\u5e94\u8be5\u575a\u6301\u6307\u5b9a",(0,t.jsx)(e.code,{children:"version"}),"\u5c5e\u6027\u3002"]}),(0,t.jsxs)(e.p,{children:["\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u57fa\u4e8e\u4e00\u4e2a\u5047\u8bbe\uff0c\u660e\u786e\u77e5\u9053",(0,t.jsx)(e.code,{children:"save"}),"\u64cd\u4f5c\u4e00\u5b9a\u4f1a\u88ab\u5224\u5b9a\u4e3a",(0,t.jsx)(e.code,{children:"INSERT"}),"\uff0c\u800c\u975e",(0,t.jsx)(e.code,{children:"UPDATE"}),"\uff0c\u6240\u4ee5\u672a\u6307\u5b9a\u5bf9\u8c61\u7684",(0,t.jsx)(e.code,{children:"version"}),"\u5c5e\u6027\u3002"]})]}),"\n",(0,t.jsx)(e.p,{children:"\u6240\u6709\u5bf9\u8c61\u90fd\u6ca1\u6709\u6307\u5b9aid\u5c5e\u6027\uff0cJimmer\u6839\u636e\u6bcf\u4e2a\u5bf9\u8c61\u7684key\u53bb\u5224\u65ad\u5b83\u4eec\u662f\u5426\u5b58\u5728\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u8bbe\u6240\u6709\u5bf9\u8c61\u90fd\u4e0d\u5b58\u5728\uff0c\u56e0\u6b64\uff0c\u4e09\u6761\u65b0\u6570\u636e\u4f1a\u88ab\u63d2\u5165\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u6240\u6709\u5bf9\u8c61\u90fd\u6ca1\u6709\u6307\u5b9a",(0,t.jsx)(e.code,{children:"version"}),"\u5c5e\u6027\uff0c\u6240\u4ee5\uff0c\u5b83\u4eec\u4f1a\u88ab\u81ea\u52a8\u586b\u5145\u4e3a0\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6700\u7ec8\u6253\u5370\u7ed3\u679c\u4e3a ",(0,t.jsx)(e.em,{children:"(\u4e3a\u4e86\u4fbf\u4e8e\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n    "id":100,\n    "name":"TURING",\n    // highlight-next-line\n    "version":0,\n    "books":[\n        {\n            "id":100,\n            "name":"Introduction to Algorithms",\n            "edition":3,\n            "price":44.99,\n            // highlight-next-line\n            "version":0,\n            "store":{\n                "id":100\n            }\n        },\n        {\n            "id":101,\n            "name":"The Pragmatic Programmer",\n            "edition":2,\n            "price":39.99,\n            // highlight-next-line\n            "version":0,\n            "store":{\n                "id":100\n            }\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["\u5f53\u7136\uff0c\u5982\u679c\u7528\u6237\u4e3a\u8fd9\u4e9b\u5bf9\u8c61\u6307\u5b9a\u4e86",(0,t.jsx)(e.code,{children:"version"}),"\u5c5e\u6027\uff0c\u8fd9\u65f6\uff0c\u4f1a\u63d2\u5165\u7528\u6237\u6307\u5b9a\u7684\u503c\uff0c\u800c\u975e0\u3002"]})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5f53\u4fee\u6539\u5bf9\u8c61\u65f6 ",(0,t.jsx)(e.em,{children:"(\u65e0\u8bba\u660e\u786e\u5730\u8fdb\u884cUPDATE\u64cd\u4f5c\uff0c\u8fd8\u662fUPSERT\u64cd\u4f5c\u88ab\u5224\u5b9a\u4e3aUPDATE)"}),"\uff0cJimmer\u4f1a\u4e3a\u6bcf\u4e2a\u5bf9\u8c61\u6bd4\u8f83\u7528\u6237\u4f20\u9012\u7684",(0,t.jsx)(e.code,{children:"version"}),"\u548c\u6570\u636e\u5e93\u4e2d\u73b0\u6709\u7684",(0,t.jsx)(e.code,{children:"version"}),"\uff0c\u5982\u679c\u4e8c\u8005\u4e0d\u4e00\u81f4\uff0c\u629b\u51fa\u5f02\u5e38\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6211\u4eec\u7a0d\u5fae\u4fee\u6539\u4e00\u4e0b\u4ee3\u7801\uff0c\u518d\u6b21\u6267\u884c"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'BookStore savedData = sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            // highlight-next-line\n            draft.setVersion(0);\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("54.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n\n                // \u975e\u6cd5version\n                // highlight-next-line\n                book.setVersion(9999);\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:'val savedData = sqlClient.save(\n    BookStore {\n        name = "TURING"\n        // highlight-next-line\n        version = 0\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n            // highlight-next-line\n            version = 0\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("49.99")\n\n            // \u975e\u6cd5version\n            // highlight-next-line\n            version = 9999\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n'})})})]}),"\n",(0,t.jsxs)(e.admonition,{type:"caution",children:[(0,t.jsx)(e.p,{children:"\u5bf9\u4fee\u6539\u64cd\u4f5c\u800c\u8a00\uff0c\u5982\u679c\u5bf9\u8c61\u7684version\u5e76\u672a\u88ab\u8d4b\u503c\uff0cJimmer\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"}),(0,t.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u65e0\u6cd5\u5224\u65ad\u67d0\u4e2aUPSERT\u6a21\u5f0f\u7684\u4fdd\u5b58\u6307\u4ee4\u6700\u7ec8\u4f1a\u88ab\u5224\u5b9a\u4e3a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"}),"\uff0c\u5219\u5e94\u8be5\u575a\u6301\u6307\u5b9a",(0,t.jsx)(e.code,{children:"version"}),"\u5c5e\u6027\u3002"]})]}),"\n",(0,t.jsx)(e.p,{children:"\u6267\u884c\uff0c\u7531\u4e8e\u6570\u636e\u5e93\u4e2d\u5df2\u7ecf\u5b58\u5728\u6570\u636e\uff0c\u6240\u4ee5\u4e09\u4e2a\u5bf9\u8c61\u90fd\u4f1a\u88abUPDATE\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5f88\u660e\u663e\uff0c\u6700\u540e\u4e00\u672c\u4e66\u7c4d\u7684version",(0,t.jsx)(e.code,{children:"9999"}),"\u662f\u975e\u6cd5\u7684\uff0c\u4e0a\u9762\u7684\u7684\u4ee3\u7801\u5c06\u4f1a\u5f97\u5230\u5982\u4e0b\u5f02\u5e38\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5f02\u5e38\u7c7b\u578b\uff1a",(0,t.jsx)(e.code,{children:"org.babyfish.jimmer.sql.runtime.SaveException"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5f02\u5e38\u7f16\u7801\uff1a",(0,t.jsx)(e.code,{children:"org.babyfish.jimmer.sql.runtime.SaveErrorCode.ILLEGAL_VERSION"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5f02\u5e38\u6d88\u606f\uff1a"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:'Save error caused by the path: "<root>.books": Cannot update the entity whose type is "org.doc.j.model.Book", id is "101" and version is "9999"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8ba9\u6211\u4eec\u518d\u4fee\u6539\u4e00\u4e0b\u4ee3\u7801\uff0c\u8ba9\u6240\u6709\u5bf9\u8c61\u90fd\u6301\u6709\u6b63\u786e\u7684",(0,t.jsx)(e.code,{children:"version"}),"\uff0c\u5982\u4e0b"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'BookStore savedData = sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            // highlight-next-line\n            draft.setVersion(0);\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("54.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n                // highlight-next-line\n                book.setVersion(0);\n            });\n        })\n).getModifiedEntity();\nSystem.out.println(savedData);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:'val savedData = sqlClient.save(\n    BookStore {\n        name = "TURING"\n        // highlight-next-line\n        version = 0\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n            // highlight-next-line\n            version = 0\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("49.99")\n            // highlight-next-line\n            version = 0\n        }\n    }\n).modifiedEntity\nprintln(savedData)\n'})})})]}),"\n",(0,t.jsxs)(e.p,{children:["\u6700\u7ec8\u6253\u5370\u7ed3\u679c\u4e3a ",(0,t.jsx)(e.em,{children:"(\u4e3a\u4e86\u4fbf\u4e8e\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n    "id":100,\n    "name":"TURING",\n    // highlight-next-line\n    "version":1,\n    "books":[\n        {\n            "id":100,\n            "name":"Introduction to Algorithms",\n            "edition":3,\n            "price":54.99,\n            // highlight-next-line\n            "version":1,\n            "store":{\n                "id":100\n            }\n        },\n        {\n            "id":101,\n            "name":"The Pragmatic Programmer",\n            "edition":2,\n            "price":39.99,\n            // highlight-next-line\n            "version":1,\n            "store":{\n                "id":100\n            }\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:"\u53ef\u89c1\u6570\u636e\u88ab\u4fee\u6539\u540e\uff0c\u4e50\u89c2\u9501\u4f1a\u81ea\u52a8\u52a01\u3002"}),(0,t.jsx)(e.p,{children:"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u4e50\u89c2\u9501\u7248\u672c\u53f7\u5f80\u5f80\u662f\u8868\u5355\u754c\u9762\u7684\u9690\u85cf\u5b57\u6bb5\u3002\u5982\u679c\u67d0\u4e2a\u8868\u5355\u4fdd\u5b58\u540e\u4e0d\u81ea\u52a8\u8df3\u8f6c\uff0c\u800c\u662f\u4fdd\u6301\u754c\u9762\u4e0d\u53d8\u4ee5\u652f\u6301\u591a\u6b21\u63d0\u4ea4\uff0c\u5219\u5e94\u8be5\u5728\u6bcf\u6b21\u4fdd\u5b58\u6210\u529f\u540e\u5229\u7528\u8fd9\u6837\u7684\u8fd4\u56de\u4fe1\u606f\u66f4\u65b0\u8868\u5355\u754c\u9762\u7684\u9690\u85cf\u5b57\u6bb5\u3002"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u60b2\u89c2\u9501",children:"\u60b2\u89c2\u9501"}),"\n",(0,t.jsx)(e.p,{children:"\u548c\u4e50\u89c2\u9501\u4e0d\u540c\uff0c\u60b2\u89c2\u9501\u751f\u547d\u5468\u671f\u5f88\u77ed\uff0c\u4ec5\u5728\u4e00\u4e2ajdbc\u4e8b\u52a1\u5185\u6709\u6548\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u5e38\uff0cJimmer\u4f1a\u751f\u6210\u4e00\u4e9b\u67e5\u8be2SQL\u4ee5\u8f85\u52a9\u4fdd\u5b58\u6307\u4ee4\u7684\u6267\u884c\uff0c\u6bd4\u5982"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5224\u65ad",(0,t.jsx)(e.code,{children:"UPSERT"}),"\u64cd\u4f5c\u6700\u7ec8\u5e94\u8be5\u5224\u5b9a\u4e3a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5224\u65ad\u54ea\u4e9b\u5173\u8054\u5bf9\u8c61\u9700\u8981\u88ab",(0,t.jsx)(e.a,{href:"./dissociation",children:"\u8131\u94a9"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5bf9\u6bd4\u4e0d\u4f7f\u7528\u60b2\u89c2\u9501\u548c\u4f7f\u7528\u60b2\u89c2\u9501\u4e24\u79cd\u60c5\u51b5\uff0c\u6765\u89c2\u5bdf\u8fd9\u4e9b\u67e5\u8be2SQL\u6709\u4f55\u4e0d\u540c\u3002"}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsxs)(e.p,{children:["\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u4e3a\u4e86\u4ecb\u7ecd\u4e50\u89c2\u9501\uff0c\u5047\u8bbe",(0,t.jsx)(e.code,{children:"BookStore"}),"\u548c",(0,t.jsx)(e.code,{children:"Book"}),"\u7c7b\u578b\u90fd\u5b9a\u4e49\u4e86",(0,t.jsx)(e.code,{children:"version"}),"\u5c5e\u6027\u3002"]}),(0,t.jsx)(e.p,{children:"\u540e\u7eed\u4f8b\u5b50\u4e3a\u4e86\u4ecb\u7ecd\u60b2\u89c2\u9501\uff0c\u4e0d\u518d\u6709\u6b64\u5047\u8bbe\u3002"})]}),"\n",(0,t.jsx)(e.h3,{id:"\u672a\u542f\u7528\u60b2\u89c2\u9501",children:"\u672a\u542f\u7528\u60b2\u89c2\u9501"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'sqlClient.save(\n        Immutables.createBookStore(draft -> {\n            draft.setName("TURING");\n            draft.addIntoBooks(book -> {\n                book.setName("Introduction to Algorithms");\n                book.setEdition(3);\n                book.setPrice(new BigDecimal("44.99"));\n            });\n            draft.addIntoBooks(book -> {\n                book.setName("The Pragmatic Programmer");\n                book.setEdition(2);\n                book.setPrice(new BigDecimal("39.99"));\n            });\n        })\n);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:'sqlClient.save(\n    BookStore {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n)\n'})})})]}),"\n",(0,t.jsx)(e.p,{children:"\u751f\u62106\u6761SQL\uff0c\u5982\u4e0b"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5224\u65ad\u4e66\u5e97\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME\nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.NAME = ? /* TURING */\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6839\u636e\u524d\u4e00\u6761\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u51b3\u5b9a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"})]}),"\n",(0,t.jsx)(e.p,{children:"insert\u6216update\uff0c\u7565"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5224\u65ad\u7b2c1\u672c\u4e66\u7c4d\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* Introduction to Algorithms */\n    and\n        tb_1_.EDITION = ? /* 3 */\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6839\u636e\u524d\u4e00\u6761\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u51b3\u5b9a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"})]}),"\n",(0,t.jsx)(e.p,{children:"insert\u6216update\uff0c\u7565"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5224\u65ad\u7b2c2\u672c\u4e66\u7c4d\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* The Pragmatic Programmer */\n    and\n        tb_1_.EDITION = ? /* 2 */\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6839\u636e\u524d\u4e00\u6761\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u51b3\u5b9a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"})]}),"\n",(0,t.jsx)(e.p,{children:"insert\u6216update\uff0c\u7565"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:"\u8fd9\u4e9b\u67e5\u8be2\u8bed\u53e5\u7528\u4e8e\u8fdb\u884c\u6761\u4ef6\u5224\u65ad\uff0c\u4ee5\u51b3\u5b9a\u540e\u7eedSQL\u8be5\u5982\u4f55\u751f\u6210\u3002"}),(0,t.jsx)(e.p,{children:"\u7136\u800c\uff0c\u8fd9\u4e9b\u67e5\u8be2\u6ca1\u6709\u4f7f\u7528\u60b2\u89c2\u9501\uff0c\u7ecf\u5b83\u4eec\u5224\u65ad\u800c\u6210\u7acb\u7684\u6761\u4ef6\u548c\u5047\u8bbe\uff0c\u6709\u53ef\u80fd\u88ab\u5176\u5b83\u5e76\u53d1\u884c\u4e3a\u7834\u574f\uff0c\u4ece\u800c\u5bfc\u81f4\u540e\u7eedSQL\u6267\u884c\u51fa\u73b0\u5f02\u5e38\u3002"}),(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u5e76\u53d1\u95ee\u9898\uff0c\u53ef\u4ee5\u542f\u7528\u60b2\u89c2\u9501\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8ba8\u8bba\u60b2\u89c2\u9501\u5982\u4f55\u5b9e\u73b0\u3002"})]}),"\n",(0,t.jsx)(e.h3,{id:"\u542f\u7528\u60b2\u89c2\u9501",children:"\u542f\u7528\u60b2\u89c2\u9501"}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u4e24\u79cd\u542f\u7528\u60b2\u89c2\u9501\u7684\u65b9\u6cd5"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5168\u5c40\u914d\u7f6e"}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u914d\u7f6e\u542f\u7528\u60b2\u89c2\u9501"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Spring Boot Starter\u7684\u914d\u7f6e"}),"\n",(0,t.jsxs)(e.p,{children:["\u4fee\u6539",(0,t.jsx)(e.code,{children:"application.yml"})," ",(0,t.jsxs)(e.em,{children:["(\u6216",(0,t.jsx)(e.code,{children:"application.properties"}),")"]})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"jimmer:\n    default-lock-mode: PESSIMISTIC\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5e95\u5c42API\u7684\u914d\u7f6e"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDefaultLockMode(LockMode.PESSIMISTIC)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDefaultLockMode(LockMode.PESSIMISTIC)\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.admonition,{type:"warning",children:[(0,t.jsxs)(e.p,{children:["\u6b64\u4e3e\u4fee\u6539\u4e86\u5168\u5c40\u8bbe\u7f6e\uff0c\u539f\u672c\u7684\u9ed8\u8ba4\u503c",(0,t.jsx)(e.code,{children:"OPTIMISTIC"}),"\u88ab\u7834\u574f\u3002\u8fd9\u610f\u5473\u7740\uff0c\u9664\u975e\u5c06\u67d0\u4e2a\u4fdd\u5b58\u6307\u4ee4\u8bbe\u7f6e\u4e3a\u4e50\u89c2\u9501\u6a21\u5f0f\uff0c\u524d\u6587\u6240\u8bb2\u8ff0\u7684\u4e50\u89c2\u9501\u7684\u529f\u80fd\u6d88\u5931\u3002"]}),(0,t.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u4e0d\u63a8\u8350\u5168\u5c40\u914d\u7f6e\uff0c\u800c\u66f4\u63a8\u8350\u4e0b\u6587\u5373\u5c06\u4ecb\u7ecd\u7684\u6307\u4ee4\u7ea7\u914d\u7f6e\u3002"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u6307\u4ee4\u7ea7\u914d\u7f6e"}),"\n",(0,t.jsx)(e.p,{children:"\u548c\u5f71\u54cd\u6240\u6709\u4fdd\u5b58\u6307\u4ee4\u7684\u5168\u5c40\u914d\u7f6e\u4e0d\u540c\uff0c\u6307\u4ee4\u7ea7\u914d\u7f6e\u4ec5\u4ec5\u5f71\u54cd\u5f53\u524d\u4fdd\u5b58\u6307\u4ee4"}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"\u5982\u679c\u5df2\u7ecf\u901a\u8fc7\u5168\u5c40\u914d\u7f6e\u6253\u5f00\u4e86\u60b2\u89c2\u9501\u63a7\u5236\uff0c\u5c31\u4e0d\u518d\u9700\u8981\u6307\u4ee4\u7ea7\u914d\u7f6e\u4e86"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8c03\u7528\u4fdd\u5b58\u6307\u4ee4\u7684\u914d\u7f6e\u65b9\u6cd5",(0,t.jsx)(e.code,{children:"setLockMode"}),"\uff0c\u5373\u53ef\u542f\u7528\u60b2\u89c2\u9501\uff0c\u5982\u4e0b"]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'sqlClient\n        .getEntities()\n        .saveCommand(\n                Immutables.createBookStore(draft -> {\n                    draft.setName("TURING");\n                    draft.addIntoBooks(book -> {\n                        book.setName("Introduction to Algorithms");\n                        book.setEdition(3);\n                        book.setPrice(new BigDecimal("44.99"));\n                    });\n                    draft.addIntoBooks(book -> {\n                        book.setName("The Pragmatic Programmer");\n                        book.setEdition(2);\n                        book.setPrice(new BigDecimal("39.99"));\n                    });\n                })\n        )\n        // highlight-next-line\n        .setLockMode(LockMode.PESSIMISTIC)\n        .execute();\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:'sqlClient.save(\n    BookStore {\n        name = "TURING"\n        books().addBy {\n            name = "Introduction to Algorithms"\n            edition = 3;\n            price = BigDecimal("44.99")\n        }\n        books().addBy {\n            name = "The Pragmatic Programmer"\n            edition = 2\n            price = BigDecimal("39.99")\n        }\n    }\n) {\n    // highlight-next-line\n    setLockMode(LockMode.PESSIMISTIC)\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u65e6\u542f\u7528\u4e86\u60b2\u89c2\u9501\uff0c\u751f\u6210\u7684\u67e5\u8be2\u8bed\u53e5\u4f1a\u6709\u663e\u8457\u53d8\u5316\uff0c\u5982\u4e0b"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5224\u65ad\u4e66\u5e97\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME\nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.NAME = ? /* TURING */\n/* highlight-next-line */\nfor update\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6839\u636e\u524d\u4e00\u6761\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u51b3\u5b9a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"})]}),"\n",(0,t.jsx)(e.p,{children:"insert\u6216update\uff0c\u7565"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5224\u65ad\u7b2c1\u672c\u4e66\u7c4d\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* Introduction to Algorithms */\n    and\n        tb_1_.EDITION = ? /* 3 */\n/* highlight-next-line */\nfor update\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6839\u636e\u524d\u4e00\u6761\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u51b3\u5b9a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"})]}),"\n",(0,t.jsx)(e.p,{children:"insert\u6216update\uff0c\u7565"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5224\u65ad\u7b2c2\u672c\u4e66\u7c4d\u662f\u5426\u5b58\u5728"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION\nfrom BOOK tb_1_\nwhere\n        tb_1_.NAME = ? /* The Pragmatic Programmer */\n    and\n        tb_1_.EDITION = ? /* 2 */\n/* highlight-next-line */\nfor update\n"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u6839\u636e\u524d\u4e00\u6761\u67e5\u8be2\u7684\u7ed3\u679c\uff0c\u51b3\u5b9a",(0,t.jsx)(e.code,{children:"INSERT"}),"\u8fd8\u662f",(0,t.jsx)(e.code,{children:"UPDATE"})]}),"\n",(0,t.jsx)(e.p,{children:"insert\u6216update\uff0c\u7565"}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},19365:(n,e,i)=>{i.d(e,{A:()=>s});i(96540);var r=i(18215);const t={tabItem:"tabItem_Ymn6"};var l=i(74848);function s(n){let{children:e,hidden:i,className:s}=n;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,s),hidden:i,children:e})}},11470:(n,e,i)=>{i.d(e,{A:()=>I});var r=i(96540),t=i(18215),l=i(23104),s=i(56347),o=i(205),a=i(57485),d=i(31682),c=i(70679);function h(n){return r.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,r.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:i}=n;return(0,r.useMemo)((()=>{const n=e??function(n){return h(n).map((n=>{let{props:{value:e,label:i,attributes:r,default:t}}=n;return{value:e,label:i,attributes:r,default:t}}))}(i);return function(n){const e=(0,d.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,i])}function m(n){let{value:e,tabValues:i}=n;return i.some((n=>n.value===e))}function x(n){let{queryString:e=!1,groupId:i}=n;const t=(0,s.W6)(),l=function(n){let{queryString:e=!1,groupId:i}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:e,groupId:i});return[(0,a.aZ)(l),(0,r.useCallback)((n=>{if(!l)return;const e=new URLSearchParams(t.location.search);e.set(l,n),t.replace({...t.location,search:e.toString()})}),[l,t])]}function j(n){const{defaultValue:e,queryString:i=!1,groupId:t}=n,l=u(n),[s,a]=(0,r.useState)((()=>function(n){let{defaultValue:e,tabValues:i}=n;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${i.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=i.find((n=>n.default))??i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[d,h]=x({queryString:i,groupId:t}),[j,g]=function(n){let{groupId:e}=n;const i=function(n){return n?`docusaurus.tab.${n}`:null}(e),[t,l]=(0,c.Dv)(i);return[t,(0,r.useCallback)((n=>{i&&l.set(n)}),[i,l])]}({groupId:t}),p=(()=>{const n=d??j;return m({value:n,tabValues:l})?n:null})();(0,o.A)((()=>{p&&a(p)}),[p]);return{selectedValue:s,selectValue:(0,r.useCallback)((n=>{if(!m({value:n,tabValues:l}))throw new Error(`Can't select invalid tab value=${n}`);a(n),h(n),g(n)}),[h,g,l]),tabValues:l}}var g=i(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(74848);function v(n){let{className:e,block:i,selectedValue:r,selectValue:s,tabValues:o}=n;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=n=>{const e=n.currentTarget,i=a.indexOf(e),t=o[i].value;t!==r&&(d(e),s(t))},h=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const i=a.indexOf(n.currentTarget)+1;e=a[i]??a[0];break}case"ArrowLeft":{const i=a.indexOf(n.currentTarget)-1;e=a[i]??a[a.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},e),children:o.map((n=>{let{value:e,label:i,attributes:l}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:n=>a.push(n),onKeyDown:h,onClick:c,...l,className:(0,t.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":r===e}),children:i??e},e)}))})}function k(n){let{lazy:e,children:i,selectedValue:l}=n;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(e){const n=s.find((n=>n.props.value===l));return n?(0,r.cloneElement)(n,{className:(0,t.A)("margin-top--md",n.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==l})))})}function f(n){const e=j(n);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",p.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(k,{...e,...n})]})}function I(n){const e=(0,g.A)();return(0,b.jsx)(f,{...n,children:h(n.children)},String(e))}},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var r=i(96540);const t={},l=r.createContext(t);function s(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);