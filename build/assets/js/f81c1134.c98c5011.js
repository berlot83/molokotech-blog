"use strict";(self.webpackChunkmolokotech_ui=self.webpackChunkmolokotech_ui||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"autoboxing-unboxing","metadata":{"permalink":"/blog/autoboxing-unboxing","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-28-autoboxing-unboxing/2024-07-28-autoboxing-unboxing.md","source":"@site/blog/2024-07-28-autoboxing-unboxing/2024-07-28-autoboxing-unboxing.md","title":"Autoboxing and Unboxing","description":"banner","date":"2024-07-28T00:00:00.000Z","tags":[{"inline":true,"label":"Molokotech","permalink":"/blog/tags/molokotech"}],"readingTime":2.13,"hasTruncateMarker":false,"authors":[{"name":"Axel Berlot","title":"Java developer @ Opendev Pro","url":"http://web.molokotech.com/?lang=en","imageURL":"https://avatars.githubusercontent.com/u/22393878?s=96&v=4","key":"axel"}],"frontMatter":{"slug":"autoboxing-unboxing","title":"Autoboxing and Unboxing","authors":["axel"],"tags":["Molokotech"]},"unlisted":false,"nextItem":{"title":"Access modifiers","permalink":"/blog/access-modifiers"}},"content":"![banner](./../../static/img/banner-java.jpg)\\n\\n**Autoboxing** is the conversion from a **primitive** value to a **Wrapper** Classes.\\nIt is a background operation outside from de programmer control, that transform primitive types creating objects without explicity creating in the code.\\n\\n__The simplest way__:<br/>\\n`Integer i = 1;`\\n\\n From behind the scenes compiler run new Integer(1) although the IDE says it\'s deprecated when you type it, the intention is to write cleaner code.\\n\\n__It runs when__:<br/>\\n1) Passed as a parameter to a method that expects a value of the corresponding object wrapper type.\\n2) Assigned to a variable of the corresponding object wrapper type.\\n\\n```java\\npackage com.molokotech.models;\\n\\npublic class Autoboxing {\\n\\t\\n\\t// Assigned to a variable\\n\\tvoid number() {\\n\\t\\tint number = 100;\\n\\t\\tInteger num = number;\\t// The compiler converts from int to new Integer\\n\\t}\\n\\n\\t// Passed as a parameter\\n\\tvoid iterate() {\\n\\t\\tList<Integer> li = new ArrayList<>();\\n\\t\\tfor (int i = 1; i < 50; i)\\n\\t\\t    li.add(i);\\t// The compiler converts from int to new Integer\\n\\t}\\n\\n\\t// Simplest examples\\n\\tvoid autoboxing() {\\n\\t\\tCharacter c = \'c\';\\t// char to new Character\\n\\t\\tInteger i = 1;\\t\\t// int to new Integer\\n\\t}\\n\\n\\t/* remainder (%) and unary plus (+=) operators does\'nt works with:\\n\\t\\tInteger\\n\\t\\tByte\\n\\t\\tShort\\n\\tOnly primitive types are allowed for this operators so from behind the scenes always invokes i.intValue() */\\n\\tpublic int sum(List<Byte> li) {\\n\\t\\tint sum = 0;\\n\\t\\tfor (Byte i : li)\\n\\t\\t\\tif (i % 2 == 0)\\n\\t\\t\\t\\tsum += i;\\n\\t\\t\\treturn sum;\\n\\t}\\n\\n}\\n```\\n\\n![autoboxing](autoboxing.png)\\n\\n**Unboxing** is the conversion from an **Object** to a **primitive** value.\\n\\n__The simplest way__:<br/>\\n`Integer number = 100; int num = number;`\\n\\n1) Passed as a parameter to a method that expects a value of the corresponding primitive type.\\n2) Assigned to a variable of the corresponding primitive type.\\n\\n```java\\npackage com.molokotech.models;\\n\\npublic class Unboxing {\\n\\t\\n\\t// Assigned to a variable\\n\\tvoid number() {\\n\\t\\tInteger number = 100;\\n\\t\\tint num = number; \\t// The compiler convertes from Integer to int\\n\\t}\\n\\n\\t// Passed as a parameter\\n\\tvoid iterate() {\\n\\t\\tint[] li = new int[50];\\n\\t\\tfor (Integer i = 1; i < 50; i += 2)\\n\\t\\t\\tli[i] = i;\\n\\t}\\n\\n}\\n```\\n\\n![unboxing](unboxing.png)\\n\\nJava compiler run the background operation with for **autoboxing** and **unboxing** on the corresponding wrapper clases:\\n\\n| Primitive type | Wrapper class |\\n|----------------|---------------|\\n| boolean    \\t | Boolean       |\\n| byte    \\t \\t | Byte       \\t |\\n| char    \\t \\t | Character     |\\n| float    \\t \\t | Float       \\t |\\n| int    \\t \\t | Integer       |\\n| long    \\t \\t | Long       \\t |\\n| short    \\t \\t | Short       \\t |\\n| double    \\t | Double        |"},{"id":"access-modifiers","metadata":{"permalink":"/blog/access-modifiers","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-27-access-modifiers/2024-07-27-access-modifiers.md","source":"@site/blog/2024-07-27-access-modifiers/2024-07-27-access-modifiers.md","title":"Access modifiers","description":"banner","date":"2024-07-27T00:00:00.000Z","tags":[{"inline":true,"label":"Molokotech","permalink":"/blog/tags/molokotech"}],"readingTime":1.99,"hasTruncateMarker":false,"authors":[{"name":"Axel Berlot","title":"Java developer @ Opendev Pro","url":"http://web.molokotech.com/?lang=en","imageURL":"https://avatars.githubusercontent.com/u/22393878?s=96&v=4","key":"axel"}],"frontMatter":{"slug":"access-modifiers","title":"Access modifiers","authors":["axel"],"tags":["Molokotech"]},"unlisted":false,"prevItem":{"title":"Autoboxing and Unboxing","permalink":"/blog/autoboxing-unboxing"},"nextItem":{"title":"Data Types","permalink":"/blog/Java"}},"content":"![banner](./../../static/img/banner-java.jpg)\\r\\n\\r\\nAccess modifiers are implemented in java with four levels of abtraction.\\r\\n\\r\\n**Improves**:\\r\\n* Security\\r\\n* Cleaner code\\r\\n* Scalability\\r\\n* Readability\\r\\n\\r\\n__They are aplicable to__:\\r\\n1) Classes \u2192 <font color=\\"blue\\">*public*</font> | <font color=\\"violet\\">*default*</font>\\r\\n2) Interfaces \u2192 <font color=\\"blue\\">*public*</font> | <font color=\\"violet\\">*default*</font>\\r\\n3) Constructors \u2192 <font color=\\"blue\\">*public*</font> | <font color=\\"violet\\">*default*</font> | <font color=\\"grey\\">*protected*</font> | <font color=\\"red\\">*private*</font>\\r\\n4) Class member attributes and methods \u2192 <font color=\\"blue\\">*public*</font> | <font color=\\"violet\\">*default*</font> | <font color=\\"grey\\">*protected*</font> | <font color=\\"red\\">*private*</font>\\r\\n5) Interface member attributes and methods \u2192 <font color=\\"blue\\">*public*</font> | <font color=\\"red\\">*private*</font>\\r\\n\\r\\n**Level of visibility**:\\r\\n* <font color=\\"blue\\">public</font> \u2192 could be access from every pacakge\\r\\n* <font color=\\"violet\\">default</font> \u2192 inside the same package only (*no keyword*)\\r\\n* <font color=\\"grey\\">protected</font> \u2192 access from the same package and their sub classes\\r\\n* <font color=\\"red\\">private</font> \u2192 only inside the class \\r\\n\\r\\n**Default** \u2192 *refers at no reserve keyword just, it isn\'t the keyword of the example bellow because this refers to the type of member method*\\r\\n\\r\\n**Classes** and **Interfaces** could be **public** or **default** (*no keyword*).\\r\\n\\r\\n`Interfaces cannot have members with default or protected access modifiers, please remember that the default modifier it\'s not the keyword.`\\r\\n\\r\\n**Real life example for access modifiers in an interface**:\\r\\n\\r\\n```java\\r\\npackage com.molokotech.interfaces;\\r\\n\\r\\n// Accesible from any package\\r\\npublic interface Loggueable {\\r\\n\\tvoid log(); // implicitly public by default write public does not affect\\r\\n\\t\\r\\n\\t// private access modifier allowed but should have body\\r\\n\\tprivate String colorConsole(String color) {\\r\\n\\t\\tswitch(color) {\\r\\n\\t\\tcase \\"yellow\\":\\r\\n\\t\\t\\treturn \\"WARN\\";\\r\\n\\t\\tcase \\"red\\":\\r\\n\\t\\t\\treturn \\"ERROR\\";\\r\\n\\t\\tcase \\"blue\\":\\r\\n\\t\\t\\treturn \\"INFO\\";\\r\\n\\t\\tdefault: \\r\\n\\t\\t\\treturn \\"INFO\\";\\r\\n\\t\\t}\\r\\n\\t};\\r\\n\\r\\n\\t/* default methods cannot be private are always public or implicity public\\r\\n\\t   every instance implementation should be access to it */ \\r\\n\\tdefault void labelColor(String color) {\\r\\n\\t\\tcolorConsole(color);\\r\\n\\t}\\r\\n}\\r\\n\\r\\n// Accesible with in the same package\\r\\ninterface AnotherLoggeable {\\r\\n\\t\\r\\n}\\r\\n```\\r\\n\\r\\nMember **attributes** and **methods** on the class can carry all types of modifiers. \\r\\n\\r\\n```java\\r\\npublic class AccessModifiers {\\r\\n\\t\\r\\n\\tpublic int n1;\\r\\n\\tprotected int n2;\\r\\n\\tint n3;\\r\\n\\tprivate int n4;\\t// accesible only somewhere inside the class\\r\\n\\r\\n\\tpublic static void main(String[] args) {\\r\\n\\t\\tSystem.out.println(\\"HOLA\\");\\r\\n\\t}\\r\\n\\r\\n\\tpublic AccessModifiers() {\\r\\n\\r\\n\\t}\\r\\n}\\r\\n\\r\\nclass Protected {\\r\\n\\tprotected Protected() {\\r\\n\\t\\tnew Private(); // this NOT COMPILE at all! cannot access to the constructor outside the class\\r\\n\\t}\\r\\n\\r\\n}\\r\\n\\r\\nclass Default {\\r\\n\\tDefault() {\\r\\n\\t\\tnew Protected();\\r\\n\\t}\\r\\n}\\r\\n\\r\\nclass Private {\\r\\n\\tprivate Private() {\\r\\n\\t\\tnew Default();\\r\\n\\t}\\r\\n}\\r\\n```\\r\\n\\r\\nIt is important to note that some modifiers affects the overriding behavor."},{"id":"Java","metadata":{"permalink":"/blog/Java","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-27-data-types/2024-07-27-data-types.md","source":"@site/blog/2024-07-27-data-types/2024-07-27-data-types.md","title":"Data Types","description":"banner","date":"2024-07-27T00:00:00.000Z","tags":[{"inline":false,"label":"Molokotech","permalink":"/blog/tags/facebook","description":"Software design"},{"inline":true,"label":"java","permalink":"/blog/tags/java"}],"readingTime":4.33,"hasTruncateMarker":false,"authors":[{"name":"Axel Berlot","title":"Java developer @ Opendev Pro","url":"http://web.molokotech.com/?lang=en","imageURL":"https://avatars.githubusercontent.com/u/22393878?s=96&v=4","key":"axel"}],"frontMatter":{"slug":"Java","title":"Data Types","authors":["axel"],"tags":["molokotech","java"]},"unlisted":false,"prevItem":{"title":"Access modifiers","permalink":"/blog/access-modifiers"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"![banner](./../../static/img/banner-java.jpg)\\n\\n[sandbox.molokotech.com](https://docusaurus.io/docs/blog) are powered by the [Molokotech](http://web.molokotech.com/?lang=en).\\n\\n\\nJava has an strong dependency with data types, it is important to understand how they works and how to use it.\\n\\nHave you ever tougth why there are so many data types from different sizes? it\'s really easy to explain, just because when Java was created sitting on 1995 and years later, the devices were Java could installed were pretty small in memory, so the aproach to used only data types that reserves less memory was important.\\n\\nToday no one is concerned by this because your **phone** today is **faster** and **bigger** about memory speaking than your computers.\\n\\nToday it\'s not a problem if you choose to use a **byte** or an **int** because it does\'nt have side effects on the devices.\\n\\nData Types in **Java**.\\n\\n```java\\npackage com.molokotech.models;\\n\\npublic class DataTypes {\\n    private int num = 1;                // Integer wrapper Class\\n    private boolean isBigger = true;\\t// Boolean wrapper Class\\n    private char ch = \'j\';              // Character wrapper Class\\n    private float f = 100;              // Float wrapper Class cast needed 100f/100F\\n    private long l = 5000;              // Long wrapper Class cast needed 5000l/5000L\\n    private short sh = 1234;            // Short wrapper Class\\n    private byte b = 0;\\t                // Byte wrapper Class\\n    \\n    // private vars can access to methods from the same class\\n    private void getDataType() {\\n        System.out.println(\\"primitive type \\" + this.num + \\" in Java is the default for all non decimal numbers\\");\\n        System.out.println(\\"primitive type \\" + this.isBigger + \\" default value is false\\");\\n        System.out.println(\\"primitive type \\" + this.ch + \\" should be rounded by simple quotes default value 0 or u0000, character/letter\\");\\n        System.out.println(\\"primitive type \\" + this.f + \\" it\'s used by default like int default value 0.0\\");\\n        System.out.println(\\"primitive type \\" + this.l);\\n        System.out.println(\\"primitive type \\" + this.sh);\\n        System.out.println(\\"primitive type \\" + this.b + \\" values from -128/127\\");\\n    }\\n    \\n    // getDataType() should be called only from this class\\n    public static void main(String[] args) {\\n\\t\\tnew DataTypes().getDataType();\\n\\t}\\n}\\n```\\n\\n![result](./image1.png)\\n\\n**Wrapper** classes <font color=\\"red\\">Float</font> and <font color=\\"red\\">Long</font> shoud be casted when declared until it reference another variable, in this momment compile apply **autoboxing** strategy.\\n\\n```java\\npackage com.molokotech.models;\\n\\npublic class Cast {\\n\\t\\n    private float f = 100;\\t// Float wrapper Class cast needed 100f/100F\\n    private long l = 5000;\\t// Long wrapper Class cast needed 5000l/5000L\\n\\n    private void doCast() {\\n    \\tFloat sh = 123f;\\t// must be casted -> Float sh = 123; not compile!!\\n    \\tFloat shRef = this.f;   // Autoboxing when ref another variable not casting needed\\n    \\t\\n    \\tLong l = 123l; \\t\\t// must be casted -> Long l = 123; not compile!!\\n    \\tLong lref = this.l; \\t// Autoboxing when ref another variable not casting needed\\n    }\\n\\t\\n}\\n```\\nThere three rules:\\n1) Every **number** data-types **non-decimal** is treated as an **int** always unless it is explicitly cast.\\n2) Every **number** data-types decimal es treated as an double always unless it is explicitly cast.\\n3) Cannot do reference from a smaller data-type to a bigger data-type, because it does\'nt fit, unless it is casted, in that case the value will try to fit passing maximun values.\\n\\nThe next image it\'s not absolute and is just note the different sizes between data types in a graphical way.\\n\\n![result](./datatypes-java.drawio.png)\\n\\nThis code has some **COMPILATION PROBLEMS** related to bigger data-types trying to fit in smaller or incompatible data-types and other valid code you should copy into your IDE and make an analize it.\\n\\n```java\\n\\npackage com.molokotech.utils;\\n\\npublic class ReferenceMemory {\\n    \\n\\tvoid referenceMemoryPoints() {\\n    \\tint num1 = 1000;\\n    \\tInteger num2 = num1; // autoboxing compile\\n    \\t\\n    \\tbyte num3 = 123;\\n    \\tInteger num4 = num3; // compiler knows that a byte is not an Integer -> not compile\\n    \\t\\n    \\tbyte num5 = 123;\\n    \\tint num6 = num5; // num5 primitive treated as an int, fit as an int -> compile\\n    \\t\\n    \\tshort num7 = 1234;\\n    \\tint num8 = num7; // num6 primitive treated as an int, fit as an int -> compile\\n    \\t\\n    \\tint num9 = 123;\\n    \\tbyte num10 = num9; // num9 does\'nt fit in a byte because is bigger unless be casted -> not compile\\n    \\t\\n    \\tint num11 = 123;\\n    \\tbyte num12 = (byte) num11; // num11 does\'nt fit in a byte because is bigger but is explicitly casted -> compile\\n    \\t\\n    \\tlong num13 = 12000;\\n    \\tInteger num14 = num13; // compiler knows that a long is not an Integer -> not compile\\n    \\t\\n    \\tlong num15 = 13000;\\n    \\tInteger num16 = (int) num13; // long is not an Integer but just casted -> compile\\n    \\t\\n    \\tlong num17 = 900000000033333l;\\n    \\tint num18 = num17; // long cannot fit into an Integer -> not compile\\n    \\t\\n    \\tlong num19 = 900000000033333l;\\n    \\tint num20 = (int) num19; // cannot fit but cast exced limits of the datatype -> compile\\n    \\t\\n    \\tint num21 = 2000;\\n    \\tbyte num22 = (byte) num21;\\n    \\tSystem.out.println(num22); // cannot fit but cast exced limits of the datatype -> compile\\n    }\\n\\t\\n}\\n```\\n\\nViewing the results in the IDE\\n\\n![result](./data-types-ref.png)\\n\\nIf we comment the compilation problems and run the program we see that prints a negative number even if we assign a positive number, this is because it reach out the max size of data-type and force it to assign with the cast, so it tries to fit anyway passing the limits.\\n\\n![max](data-types-max.png)"},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"Axel Berlot","title":"Java developer @ Opendev Pro","url":"http://web.molokotech.com/?lang=en","imageURL":"https://avatars.githubusercontent.com/u/22393878?s=96&v=4","key":"axel"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["axel"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Data Types","permalink":"/blog/Java"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","tags":[{"inline":true,"label":"hello","permalink":"/blog/tags/hello"},{"inline":false,"label":"Docusaurus","permalink":"/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Axel Berlot","title":"Java developer @ Opendev Pro","url":"http://web.molokotech.com/?lang=en","imageURL":"https://avatars.githubusercontent.com/u/22393878?s=96&v=4","key":"axel"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"axel","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}}')}}]);