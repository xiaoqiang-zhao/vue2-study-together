<template>
    <div>
        <!-- 模板插值表达式使用技巧 -->
        <!-- ?? 这里要展现激活状态者的得分 ??-->
        得分：{{this[activeName].score}}
      <div v-if="a.b" v-once>{{a.b}}</div>
    </div>
</template>

<script>
  export default {
    data () {
      window.setTimeout(() => {
        this.activeName = 'you'
        this.a.b = 'b'
      }, 2000)

      return {
        me: {
          score: 5
        },
        you: {
          score: 10
        },
        activeName: 'me',
        a: {

        }
      }
    }
  }
</script>
