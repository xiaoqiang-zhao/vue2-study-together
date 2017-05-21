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
  .v-enter-active {
    opacity: 1
  }

  /* 定义过渡时的动画效果 */
  .v-enter-active, .v-leave-active {
    transition: opacity 10s;
    opacity: 1
  }
  .v-leave-active {
    transition: opacity 1s;
  }

  .v-enter, .v-leave-active {
    opacity: 0
  }

  /* 虚拟 dom 在其中齐了什么作用？ */


  /* 默认值 */
  /*.v-leave,*/

</style>
