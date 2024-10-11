"use strict";(self.webpackChunkmolokotech_ui=self.webpackChunkmolokotech_ui||[]).push([[1076],{8459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var n=r(4848),s=r(8453);const o={slug:"access-modifiers",title:"Access modifiers",authors:["axel"],tags:["Molokotech"]},l=void 0,i={permalink:"/molokotech-blog/blog/access-modifiers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-27-access-modifiers/2024-07-27-access-modifiers.md",source:"@site/blog/2024-07-27-access-modifiers/2024-07-27-access-modifiers.md",title:"Access modifiers",description:"banner",date:"2024-07-27T00:00:00.000Z",tags:[{inline:!0,label:"Molokotech",permalink:"/molokotech-blog/blog/tags/molokotech"}],readingTime:1.99,hasTruncateMarker:!1,authors:[{name:"Axel Berlot",title:"Java developer @ Opendev Pro",url:"http://web.molokotech.com/?lang=en",imageURL:"https://avatars.githubusercontent.com/u/22393878?s=96&v=4",key:"axel"}],frontMatter:{slug:"access-modifiers",title:"Access modifiers",authors:["axel"],tags:["Molokotech"]},unlisted:!1,prevItem:{title:"Autoboxing and Unboxing",permalink:"/molokotech-blog/blog/autoboxing-unboxing"},nextItem:{title:"Data Types",permalink:"/molokotech-blog/blog/Java"}},c={authorsImageUrls:[void 0]},a=[];function d(e){const t={code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"banner",src:r(4887).A+"",width:"1400",height:"350"})}),"\n",(0,n.jsx)(t.p,{children:"Access modifiers are implemented in java with four levels of abtraction."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Improves"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Security"}),"\n",(0,n.jsx)(t.li,{children:"Cleaner code"}),"\n",(0,n.jsx)(t.li,{children:"Scalability"}),"\n",(0,n.jsx)(t.li,{children:"Readability"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"They are aplicable to"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Classes \u2192 ",(0,n.jsx)("font",{color:"blue",children:(0,n.jsx)(t.em,{children:"public"})})," | ",(0,n.jsx)("font",{color:"violet",children:(0,n.jsx)(t.em,{children:"default"})})]}),"\n",(0,n.jsxs)(t.li,{children:["Interfaces \u2192 ",(0,n.jsx)("font",{color:"blue",children:(0,n.jsx)(t.em,{children:"public"})})," | ",(0,n.jsx)("font",{color:"violet",children:(0,n.jsx)(t.em,{children:"default"})})]}),"\n",(0,n.jsxs)(t.li,{children:["Constructors \u2192 ",(0,n.jsx)("font",{color:"blue",children:(0,n.jsx)(t.em,{children:"public"})})," | ",(0,n.jsx)("font",{color:"violet",children:(0,n.jsx)(t.em,{children:"default"})})," | ",(0,n.jsx)("font",{color:"grey",children:(0,n.jsx)(t.em,{children:"protected"})})," | ",(0,n.jsx)("font",{color:"red",children:(0,n.jsx)(t.em,{children:"private"})})]}),"\n",(0,n.jsxs)(t.li,{children:["Class member attributes and methods \u2192 ",(0,n.jsx)("font",{color:"blue",children:(0,n.jsx)(t.em,{children:"public"})})," | ",(0,n.jsx)("font",{color:"violet",children:(0,n.jsx)(t.em,{children:"default"})})," | ",(0,n.jsx)("font",{color:"grey",children:(0,n.jsx)(t.em,{children:"protected"})})," | ",(0,n.jsx)("font",{color:"red",children:(0,n.jsx)(t.em,{children:"private"})})]}),"\n",(0,n.jsxs)(t.li,{children:["Interface member attributes and methods \u2192 ",(0,n.jsx)("font",{color:"blue",children:(0,n.jsx)(t.em,{children:"public"})})," | ",(0,n.jsx)("font",{color:"red",children:(0,n.jsx)(t.em,{children:"private"})})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Level of visibility"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("font",{color:"blue",children:"public"})," \u2192 could be access from every pacakge"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("font",{color:"violet",children:"default"})," \u2192 inside the same package only (",(0,n.jsx)(t.em,{children:"no keyword"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("font",{color:"grey",children:"protected"})," \u2192 access from the same package and their sub classes"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("font",{color:"red",children:"private"})," \u2192 only inside the class"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Default"})," \u2192 ",(0,n.jsx)(t.em,{children:"refers at no reserve keyword just, it isn't the keyword of the example bellow because this refers to the type of member method"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Classes"})," and ",(0,n.jsx)(t.strong,{children:"Interfaces"})," could be ",(0,n.jsx)(t.strong,{children:"public"})," or ",(0,n.jsx)(t.strong,{children:"default"})," (",(0,n.jsx)(t.em,{children:"no keyword"}),")."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Interfaces cannot have members with default or protected access modifiers, please remember that the default modifier it's not the keyword."})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Real life example for access modifiers in an interface"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'package com.molokotech.interfaces;\r\n\r\n// Accesible from any package\r\npublic interface Loggueable {\r\n\tvoid log(); // implicitly public by default write public does not affect\r\n\t\r\n\t// private access modifier allowed but should have body\r\n\tprivate String colorConsole(String color) {\r\n\t\tswitch(color) {\r\n\t\tcase "yellow":\r\n\t\t\treturn "WARN";\r\n\t\tcase "red":\r\n\t\t\treturn "ERROR";\r\n\t\tcase "blue":\r\n\t\t\treturn "INFO";\r\n\t\tdefault: \r\n\t\t\treturn "INFO";\r\n\t\t}\r\n\t};\r\n\r\n\t/* default methods cannot be private are always public or implicity public\r\n\t   every instance implementation should be access to it */ \r\n\tdefault void labelColor(String color) {\r\n\t\tcolorConsole(color);\r\n\t}\r\n}\r\n\r\n// Accesible with in the same package\r\ninterface AnotherLoggeable {\r\n\t\r\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Member ",(0,n.jsx)(t.strong,{children:"attributes"})," and ",(0,n.jsx)(t.strong,{children:"methods"})," on the class can carry all types of modifiers."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'public class AccessModifiers {\r\n\t\r\n\tpublic int n1;\r\n\tprotected int n2;\r\n\tint n3;\r\n\tprivate int n4;\t// accesible only somewhere inside the class\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tSystem.out.println("HOLA");\r\n\t}\r\n\r\n\tpublic AccessModifiers() {\r\n\r\n\t}\r\n}\r\n\r\nclass Protected {\r\n\tprotected Protected() {\r\n\t\tnew Private(); // this NOT COMPILE at all! cannot access to the constructor outside the class\r\n\t}\r\n\r\n}\r\n\r\nclass Default {\r\n\tDefault() {\r\n\t\tnew Protected();\r\n\t}\r\n}\r\n\r\nclass Private {\r\n\tprivate Private() {\r\n\t\tnew Default();\r\n\t}\r\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"It is important to note that some modifiers affects the overriding behavor."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4887:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/banner-java-d9daf6988b346c0809bf29ea77bca5ae.jpg"},8453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(6540);const s={},o=n.createContext(s);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);