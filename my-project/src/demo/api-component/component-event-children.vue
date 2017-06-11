<template>
  <section>
    <h2>这里是子组件</h2>
  </section>
</template>

<script>
  export default {
    data () {
      setTimeout(() => {
        console.log('A子组件通过 $emit 触发事件')
        this.$emit('custom-event', '此字符串是 custom-event 事件的数据')
      }, 2000)

      return {

      }
    },
    beforeCreate () {
      console.log('5子：beforeCreate')
    },
    created () {
      console.log('6子：created')
    },
    beforeMount () {
      console.log('7子：beforeMount')
    },
    mounted () {
      console.log('8子：mounted')
    }
  }
</script>
