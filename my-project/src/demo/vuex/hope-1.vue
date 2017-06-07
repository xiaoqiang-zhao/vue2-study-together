<template>
  <div>
    count:{{count}}
  </div>
</template>


<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: {
      count: 1
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
