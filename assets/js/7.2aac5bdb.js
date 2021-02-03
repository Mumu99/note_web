(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{358:function(t,a,s){t.exports=s.p+"assets/img/smzq.ae21986b.png"},378:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vue-扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-扩展"}},[t._v("#")]),t._v(" Vue 扩展")]),t._v(" "),n("h3",{attrs:{id:"_1-slot-插槽"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-slot-插槽"}},[t._v("#")]),t._v(" 1. slot/插槽")]),t._v(" "),n("ol",[n("li",[t._v("插槽的作用:"),n("br"),t._v("\n父组件向子组件传递标签结构(也可以是数据)\n通过标签体传递, 而不再是标签属性")]),t._v(" "),n("li",[t._v("slot 的分类"),n("br"),t._v("\n普通插槽(slot)\n命名插槽(named slot)\n作用域插槽(scoped slot)")]),t._v(" "),n("li",[t._v("区别"),n("br"),t._v("\n普通插槽: 子组件只能有一个插槽, 标签体内容在父组件中解析好后(数据在父组件), 传递给这个插槽\n命名插槽: 子组件有多个指定了 name 的插槽, 标签体内容在父组件中解析好后(数据在父组件), 分别传递给对应的插槽\n作用域插槽: 数据在子组件, 子组件有部分结构需要父组件传递, 但父组件需要读取子组件数据\n子组件需要先向父组件传递数据, 父组件根据数据渲染标签结构后传递给子组件的插槽\n需求: todo 列表组件: 根据内部的 todos 数据显示 todo 列表, 但列表项的样式由使用者决定")])]),t._v(" "),n("h3",{attrs:{id:"_2-mixin-混合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-mixin-混合"}},[t._v("#")]),t._v(" 2. mixin/混合")]),t._v(" "),n("ol",[n("li",[t._v("作用:"),n("br"),t._v("\n复用多个组件重复的 JS 代码(配置)\n一个 mixin 是一个可复用的组件配置对象")]),t._v(" "),n("li",[t._v("定义 mixin"),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myMixin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a1111"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  computed"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("li",[t._v("多组件中引入 mixin"),n("br"),t._v("\n通过 mixins 配置引用: "),n("code",[t._v("mixins: [myMixin]")]),t._v("\nmixin 中的配置与当前组件的配置会自动合并")])]),t._v(" "),n("h3",{attrs:{id:"_3-动态组件-缓存组件-异步组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态组件-缓存组件-异步组件"}},[t._v("#")]),t._v(" 3. 动态组件 / 缓存组件 / 异步组件")]),t._v(" "),n("ol",[n("li",[t._v("动态组件"),n("br"),t._v("\n通过"),n("code",[t._v('<component :is="componentName">')]),t._v("来动态决定渲染哪个组件\n被切换的组件默认会被自动销毁")]),t._v(" "),n("li",[t._v("缓存组件"),n("br"),t._v("\n通过"),n("code",[t._v("<keep-alive>")]),t._v("来缓存被切换的动态组件(非路由组件)\n也可以缓存路由组件")]),t._v(" "),n("li",[t._v("异步组件"),n("br"),t._v("\n在需要组件时, 才异步请求加载组件的代码(从后台)\nVue 能够将组件定义为一个工厂函数(factory function)，此函数可以异步地解析(resolve)组件\nimport()的语法比较适合的是路由组件的异步懒加载")])]),t._v(" "),n("h3",{attrs:{id:"_4-原生事件-vue-自定义事件-全局事件总线"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-原生事件-vue-自定义事件-全局事件总线"}},[t._v("#")]),t._v(" 4. 原生事件 / vue 自定义事件 / 全局事件总线")]),t._v(" "),n("ol",[n("li",[t._v("什么条件下绑定的原生 DOM 事件监听?"),n("br"),t._v("\na. 给 html 标签绑定 dom 事件监听: "),n("code",[t._v('<div @click="handleClick">')]),t._v("\nb. 给组件标签绑定 dom 事件监听(使用.native): "),n("code",[t._v('<MyCommponent @click.native="handleClick">')])]),t._v(" "),n("li",[t._v("什么条件下绑定的 vue 自定义事件监听?"),n("br"),t._v("\na. 自定义事件名: "),n("code",[t._v('<MyComponent @xxx="handleClick2">')]),t._v("\nb. 与 dom 事件名同名: "),n("code",[t._v('<MyComponent @click="handleClick">')])]),t._v(" "),n("li",[t._v("利用 vm 实现全局 eventBus\n"),n("ol",[n("li",[t._v("前置知识:"),n("br"),t._v("\nVue 原型对象上有 3 个事件处理的方法:"),n("code",[t._v("$on() / $emit() / \\$off()")]),t._v("\n组件对象的原型对象是一个 vm 对象: 组件对象可以直接访问 Vue 原型对象上的方法")]),t._v(" "),n("li",[t._v("实现"),n("br"),t._v("\n创建 vm 作为全局事件总线对象: "),n("code",[t._v("Vue.prototype.$bus = new Vue()")]),t._v("\n分发事件/传递数据的组件: "),n("code",[t._v("this.$bus.$emit('eventName', data)")]),t._v("\n处理事件/接收数据的组件: "),n("code",[t._v("this.$bus.\\$on('eventName', (data) => {})")])])])])]),t._v(" "),n("h3",{attrs:{id:"_5-使用组件标签上使用-v-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用组件标签上使用-v-model"}},[t._v("#")]),t._v(" 5. 使用组件标签上使用 v-model")]),t._v(" "),n("ol",[n("li",[t._v("v-model 的本质"),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name = \\$event.target.value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),n("li",[t._v("在自定义组件上使用 v-model"),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyInput")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  MyInput.vue props: ['value']\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$emit("),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", $event.target.value)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  =============================\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{msg}}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  =================\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg=$event.target.value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{msg}}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ==========================\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Model1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Model1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Model2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Model2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{msg2}}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ===============================\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$emit("),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",$event.target.value)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  props:['value'] =================================\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Model3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg3=$event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Model3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{msg3}}"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ==========================\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$emit("),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",$event.target.value)"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  props:['value'] ================================================="),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("MyInput")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"_6-vue-的响应式原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-vue-的响应式原理"}},[t._v("#")]),t._v(" 6. vue 的响应式原理")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("关注点有哪些?"),n("br"),t._v("\nvue 的数据绑定效果: 组件更新 "),n("code",[t._v("data")]),t._v(" 数据后, 当前组件及相关的子组件都会更新相应的节点\n如何知道数据变化了?\n通知哪些组件更新渲染?\n组件更新渲染是同步还是异步的?")])]),t._v(" "),n("li",[n("p",[t._v("基本原理"),n("br"),t._v("\n在初始化时: 利用 "),n("code",[t._v("Object.defineProperty()")]),t._v("给 "),n("code",[t._v("data")]),t._v(" 属性添加 "),n("code",[t._v("setter")]),t._v(" 监视数据变化\n在初始化时: 每个组件实例都有相应的观察者 "),n("code",[t._v("watcher")]),t._v(" 对象, 每个属性都关联上所有相关的 "),n("code",[t._v("watcher")]),t._v(" 对象\n在更新数据后: 对应的 "),n("code",[t._v("setter")]),t._v(" 调用, 通知所有相关的 "),n("code",[t._v("watcher")]),t._v(", "),n("code",[t._v("watcher")]),t._v(" 内异步更新节点或者子组件")])]),t._v(" "),n("li",[n("p",[t._v("一些细节"),n("br"),t._v("\n只有 "),n("code",[t._v("data")]),t._v(" 中属性是响应式的, 只在组件对象上的属性不是响应式的\n"),n("code",[t._v("data")]),t._v(" 中所有层次属性都是响应式的\n直接能 "),n("code",[t._v("data")]),t._v(" 中响应式属性对象添加一个新的属性, 默认不是响应式的, 需要用 "),n("code",[t._v("Vue")]),t._v(" 提供的语法添加\n"),n("code",[t._v("Vue.set(obj, propName, value)")]),t._v(" "),n("code",[t._v("vm.\\$set(obj, propName, value)")]),t._v(" "),n("code",[t._v("vue")]),t._v(" 的异步更新:\n"),n("code",[t._v("vue")]),t._v(" 在内部尝试对异步队列使用原生的 "),n("code",[t._v("Promise.then")]),t._v(" 和 "),n("code",[t._v("MessageChannel，")]),t._v("\n如果执行环境不支持，会采用 "),n("code",[t._v("setTimeout(fn, 0)")]),t._v(" 代替\n关于"),n("code",[t._v("<Root>")]),t._v("组件标签:\n整体应用界面的根标签不是"),n("code",[t._v("<App>")]),t._v(", 而是"),n("code",[t._v("<Root>")]),t._v(",\n"),n("code",[t._v("<Root>")]),t._v("对应的是 "),n("code",[t._v("vm")]),t._v("\nindex 页面中的的 div 元素会被替换, 而不是插入其中\n组件的 data 配置不能是对象?\n组件会被多次使用, 每次使用都会读取 data 配置值, 如果是对象, 那就会共用一个 data 对象\n而函数就没有问题, 因为每次调用函数返回一个新的 data 对象")])])]),t._v(" "),n("h3",{attrs:{id:"_7-组件的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-组件的生命周期"}},[t._v("#")]),t._v(" 7. 组件的生命周期")]),t._v(" "),n("p",[n("img",{attrs:{src:s(358),alt:"Image text"}})]),t._v(" "),n("ol",[n("li",[t._v("vue 的生命周期: 创建=>挂载=>更新=>销毁\n"),n("ol",[n("li",[t._v("vue 的生命周期勾子:"),n("br"),t._v("\n初始化(一次): "),n("code",[t._v("beforeCreate() => created() => beforeMount() => mounted()")]),t._v("\n更新(n 次): "),n("code",[t._v("beforeUpdate() => updated()")]),t._v("\n销毁(一次):"),n("code",[t._v("beforeDestroy() => destroyed()")])]),t._v(" "),n("li",[t._v("一些细节"),n("br"),t._v(" "),n("code",[t._v("beforeCreate():")]),t._v(" 在实例初始化之后，立即同步调用，在数据观察"),n("code",[t._v("(data observer)")]),t._v("和 "),n("code",[t._v("event/watcher")]),t._v(" 配置之前被调用。\n"),n("code",[t._v("created()")]),t._v(": 可以读取或修改 data 中的数据, 已经完成数据观察"),n("code",[t._v("(data observer)")]),t._v("和 "),n("code",[t._v("event/watcher")]),t._v(" 配置\n"),n("code",[t._v("beforeMount()")]),t._v(": 模板已经在内存中编译, 但还没有挂载到页面上, 不能通过 ref 找到对应的标签\n"),n("code",[t._v("mounted()")]),t._v(": 页面已经初始显示, 可以通过 ref 找到对应的标签\n"),n("code",[t._v("beforeUpdate()")]),t._v(": 在数据更新之后, 界面更新前调用, 只能访问到原有的界面\n"),n("code",[t._v("updated()")]),t._v(": 在界面更新之后调用, 此时可以访问最新的界面\n"),n("code",[t._v("beforeDestroy()")]),t._v(": 实例销毁之前调用, 此时实例仍然完全可用。\n"),n("code",[t._v("destroyed()")]),t._v(": Vue 实例销毁后调用, 数据绑定/事件监听器都没了, 但 dom 结构还在")])])])]),t._v(" "),n("h3",{attrs:{id:"_8-正向代理与反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-正向代理与反向代理"}},[t._v("#")]),t._v(" 8. 正向代理与反向代理")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/1/3/16813f90387855c0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v("\n​")]),t._v(" "),n("ol",[n("li",[t._v("正向代理"),n("br"),t._v("\n代理客户端\n隐藏真实的客户，为客户端收发请求，使真实客户端对服务器不可见;\n一个局域网内的所有用户可能被一台服务器做了正向代理，由该台服务器负责 HTTP 请求;\n例子: "),n("code",[t._v("http-proxy-middleware /")]),t._v(" 翻墙软件")]),t._v(" "),n("li",[t._v("反向代理"),n("br"),t._v("\n代理服务器;\n隐藏了真实的服务器，为服务器收发请求，使真实服务器对客户端不可见;\n例子: Nginx 服务器")])])])}),[],!1,null,null,null);a.default=e.exports}}]);