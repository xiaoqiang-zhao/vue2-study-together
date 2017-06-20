# vue-cli 工具基础篇

> vue 官方给出的脚手架，用来快速搭建 vue 项目。

## 起步

    // 全局安装
    npm install -g vue-cli
    // 初始化项目
    vue init webpack my-project

除了 webpack 还有 webpack-simple、browserify、browserify-simple 等。上面命令执行过程中会询问你是否安装各种插件和测试工具等，如果为了简单就一路回车，如果为了速度就一路 `n`。然后在当前目录下就看到一个文件夹 `my-project`。然后：

    // 进入到工程目录
    cd my-project
    // 安装包依赖
    npm install
    // 启动项目
    npm start

会自动打开浏览器，一个 Demo 页就这样跑出来了。随便在 `src/components/Hello.vue` 上改点文本然后保存，发现页面不用刷新就呈现出了修改后的结果。

## 再说说 cli

cli: command-line interface，命令行界面工具，很多语言都可以写 cli 工具，cli 大体的原理是安装时向系统注册环境变量，然后在命令行中通过命令调用相应的程序。cli 工具一般被用在初始化项目，执行固定任务，启动服务等。一些运维人员和后端开发人员喜欢用 shell 来写一些工具，NodeJs 使我们方便完成同样的工作而不用学习其他语言。

cli 工具怎么开发我们这里不展开，如果感兴趣，这里有一篇文章[Building command line tools with Node.js](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)带你入门。在后面讲怎么完善 vue-cli 的时候我们再详细说这一块内容，因为这个是完善 vue-cli 的前置知识。

再说说 vue-cli 初始化项目后提供的功能：

- 继承了 webpack，支持 vue-loader
- 集成路由
- ES6 转 ES5 的支持
- 启动服务器
- 依赖打包
- 格式校验，如果格式不对直接死给你看
- css scoped
- webpack

没提供的功能：

- Less, Sass 等 CSS 预处理器不支持
- 没有完善的后端数据 Mock 功能，这对前后台分离开发很重要

## 备忘信息

创作时间：2017-05-06

作者：赵晓强
