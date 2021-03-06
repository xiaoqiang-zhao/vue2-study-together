# API 组件篇

## 使用组件

在大型项目中全局注册组件慎用，如果开了这个口那么剩下的逻辑基本是任何一个 UI 库都的所有组件可以全局注册，但是这些组件不可能被用在一个页面中，全局组件会在首屏被加载，整个 UI 库的体积会很影响首屏渲染速度。所以我推荐组件注册都采用局部注册的方式来使用。

.vue 组件是我们最常用的形式，所以 `is` 关键字也可以不用管，其实还得框架和开发流程就是让开发者忽略一些细节绕过一些坑，最好这些优势都不让开发者感觉到。

data 必须是函数。组件通信：父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。下面先看 props。

## props

子组件引用父组件的数据：

    Vue.component('child', {
      // 声明 props
      props: ['message'],
      // 就像 data 一样，prop 可以用在模板内
      // 同样也可以在 vm 实例中像 “this.message” 这样使用
      template: '<span>{{ message }}</span>'
    })
    
    <child message="hello!"></child>

上面是静态数据传递，动态数据可以向下面这样写：

    <child :message="message"></child>

这里有几个需要注意的地方：

- props 只有在子组件中定义过，父组件的数据才能传到子组件中；
- props 中的字段和 data 中的字段不可以冲突；
- props 传进来的值不可以直接修改，间接修改的方法和影响查看 demo/component-props.vue。

props 定义和验证的几种方式：

    props: {
        // 基础类型检测 （`null` 意思是任何类型都可以）
        propA: Number,
        // 多种类型
        propB: [String, Number],
        // 必传且是字符串
        propC: {
          type: String,
          required: true
        },
        // 数字，有默认值
        propD: {
          type: Number,
          default: 100
        },
        // 数组／对象的默认值应当由一个工厂函数返回
        propE: {
          type: Object,
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            return value > 10
          }
        }
    }

type 的集合：String Number Boolean Function Object Array

## 自定义事件

vue2 在自定义事件上做了很多减法，这使组件间的关系更为简单，运行更为高效，对于功能的减弱用 vuex 来弥补。首先是 `$on` 只能监听本组件的事件，想要监听子组件的事件需要在模板上声明，而 `$emit` 能触发本组件的事件，对于父组件的事件监听必须在模板上声明才能触发。

    // 子组件的触发
    this.$emit('custom-event', '此字符串是 custom-event 事件的数据')
    // 父组件的监听
    <children-component @custom-event="parentComponentMethod"></children-component>

而组件内部的事件触发和监听似乎没有太大用处，组件内部通过 `method` 调用更为直观和简单。上一节的 props 是自上而下(从父组件到子组件)传递数据，这里的 `@` 和 `$emit` 配合实现自下而上(从子组件到父组件)传递数据。

`v-model` 可以被定义在子组件的模板上，我们可以通过这个实现父子组件数据双向绑定：

    // 父组件模板中引用子组件
    <children-component-input
      v-model="text"
    ></children-component-input>

    // 子组件中
    export default {
      props: ['value'],
      data () {
        return {
          valueProp: this.value
        }
      },
      watch: {
        // 自下而上
        valueProp (value) {
          this.$emit('input', value)
        },
        // 自上而下
        value (value) {
          this.valueProp = value
        }
      }
    }

这里有几个需要注意的点：

- `props` 的 `value` 需要写死，不可以是其他的值，因而只能有一个双向绑定字段；
- `data` 中必须对 `value` 指定私有化别名如： `valueProp: this.value`，子组件中只能对 `valueProp` 做变值操作；
- 必须在 `watch` 中添加两个监听，保证数据的双向传递；

最后如果项目中只有一处非父子组件的通讯可以用空 Vue 实例做中央总线，或者对象数据等临时方案；如果项目中很多地方需要非父子组件通信，建议引入 vuex 解决方案。

这一节中的相关 Demo：

- 父组件 `component-event.vue`；
- 常规从子到父的组件通信 `component-event-children.vue`；
- 父子组件双向数据绑定 `component-event-children-input.vue`；
- 非父子组件通信推荐方案(简化版vuex，这里并没有用到 vuex) `component-children-vuex-data.vue`；

总结一下组件通信的复杂度定义和相应的对策：

-【简单】父子通信：props
-【不太复杂 - 灰色】子父通信：v-module
-【比较复杂 - 深灰色】全系统只有一次的亲兄弟和舅老爷通信：包共享json
-【复杂】多处复杂交互:引入 vuex

## slot

这一节有两个关键的点：

- 作用域与插槽作用域，默认是父组件作用域，指定 `scope` 后是指定的数据作用域；
- 单个 slot 与 具名 slot，只接收一个 slot 不需要命名，可以接收多个 slot 需要命名，名称可以是动态的。

这一部分没有什么坑，不展开讲，这里有一个我的实践项目供参考: [可扩展的 vue 表格组件](https://github.com/longze/vue-scalable-table)。

## 动态组件

让多个组件可以使用同一个挂载点，并且动态切换，这个用在 Tab 类的组件上非常合适。当外面包一层 `keep-alive` 节点时，可以有效缓存切出去的组件，保存状态并避免重新渲染。

## 杂项

组件对外的三要素：

- Props 组件初始化入参，和外部的数据变化通知；
- Events 组件内部变化后对外的通知，外部可以选择性关注；
- Slots 将组件的某个块交给外部来定义，开发高扩展组件的必备技巧。

子组件索引，指定索引：`<user-profile ref="profile"></user-profile>`，使用索引：`.$refs.profile`。

异步组件的主要用途是单页应用的按需加载页面，vue 2.3.0 提供了高级异步组件功能，需要配合 2.4.0+ vue-router 来配合实现。

    // 这样配置资源，回将资源打进一个包中，一次性加载
    {
      path: '/',
      name: 'Hello',
      // import Hello from '@/demo/main-component'
      component: Hello
    }
    // 这样会分片打包资源，主页加载时一同加载 (同步加载)
    {
      path: '/component-event',
      name: 'component-event',
      component: import('@/demo/splited-component')
    }
    // 这样会分片打包资源，在路由到其对应页面时才会加载 (异步加载)
    {
      path: '/async-component',
      name: 'async-component',
      component: resolve => import('@/demo/async-component')
    }
        
组件命名，最佳实践方式：

    components: {
      ChildrenComponent
    }
    <children-component/>

递归组件有两个关键点：一个是 name 属性的指定；一个是注意退出条件不要无限循环。这里不展开说了，具体查看我写的例子：`demo/recursive-component-container.vue`。与递归组件类似的问题是循环引用，文档中给的解决方案让 `require` 在回调中出现并强行注册，这种方式让子组件的注册不具有统一性，可以用传统的循环依赖解决方案 -- 提取公共依赖部分作为第三个组件，或者使用 `slot` 还能提供扩展能力。

`inline-template` 是与 `mixins` 想对应的两个提供组件灵活度和复用度的两种方法，前者由于是模板所以只能整体覆盖重写，后者提供了 merge 的功能。关于前者的使用方法见 Demo：`inline-template`。

## 参考资料

[https://webpack.js.org/guides/code-splitting-async/#promise-polyfill](https://webpack.js.org/guides/code-splitting-async/#promise-polyfill)