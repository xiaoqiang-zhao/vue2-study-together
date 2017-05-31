<template>
  <section>
    <h2>这里是子组件</h2>
    <div>
      子组件数据：
    </div>
    <div>
      obj.name: {{obj.name}}
    </div>
    <div>
      str: {{str}}
    </div>
  </section>
</template>

<script>
  export default {
    props: ['obj', 'str'],
    data () {
      setTimeout(() => {
        /* 下面这样都是要报错的
        // 不可以直接修改 props 的属性
        this.obj = {
          name: 'tom'
        }
        this.str = '';
        */

        // 可以间接修改 props，但是会同时影响到父组件，
        // props 的对象和数组属性都存在这个现象
        this.obj.name = 'tom'
      }, 2000)

      return {

      }
    },
    watch: {
//      obj () {
//        // 这样是监听不到改变的
//        console.log('obj 改变了')
//      },
      obj: {
        handler () {
          console.log('obj 改变了，只有深度监听才能触发')
        },
        deep: true
      }
    }

  }
</script>
