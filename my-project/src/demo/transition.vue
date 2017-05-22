<template>
  <div>
    <h3>示例一、</h3>
    <button v-on:click="show = !show">显隐</button>
    <transition>
      <p v-show="show">hello</p>
    </transition>
    <h3>示例二、</h3>
    <div id="animated-number-demo">
      <input v-model.number="number" type="number" step="20">
      <p>{{ animatedNumber }}</p>
    </div>

  </div>
</template>

<script>
  import TWEEN from 'tween.js'

  export default {
    data () {
      return {
        show: true,
        number: 0,
        animatedNumber: 0
      }
    },
    watch: {
      number: function (newValue, oldValue) {
        var vm = this

        function animate (time) {
          requestAnimationFrame(animate)
          TWEEN.update(time)
        }

        new TWEEN.Tween({tweeningNumber: oldValue})
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({tweeningNumber: newValue}, 500)
          .onUpdate(function () {
            vm.animatedNumber = this.tweeningNumber.toFixed(0)
          })
          .start()

        animate()
      }
    },
    methods: {}
  }
</script>
<style>
  /* 定义过渡时的动画效果 */
  .v-enter-active, .v-leave-active {
    transition: opacity 10s;
    /* 下面这行是可以省略的，
       vue 会自动提取属性的默认值，用于过渡的起始状态或目标状态，
       规则是：enter/leave-active 是目标状态，enter/leave 是初始状态
    */
    opacity: 1
  }

  /* 定义进入时的起始状态 和 离开时的目标状态 */
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
