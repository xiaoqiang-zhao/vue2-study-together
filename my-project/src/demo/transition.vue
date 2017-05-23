<template>
  <div>
    <h3>示例一：过渡效果</h3>
    <button @click="show = !show">显隐</button>
    <transition name="fade">
      <p v-show="show">hello</p>
    </transition>
    <h3>示例二：过渡状态</h3>
    <div>
      <input v-model.number="number" type="number" step="2000">
      <p>{{ animatedNumber }}</p>
    </div>
    <h3>示例三：多元素过渡</h3>
    <div>
      <transition>
        <button v-bind:key="stateCode">
          {{ stateText }}
        </button>
      </transition>
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
        animatedNumber: 0,
        state: 1
      }
    },
    computed: {
      stateText() {
        let stateMap = {
          open: {
            code: 1,
            text: '上线'
          },
          opening: {

          },
          close: {

          },
          closing: {

          }
        }

      return stateMap[this.state].text
      }
    },
    watch: {
      number: function (newValue, oldValue) {
        var vm = this
        // 递归调用
        function animate () {
          // 这里改造了官网的例子，
          // 官网上的递归调用是一个死循环
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          }
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
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
