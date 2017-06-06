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
