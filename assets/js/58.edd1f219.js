(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{389:function(s,e,t){"use strict";t.r(e);var n=t(0),a=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("当出现403跨域错误的时候 "),e("code",[s._v("No 'Access-Control-Allow-Origin' header is present on the requested resource")]),s._v("，需要给Nginx服务器配置响应的"),e("code",[s._v("header")]),s._v("参数：")]),s._v(" "),e("h2",{attrs:{id:"解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),e("p",[s._v("只需要在Nginx的配置文件中配置以下参数：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("location / "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  \n    add_header Access-Control-Allow-Origin *"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    add_header Access-Control-Allow-Methods "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'GET, POST, OPTIONS'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    add_header Access-Control-Allow-Headers "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_method")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OPTIONS'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("上面配置代码即可解决问题了，不想深入研究的，看到这里就可以了")]),s._v(" "),e("h2",{attrs:{id:"解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解释"}},[s._v("#")]),s._v(" 解释")]),s._v(" "),e("p",[e("strong",[s._v("1. Access-Control-Allow-Origin")])]),s._v(" "),e("p",[s._v("服务器默认是不被允许跨域的。给Nginx服务器配置"),e("code",[s._v("Access-Control-Allow-Origin *")]),s._v("后，表示服务器可以接受所有的请求源（Origin）,即接受所有跨域的请求。\n"),e("strong",[s._v("2. Access-Control-Allow-Headers 是为了防止出现以下错误：")])]),s._v(" "),e("p",[s._v("Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.")]),s._v(" "),e("p",[s._v('这个错误表示当前请求Content-Type的值不被支持。其实是我们发起了"application/json"的类型请求导致的。这里涉及到一个概念：预检请求（preflight request）,请看下面"预检请求"的介绍。')]),s._v(" "),e("p",[e("strong",[s._v("3. Access-Control-Allow-Methods 是为了防止出现以下错误：")])]),s._v(" "),e("p",[s._v("Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.")]),s._v(" "),e("p",[e("strong",[s._v("4. 给OPTIONS 添加 204的返回，是为了处理在发送POST请求时Nginx依然拒绝访问的错误")])]),s._v(" "),e("p",[s._v('发送"预检请求"时，需要用到方法 OPTIONS ,所以服务器需要允许该方法。')]),s._v(" "),e("h2",{attrs:{id:"预检请求-preflight-request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预检请求-preflight-request"}},[s._v("#")]),s._v(" 预检请求（preflight request）")]),s._v(" "),e("p",[s._v("其实上面的配置涉及到了一个W3C标准：CROS,全称是跨域资源共享 (Cross-origin resource sharing)，它的提出就是为了解决跨域请求的。")]),s._v(" "),e("p",[s._v("跨域资源共享(CORS)标准新增了一组 HTTP 首部字段，允许服务器声明哪些源站有权限访问哪些资源。另外，规范要求，对那些可能对服务器数据产生副作用的HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。")]),s._v(" "),e("p",[s._v("其实"),e("code",[s._v("Content-Type")]),s._v("字段的类型为"),e("code",[s._v("application/json")]),s._v("的请求就是上面所说的搭配某些 MIME 类型的 POST 请求,CORS规定，"),e("code",[s._v("Content-Type")]),s._v("不属于以下MIME类型的，都属于预检请求：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("application/x-www-form-urlencoded\nmultipart/form-data\ntext/plain\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v('所以 application/json的请求 会在正式通信之前，增加一次"预检"请求，这次"预检"请求会带上头部信息 Access-Control-Request-Headers: Content-Type：')]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("OPTIONS /api/test HTTP/1.1\nOrigin: http://foo.example\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: Content-Type\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("... 省略了一些\n服务器回应时，返回的头部信息如果不包含"),e("code",[s._v("Access-Control-Allow-Headers: Content-Type")]),s._v("则表示不接受非默认的的"),e("code",[s._v("Content-Type")]),s._v("。即出现以下错误：")]),s._v(" "),e("p",[e("code",[s._v("Request header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);