module.exports = {
  base: "/note_web/" /* 基础虚拟路径, 必须和git上一致 */,
  dest: "docs/dist" /* 打包文件基础路径, 在命令所在目录下 */,
  title: "note_web", // 标题
  description: "熊木木出版", // 标题下的描述
  themeConfig: {
    // 主题配置
    logo: "/images/logo.png",
    nav: [
      { text: "H5", link: "/chapter1/html.md" },
      {
        text: "JS",
        items: [
          { text: "普通", link: "/chapter2/初级Js.md" },
          { text: "高级", link: "/chapter2/高级Js.md" },
        ],
      },
      {
        text: "移动端",
        link: "/chapter3/移动端相关.md",
      },
      { text: "Vue", link: "/chapter4/基础使用.md" },
      { text: "常见问题", link: "/chapter6/常见问题.md" },
    ],
    sidebar: [
      // 左侧导航
      "笔记指南",
      {
        title: "一.H5",
        collapsable: false,
        children: ["chapter1/h5"],
      },

      {
        title: "二.JS",
        collapsable: false,
        children: [
          "chapter2/初级Js",
          "chapter2/高级Js",
          "chapter2/自定义call-apply-bind方法",
          "chapter2/ECMAScript",
          "chapter2/node",
          "chapter2/git",
          "chapter2/ajax",
          "chapter2/git常用指令",
          "chapter2/模块化",
        ],
      },
      {
        title: "三.移动端",
        collapsable: false,
        children: ["chapter3/移动端相关"],
      },
      {
        title: "四.Vue",
        collapsable: false,
        children: [
          "chapter4/基础使用",
          "chapter4/项目中遇到的问题",
          "chapter4/vue面试",
          "chapter4/源码",
          "chapter4/vue扩展",
        ],
      },
      {
        title: "五.webpack",
        collapsable: false,
        children: ["chapter5/构建工具", "chapter5/webpack总结"],
      },
      {
        title: "六.常见问题",
        collapsable: false,
        children: ["chapter6/常见问题"],
      },
      {
        title: "七.React",
        collapsable: false,
        children: ["chapter7/react面试"],
      },
      {
        title: "八.小程序",
        collapsable: false,
        children: ["chapter8/小程序面试"],
      },
      {
        title: "九.面试总汇",
        collapsable: false,
        children: ["chapter9/面试总汇"],
      },
    ],
  },

  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: `./images/favicon.ico`,
      },
    ],
  ],
}
