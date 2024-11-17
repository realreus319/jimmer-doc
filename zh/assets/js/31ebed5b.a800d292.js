"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6400],{56778:(e,n,r)=>{r.d(n,{A:()=>t});r(96540);var l=r(18215);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(i.tabItem,t),hidden:r,children:n})}},37244:(e,n,r)=>{r.d(n,{A:()=>I});var l=r(96540),i=r(18215),s=r(44319),t=r(56347),a=r(94280),o=r(73024),c=r(58417),d=r(44031);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:i}}=e;return{value:n,label:r,attributes:l,default:i}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function j(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const i=(0,t.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=u(e),[t,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:s}))),[c,h]=x({queryString:r,groupId:i}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(r);return[i,(0,l.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),g=(()=>{const e=c??p;return j({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{g&&o(g)}),[g]);return{selectedValue:t,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=r(46916);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:l,selectValue:t,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),i=a[r].value;i!==l&&(c(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:s}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function I(e){const n=(0,m.A)();return(0,b.jsx)(k,{...e,children:h(e.children)},String(n))}},96995:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>a});var l=r(74848),i=r(28453),s=r(37244),t=r(56778);const a=[];function o(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.A,{groupId:"buildTool",children:[(0,l.jsx)(t.A,{value:"java_maven",label:"Java(Maven)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                \x3c!-- highlight-next-line --\x3e\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        \x3c!-- highlight-next-line --\x3e\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"})})}),(0,l.jsx)(t.A,{value:"java_gradle",label:"Java(Gradle)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'dependencies {\n    \n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n\n    annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}"\n}\n'})})}),(0,l.jsx)(t.A,{value:"kotlin_gradle",label:"Kotlin(Gradle.kts)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'plugins {\n    // \u6dfb\u52a0ksp\u63d2\u4ef6\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n\n    ...\u7701\u7565\u5176\u4ed6\u63d2\u4ef6...\n}\ndependencies {\n    \n    // \u5e94\u7528jimmer\u7684ksp\u4ee3\u7801\u751f\u6210\u5668\n    // highlight-next-line\n    ksp("org.babyfish.jimmer:jimmer-ksp:${jimmerVersion}")\n\n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n}\n\n// \u5c06\u751f\u6210\u7684\u4ee3\u7801\u6dfb\u52a0\u5230\u7f16\u8bd1\u8def\u5f84\u4e2d\u3002\n// \u6ca1\u6709\u8fd9\u4e2a\u914d\u7f6e\uff0cgradle\u547d\u4ee4\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\uff0c\n// \u4f46\u662f, Intellij\u65e0\u6cd5\u627e\u5230\u751f\u6210\u7684\u6e90\u7801\u3002\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n'})})}),(0,l.jsx)(t.A,{value:"java_gradle_plugin",label:"Java(Gradle\u63d2\u4ef6)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'plugins {\n    // \u4ece Gradle 7.0 \u5f00\u59cb\uff0c\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u4ee3\u66ff\u5177\u4f53\u7684\u7248\u672c\u53f7\uff0c\u4ee3\u8868\u4f7f\u7528\u6700\u65b0\u7248\u672c\n    // \u4e5f\u53ef\u4ee5\u4f7f\u7528 \'+\' \u5b57\u7b26\u4ee3\u8868\u4ece \'+\' \u5b57\u7b26\u5f00\u59cb\u5339\u914d\u6700\u65b0\u7684\u7248\u672c\u53f7\n    id "tech.argonariod.gradle-plugin-jimmer" version "latest.release"\n\n    ... \u7701\u7565\u5176\u5b83\u63d2\u4ef6 ...\n}\n\njimmer {\n    // \u8bbe\u5b9a jimmer \u4f9d\u8d56\u7248\u672c\uff0c\u6b64\u5904\u4e5f\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u6216 "0.+" \u7b49\u7248\u672c\u8303\u56f4\u8868\u8fbe\u5f0f\n    version = "${jimmerVersion}"\n}\n'})})}),(0,l.jsx)(t.A,{value:"kotlin_gradle_plugin",label:"Kotlin(Gradle\u63d2\u4ef6)",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'plugins {\n    // \u4ece Gradle 7.0 \u5f00\u59cb\uff0c\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u4ee3\u66ff\u5177\u4f53\u7684\u7248\u672c\u53f7\uff0c\u4ee3\u8868\u4f7f\u7528\u6700\u65b0\u7248\u672c\n    id("tech.argonariod.gradle-plugin-jimmer") version "latest.release"\n    // \u4e5f\u53ef\u4ee5\u4f7f\u7528 \'+\' \u5b57\u7b26\u4ee3\u8868\u4ece \'+\' \u5b57\u7b26\u5f00\u59cb\u5339\u914d\u6700\u65b0\u7684\u7248\u672c\u53f7\n    // \u6dfb\u52a0ksp\u63d2\u4ef6\n    id("com.google.devtools.ksp") version "1.7.10+"\n\n    ... \u7701\u7565\u5176\u5b83\u63d2\u4ef6 ...\n}\n\njimmer {\n    // \u8bbe\u5b9a jimmer \u4f9d\u8d56\u7248\u672c\uff0c\u6b64\u5904\u4e5f\u53ef\u4ee5\u4f7f\u7528 "latest.release" \u6216 "0.+" \u7b49\u7248\u672c\u8303\u56f4\u8868\u8fbe\u5f0f\n    version = "${jimmerVersion}"\n}\n'})})})]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u524d\u4e09\u79cd\uff1a\u6807\u51c6\u914d\u7f6e"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u540e\u4e24\u79cd\uff1a\u793e\u533a\u63d0\u4f9b\u7684",(0,l.jsx)(n.a,{href:"https://github.com/ArgonarioD/gradle-plugin-jimmer",children:"Gradle\u63d2\u4ef6"}),"\uff0c\u8fdb\u4e00\u6b65\u7b80\u5316\u914d\u7f6e"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://kotlinlang.org/docs/ksp-overview.html",children:"KSP"}),"\u5b98\u65b9\u53ea\u652f\u6301gradle\uff0c\n\u7ecf\u8fc7\u5b9e\u8df5\u9a8c\u8bc1\uff0cKSP\u7684\u7b2c\u4e09\u65b9Maven\u63d2\u4ef6\u652f\u6301\u8ddf\u4e0d\u4e0a",(0,l.jsx)(n.code,{children:"kotlin/KSP"}),"\u672c\u8eab\u7684\u7248\u672c\u8fed\u4ee3\uff0c\u5f80\u5f80\u5728\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u5f88\u591a\u95ee\u9898\u3002"]}),(0,l.jsx)(n.p,{children:"\u6700\u7ec8Jimmer\u653e\u5f03\u4e86\u5bf9Kotlin\u7684Maven\u652f\u6301\uff0c\u8bf7Kotlin\u5f00\u53d1\u4eba\u5458\u4f7f\u7528Gradle."})]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},71471:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"overview/apt-ksp","title":"APT/KSP","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/overview/apt-ksp.mdx","sourceDirName":"overview","slug":"/overview/apt-ksp","permalink":"/jimmer-doc/zh/docs/overview/apt-ksp","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/overview/apt-ksp.mdx","tags":[],"version":"current","lastUpdatedAt":1731341376000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"APT/KSP"},"sidebar":"tutorialSidebar","previous":{"title":"\u9879\u76ee\u4ecb\u7ecd \u2726","permalink":"/jimmer-doc/zh/docs/overview/introduction"},"next":{"title":"Benchmark\u62a5\u544a","permalink":"/jimmer-doc/zh/docs/overview/benchmark"}}');var i=r(74848),s=r(28453),t=r(37244),a=r(56778),o=r(96995);const c={sidebar_position:4,title:"APT/KSP"},d=void 0,h={},u=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},...o.RM,{value:"\u5728\u54ea\u4f7f\u7528",id:"\u5728\u54ea\u4f7f\u7528",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"Java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c",id:"java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c",level:2},{value:"\u548cLombok\u914d\u5408",id:"\u548clombok\u914d\u5408",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsx)(n.p,{children:"Jimmer\u9ad8\u5ea6\u4f9d\u8d56\u4e8eJVM\u751f\u6001\u7684\u9884\u7f16\u8bd1\u6280\u672f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u5c31\u662fAPT\uff0c\u5373",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/annotation-processors-support.html",children:"Annotation Processor Tool"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Kotlin\u800c\u8a00\uff0c\u5c31\u662fKSP\uff0c\u5373",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/ksp-overview.html",children:"Kotlin Symbol Processing"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u4f7f\u7528APT/KSP\u81ea\u52a8\u751f\u6210\u7684\u4e00\u4e9b\u4ee3\u7801\uff0c\u662f\u4f7f\u7528Jimmer\u6240\u5fc5\u987b\u7684\u3002"}),(0,i.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u5982\u679c\u4f7f\u7528Intellij\u6253\u5f00",(0,i.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples",children:"\u5b98\u65b9\u4f8b\u5b50"}),"\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2aJava/Kotlin\u9879\u76ee\uff0c\u90fd\u4f1a\u53d1\u73b0\u4e00\u4e9b\u672c\u8be5\u88ab\u81ea\u52a8\u751f\u6210\u4ee3\u7801\u5e76\u4e0d\u5b58\u5728\u7684\u95ee\u9898\u3002\u5bf9\u6b64\uff0c\u53ef\u4ee5\u9009\u62e9\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\u65b9\u6cd5\uff1a"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5148\u7528\u547d\u4ee4\u884c\u5728\u8981\u6253\u5f00\u7684\u9879\u76ee\u76ee\u5f55\u4e0b\u6267\u884c",(0,i.jsx)(n.code,{children:"./mvnw install"}),"*(\u4ec5Java\u4f8b\u5b50\u63d0\u4f9b)*\u6216",(0,i.jsx)(n.code,{children:"./gradlew build"}),"\u547d\u4ee4\u5b8c\u6210\u4ee3\u7801\u751f\u6210\uff0c\u518d\u7528Intellij\u6253\u5f00\u9879\u76ee\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u76f4\u63a5\u7528Intellij\u6253\u5f00\u9879\u76ee\uff0c\u6682\u65f6\u65e0\u89c6IDE\u7684\u9519\u8bef\uff0c\u4f9d\u8d56\u4e0b\u8f7d\u5b8c\u6bd5\u540e\uff0c\u76f4\u63a5\u8fd0\u884c\u9879\u76ee\u7684main\u65b9\u6cd5\u6216\u5355\u5143\u6d4b\u8bd5 ",(0,i.jsx)(n.em,{children:"(save-command/save-command-kt\u4ee5\u5355\u5143\u6d4b\u8bd5\u6f14\u793a\u529f\u80fd)"}),"\uff0c\u6240\u6709IDE\u9519\u8bef\u5c06\u4f1a\u81ea\u52a8\u6d88\u5931\uff0c\u5e94\u7528\u4e5f\u4f1a\u88ab\u6b63\u786e\u542f\u52a8\u3002"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u4f7f\u7528",children:"\u5982\u4f55\u4f7f\u7528"}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8e",(0,i.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples",children:"\u5b98\u65b9\u4f8b\u5b50"}),"\u4e2d\u7684\u6240\u6709\u9879\u76ee\u800c\u8a00"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6240\u6709Java\u4f8b\u5b50\u90fd\u5177\u5907",(0,i.jsx)(n.code,{children:"pom.xml"}),"\u548c",(0,i.jsx)(n.code,{children:"build.gradle"}),"\uff0c\u5373\uff0cmaven/gradle\u53cc\u652f\u6301\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u6b21\u6253\u5f00\u8fd9\u79cd\u9879\u76ee\u65f6\uff0cIntellij\u4f1a\u8be2\u95ee\u4ee5\u4f55\u79cd\u65b9\u5f0f\u6253\u5f00\uff0c\u505a\u51fa\u9009\u62e9\u5373\u53ef\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u8981\u5207\u6362\u6253\u5f00\u65b9\u5f0f\uff0c\u9000\u51faIntellij\uff0c\u5220\u9664\u9879\u76ee\u4e0b\u7684\u9690\u85cf\u76ee\u5f55",(0,i.jsx)(n.code,{children:".idea"}),"\uff0c\u518d\u7528Intellij\u6253\u5f00\uff0c\u91cd\u65b0\u9009\u62e9\u5373\u53ef\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6240\u6709\u7684Kotlin\u4f8b\u5b50\uff0c\u53ea\u5177\u5907",(0,i.jsx)(n.code,{children:"build.gradle.kts"}),"\u6587\u4ef6\uff0c\u5373\uff0c\u53ea\u652f\u6301gradle\u3002\u524d\u9762\u5df2\u7ecf\u89e3\u91ca\u539f\u56e0\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Intellij\u5bf9\u901a\u8fc7maven\u5f15\u5165\u7684annotation processor\u7684\u6574\u5408\u5b58\u5728\u4e00\u4e9b\u8f7b\u7387\u7684\u8fc7\u5ea6\u4f18\u5316\u63aa\u65bd\uff0c\u5bfc\u81f4gradle\u548cIDE\u914d\u5408\u7684\u5f00\u53d1\u4f53\u9a8c\u4f18\u4e8emaven\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5728\u54ea\u4f7f\u7528",children:"\u5728\u54ea\u4f7f\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u4e1a\u52a1\u9879\u76ee\u5f88\u5c11\u662f\u4e00\u4e2a\u5355\u9879\u76ee\uff0c\u66f4\u591a\u65f6\u5019\u662f\u501f\u52a9\u4e8eMaven\u548cGradle\u8fd9\u7c7b\u6784\u5efa\u5de5\u5177\u5206\u5272\u6210\u591a\u4e2a\u5b50\u9879\u76ee\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\uff1f\u6211\u4eec\u5e94\u5728\u54ea\u4e9b\u5b50\u9879\u76ee\u4e2d\u4f7f\u7528\u524d\u9762\u8bb2\u8fc7\u7684\u914d\u7f6e\u5462\uff1f"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5b50\u9879\u76ee\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u4f7f\u7528\u76ee\u7684"}),(0,i.jsx)(n.th,{children:"\u6ce8\u610f\u4e8b\u9879"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u5b9a\u4e49\u5b9e\u4f53\u7684\u9879\u76ee"}),(0,i.jsx)(n.td,{children:"\u6839\u636e\u5b9e\u4f53\u5b9a\u4e49\u751f\u6210\u5fc5\u8981\u7684\u4ee3\u7801\uff0c\u4f8b\u5982Draft\uff0cSQL DSL, Fetcher"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\u5728",(0,i.jsx)(n.code,{children:"src/main/dto"}),"\u76ee\u5f55\u4e0b\u5b9a\u4e49DTO\u6587\u4ef6\u7684\u9879\u76ee"]}),(0,i.jsx)(n.td,{children:"\u6839\u636eDTO\u8bed\u8a00\u7684\u4ee3\u7801\u751f\u6210DTO\u7c7b\u578b"}),(0,i.jsxs)(n.td,{children:["\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u9664\u975e\u5f53\u524d\u5b50\u9879\u76ee\u6709\u5b9e\u4f53\u5b9a\u4e49\uff0c\u5426\u5219\u9700\u8981\u968f\u4fbf\u627e\u4e2a\u7c7b\u7528",(0,i.jsx)(n.code,{children:"@EnableDtoGeneration"}),"\u4fee\u9970"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\u4f7f\u7528Spring Web\u6ce8\u89e3\u7684\u9879\u76ee"}),(0,i.jsx)(n.td,{children:"\u81ea\u52a8\u751f\u6210Openapi\u6587\u6863\u548cTypeScript\u4ee3\u7801\uff0c\u5c06Web Api\u7684Java/Kotlin\u6587\u6863\u6ce8\u91ca\u5199\u5165\u6587\u6863\u548c\u5ba2\u6237\u7aef\u4ee3\u7801\u4e2d\uff1b\u652f\u6301\u8fdc\u7a0b\u5f02\u5e38"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8eJimmer\u662f\u4e00\u4e2a\u7f16\u8bd1\u65f6\u6846\u67b6\uff0c\u8003\u8651\u5230\u5e76\u975e\u6240\u6709\u7528\u6237\u90fd\u719f\u6089Apt\u548cKsp\uff0c\u6709\u5fc5\u8981\u63d0\u53ca\u4e00\u4e2a\u91cd\u8981\u7ec6\u8282\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Apt/Ksp\u662f\u884c\u4e1a\u5185\u7684\u6807\u51c6\u6280\u672f\uff0cJava IDE\u4f1a\u7ed9\u4e88\u652f\u6301\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u4f60\u7684\u4fee\u6539\u90fd\u4f1a\u5305\u542bJava\u6216Kotlin\u4ee3\u7801\u7684\u53d8\u5316\uff0c\n\u4f8b\u5982\uff0c\u5b9e\u4f53\u7c7b\u578b\u53d8\u5316\uff0c\u6216Web Controller\u53d8\u5316 ",(0,i.jsx)(n.em,{children:"(Jimmer\u6709\u81ea\u5df1\u7684OpenAPI\u548cTypeScript\u751f\u6210\u7684\u5b9e\u73b0)"}),"\u3002\u8fd9\u65f6\u53ea\u9700\u70b9\u51fbIDE\u7684Run\u6216Debug\u6309\u94ae\u8fd0\u884c\u4e00\u6b21\uff0c\u65e0\u9700\u5168\u91cf\u7f16\u8bd1\uff0c\u5c31\u53ef\u4ee5\u89e6\u53d1\u6240\u6709\u7684\u9884\u7f16\u8bd1\u884c\u4e3a\uff0c\u81ea\u52a8\u751f\u6210\u7684\u6e90\u4ee3\u7801\u548c\u8d44\u6e90\u6587\u4ef6\u90fd\u4f1a\u81ea\u52a8\u53d8\u5316"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5c11\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4ec5\u4ec5\u4fee\u6539DTO\u6587\u4ef6\uff0c\u5373\uff0c\u9664\u4e86DTO\u6587\u4ef6\u5916\uff0c\u540c\u4e00\u4e2a\u5de5\u7a0b\u5185\u6ca1\u6709\u4efb\u4f55Java\u6216Kotlin\u6e90\u7801\u53d8\u52a8\uff0c\u8fd9\u65f6\uff0c\u4f60\u6709\u4e09\u4e2a\u9009\u62e9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u91c7\u7528\u914d\u5957\u7684DTO\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u5168\u91cf\u7f16\u8bd1\uff0cmaven\u6216gradle\u547d\u4ee4\uff0c\u6216IDE\u7684Rebuild\u6309\u94ae\uff0c\u90fd\u53ef\u4ee5\u8fbe\u5230\u8fd9\u4e2a\u76ee\u7684"}),"\n",(0,i.jsx)(n.li,{children:"\u5220\u9664\u53d7\u5f71\u54cd\u5de5\u7a0b\u7684\u7f16\u8bd1\u8f93\u51fa\u76ee\u5f55\u540e\uff0c\u518d\u70b9\u51fbIDE\u7684Run\u6216Debug\u6309\u94ae"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c",children:"Java\u4ee3\u7801\u7684\u4e24\u79cd\u98ce\u683c"}),"\n",(0,i.jsx)(n.p,{children:"\u548cKotlin API\u4e0d\u540c\uff0cJava API\u505a\u4e0d\u5230\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b\u4e0d\u51fa\u73b0\u5728\u7528\u6237\u4ee3\u7801\u4e2d\u3002\u8bf7\u770b\u5982\u4e0b\u5bf9\u6bd4"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"\u529f\u80fd"}),(0,i.jsx)("th",{children:"Java"}),(0,i.jsx)("th",{children:"Kotlin"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{rowspan:"2",children:"Draft"}),(0,i.jsxs)("td",{children:["\u4f7f\u7528\u751f\u6210\u7684\u7c7b\u578b",(0,i.jsx)(n.code,{children:"BookDraft"})]}),(0,i.jsxs)("td",{children:["\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b",(0,i.jsx)(n.code,{children:"Book"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Book book = \n    // highlight-next-line\n    BookDraft.$.produce(b -> {\n        b.setName("SQL");\n        b.addIntoAuthors(a -> {\n            a.setName("Jessica");\n        });\n        b.addIntoAuthors(a -> {\n            a.setName("Bob");\n        });\n    });\n'})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val book =\n    // highlight-next-line\n    Book {\n        name = "SQL in Action"\n        authors().addBy {\n            name = "Jessica"\n        }\n        authors().addBy {\n            name = "Bob"\n        }\n    }\n'})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{rowspan:"2",children:"SQL DSL"}),(0,i.jsxs)("td",{children:["\u4f7f\u7528\u751f\u6210\u7684\u7c7b\u578b",(0,i.jsx)(n.code,{children:"BookTable"})]}),(0,i.jsxs)("td",{children:["\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b",(0,i.jsx)(n.code,{children:"Book"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// highlight-next-line\nBookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.storeId().isNull())\n    .orderBy(table.name())\n    .select(table)\n    .execute();\n"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"List<Book> books = sqlClient\n    // highlight-next-line\n    .createQuery(Book::class) {\n        where(table.storeId.isNull())\n        orderBy(table.name)\n        select(table)\n    }\n    .execute()\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{rowspan:"2",children:"Fetcher"}),(0,i.jsxs)("td",{children:["\u4f7f\u7528\u751f\u6210\u7684\u7c7b\u578b",(0,i.jsx)(n.code,{children:"BookFetcher"}),", ",(0,i.jsx)(n.code,{children:"BookStoreFetcher"}),"\u548c",(0,i.jsx)(n.code,{children:"AuthorFetcher"})]}),(0,i.jsxs)("td",{children:["\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b",(0,i.jsx)(n.code,{children:"Book"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"Fetcher<Book> fetcher =\n    // highlight-next-line\n    BookFetcher.$\n        .allScalarFields()\n        .store(\n            // highlight-next-line\n            BookStoreFetcher.$\n                .allScalarFields()\n        )\n        .authors(\n            // highlight-next-line\n            AuthorFetcher.$\n                .allScalarFields()\n        )\n"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val fetcher = \n    // highlight-next-line\n    newFetcher(Book::class).by {\n        allScalarFields()\n        store {\n            allScalarFields()\n        }\n        authors {\n            allScalarFields()\n        }\n    }\n"})})})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0cJava\u548cKotlin\u7684\u62bd\u8c61\u80fd\u529b\u4e0d\u540c\uff0c\u5bfc\u81f4API\u8bbe\u8ba1\u80fd\u8fbe\u5230\u7684\u6548\u679c\u4e0d\u540c\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8eKotlin\u800c\u8a00\uff0c\u65e0\u8bba\u4f55\u79cd\u573a\u666f\uff0c\u90fd\u53ea\u9700\u4f7f\u7528\u539f\u5b9e\u4f53\u7c7b\u578b",(0,i.jsx)(n.code,{children:"Book"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u4e8eJava\u800c\u8a00\uff0c\u4e0d\u5f97\u4e0d\u4f7f\u7528\u7531Annotation Processor\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578b\uff0c\u4f8b\u5982",(0,i.jsx)(n.code,{children:"BookDraft"}),", ",(0,i.jsx)(n.code,{children:"BookTable"}),", ",(0,i.jsx)(n.code,{children:"BookFetcher"}),"\u7b49\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u8ff0Java\u4ee3\u7801\u4e2d\u9891\u7e41\u51fa\u73b0",(0,i.jsx)(n.code,{children:".$"}),"\uff0c",(0,i.jsx)(n.code,{children:"$"}),"\u8fd9\u4e9b\u7c7b\u7684\u9759\u6001\u53ea\u8bfb\u5b57\u6bb5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u5b9e\uff0c\u4f7f\u7528",(0,i.jsx)(n.code,{children:"$"}),"\u662f\u6700\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u7136\u800c\uff0c\u8003\u8651\u5230\u90e8\u5206Java\u5f00\u53d1\u4eba\u5458\u5bf9",(0,i.jsx)(n.code,{children:"$"}),"\u5b58\u5728\u4e3b\u89c2\u504f\u89c1\uff0c\u5bf9\u5b9a\u4e49\u5b9e\u4f53\u7c7b\u578b\u7684Java\u5b50\u9879\u76ee\u800c\u8a00\uff0c\nJimmer\u7684APT\u8fd8\u662f\u751f\u62104\u4e2a\u6c47\u603b\u7c7b\u578b:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Objects"}),"\u7c7b"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Tables"}),"\u63a5\u53e3"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TableExes"}),"\u63a5\u53e3"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Fetchers"}),"\u63a5\u53e3"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd94\u4e2a\u7c7b\u578b\u6240\u5728\u7684\u5305\uff0c\u4e3a\u6240\u6709\u5b9e\u4f53\u7684\u516c\u5171\u5305\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd94\u4e2a\u7c7b\u578b\u901a\u8fc7\u5b9a\u4e49\u9759\u6001\u5e38\u91cf\u4e3aJava\u4ee3\u7801\u63d0\u4f9b\u53e6\u5916\u4e00\u79cd\u4ee3\u7801\u98ce\u683c\uff0c\u4e24\u79cd\u98ce\u683c\u5bf9\u6bd4\u5982\u4e0b"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\u63a5\u53d7",(0,i.jsx)(n.code,{children:"$"}),"\u7684\u98ce\u683c"]}),(0,i.jsxs)(n.th,{children:["\u4e0d\u63a5\u53d7",(0,i.jsx)(n.code,{children:"$"}),"\u7684\u98ce\u683c"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BookDraft.$.produce"}),(0,i.jsx)(n.td,{children:"Immutables.createBook"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BookTable.$"}),(0,i.jsx)(n.td,{children:"Tables.BOOK_TABLE"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BookTableEx.$"}),(0,i.jsx)(n.td,{children:"TableExes.BOOK_TABLE_EX"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"BookFetcher.$"}),(0,i.jsx)(n.td,{children:"Fetchers.BOOK_FETCHER"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u53e6\u5916\uff0c",(0,i.jsx)(n.code,{children:"Tables"}),", ",(0,i.jsx)(n.code,{children:"TableExes"}),"\u548c",(0,i.jsx)(n.code,{children:"Fetchers"}),"\u662f\u63a5\u53e3\uff0c\u53ef\u4ee5\u4f7f\u7528implements\u8bed\u53e5\u6765\u8fdb\u4e00\u6b65\u7b80\u5316\u4ee3\u7801 ",(0,i.jsx)(n.em,{children:"(\u7531\u4e8eIntellij\u5bf9\u9759\u6001\u5bfc\u5165\u652f\u6301\u4e0d\u53cb\u597d\uff0c\u5b9e\u73b0\u5b9a\u4e49\u5e38\u91cf\u7684\u63a5\u53e3\u4ecd\u7136\u662f\u503c\u5f97\u63a8\u8350\u7684\u6280\u5de7)"}),"\uff0c\u4f8b\u5982"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public interface FetcherConstants\n// highlight-next-line\nimplements Fetchers {\n    \n    Fetcher<Book> BOOK_DETAIL_FETCHER =\n        BOOK_FETCHER\n            .allScalarFields()\n            .store(\n                BOOK_STORE_FETCHER\n                    .allScalarFields()\n            )\n            .authors {\n                AUTHOR_FETCHER\n                    .allScalarFields()\n            };\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u548clombok\u914d\u5408",children:"\u548cLombok\u914d\u5408"}),"\n",(0,i.jsx)(n.p,{children:"Java\u9879\u76ee\u5e38\u5e38\u548cLombok\u914d\u5408\u4f7f\u7528\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u9879\u76ee\u9664\u4e86lombok\u5916\u6ca1\u6709\u5176\u4ed6APT\uff0c\u53ea\u9700\u5bfc\u5165lombok\u7684\u4f9d\u8d56\u5373\u53ef\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u800c\uff0c\u4e00\u65e6\u5f15\u5165\u4e86\u5176\u4ed6APT\u914d\u7f6e*(\u4e0d\u4e00\u5b9a\u662fJimmer\u7684APT\uff0c\u4efb\u4f55\u5176\u4ed6APT)*\uff0c\u5219\u5fc5\u987b\u660e\u786e\u914d\u7f6elombok\u7684APT\u3002"}),"\n",(0,i.jsxs)(t.A,{groupId:"buildTool",children:[(0,i.jsx)(a.A,{value:"java_maven",label:"Java(Maven)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="pom.xml"',children:"...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                <annotationProcessorPaths>\n                    \x3c!--highlight-start--\x3e\n                    <path>\n                        <groupId>org.projectlombok</groupId>\n                        <artifactId>lombok</artifactId>\n                        <version>${lombok.version}</version>\n                    </path>\n                    \x3c!--highlight-end--\x3e\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>${jimmer.version}</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n"})})}),(0,i.jsx)(a.A,{value:"java_gradle",label:"Java(Gradle)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'dependencies {\n    \n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n\n    // highlight-next-line\n    annotationProcessor "org.projectlombok:lombok:${lombokVersion}"\n    annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}"\n}\n'})})}),(0,i.jsx)(a.A,{value:"java_gradle_plugin",label:"Java(Gradle\u63d2\u4ef6)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:'dependencies {\n        \n    ...\u7701\u7565\u5176\u4ed6\u4f9d\u8d56...\n\n    // highlight-next-line\n    annotationProcessor "org.projectlombok:lombok:${lombokVersion}"\n}\n'})})})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var l=r(96540);const i={},s=l.createContext(i);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);