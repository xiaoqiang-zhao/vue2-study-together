<template>
  <section>
    <h2>这里是子组件</h2>
  </section>
</template>

<script>
  export default {
    data () {
      setTimeout(() => {
        console.log('子组件通过 $emit 触发事件')
        this.$emit('custom-event', '此字符串是 custom-event 事件的数据')
      }, 2000)

      return {

      }
    }
  }
</script>
