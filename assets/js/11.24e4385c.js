(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{367:function(e,a,t){"use strict";t.r(a);var s=t(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ecmascript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript"}},[e._v("#")]),e._v(" ECMAScript")]),e._v(" "),t("h3",{attrs:{id:"ecma-组织介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecma-组织介绍"}},[e._v("#")]),e._v(" ECMA 组织介绍")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.ECMA组织:欧洲计算机制造商协会,制定和发布的脚本语言规范\n2.ECMAscript是基于Netscape javaScript的一种标准脚本语言。\n3.JavaScript包含3个部分:\n  1)ECMAScript核心(JS标准语法)\n  2)浏览器端的扩展\n    BOM(浏览器对象模型)\n    DOM(文档对象模型)\n  3)服务器端的扩展\n    Node.js\n4.ES的几个重要版本\n  ES5:09年发布\n  ES6:15年发布,也叫ECMA2015\n  ES7:16年发布,也叫ECMA2016\n")])])]),t("h3",{attrs:{id:"理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解"}},[e._v("#")]),e._v(" 理解:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('1. 除了正常运行模式(混杂模式),ES5添加了第二种运行模式:"严格模式(strict mode)"\n2. 顾明思议,这种模式使得JS在严格的语法条件下运行\n')])])]),t("h3",{attrs:{id:"目的-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的-作用"}},[e._v("#")]),e._v(" 目的/作用:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 消除JS语法一些不合理,不严谨的地方,减少一些怪异行为\n2. 消除代码运行的一些不安全之处,为代码的安全运行保驾护航\n3. 为未来新版本的JS做好铺垫\n")])])]),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 在全局或函数的第一条语句定位为: 'use strict';\n2. 如果浏览器不支持,只解析为一条简单的语句,没有任何副作用\n")])])]),t("h3",{attrs:{id:"语法和行为改变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法和行为改变"}},[e._v("#")]),e._v(" 语法和行为改变")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 必须用var 声明变量\n2. 禁止自定义的函数中this指向window\n3. 创建eval作用域\n4. 对象不能有重名的属性(语法报错)\n")])])]),t("h3",{attrs:{id:"json-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-对象"}},[e._v("#")]),e._v(" JSON 对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. JSON.stringify(obj/arr) js对象(数组)转换为json对象(数组)\n2. JSON.parse(json) json对象(数组)转换为js对象(数组)\n3. 用于前后端进行交互(或者数据的存储)\n")])])]),t("h3",{attrs:{id:"es5-给-object-扩展了一些静态方法-常用的-2-个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es5-给-object-扩展了一些静态方法-常用的-2-个"}},[e._v("#")]),e._v(" ES5 给 Object 扩展了一些静态方法,常用的 2 个:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Object.create(prototype,[descriptors])\n1. Object.create(prototype,[descriptors]) 创建对象并继承\n  - 作用: 以指定对象为原型创建新的对象\n  - 为新的对象指定新的属性,并对属性进行描述\n  - value: 指定的值\n  - weitable:标识当前属性值是否是可修改的,默认为false\n  - configurable:标识当前属性是否可以被删除,默认是false\n  - enumberable: 标识当前属性是否能用for in 枚举,默认为false\n  - for-in(性能问题)不仅枚举自身属性,也可以枚举原型对象上的属性,一般配合对象.hasOwnProperty()方法\n2. Object.defineProperties(object, descriptors)\n  - 作用:为指定对象定义扩展多个属性\n  - get: 用来获取当前属性值的回调函数\n  - set: 修改当前属性值的触发的回调函数,并且实参为修改后的值\n  - 存储器属性: settter,getter一个用来存值,一个用来取值\n3. 对象本身有两个方法\n  - get propertyName(){} 用来得到当前属性值的回调函数\n  - set propertyName(){} 用来监视当前属性值变化的回调函数\n")])])]),t("h3",{attrs:{id:"array-的方法扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-的方法扩展"}},[e._v("#")]),e._v(" Array 的方法扩展")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Array.prototype.indexOf(value):得到数组中的某个数据的第一个下标,用来找数据的\n2. Array.prototype.lastIndexOf(value):得到数组中某个数据的最后一个小标\n3. Array.prototype.forEach(function(item,index){}):遍历数组\n4. Array.prototype.map(function(item,index){}):遍历数组,返回新数组\n5. Array.prototype.filter(function(item,index){}):遍历数组,过滤后的数组\n")])])]),t("h3",{attrs:{id:"function-的扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#function-的扩展"}},[e._v("#")]),e._v(" Function 的扩展")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Function.prototype.bind(obj)\n  - 作用:讲函数内的this绑定为obj,并将函数返回\n2. 面试题:区别:bind()与call和applay()?\n  - call()/apply()是立刻调用函数\n  - bind()是将函数返回\n")])])]),t("h3",{attrs:{id:"es6-的笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es6-的笔记"}},[e._v("#")]),e._v(" ES6 的笔记")]),e._v(" "),t("h3",{attrs:{id:"let-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-关键字"}},[e._v("#")]),e._v(" let 关键字")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 作用: 与var 类似,用于声明变量\n2. 特点:在块级作用内有效,不能重复声明,不会预处理,不存在提升\n3. 应用:循环遍历加监听,使用let取代var是趋势\n")])])]),t("h3",{attrs:{id:"const-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#const-关键字"}},[e._v("#")]),e._v(" const 关键字")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 作用: 定义一个常量\n2. 特点: 不能修改,其他的同let一样\n3. 应用: 保存不用改变的数据\n")])])]),t("h3",{attrs:{id:"webstorm-languages-frameworks-javascript-右侧的窗口中找下拉框-切换-ecmascript-6-保存即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webstorm-languages-frameworks-javascript-右侧的窗口中找下拉框-切换-ecmascript-6-保存即可"}},[e._v("#")]),e._v(" WebStorm---\x3eLanguages&Frameworks---\x3eJavascript---\x3e右侧的窗口中找下拉框---\x3e切换 ECMAScript 6 保存即可")]),e._v(" "),t("h3",{attrs:{id:"解构赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解构赋值"}},[e._v("#")]),e._v(" 解构赋值")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 理解:从对象或数组中提取数据,并赋值给变量(多个)\n2. 对象的解构赋值: let {m,n}={n:'a',m:'b'}\n3. 数组的解构赋值: let [a,b]=[10,'测试']\n4. 用途: 给多个形参赋值\n5. 注意:解构赋值对象的时候,写的变量名字一定是对象中存在的属性名字,想要什么属性就写什么属性\n")])])]),t("h3",{attrs:{id:"模版字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模版字符串"}},[e._v("#")]),e._v(" 模版字符串")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 作用:简化字符串的拼接\n2. 模版字符串必须用 `` 包含\n3. 变化的部分使用 ${xxx}定义\n")])])]),t("h3",{attrs:{id:"简化对象的写法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简化对象的写法"}},[e._v("#")]),e._v(" 简化对象的写法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 省略同名的属性值\n2. 省略方法的function\n")])])]),t("h3",{attrs:{id:"箭头函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[e._v("#")]),e._v(" 箭头函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 作用: 定义匿名函数\n2. 基本语法: ()=>{console.log('xxxx')}\n3. 一个参数: msg=> msg+2\n4. 多个参数: (m,n)=>m+n\n5. 函数体不用大括号:默认有返回结果\n6. 函数体如果有多个语句,需要使用{}包裹,如果内部有需要返回的值,则手动return\n7. 使用场景: 多用来定义回调函数\n8. 箭头函数的特定:\n  - 简洁\n  - 箭头函数没有自己的this,箭头函数的this不是调用的时候决定的,而是在定义的时候处在自己对象就是它的this\n  - 扩展理解: 箭头函数的this看外层的是否有函数,如果有,外层函数的this就是内部箭头函数的this,如果没有则this是window\n")])])]),t("h3",{attrs:{id:"三点运算符-拆包和打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三点运算符-拆包和打包"}},[e._v("#")]),e._v(" 三点运算符: 拆包和打包")]),e._v(" "),t("h3",{attrs:{id:"形参默认值-简化函数的形参语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#形参默认值-简化函数的形参语法"}},[e._v("#")]),e._v(" 形参默认值: 简化函数的形参语法")]),e._v(" "),t("h3",{attrs:{id:"promise-对象-代表了未来某个将要发生的事件-通常是一个异步操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise-对象-代表了未来某个将要发生的事件-通常是一个异步操作"}},[e._v("#")]),e._v(" Promise 对象:代表了未来某个将要发生的事件(通常是一个异步操作)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 理解:有了Promise对象,可以将异步操作以同步的流程表达出来,避免层层嵌套的回调函数(回调地狱)\n  - 回调地狱:回调嵌套或者函数相互调用(很乱的调用)\n  - ES6的Promise是一个构造函数,用来生成Promise的实例对象\n2. 使用Promise基本步骤(2步)\n  - 创建Promise对象\n  - let promise = new Promise((resolve,reject)=>{\n    // 初始化promise状态为pending,执行异步操作\n    if(异步操作成功){\n      resolve(value); // 修改promise的状态为fullfilled\n    }else{\n      reject(errMsg); // 修改promise的状态为rejected\n    }\n  })\n  - 调用promise的then()\n  - promise.then(function(){\n      result=>console.log(result),\n      errorMsg=>alert(errorMsg)\n  })\n3. promise对象的三个状态\n  - pending: 初始化状态\n  - fullfilled: 成功状态\n  - rejected: 失败状态\n4. 应用:\n  - 使用promise实现超时状态\n  - 使用promise封装ajax请求\n  let request = new XMLHttpRequest();\n  request.onreadystatechange=function(){}\n  request.respnseType='json';\n  request.open('GET',url)\n  request.send()\n")])])]),t("h3",{attrs:{id:"symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[e._v("#")]),e._v(" Symbol:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. ES5中对象的属性名都是字符串,容易造承重名,污染环境\n2. 概念:ES6中的添加了一种原始数据类型Symbol(已有的原始数据类型:String,Number,Boolean,null,undefined,对象)\n3. 特点:\n  - Symbol 属性对应的值是唯一的,解决命名冲突问题\n  - Symbol 值不能与其他数据进行计算,包括同字符串拼串\n  - for in , for of 遍历时不会遍历symbol 属性\n4. 使用:\n  - 调用Symbol 函数得到symbol 值\n  - let symbol =Symbol()\n  - let obj ={}\n  - obj[symbol]='hello';\n5. 传参标识\n  - let symbol = Symbol('one')\n  - let symbol2 = Symbol('two')\n  - console.log(symbol) // Symbol('one')\n  - console.log(symbol2) // Symbol('two')\n6. 定义常量标识\n  - 可以定义常量,就是标识\n  - const person_key = Symbol('person_key')\n  - console.log(person_key)\n7. 内置Symbol值\n  - 除了定义自己使用的Symbol值以外,ES6还提供了11个内置的Symbol值,指向语言内部使用的方法\n  - Symbol.iterator\n  - 对象的Symbol.iterator属性,指向该对象的默认遍历器方法(很快就讲了)\n")])])]),t("h3",{attrs:{id:"iterator-是一种接口机制-为各种不同的数据结构提供统一的访问机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iterator-是一种接口机制-为各种不同的数据结构提供统一的访问机制"}},[e._v("#")]),e._v(" iterator 是一种接口机制,为各种不同的数据结构提供统一的访问机制")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 作用:\n  - 为各种数据结构,提供一个统一的，简便的访问接口\n  - 使得数据结构的成员能够按某种次序排列\n  - ES6创造了一种新的遍历命令,for..of循环,Iterator接口主要提供for...of消费\n2. 工作原理\n  - 创建一个指针对象(遍历器对象),指向数据结构的起始位置\n  - 第一次调用next方法,指针自动指向数据结构的第一个成员\n  - 接下来不断调用next方法,指针会一直往后移动,知道指向最后一个成员\n  - 每调用next方法返回的是一个包含value和done的对象,{value:当前成员的值,done:布尔值}\n  - value表示当前成员的值,done对应的布尔值表示当前的数据的结构是否遍历结束\n  - 当遍历结束的时候返回的value值是undefine,done值为false\n  - 原生具备iterator接口的数据(可用for of遍历)\n  - 扩展理解:\n    - 当数据结构上部署了Symbol.iterator接口,该数据可以用for-of遍历\n    - 当使用for of去遍历目标数据的时候,该数据会自动去找Symbol.iterator\n  - Symbol.iterator属性指向对象的默认遍历器方法(iterator接口)\n    - Array\n    - arguments\n    - set容器\n    - map容器\n    - String\n    ....\n")])])]),t("h3",{attrs:{id:"generator-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generator-函数"}},[e._v("#")]),e._v(" Generator 函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 概念:\n  - ES6提供的解决异步编程的方案之一\n  - Generator函数是一个状态,内部封装了不同状态数据\n  - 用来生成遍历对象\n  - 可暂停函数(惰性求值),yield可暂停,next方法可启动,每次返回的是yield后的表达式结果\n2. 特点:\n  - function 与函数名之间有一个星号\n  - 内部用yield表达式来定义不同的状态\n  - 例如:\n    function * generatorExample(){\n      let result = yield 'hello'; // 状态值为hello\n      yield 'generator'; // 状态值为generator\n    }\n  - generator函数返回的是指针对象(接iterator),而不会执行函数内部逻辑\n  - 调用next方法函数内部逻辑开始执行,遇到yield表达式停止,返回{value:yield后的表达式结果/undefined,done:true}\n  - 再次调用next方法会从上一次停止时的yield处开始,直到最后\n  - yield语句返回结果通常为undefine,当调用next方法时传参内容会作为启动时yield语句的返回值\n")])])]),t("h3",{attrs:{id:"async-函数是-generator-函数的语法糖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#async-函数是-generator-函数的语法糖"}},[e._v("#")]),e._v(" async 函数是 generator 函数的语法糖")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 概念: 真正意义上去解决异步回调问题,同步流程表达异步操作\n2. 本质: Generator的语法糖\n3. 语法:\n  - async function foo(){\n      await 异步操作;\n      await 异步操作;\n  }\n4. 特点:\n  - 不需要像Generator去调用next方法,遇到await等待,当恰你的异步操作完成就往下执行\n  - 返回的总是Promise对象,可以用then方法进行下一步操作\n  - async 取代Generator函数的星号*,await 取代Generator的yield\n  - 语义上更为明确,使用简单,经临床验证,暂时没有副作用及不良反应\n1. await 是暂停,但是必须跟着promise对象才会暂停,其他的都不暂停\n")])])]),t("h3",{attrs:{id:"class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[e._v("#")]),e._v(" class")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 通过class定义类/实现类的继承\n2. 在类中通过constructor定义构造方法\n3. 通过new 来创建类的实例\n4. 通过extends来实现类的继承\n5. 通过super调用父类的构造函数\n6. 重写从父类继承的一般方法\n")])])]),t("h3",{attrs:{id:"字符串扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串扩展"}},[e._v("#")]),e._v(" 字符串扩展")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. includes(str) 判断是否包含指定的字符串\n2. startsWith(str) 判断是否以指定字符串开头\n3. endsWith(str) 判断是否以指定字符串结尾\n4. repeat(count) 重复指定的次数\n")])])]),t("h3",{attrs:{id:"二进制与八进制数值表示法-二进制用-0b-八进制用-0o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二进制与八进制数值表示法-二进制用-0b-八进制用-0o"}},[e._v("#")]),e._v(" 二进制与八进制数值表示法:二进制用 0b,八进制用 0o")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Number.isFinite(i) 判断是否是有限大的数\n2. Number.isNaN(i) 判断是否是NaN\n3. Number.isInteger(i) 判断是否是整数\n4. Number.parseInt(str) 将字符串转换为对应的数值\n5. Math.trunc(i) 直接去除小数部分\n")])])]),t("h3",{attrs:{id:"数组扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组扩展"}},[e._v("#")]),e._v(" 数组扩展")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Array.form(伪数组) 伪数组转真数组\n2. Array.of(val1,val2,val3)将一些列数值转换为数组\n3. find(回调) 找出第一个满足条件的元素\n4. findIndex(回调) 找出第一个满足条件的元素的下标\n")])])]),t("h3",{attrs:{id:"对象扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象扩展"}},[e._v("#")]),e._v(" 对象扩展")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Object.is(v1,v2)\n2. Object.assign(target,obj1,obj2) 将对象的属性复制到目标对象上\n3. 直接操作__proto__属性\n  - let obj2={}\n  - obj2.__proto__=obj1\n")])])]),t("h3",{attrs:{id:"拷贝数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拷贝数据"}},[e._v("#")]),e._v(" 拷贝数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 基本数据类型\n  - 拷贝后悔生成一份新的数据,修改拷贝以后的数据不会影响原数据\n2. 对象/数组\n  - 拷贝后不会生成新的数据,而是拷贝的是引用,修改拷贝以后的数据会影响原来的数据\n3. 拷贝数据的方法:\n  - 直接赋值给一个变量 浅拷贝\n  - Object.assgin() 浅拷贝\n  - Array.prototype.concat() 浅拷贝\n  - Array.pototype.slice() 浅拷贝\n  - JSON.parse(JSON.stringify()) 深拷贝(深度克隆),拷贝的数据里不能有函数,处理不了\n4. 浅拷贝(对象/数组)\n  - 特点: 拷贝引用,修改拷贝以后的数据会影响原数据\n5. 深拷贝(深度克隆)\n  - 特点: 拷贝的时候生成新数据,修改拷贝以后的数据不会影响原数据\n  - 深度克隆会进行深度的遍历(会用到递归)\n  - 需要进行类型的检测 : typeof 返回数据类型:String,Number,Boolean,Undefined,Object,Function\n  - Object.prototype.toString.call(obj) 返回的是该对象到底是什么类型\n  - console.log(Object.prototype.toString.call(result))\n  - 截取获取的真正的数据类型\n  - console.log(Object.prototype.toString.call(result).slice(8, -1))\n  - for-in循环 对象(属性名) 数组(下标)\n")])])]),t("h3",{attrs:{id:"set-容器-无序不可重复的多个值的集合体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-容器-无序不可重复的多个值的集合体"}},[e._v("#")]),e._v(" Set 容器:无序不可重复的多个值的集合体")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Set()\n2. Set(array)\n3. add(value)\n4. delete(value)\n5. has(value)\n6. clear()\n7. size\n")])])]),t("h3",{attrs:{id:"map-容器-无序的-key-不重复的多个-key-value-的集合体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map-容器-无序的-key-不重复的多个-key-value-的集合体"}},[e._v("#")]),e._v(" Map 容器: 无序的 key 不重复的多个 key-value 的集合体")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. Map()\n2. Map(array)\n3. set(key,value) 添加\n4. get(key)\n5. delete(key)\n6. has(key)\n7. clear()\n8. size\n")])])]),t("h3",{attrs:{id:"for-of-循环可以遍历下面内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-of-循环可以遍历下面内容"}},[e._v("#")]),e._v(" for-of 循环可以遍历下面内容:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1. 遍历数组\n2. 遍历Set\n3. 遍历Map\n4. 遍历字符串\n5. 遍历伪数组\n")])])]),t("h3",{attrs:{id:"es7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es7"}},[e._v("#")]),e._v(" ES7")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("### Array.prototype.oncludes() 判断数组中是否包含指定的value\n### 指数运算符(幂): **\n")])])]),t("h3",{attrs:{id:"es8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es8"}},[e._v("#")]),e._v(" ES8")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("### Object.values(对象) 获取对象中所有的属性的值\n### Object.entries(对象) 把对象转数组\n")])])]),t("h3",{attrs:{id:"es9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es9"}},[e._v("#")]),e._v(" ES9")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("### Promise.finally\n  -   let promise = new Promise((resolve,reject)=>{\n          console.log('开始执行')\n          resolve('111')\n          console.log('结束执行')\n      })\n\n      promise.then((data)=>{\n          console.log('成功:'+data)\n        }).catch((errorMsg)=>{\n          console.log('报错啦:'+errorMsg)\n        }).finally(()=>{\n          console.log('成功失败都会执行的')\n      })\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);