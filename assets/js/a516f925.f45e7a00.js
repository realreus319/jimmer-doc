"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9876],{64098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"spring/repository/dto","title":"Query DTO","description":"Jimmer provides DTO language.","source":"@site/docs/spring/repository/dto.mdx","sourceDirName":"spring/repository","slug":"/spring/repository/dto","permalink":"/jimmer-doc/docs/spring/repository/dto","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/spring/repository/dto.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Query DTO"},"sidebar":"tutorialSidebar","previous":{"title":"Complex Queries","permalink":"/jimmer-doc/docs/spring/repository/default"},"next":{"title":"Remote Associations","permalink":"/jimmer-doc/docs/spring/spring-cloud"}}');var r=t(74848),a=t(28453),o=t(11470),s=t(19365);const l={sidebar_position:4,title:"Query DTO"},c=void 0,d={},h=[{value:"Define DTO shape",id:"define-dto-shape",level:2},{value:"Automatically generate DTO types",id:"automatically-generate-dto-types",level:2},{value:"Query DTO types",id:"query-dto-types",level:2},{value:"Use inherited methods from Repository",id:"use-inherited-methods-from-repository",level:3},{value:"Define abstract methods in custom Repository",id:"define-abstract-methods-in-custom-repository",level:3},{value:"Define default methods in custom Repository",id:"define-default-methods-in-custom-repository",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Jimmer provides ",(0,r.jsx)(n.a,{href:"../../object/view/dto-language",children:"DTO language"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Essentially, this language is another way to express object fetchers."})}),"\n",(0,r.jsx)(n.p,{children:"Using this language, developers can quickly define multiple data structure shapes with an entity type as the aggregate root. The compiler will generate the corresponding Java/Kotlin DTO classes for each shape. Each DTO type contains the mutual conversion logic between itself and the original dynamic type, as well as an object fetcher that matches its own shape."}),"\n",(0,r.jsx)(n.p,{children:"In some cases, after the server queries data of a certain shape, it is not used as the return of an HTTP request, but is used by itself to drive subsequent complex business logic. This is an ideal scenario for using this approach."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Note that if the data of a certain shape queried by the server is not for its own use, but to be directly returned as the HTTP request return value, it is more recommended to directly return the dynamic entity object and use the scheme in ",(0,r.jsx)(n.a,{href:"../../client",children:"Generate Client Code"})," to automatically generate client code with high development experience."]})}),"\n",(0,r.jsx)(n.h2,{id:"define-dto-shape",children:"Define DTO shape"}),"\n",(0,r.jsxs)(n.p,{children:["This article focuses on how to query static DTO types, not a systematic introduction to the DTO language. Please refer to ",(0,r.jsx)(n.a,{href:"../../object/view/dto-language",children:"Object/DTO Conversion/DTO Language"})," for a complete DTO language."]}),"\n",(0,r.jsxs)(n.p,{children:["Assume the fully qualified name of the ",(0,r.jsx)(n.code,{children:"Book"})," class is ",(0,r.jsx)(n.code,{children:"com.yourcompany.yourproject.model.Book"}),", you can"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"In the project where the entity is defined"}),", create a directory ",(0,r.jsx)(n.code,{children:"src/main/dto"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.code,{children:"src/main/dto"}),", create subdirectories ",(0,r.jsx)(n.code,{children:"com/yourcompany/yourproject/model"})," according to the package path where the entity is located"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the directory created in the previous step, create the file ",(0,r.jsx)(n.code,{children:"Book.dto"}),". The file name must be the same as the entity class name, and the extension must be ",(0,r.jsx)(n.code,{children:"dto"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Edit this file and use the DTO language to define various DTO shapes of the Book entity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",metastring:'title="Book.dto" ',children:"# highlight-next-line\nBookDetailView {\n    \n    #allScalars\n    \n    store {\n        #allScalars\n    }\n\n    authors {\n        #allScalars\n    }\n}\n\nSimpleBookView { ...Omitted... }\n\n...Omit other DTO shape definitions...\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"automatically-generate-dto-types",children:"Automatically generate DTO types"}),"\n",(0,r.jsx)(n.p,{children:"Jimmer is responsible for compiling dto files and automatically generating DTO types that conform to these shapes."}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"If files other than dto files are modified in addition to dto files, directly clicking the run button in the IDE may cause the dto file to be recompiled."}),(0,r.jsx)(n.p,{children:"However, if no other Java/Kotlin files are modified except for the dto file, simply clicking the run button in the IDE will not cause the dto file to be recompiled unless explicitly rebuilding!"}),(0,r.jsxs)(n.p,{children:["If you are using Gradle as your build tool, you can also use the third-party Gradle plugin provided by the community to solve this problem: ",(0,r.jsx)(n.a,{href:"https://github.com/Enaium/jimmer-gradle",children:"jimmer-gradle"})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Take ",(0,r.jsx)(n.code,{children:"BookDetailView"})," in the above code as an example. After this dto file is successfully compiled by Jimmer, the following DTO type will be automatically generated:"]}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookDetailView.java"',children:'package com.yourcompany.yourproject.model.dto;\n\nimport com.yourcompany.yourproject.model.Book;\nimport org.babyfish.jimmer.View;\n\n@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookDetailView implements Input<Book> {\n\n    private long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    // highlight-next-line\n    private TargetOf_store store;\n\n    // highlight-next-line\n    private List<TargetOf_authors> authors;\n\n    // highlight-next-line  \n    public static class TargetOf_store implements Input<BookStore> {\n\n        private long id;\n    \n        private String name;\n\n        @Nullable\n        private String website;\n\n        ...Omitted other members...\n    }\n\n    // highlight-next-line\n    public static class TargetOf_authors implements Input<Author> {\n\n        private long id;\n        \n        private String firstName;\n\n        private String lastName;\n\n        private Gender gender;\n\n        ...Omitted other members...\n    }\n\n    ...Omitted other members...\n}\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookDetailView.kt"',children:'package com.yourcompany.yourproject.model.dto\n\nimport com.yourcompany.yourproject.model.Book \nimport org.babyfish.jimmer.View\n\n@GeneratedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookDetailView(\n    val id: Long = 0,\n    val name: String = "",\n    val edition: Int = 0,\n    val price: BigDecimal,\n\n    // highlight-next-line\n    val store: TargetOf_store? = null,\n    // highlight-next-line\n    val authors: List<TargetOf_authors> = emptyList(),\n) : Input<Book> {\n\n    // highlight-next-line\n    data class TargetOf_store(\n        val id: Long = 0,\n        val name: String = "",\n        val website: String? = null,  \n    ) : Input<BookStore> {\n        ...Omitted other members...\n    }\n\n    // highlight-next-line\n    data class TargetOf_authors(\n        val id: Long = 0,\n        public val firstName: String = "",\n        public val lastName: String = "",\n        public val gender: Gender,\n    ) : Input<Author> {\n        ...Omitted other members...\n    }\n\n    ...Omitted other members...\n}\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The generated DTO classes are not in the package where the entity is located, but in its ",(0,r.jsx)(n.code,{children:"dto"})," subpackage."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For Java, it is assumed that lombok has been used."}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"query-dto-types",children:"Query DTO types"}),"\n",(0,r.jsx)(n.p,{children:"There are several ways to query DTO types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use inherited methods from ",(0,r.jsx)(n.code,{children:"JRepository/KRepository"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Define abstract methods in custom Repository"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Define default methods in custom Repository ",(0,r.jsx)(n.em,{children:"(Which is actually the method of the underlying API to query DTO types)"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"use-inherited-methods-from-repository",children:"Use inherited methods from Repository"}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public static void main(String[] args) {\n    ApplicationContext ctx = SpringApplication.run(MyApp.class, args);\n    BookRepository bookRepository = ctx.getBean(BookRepository.class);\n    Book view = bookRepository\n        // highlight-next-line\n        .viwer(BookDetailView.class)\n        .findNullable(1L);\n    System.out.println(view);\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"fun main(args: Array<String>) {\n    val ctx = runApplication<MyApp>(*args)\n    val bookRepository = ctx.getBean(BookRepository.class.java)\n    val view = bookRepository\n        // highlight-next-line\n        .viwer(BookDetailView.class)  \n        .findNullable(1L)\n    println(view)\n}  \n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"viewer(BookDetailView.class)"})," indicates that the following methods are used to query DTO objects instead of dynamic entity objects."]}),"\n",(0,r.jsxs)(n.p,{children:["The print result is as follows ",(0,r.jsx)(n.em,{children:"(Formatted manually for readability)"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# highlight-next-line \nBookDetailView(\n    id=1,\n    name=Learning GraphQL,\n    edition=1,\n    price=50.00,\n    # highlight-next-line\n    store=BookDetailView.TargetOf_store(\n        id=1,\n        name=O'REILLY,\n        website=null,\n        version=0\n    ),\n    authors=[\n        # highlight-next-line\n        BookDetailView.TargetOf_authors(\n            id=2,\n            firstName=Alex,\n            lastName=Banks,\n            gender=MALE  \n        ),\n        # highlight-next-line \n        BookDetailView.TargetOf_authors(\n            id=1, \n            firstName=Eve,\n            lastName=Procello,\n            gender=FEMALE\n        )\n    ]\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"It is not difficult to find that although the query no longer returns dynamic entity objects, the function is exactly the same as the object fetcher. Why is this?"}),"\n",(0,r.jsxs)(n.p,{children:["In fact, an object fetcher is automatically generated inside the ",(0,r.jsx)(n.code,{children:"BookDetailView"})," class. Jimmer uses it to query dynamic entity objects matching the shape from the database and automatically converts them to DTO objects."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Related details have been discussed in detail in ",(0,r.jsx)(n.a,{href:"../../query/object-fetcher/dto",children:"Object Fetcher/DTO Query"}),". This article will not repeat."]}),(0,r.jsx)(n.p,{children:"This is why this article says at the beginning that the DTO language is essentially another way to express object fetchers."})]}),"\n",(0,r.jsx)(n.h3,{id:"define-abstract-methods-in-custom-repository",children:"Define abstract methods in custom Repository"}),"\n",(0,r.jsx)(n.p,{children:"There are two implementation plans:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Intuitive but not recommended"}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"',children:"// Intuitive but not recommended\npublic interface BookRepository extends JRepository<Book, Long> {\n\n    // highlight-next-line\n    List<BookDetailView> findByNameLikeIgnoreCase(\n        @Nullable String name\n    );    \n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt"',children:"// Intuitive but not recommended\ninterface BookRepository : KRepository<Book, Long> {\n\n    fun findByNameLikeIgnoreCase(\n        name: String? = null\n    // highlight-next-line\n    ) : List<BookDetailView>    \n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"This approach is very simple, the abstract method no longer returns dynamic entities representing arbitrary data, just return the DTO type with fixed shape. Very easy to understand."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"However, this approach still has drawbacks and is not recommended."})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Recommended approach"}),"\n",(0,r.jsx)(n.p,{children:"The above code is simple and intuitive, but violates one of the important values \u200b\u200bthat Jimmer has been trying to pursue:"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Do not solidify the shape of the data structure to be queried in the data layer, but let the upper layer business decide."})}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"',children:"public interface BookRepository extends JRepository<Book, Long> {\n\n    <V extends View<Book>> List<V> findByNameLikeIgnoreCase(\n        @Nullable String name,\n        // highlight-next-line\n        Class<V> viewType\n    );    \n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt" ',children:"interface BookRepository : KRepository<Book, Long> {\n\n    fun <V: View<Book>> findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: KClass<V>\n    ) : List<V>    \n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"You can see:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["First, define a method-level generic parameter ",(0,r.jsx)(n.code,{children:"V"}),", which must extend ",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.View<Book>"})," ",(0,r.jsx)(n.em,{children:"(this is very important, otherwise Jimmer will remind developers to do so via exceptions)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Then, use ",(0,r.jsx)(n.code,{children:"V"})," to declare the parameter ",(0,r.jsx)(n.code,{children:"viewType"})," of type ",(0,r.jsx)(n.code,{children:"Class<V>"})," or ",(0,r.jsx)(n.code,{children:"KClass<V>"}),", and hand over the decision-making power of the data structure shape to the caller."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Finally, return results carrying the ",(0,r.jsx)(n.code,{children:"V"})," type, such as ",(0,r.jsx)(n.code,{children:"V"}),", ",(0,r.jsx)(n.code,{children:"List<V>"})," or ",(0,r.jsx)(n.code,{children:"Page<V>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this way, we can use it to query data structures of various shapes. Take Java as an example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"bookRepository.findByNameLikeIgnoreCase(null, BookDetailView.class)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"bookRepository.findByNameLikeIgnoreCase(null, SimpleBookView.class)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"bookRepository.findByNameLikeIgnoreCase(null, DefaultBookView.class)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Let's recall how we used object fetchers directly to achieve the same functionality before introducing the DTO type:"}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"',children:"public interface BookRepository extends JRepository<Book, Long> {\n\n    List<Book> findByNameLikeIgnoreCase(\n        @Nullable String name,\n        // highlight-next-line\n        fetcher<Book> fetcher\n    );    \n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt"',children:"interface BookRepository : KRepository<Book, Long> {\n\n    fun findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: Fetcher<Book>\n    ) : List<Book>    \n}\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Comparing the code using DTO with the code using object fetcher directly, it is not difficult to find that the two are doing the same thing in different ways."}),(0,r.jsx)(n.p,{children:"This confirms again what is said at the beginning of this article that the DTO language is essentially another way to express object fetchers."})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"define-default-methods-in-custom-repository",children:"Define default methods in custom Repository"}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="BookRepository.java"',children:"public interface BookRepository extends JRepository<Book, Long> {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    default <V extends View<Book>> List<V> find(\n        @Nullable String name, \n        @Nullable String storeName,\n        @Nullable String authorName,\n        // highlight-next-line  \n        Class<V> viewType\n    ) {\n        return sql()\n            .createQuery(table)\n            whereIf(\n                StringUtils.hasText(name),\n                table.name().ilike(name)\n            )\n            .whereIf(\n                StringUtils.hasText(storeName),\n                table.store().name().ilike(storeName)  \n            )\n            .whereIf(\n                StringUtils.hasText(authorName),\n                table.id().in(\n                    sql()\n                        .createSubQuery(author)\n                        .where(\n                            Predicate.or(\n                                author.firstName().ilike(authorName),\n                                author.lastName().ilike(authorName)\n                            )\n                        )\n                        .select(\n                            author.books().id()\n                        )    \n                )\n            )\n            .orderBy(table.name())\n            .orderBy(table.edition().desc())\n            // highlight-next-line\n            .select(table.fetch(viewType))\n            .execute();\n    }\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="BookRepository.kt"',children:"interface BookRepository : KRepository<Book, Long> {\n\n    fun <V: View<Book>> findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: KClass<V>\n    ) : List<V> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    table.store.name ilike it\n                }\n                authorName?.takeIf { it.isNotEmpty() }?.let {\n                    where(\n                        table.id valueIn subQuery(Author::class) {\n                            where(\n                                or(\n                                    table.firstName ilike it,\n                                    table.lastName ilike it\n                                )\n                            )\n                            select(table.books.id)\n                        }\n                    )\n                }\n                orderBy(table.name)\n                orderBy(table.edition.desc())\n                // highlight-next-line\n                select(table.fetch(viewType))\n            }\n            .execute()    \n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Here we see ",(0,r.jsx)(n.code,{children:"table.fetch(fetcher)"})," is replaced with ",(0,r.jsx)(n.code,{children:"table.fetch(viewType)"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In fact, ",(0,r.jsx)(n.code,{children:"viewType"})," can also replace ",(0,r.jsx)(n.code,{children:"fetcher"})," in other underlying query APIs. For example, ",(0,r.jsx)(n.code,{children:"sqlClient.findById(fetcher, 1L)"})," can be replaced with ",(0,r.jsx)(n.code,{children:"sqlClient.find(viewType, 1L)"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["All underlying query APIs can replace ",(0,r.jsx)(n.code,{children:"fetcher"})," with ",(0,r.jsx)(n.code,{children:"viewType"}),", which confirms again that the DTO language is essentially another way to express object fetchers, as stated at the beginning of this article."]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(96540),r=t(18215),a=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(70679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:t,groupId:r}),[g,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),y(e)}),[h,y,a]),tabValues:a}}var y=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==i&&(c(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function k(e){const n=(0,y.A)();return(0,x.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);