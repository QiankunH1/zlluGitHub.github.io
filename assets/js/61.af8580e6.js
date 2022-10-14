(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{392:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"数据库备份"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库备份"}},[a._v("#")]),a._v(" 数据库备份")]),a._v(" "),s("p",[a._v("使用 mysqldump 命令:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump -u用户名 -p密码 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--databases")]),a._v(" 数据库1 数据库2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" xxx.sql \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者 ")]),a._v("\nmysqldump 数据库1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" xxx.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("选项说明")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("-u：用户名\n\n-p：密码\n\n-P： 端口号，不写默认3306\n\n--all-databases, -A：备份所有数据库\n\n--databases, -B： 用于备份多个数据库，如果没有该选项，mysqldump把第一个名字参数作为数据库名，后面的作为表名。使用该选项，mysqldum把每个名字都当作为数据库名。\n\n-d：只导出数据库的表结构\n\n-t：只导出数据库的数据\n\n--quick, -q：快速导出\n\n--xml, -X：导出为xml文件\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("ol",[s("li",[a._v("备份全部数据库的数据和结构（-A）")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0101.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("备份全部数据库的结构（-d）")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P3306")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0102.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("备份全部数据库的数据（-t）")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P3306")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0103.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("备份单个数据库的数据和结构（sakila 为数据库名）")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P3306")]),a._v(" sakila "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0104.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("备份单个数据库结构（sakila 为数据库名，-d）")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P3306")]),a._v(" sakila "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0105.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"6"}},[s("li",[a._v("备份单个数据库数据（sakila 为数据库名，-t）")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P3306")]),a._v(" sakila "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0106.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"7"}},[s("li",[a._v("备份多个表的结构和数据 (table1,table2为表名)")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P3306")]),a._v(" sakila table1 table2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0107.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"8"}},[s("li",[a._v("一次备份多个数据库")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqldump "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--databases")]),a._v(" db1 db2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" 0108.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"数据库还原"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库还原"}},[a._v("#")]),a._v(" 数据库还原")]),a._v(" "),s("p",[a._v("1、系统命令行，注意，在导入备份数据库前，db_name 如果没有，是需要创建的， 而且与之前数据库名是一样的才可以导入。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysqladmin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v(" create db_name \nmysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v("  db_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" d:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("01.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("2、soure 方法")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" use db\nmysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" d:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("bak"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("0101.sql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("说明")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("还原单个数据库、单个数据库的多表需要指定数据库，而还原多个数据库时不用指定数据库。")])]),a._v(" "),s("li",[s("p",[a._v("区别：备份用的命令是mysqldump， 还原用的是mysql。")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);