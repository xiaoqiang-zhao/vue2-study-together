<template>
  <section>
    <h2>子组件 text :<input type="text" v-model="valueProp"></h2>
  </section>
</template>

<script>
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
</script>
