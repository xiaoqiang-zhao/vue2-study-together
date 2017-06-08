<template>
  <div>
    count:{{count}}
  </div>
</template>

<script>
  import Vuex from 'vuex'
  const store = new Vuex.Store({
    state: {
      count: 2
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  export default {
    store,
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
