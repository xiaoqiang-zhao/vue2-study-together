<template>
  <div>
    <comp/>
    <comp text="props 传入数据" :data="childrenComponentData"/>
  </div>
</template>

<script>
  import comp from './functional-component'
  export default {
    components: {
      comp
    },
    data () {
      return {
        childrenComponentData: {
          a: 'a'
        }
      }
    },
    methods: {}
  }
</script>
