(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{446:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("思路是这样的：经过保护的代码要能正常运行（当然，不能运行的代码有什么用），同时还不能让别人轻易地看到源码。简而言之，让机器能读懂，而人难以读懂就行了。")]),t._v(" "),s("h2",{attrs:{id:"加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[t._v("#")]),t._v(" 加密")]),t._v(" "),s("p",[t._v("我们可以对js代码进行加密，每次执行前进行解密，实际运行的是解密后的代码。但是加密对执行效率会有影响，而且一旦密码被破解，源码也就泄露了。")]),t._v(" "),s("h2",{attrs:{id:"混淆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混淆"}},[t._v("#")]),t._v(" 混淆")]),t._v(" "),s("p",[t._v("对代码进行混淆，尽量地让代码变得不可读，据说这个思路是从代码写得很差的程序员身上学来的。常见的做法有：分离常量、打乱控制流、增加无意义代码、域名锁定、混淆字符串，禁用调试等方法。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/javascript-obfuscator/javascript-obfuscator",target:"_blank",rel:"noopener noreferrer"}},[t._v("javascript-obfuscator"),s("OutboundLink")],1),t._v("：一个强大的JS混淆器。")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.jshaman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jshaman"),s("OutboundLink")],1),t._v("：一套JS代码安全问题解决方案。")])]),t._v(" "),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[t._v("#")]),t._v(" 编译")]),t._v(" "),s("p",[t._v("Node.js代码是通过V8引擎来执行的，而V8引擎会将源代码编译成字节码(bytenode)之后再解释执行。如果我们能将Node.js代码编译成字节码, 将会进一步提高代码的安全性。毕竟反编译V8的字节码并非易事。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/bytenode/bytenode",target:"_blank",rel:"noopener noreferrer"}},[t._v("bytenode"),s("OutboundLink")],1),t._v("：一个极简的Node.js字节码编译器。")])]),t._v(" "),s("h2",{attrs:{id:"打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),s("p",[t._v("把Node.js代码和依赖，打包成一个可执行文件。这样可以增加一点破解的难度。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vercel/ncc",target:"_blank",rel:"noopener noreferrer"}},[t._v("ncc"),s("OutboundLink")],1),t._v("：可以把Node.js项目打包成一个js单文件，支持 TypeScript，动态导入。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vercel/pkg",target:"_blank",rel:"noopener noreferrer"}},[t._v("pkg"),s("OutboundLink")],1),t._v("： 可以把Node.js项目打包成一个二进制的可执行文件，pkg不支持动态导入，但是会将Node本身一起打包，可以实现在没安装Node.js的环境运行。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/pmq20/node-packer",target:"_blank",rel:"noopener noreferrer"}},[t._v("pmq20/node-packer"),s("OutboundLink")],1),t._v("： 也能打包成一个二进制的可执行文件，它的优势在于支持各种形式的require, 也支持C++模块。可惜项目已经两年没更新了，只支持到Node.js 8.3.0, 对于更高版本的支持，请移步"),s("a",{attrs:{href:"https://github.com/slee047/node-packer",target:"_blank",rel:"noopener noreferrer"}},[t._v("slee047/node-packer"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"方案选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案选择"}},[t._v("#")]),t._v(" 方案选择")]),t._v(" "),s("p",[t._v("没有绝对的安全可言，以上的方法只能是加大破解的难度。有道是世上无难事只怕有心人，只要有足够的技术和耐心，还是有可能还原出相应的代码。")]),t._v(" "),s("p",[t._v("作为防守方，我们能做是尽可能地多采用一些保护手段。在这里，提供一个"),s("code",[t._v("JavaScript obfuscator + bytenode + node-packer")]),t._v("的解决方案。")]),t._v(" "),s("p",[t._v("为什么选用"),s("code",[t._v("node-packer")]),t._v("而不是"),s("code",[t._v("ncc")]),t._v("，"),s("code",[t._v("pkg")]),t._v("呢？因为"),s("code",[t._v("ncc")]),t._v("和"),s("code",[t._v("pkg")]),t._v("无法处理混淆过的代码。")]),t._v(" "),s("h2",{attrs:{id:"参考案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考案例"}},[t._v("#")]),t._v(" 参考案例")]),t._v(" "),s("p",[t._v("假设我们需要保护的是这样的一个项目：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"以下是价值上千万的代码:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 + 1 = "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("首先我们通过"),s("code",[t._v("npm")]),t._v("安装"),s("code",[t._v("javascript-obfuscator")]),t._v(" 和 "),s("code",[t._v("bytenode")]),t._v("。然后在当前系统下安装"),s("code",[t._v("node-packer")]),t._v("。")]),t._v(" "),s("p",[t._v("由于"),s("code",[t._v("node-packer")]),t._v("无法打包由bytenode生成的"),s("code",[t._v(".jsc")]),t._v("字节码文件，所以需要添加以下文件来导入"),s("code",[t._v(".jsc")]),t._v("文件")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// build.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bytenode'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./index-obfuscated.jsc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("接着将以下指令加到"),s("code",[t._v("package.json")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"obfuscate"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript-obfuscator index.js --string-array-encoding rc4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bytenode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bytenode --compile index-obfuscated.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodec"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nodec build.js --skip-npm-install"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run obfuscate && npm run bytenode && npm run nodec"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("复制代码最后运行"),s("code",[t._v("npm run build")]),t._v("，可以得到一个"),s("code",[t._v("a.out")]),t._v("（"),s("code",[t._v("windows")]),t._v("系统下是"),s("code",[t._v("a.exe")]),t._v("）的可执行文件。运行一下，价值上千万的代码就跑起来了。")]),t._v(" "),s("p",[t._v("此外你会发现项目目录下多了两个文件："),s("code",[t._v("index-obfuscated.js")]),t._v(", "),s("code",[t._v("index-obfuscated.jsc")]),t._v("。它们分别是混淆之后的代码以及字节码文件。"),s("code",[t._v("javascript-obfuscator")]),t._v("支持多种混淆技术，可能通过查看文档，按照自己的项目需求，调配选用合适的选项。")]),t._v(" "),s("h2",{attrs:{id:"示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/iWinston/javascript-code-protection-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/iWinston/javascript-code-protection-example"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);