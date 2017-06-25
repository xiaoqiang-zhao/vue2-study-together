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

相对于单页应用，服务器端渲染有两个优势：

一、更好的 SEO 效果。

谷歌和必应会识别同步 js 的执行结果(貌似百度不会)，但是对于异步获取数据填充到页面的情况目前没有爬虫支持。

二、更快的内容可见速度。

尤其是对于网络稍慢的环境，因为不需要等待 js 加载完成后再渲染，所以有更快的页面呈现速度。

还有三个劣势需要注意：

一、开发会受到更多的限制。

在选择第三方的包时需要选可以在服务器端运行的包，比如 jQuery 就不能直接用了，开发的时候可不能有直接的 Dom 节点操作。

二、构建和发布需要更多的资源。

单页应用只需要一台静态文件服务器就能完成的工作现在需要一台可以运行 Node.js 的服务器。

三、对服务器端请求更加频繁。

在 Node.js 服务中x渲染整个应用要比只是简单的提供静态文件需要消耗更多的 CPU 计算。如果你的应用是高并发的，那么部署更多的资源和提供缓存将成为必须。

综上，在使用服务器端渲染之前，首先要想清楚你是不是真的需要它。判断是否需要的一个重要标准就是你对首屏渲染时间的重视程度，如果只是一个内部系统，一个像仪表盘一样的功能页面，不适用服务器端渲染时几百毫秒就可以渲染完成，那么引入服务器端渲染就是一种过渡设计。当首屏加载时间被人吐槽的时候，服务器端渲染可能为你带来更好的效果。

## 我们先跑一个最简单的 Demo

首先用 vue-cli 初始化一个项目，前面我们讲过怎么用这里不展开，初始化的工程名是 ssr-project，下面的例子都在这个工程的基础上往上垒。然后需要一个服务器容器：
 
    npm install express --save

然后需要一个将 Vue 组件转换成字符串的工具：

    npm install vue vue-server-renderer --save

工具真备好了我们再准备一个首页的模板文件，代码如下(路径：/index-demo-1.html)：

    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>ssr-demo-1</title>
    </head>
    <body>
    <!--vue-ssr-outlet-->
    </body>
    </html>

其中关键的部分是 `<!--vue-ssr-outlet-->`，`vue-server-renderer` 将渲染出 vue 组件的 html 片段，并用片段替换 `<!--vue-ssr-outlet-->`。然后就是写服务器端的代码，关于 express 的用法这里默认你已经熟悉了，我们直接给出 vue 服务器端渲染的代码和注释：

    const renderer = require('vue-server-renderer').createRenderer({
      template: require('fs').readFileSync('../index-demo-1.html', 'utf-8')
    });
    
    // 定义一个 vue 组件
    const app = new Vue({
      data: {
        url: req.url
      },
      template: `<div>Hello world.</div>`
    });
    
    // 将 vue 组件渲染成 html 片段
    renderer.renderToString(app, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      // 向页面输出
      res.end(html);
    });

完成的代码在 /build-ssr/ssr-demo-1.js，我们用 node 直接执行这个 js 启动服务器：

    cd build-ssr
    node ssr-demo-1.js

在浏览器中可以看到只有一个请求，单数页面已经出来了。

OK，一个简单到爆的 Hello world 就完成了，但是还有很多问题需要解决，比如：

- Vue 组件总不能写进服务器端吧
...

我们下面一次介绍这些问题怎么解决。

## Vue 组件的前后端同构

## 参考

官方文档：[https://ssr.vuejs.org/en/](https://ssr.vuejs.org/en/)

翻译中的文档：

https://gitlocalize.com/repo/101/zh/en/basic.md

https://gitlocalize.com/repo/101/zh/en/universal.md

https://gitlocalize.com/repo/101/zh/en/structure.md

https://gitlocalize.com/repo/101/zh/en/routing.md

https://gitlocalize.com/repo/101/zh/en/data.md

https://gitlocalize.com/repo/101/zh/en/hydration.md

## 编外

在线翻译管理工具推荐：[https://gitlocalize.com/](https://gitlocalize.com/)

文档正在翻译中：https://gitlocalize.com/repo/101

