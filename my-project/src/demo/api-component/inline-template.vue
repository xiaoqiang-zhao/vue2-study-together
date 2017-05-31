<template>
  <div>
    <comp/>
    <div>
      -------------------------------------
    </div>
    <comp inline-template>
      <div>
        inline-template 模板数据：{{text}}
      </div>
    </comp>
  </div>
</template>

<script>
  import Comp from './inline-template2'
  export default {
    components: {
      Comp
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>
