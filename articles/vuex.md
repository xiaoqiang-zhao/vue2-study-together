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

## 核心概念

### state

状态

### getters

store 的计算属性

### mutations

触发事件修改数据

    mutations: {
      increment (state, payload) {
        state.count += payload.amount
      }
    }
    store.commit('increment', {
      amount: 10
    })

同步事件

### actions 异步事件

异步，事件分发

## 参考

[官当文档](https://vuex.vuejs.org/zh-cn/)


