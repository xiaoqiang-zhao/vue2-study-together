<template>
  <div>
    <div>{{a.b}}</div>
    <div>{{a.c}}</div>
    <div>{{a.d}}</div>
    <div>{{a.e}}</div>
    <div>{{a.f}}</div>

  </div>
</template>

<script>
  export default {
    created () {
      this.a.c = 'a.c'
    },
    beforeMount () {
      this.a.d = 'a.d'
    },
    mounted () {
      this.a.e = 'a.e'
      // this.$set(this.a, 'f', 'a.f')
      // this.$set(this, 'b', 'b')
    },
    data () {
      return {
        a: {
          b: 'a.b'
        }
      }
    },
    methods: {}
  }
</script>
