<template>
  <section>
    <h2>这里是父组件</h2>

    <h3>下面是子组件</h3>
    <children-component @custom-event="parentComponentMethod"/>

    <h2>这里是父组件的另一部分，演示双向数据绑定的套路</h2>
    <div>
      父组件中的 text 展示:
      <input type="text" v-model="text">
    </div>
    <children-component-input
      v-model="text"
    />

    <h2>非父子组件通信方案演示</h2>
    <div>
      父组件：vuexData.name: {{vuexData.name}}
    </div>
    <children-component-vuex-data/>
  </section>
</template>

<script>

  import ChildrenComponent from './component-event-children'
  import ChildrenComponentInput from './component-event-children-input'
  import vuexData from './vuex-data'
  import ChildrenComponentVuexData from './component-children-vuex-data'
  export default {
    components: {
      ChildrenComponent,
      ChildrenComponentInput,
      ChildrenComponentVuexData
    },
    data () {
      console.log('2初始化 data')
      setTimeout(() => {
        this.vuexData.name = '父组件触发的改变'
      }, 4000)

      return {
        text: '父子组件双向数据绑定',
        vuexData
      }
    },
    beforeCreate () {
      console.log('1父：beforeCreate')
    },
    created () {
      console.log('3父：created')
    },
    beforeMount () {
      console.log('4父：beforeMount')
    },
    mounted () {
      console.log('9父：mounted')
      // 这样监听不到子组件自定义事件 custom-event
      // 只能监听到当前组件自己的 custom-event 事件
      this.$on('custom-event', (data) => {
        console.log('C父组件通过 $on 监听的 custom-event 事件被触发，事件数据：')
        console.log(data)
      })

      setTimeout(() => {
        this.$emit('custom-event', '这个字符串是父组件通过 $emit 触发的自定义事件 custom-event 的参数')
      }, 2500)
    },
    methods: {
      parentComponentMethod (data) {
        console.log('B父组件通过 @custom-event 监听的 custom-event 事件被触发，事件数据：')
        console.log(data)
      }
    }
  }
</script>
