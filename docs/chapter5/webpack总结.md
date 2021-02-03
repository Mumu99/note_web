# 总结 Webpack

### Webpack 基本概念

1. entry 入口

- 以某个文件为入口开始打包
- 分类
  - 单入口 String
    - 只会输出一个文件
    - 单页面应用（SPA）
  - 多入口 Array / Object
    - Array 只会输出一个文件
    - Object 会输出多个文件
      - 多页面应用

2. output 输出

- 打包后资源输出到哪里去

3. loader 加载器

- webpack 本身只能识别 json、js 模块，其他模块一旦加载就会报错
- 需要借助 loader 帮助 webpack 识别它识别不了的模块

4. plugins 插件

- loader 功能有限，要想做功能更加强大的工作交给插件

5. mode

- 模式：开发环境（development）和生产环境（production）

### Webpack 基本配置

1. 处理 JS 文件
   eslint-loader
   在 package.json 中配置 eslintConfig 来指示 eslint-loader 到底要干什么事
   enfore: 'pre' 优先执行
   babel-loader
   在 package.json 中配置 babel 来指示 babel-loader 到底要干什么事
2. 处理 Vue 文件
   vue-loader
3. 处理 JSX 文件
   babel-loader
   presets: ['@babel/preset-react']
4. 处理 CSS 文件
   开发环境：创建 style 标签插入样式
   style-loader
   css-loader
   postcss-loader
   less-loader / sass-loader / stylus-loader
   生产环境：提取单独 css 文件，将来通过 link 引入
   MiniCssExtractPlugin.loader（还需要配置插件 new MiniCssExtractPlugin）
   css-loader
   postcss-loader
   less-loader / sass-loader / stylus-loader
5. 处理 HTML 文件
   new HtmlWebpackPlugin({ template: './public/index.html' })
6. 处理图片文件
   url-loader
   limit: 10000 小于 10kb 一下的图片会被 base64 处理
7. 处理其他类型文件（如字体图标、音视频等）
   file-loader 原封不动输出

### Webpack 优化手段

- 优化打包构建速度

1. HMR 热模块替换
   为什么要用？
   默认情况下，一旦修改了代码，全部代码重新编译刷新，速度慢（全体刷新）
   有什么作用？
   只更新修改的模块，其他模块不变（局部更新）  
    怎么使用？
   devServer: { hot: true }  
   new webpack.HotModuleReplacementPlugin()  
   注意：默认情况下只有样式文件有 HMR 功能（style-loader），JS 是没有的
   开启 JS 的 HMR 功能：
   1. 手写 JS 代码 --> module.hot.accpet('模块路径', () => {})
   2. 在 Vue 使用 --> vue-loader
   3. 在 React 使用 --> react-hot-loader
2. cache 缓存
   eslint 和 babel 两个任务处理 JS 文件，时间一般会比较长，为了让其重新构建速度更快
   可以使用缓存。
   eslint --> cache: true
   babel --> cacheDirectory: true

cache-loader 放置在要缓存 loader 的后面
注意：一般只针对耗时长的任务：eslint-loader/babel-loader/vue-loader

3. oneOf
   作用：让模块只被一个 loader 处理，其他的就不看了~
   能够提升打包速度~
   注意：eslint-loader（外） / babel-loader（内）
4. 多进程打包
   过去: happyPack
   现在: thread-loader
   用法和 cache-loader 差不多，放在要使用 loader 后面执行
   作用：开启多进程处理前面的任务，提升打包速度
   注意：每个进程开启和通信都有开销，一般只针对耗时长的任务：babel-loader

- 优化打包代码体积和性能

1. 兼容性处理
   JS
   1. babel-loader presets: ['@babel/preset-env'] 问题就是只能编译/转换简单语法
   2. @babel/polyfill 做复杂语法兼容，问题是体积太大了
   3. core-js 在@babel/preset-env 基础上，增加了 useBuiltIns: 'usage'来实现按需加载
      CSS  
      postcss-loader
      在 package.json 中指定 browserslist 来指示 postcss-loader 兼容性做到什么程度
2. tree shaking 树摇
   去除没有使用的 JS 代码
   注意：
   1. 必须使用 ES6 模块化（需要禁止@babel/preset-env 转换 ES6 模块化语法 modules: false）
   2. 开启 webpack 的生产模式（内部启用 TerserPlugin，用来压缩 JS 代码的插件，tree shaking 功能就是这个插件完成的）
   3. 在 package.json 配置 sideEffects 来指定哪些文件需要进行 tree shaking
3. code split 代码分割 / lazy loading 懒加载
   作用：1. 抽取公共代码 2. 拆分多个文件，减少单个文件体积（避免单次请求时间过长）
   配置：
   1. 多入口 + optimization
      将 node_modules 抽取成单独模块
      将多入口的公共模块也抽取成单独模块
   2. 单入口 + optimization + import
      将 node_modules 抽取成单独模块
      动态导入语法 import 就能将某些文件抽取成单独模块
      1. 原生 JS
      2. React，可以使用 Suspence + lazy 来实现路由组件的动态导入
      3. Vue，() => import('./Foo.vue')
         React 和 Vue 的目的都是为了将路由组件抽取成单独模块，单独加载（懒加载）
4. preload 和 prefetch 预加载
   作用：让资源提前加载
   区别：
   preload 让当前页面的要使用资源加载（延后加载）
   prefetch 让后面要使用资源提前加载（当前不需要使用）
   使用：
   import(/_ webpackPrefetch: true _/'./xxx')
   问题：兼容性较差
5. cache 缓存
6. hash

```
webpack每次构建都会生成一个新的且唯一的hash
问题：只要webpack重新构建，所有文件的hash都会发生变化，缓存就会失效
```

2. chunkhash

```
打包属于同一个chunk，就共享同一个hash
问题：样式文件被css-loader打包js文件中，导致样式文件和js文件属于同一个chunk，共享同一个hash
一旦样式文件发生变化，js文件也会变
```

3. contenthash

```
根据文件的内容来成hash，所以只要文件内容不一样，hash就不一样
问题：比如A模块有一个依赖，是B模块，那么A模块内部就会保存B模块hash值，
  一旦B模块发生变化，B模块的hash值就会变，导致A模块内部保存B模块hash值也发生改变
  此时A模块文件内容发生变化，它的hash值也会变
解决：runtimechunk: true 将A模块保存的B模块hash值存到runtime文件中，这样A模块内部就没有B模块的hash值了，就不会因为B模块的修改而修改
```

最终：就能让资源进行持久缓存

6. PWA 渐进式网络应用程序
   作用：让我们开发的 App，即使离线也可以访问
   内部使用 service worker + cache 实现的
   具体实现我们借助插件 workbox-webpack-plugin

### Webpack 原理分析
