<template>
  <div>
    <button v-on:click="show = !show">显隐</button>
    <transition>
      <p v-show="show">hello</p>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {}
  }
</script>
<style>
  .v-enter-active, .v-leave-active {
    transition: opacity 3s
  }

  .v-enter, .v-leave-active {
    opacity: 0
  }
</style>
