<template>
  <section>
    <h2> 这里是子组件 </h2>
    vuexData.name{{vuexData.name}}
  </section>
</template>

<script>
  import vuexData from './vuex-data'

  export default {
    data () {
      setTimeout(() => {
        this.vuexData.name = '子组件触发的改变'
      }, 2000)

      return {
        vuexData
      }
    }
  }
</script>
