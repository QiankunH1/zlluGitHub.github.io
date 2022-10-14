(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{398:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1、创建jdk安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建jdk安装目录"}},[s._v("#")]),s._v(" 1、创建jdk安装目录")]),s._v(" "),a("p",[s._v("一般 "),a("code",[s._v("/usr/local/src")]),s._v(" 这个目录是空的,可以将我们自己下载的文件放到这里，为了方便我将安装目录放到了 "),a("code",[s._v("/home/zll")]),s._v(" 目录下了 （组合键："),a("code",[s._v("Ctrl+Alt+T")]),s._v(" 出现的终端，其中 zll 为本机的用户名） 此安装目录可有可无。创建 jdk 目录命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /usr/local/src/jdk    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#jdk 为自定义文件夹名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2、查看安装程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看安装程序"}},[s._v("#")]),s._v(" 2、查看安装程序")]),s._v(" "),a("p",[s._v("若之前安装过jdk，下次安装一定把之前的删除干净，查看命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" jdk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、在终端下载安装jdk包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、在终端下载安装jdk包"}},[s._v("#")]),s._v(" 3、在终端下载安装jdk包")]),s._v(" "),a("p",[s._v("此方式可以下载后缀为 tar.gz 的文件，这种文件不需要安装，下载命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate --no-cookies "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--header")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cookie: oraclelicense=accept-securebackup-cookie"')]),s._v("  http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("如果上面 wget 命令不能用,报错："),a("code",[s._v("-bash: wget: command not found")]),s._v("。执行一下该命令(安装依赖包)")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("另外，记住需要加上：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("--no-check-certificate --no-cookies "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--header")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cookie: oraclelicense=accept-securebackup-cookie"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这段是为了避开用户验证用的。")]),s._v(" "),a("h2",{attrs:{id:"_4、解压文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、解压文件"}},[s._v("#")]),s._v(" 4、解压文件")]),s._v(" "),a("p",[s._v("解压命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" jdk-8u131-linux-x64.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("系统会生成一个名为：jdk1.8.0_131 的文件夹。可以使用mv命令自定义文件名。例如：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" jdk1.8.0_131  jdk1.8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5、配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、配置环境变量"}},[s._v("#")]),s._v(" 5、配置环境变量")]),s._v(" "),a("h3",{attrs:{id:"_5-1、方式一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、方式一"}},[s._v("#")]),s._v(" 5.1、方式一")]),s._v(" "),a("p",[s._v("在终端键入命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接着便可以看到 profile 这个文件的内容，这时可以使用 shift + g 定位到最后一行，按一下a或i键，进入编辑模式，添加如下内容：(JAVA_HOME 是jdk安装目录,jdk1.8是 jdk 解压目录)")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zll"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_5-2、方式二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、方式二"}},[s._v("#")]),s._v(" 5.2、方式二")]),s._v(" "),a("p",[s._v("在终端键入命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入到 etc 目录下,使用 code 打开 profile 文件，然后编辑保存。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:/etc$ code profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在文件最后添加如下内容然后保存即可：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zll"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("jdk1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_6、退出文件-保存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、退出文件-保存"}},[s._v("#")]),s._v(" 6、退出文件，保存")]),s._v(" "),a("p",[s._v("按 Esc 键 输入: wq 保存并退出")]),s._v(" "),a("h2",{attrs:{id:"_7、使配置文件生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、使配置文件生效"}},[s._v("#")]),s._v(" 7、使配置文件生效")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_8、查看是否配置成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、查看是否配置成功"}},[s._v("#")]),s._v(" 8、查看是否配置成功")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若出现 jdk 版本号，则安装并配置环境变量成功,如果提示命令找不到的话，查看一下 jdk 的配置路径是否错误。若出现\n"),a("code",[s._v("A Java Runtime Environment (JRE) or Java Development Kit (JDK) must be available in order to run Eclipse. No Java virtual machine was found after searching the following locations: /home/zhangliuhua/developer/eclipse/jre/bin/java java in your current PATH")]),s._v("\n这样错误，可用如下方法解决。")]),s._v(" "),a("p",[s._v("首先，进入到 eclipse 安装目录下,新建文件夹 jre")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~/eclipse$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" jre\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入到 jre 文件夹跟安装的 java 环境建立连接")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~/eclipse$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" jre \nzll@zll-PC:~/eclipse/jre$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /home/zll/jdk1.8/bin bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("::: warning注意\nln -s jdk的安装目录/bin bin\n:::")]),s._v(" "),a("p",[s._v("eclipse 下载安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://mirrors.neusoft.edu.cn/eclipse/technology/epp/downloads/release/luna/SR2/eclipse-jee-luna-SR2-linux-gtk-x86_64.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("eclipse 解压安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" eclipse-jee-luno-SR2-linux-gtk-x86_64.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入解压之后的文件夹")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" eclipse\nzll@zll-PC:~/eclipse$ ./eclipse\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_9、设置-eclipse-软连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、设置-eclipse-软连接"}},[s._v("#")]),s._v(" 9、设置 eclipse 软连接")]),s._v(" "),a("p",[s._v("即可打开 eclipse，为了可以方便的在任何地方打开 eclipse，设置如下：")]),s._v(" "),a("p",[s._v("进入文件夹 usr/local/bin 执行命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:~$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将eclipse执行文件符号链接到 /usr/local/bin/ 中执行命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("zll@zll-PC:/usr/local/bin$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /home/zll/eclipse/eclipse\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);