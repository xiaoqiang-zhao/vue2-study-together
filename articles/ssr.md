# Vue 服务器端渲染

## 首先是升级依赖

    vue & vue-server-renderer >= 2.3.0
    vue-router >= 2.5.0
    vue-loader >= 12.0.0 & vue-style-loader >= 3.0.0

如果你的项目不打算升级，那么就没有必要往下看了。

## 服务器端渲染是个什么鬼？

vue.js 是构建客户端应该用的框架，一般情况下 vue 组件在浏览器中生成 Dom 节点并绑定对其的操作，但是 vue 组件还有另一种能力，那就是在服务器端生成组件的 html 字符串片段，html 片段可以被直接发送给浏览器。在浏览器端，html 片段最终和前端事件结合成为可交互的组件。

服务器端渲染的 vue.js 的应用是同构的。对于大多数应用代码，可以在浏览器端和服务器端顺畅运行。

## 为什么需要服务器端渲染？


## 参考

官方文档：[https://ssr.vuejs.org/en/](https://ssr.vuejs.org/en/)

## 编外

在线翻译管理工具推荐：[https://gitlocalize.com/](https://gitlocalize.com/)

文档正在翻译中：https://gitlocalize.com/repo/101

