<template>
  <section>
    <h2>这里是父组件</h2>
    <div>
      父组件数据：
    </div>
    <div>
      obj.name: {{obj.name}}
    </div>
    <div>
      str: {{str}}
    </div>

    <h3>下面是子组件</h3>
    <children-component :obj="obj" :str="str"></children-component>
  </section>
</template>

<script>

  import ChildrenComponent from './component-props-children'
  export default {
    components: {
      'children-component': ChildrenComponent
    },
    data () {
      return {
        obj: {
          name: 'jack'
        },
        str: 'string'
      }
    }
  }
</script>
