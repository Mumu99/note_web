# react 面试

### React

- 一个用于构建用户界面的 js 库
- 特点：
  - 声明式
  - 组件化
- 创建虚拟 DOM 对象
  - `React.createElement(type, props, children, children...)`
  - `<h1>xxx</h1>`
- jsx 语法：
  - 用来创建虚拟 DOM 对象
  - 以<开头, 会以标签语法解析（如果 html 同名标签就会解析成同名元素，不是就当做组件解析） `\*` 以{开头，将里面代码当做 js 代码解析（if、for..不能使用）
- 创建组件两个方式
  - 工厂函数：过去不能使用 state、生命周期函数，现在可以通过 hooks 使用
  - ES6 类：定义复杂组件
- 组件三大属性
  - state： 定义状态数据，用来更新组件
  - props： 用来组件外向组件内传递可变的数据 `\*` refs：用来获取 dom 元素/组件实例对象。 能不用就不用
- 受控组件 `\*` 通过 state/onChange 收集表单数据
- 组件间通信` \*``\*``\* `：
  - props： 父子组件通信
  * pubsub： 兄弟/祖孙组件通信
  * subscribe(msg, callback)
  * publish(msg, data)
  * redux： 适用所有场景 `\*` context： 祖孙组件通信
- 脚手架 `\*` 用来快速创建基于 xxx 库的模板项目
- react-router
  - 前端路由用来开发 SPA
  - 整个应用只有一个完整页面
  - 点击链接不会刷新不会跳转，只会更新局部内容，修改浏览历史记录
  - 实现原理：
  - 禁止 a 标签的默认行为
  - 自定义 a 标签的点击事件，通过 history 修改浏览历史记录 `\*` 监听浏览历史记录的变化，修改网页的内容（切换组件）
- ant-design `\*` React UI 组件库
- 高阶组件
  - 本质上是一个函数，接收一个组件作为参数，返回一个新组件（新组件包装了传入的组件，所以新组件就能以 props 方式给传入组件传递数据）
  - 用来复用组件代码 `\*` 如：withRouter、Form.create、getFieldDecorator、connect
- Fragment `\*` 用来充当根标签，减少页面元素
- context
  - 用来祖孙组件通信
  - 创建：const Context = React.createContext(defaultValue)
  - 使用：
  - `<Context.Provider value={xxx}> <xxx> </Context.Provider>`\*`<Context.Consumer>{ (xxx) => { 使用 xxx } }</Context.Consumer>`
- 新生命周期`\*`\*`\*`：
  - static getDerivedStateFromProps() {} 状态是根据 props 来生成的 `\*` getSnapShotBeforeUpdate() {} 一般不用，能在真正渲染之前操作 DOM
- 错误边界
  - 一个 React 组件，用来处理错误
  - 定义生命周期函数
  - getDerivedStateFromError() {} 根据错误，更新状态，从而重新渲染组件（渲染备用方法）
  - compoenntDidCatch() {} 收集错误信息
- 代码分割
  - 提取成单独文件，动态加载
  - import
  - React.lazy
  - react-loadable
- 服务器渲染
  - ReactDOMServer.renderToString()
  - next -- create-next-app
- 性能优化
  - shouldComponentUpdate
  - PureComponent
- hooks
  - 用来在纯函数组件中使用 state 和生命周期函数
  - const [ state, method ] = React.useState(defaultValue) `\*` React.useEffect()
- redux
  - 是什么？
  - 一个状态管理库
  - 作用：
  - 集中性管理多个组件的共享状态
  - 原则：
  - 单一数据源
  - 数据是只读
  - 使用纯函数更新数据
  - 同样的输入，必定同样的输出
  - 工作流程：
  - 读取状态
  - store.getState()
  - 更新状态
  - 调用 action creators 来创建 action 对象
  - 调用 store.dispatch(action),就会触发 reducers 的调用
  - reducers(prevState, action)生成新的状态数据
  - 新状态数据会交给 store 管理（更新了状态）。
  - 此时，之前 store 绑定过 subscribe 方法，这个 subscribe 方法就会触发。执行里面的回调。从而重新渲染组件，会将最新状态数据传入组件中。组件中就能得到最新的状态数据了~
  - 使用
  - action-creators
  - 用来创建 action 对象的工厂函数模块
  - action: {type: 要操作的类型, data: 操作的数据}
  - 同步：返回值是 action 对象
  - 异步：返回值是函数。
  - action-types
  - 用来定义 action.type 类型常量模块
  - reducers
  - 用来根据 prevState 和 action 来生成 newState
  - 纯函数
  - store
  - 用来集中性管理状态数据
  - 在 index.js 人口文件，需要给 App 组件包一个 Provider，用来根据 state 变化重新渲染 `\*` action-creators -> action-types -> reducers -> 定义容器组件（将 redux 内容传给 UI 组件） -> 将之前使用 UI 组件换成容器组件 -> 在 UI 组件中使用传入 props

### React 和 Vue 的相同点和不同点

1. 相似处
   1. 功能: 动态构建用户界面
   2. 虚拟 DOM: 内部都通过虚拟 DOM 提高效率
   3. 组件化: 都使用组件化编程思想编写项目
   4. Props: 组件间通信的基本方式
   5. 构建工具: 脚手架, webpack
   6. Chrome 开发工具: react/redux-dev-tool vue-dev-tool
2. 不同点
   1. 单向与双向
   2. 状态管理(setState) 与 对象属性监视(自动更新)
   3. JSX 与模板(template)
   4. 指令语法(v-if\v-on\v-show\v-bind\v-for), react 没有

### React 中虚拟 DOM Diff 算法

1. 原由: 开发中我们不会将一个节点移动到另外一个节点
   1. tree diff
      1. 只会对比相同层级节点, 不同的层级节点不会对比
2. 因为 tree diff 优化不够, 如果一个节点中有很多的数据, 还是性能不好
   1. compontent diff
      1. 对比是否是同一个组件, 如果是同一个组件, 里面的内容就会进行 tree diff, 如果不是同一个组件, 就会把它标记成需要移除的节点, 再继续看下一个节点
   2. element diff
      1. 相同层级节点并且添加了 Key 属性, 会保留 key 相同的几点, 如果有新的 key 就会产生新的, 如果有不存在的 key 就会移除, 比如之前有 ABCD, 后来经过 compontent diff 变成了 BCD, 如果没有 element diff 会把之前的全部删除, 然后再添加 BCD, 这样性能不好, 所以就有了 element diff, 就给每个属性添加一个 key 值, 通过 element diff 的时候, 只会判断 key 一样的就保存下来, 不一样的就会移除, 有新的就添加新的.

### React/Vue 中 key 的作用是什么

1. 比如之前有 ABCD, 后来变成了 BCD, 在没有 key 之前, 在更新相同层级节点的时候，因为数据发送变化了, 就会先把前面的 ABCD 全部删除, 然后再把 BCD 添加进去, 这样性能就不好, 如果有 key 的时候, 会把 ABCD 添加一个唯一的标识, 比如 ABCD 是 0123, 后来变成 BCD 是 123,在更新相同层级节点的时候, 就会对比 key 的值, 发现只要 123 了, 就只会把 0 移除掉, 就不会全部去删除了,再添加了.
2. key 为 id 还是 index, key 为 id 好, 如果是 index 的话, 如果移除了前面的一个元素, 那么 index 会改变, 那么就会导致本来是 ABCD0123, 现在是 BCD012, 那么就会把 D 给删除掉, 但是实际上删除的是 A, 所以用 id 好

### setState 是同步还是异步

1. setState 即是同步也是异步
   1. 在生命周期函数, React 合成事件回调函数中是异步的
      1. 多次更新会合并成一次更新(如果更新相同的数据, 最后一次更新数据生效)
   2. 在定时器回调函数中, 原生 DOM 事件中是同步的
      1. 同步更新, 多次更新会依次同步更新
2. setState 有哪些使用方式?
   1. this.setState(obj) // 更新数据, 更新用户界面, 在异步的情况下, 多次使用会合并
   2. this.setState(obj,fn) // 更新数据, 更新用户界面, 后面的 fn 会在更新页面后触发
   3. this.setState((prevState)=>{return new State}) // 接受上一个 prevState 状态, 返回值是要更新的新状态, 多次使用, 状态数据会依次更新, 页面只会更新一次

### React 组件的生命周期及勾子的作用

```js
   一、初始化阶段：ReactDOM.render(<Xxx/>, containDom)
      constructor(): 构造器方法
      componentWillMount：组件即将被挂载 / static getDerivedStateFromProps
      render:生成/返回对应的虚拟DOM
      componentDidMount:组件真正在被挂载(初始显示)之后
          发送请求, 设置定时器, 绑定DOM事件,等一次性事件
      为什么请求在componentDidMount中而不是在Will?
        1. 因为在新版本React中, componentWillMount可能触发多次
        2. 优先render--> 渲染页面, 最后发送请求(让页面渲染速度更快一点)
        3. 如果需要操作DOM, 必须在render之后才能去操作

   二、更新阶段： 父组件更新/ this.setState({}) / this.forceUpdate({})
      componentWillReceiveProps:组件将要接收到新的属性时调用 / static getDerivedStateFromProps
      shouldComponentUpdate:组件接受到新属性或者新状态的时候调用（如果返回false,不调用render(), 否则调用）

      性能优化的生命周期函数, 减少重复无效的渲染
      PureComponent: 内部实现了对state和props的浅比较

      componentWillUpdate:组件将要更新
      render:生成/返回新的虚拟DOM
         新生命周期函数增加: getSnapshotBeforeUpdate()
      componentDidUpdate:组件已经更新

   三、销毁阶段：ReactDOM.unmountComponentAtNode(div)
       componentWillUnmount:组件即将销毁
       清除定时器、取消ajax请求、等收尾工作
```

### 组件间通信方式 未完结

1. 通过 props 传递
   1. 通过 props 传递一般属性和函数属性
      1. 一般属性--> 父组件向子组件
      2. 函数属性--> 子组件向父组件
      3. 适用于父子间通信
   2. redux
      1. redux 是一个独立专门用于做状态管理的 JS 库, 可以与任何前端库配合使用, 但最合适的是与 react 库配合
      2. 实现任意组件通信, 集中式管理多个组件间通信
   3. context
      1. const context = React.createContext()
      2. const { provider, consumer} = constext
      3. `jsx <Provider value={}></Provider>`提供者, 负责给后代组件提供数据
      4. `jsx <Consumer>{(values) > {xxx}}</Consumer>`消费者, 负责使用数据
      5. 适用于祖孙组件通信, (roact-redux 内部使用 context 方式通信)
   4. 使用消息订阅和发布
      1. 实现库 pubsub-js
      2. 每个组件之间的通信
   5. mobx
   6. 以及区别

### 前端路由

1. 前端路由是通过 history 模式(不带#号, 兼容性差)或者 hash 模式(带#号), 用来开发单页面应用, 整个应用中, 只有一个完整的页面, 点击链接不会刷新,不会发送请求, 只会改变浏览历史记录, 局部更新组件。要发送请求需要写 ajax 请求
2. 问题:
   1. history 模式, 刷新页面会出现 404, 因为操作到 users 界面的时候此时浏览器的地址是: <http://localhost:3000/users>, 当进行刷新操作的时候, 向服务器发送的是/users 地址, 但是当前根路径下只有 index.html 没有 users, 所以会报 404
3. 解决:
   1. 在 webpack devServer 配置 devServer: {historyApiFallback: true}
   2. 如果请求开发服务器找不到资源, 就会重定向到 index.html 中
4. 代码打包上线
5. 进阶:
   1. history 模式, 使用 window.history 来操作浏览器历史记录
   2. hash 模式, 使用 window.location,hash 来操作
   3. 点击链接不会刷新, 不会发送请求, 是通过给 a 标签点击事件, 禁止默认行为
   4. history.push(xx)只会改变浏览器历史记录
   5. 局部更新组件--> history.listen(({pathname})=>{}) 监听浏览器历史记录变化, 一旦地址变化成指定的地址, 就加载相对应的组件
