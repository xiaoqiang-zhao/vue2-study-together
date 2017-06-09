# Vuex

## 要解决的问题

- 多个视图依赖于同一状态。
- 来自不同视图的行为需要变更同一状态。

虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

## 开始

每个应用仅仅包含一个 store 实例，Vuex 提供了一种机制将状态从根组件『注入』到每一个子组件中。所以我们只要在根组件写入 store，其他组件就都可以访问 store 了，看实例代码：

根组件 /src/main.js

    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    
    Vue.config.productionTip = false
    
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      }
    })
    
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
    })
    
子组件 /src/vuex/get-started.vue
    
    <template>
      <div>
        count:{{count}}
      </div>
    </template>
    
    <script>
      export default {
        data () {
          return {}
        },
        computed: {
          count () {
            return this.$store.state.count
          }
        },
        methods: {}
      }
    </script>

## 快速掌握核心概念

state，对外设定为只读。

getters，store 的计算属性。

mutations，同步修改 state 的方法，供对外 `commit`，示例：

    // store 中定义
    mutations: {
      increment (state, payload) {
        state.count += payload.amount
      }
    }
    
    // 组件中触发
    this.$store.commit('increment', {
      amount: 10
    })

actions，异步事件和提交 mutations。

modules，当应用变得非常复杂时，store 对象就有可能变得相当臃肿，用 modules 分割 store。

    const store = new Vuex.Store({
      modules: {
        a: moduleA,
        b: moduleB
      }
    })
    
    store.state.a // -> moduleA 的状态
    store.state.b // -> moduleB 的状态

## 场景描述

官网提供的解决方案有一种多年前 `window.data` 的味道，只是做了一些限制，限定了数据更改的方式，通过在 `mutations` 函数中打断点方便追踪数据的改变。

首先在单页应用中，两个页面之间有数据通信的设计是否合理？

如果两个页面之间只有一两个参数的单项通信是合理的，比如列表页到详情页需要一个 id 参数。如果在两个页面之间进行通信的数据 是 较多数据字段 或者 有数组和对象(特别是多层对象)，我认为这样的设定把两个页面耦合的太紧了。做这样的判断主要有两点依据：
- 单页应用的每个页面都是可以刷新的，那么如果没有前面的页面当前页面也是可以独立运行的；
- 如果两个页面共同依赖一份数据，那么两个页面应该依赖一个独立模块而不应该相互依赖(这一点比较像 require.js 解决循环依赖的思路)。

如果两个页面之间的通信，也就是页面级组件的通信没必要存在的话，那么还有必要将多个页面的通信数据都在同一个 store 中定义吗？我觉得定义在一个 store 有两个弊端：
- 一个页面的逻辑被写在了两处；
- 内存中存在一些当前页面用不到的数据。

写在一起也有一个优势：只需要有一个 Vuex 实例。

对于内存的消耗场景不同对比结果不同，前者是每一个页面都实例化一个 store，但是不加载其他页面的数据，这种方式每个页面的消耗直接取决于当前页面共享数据的复杂程度，如果页面的共享数据复杂程度差不多那么消耗也都差不多；后者第一个页面的消耗等于前者全部页面消耗的总和减去 n - 1 个 store 实例化的消耗(n 为页面数)。前者有利于提升首屏加载速度，后者有利于提升整体的平均速度(在大部分页面都被使用的时候)。

全站一个 store 的使用是官网推荐的，示例也比较全这里不展开。每个页面一个 store 的使用也是可以容易实施的，下面给出关键部分的代码：

    // 首先在全局向 Vue 注册插件 Vuex
    Vue.use(Vuex)
    
    // 然后在向页面的顶层组件中注入 store
    import Vuex from 'vuex'
    const store = new Vuex.Store({
      // ... 略
    })
    export default {
      store,
      // ... 略
    }

## 参考

[官当文档](https://vuex.vuejs.org/zh-cn/)
