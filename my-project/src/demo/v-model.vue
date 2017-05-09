<template>
  <section>
    <h2>v-model.lazy</h2>
    <div>
      <span>text:{{text}}</span>
    </div>
    <div>
      common: <input type="text" v-model="text">
    </div>
    <div>
      lazy: <input type="text" v-model.lazy="text">
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      reverseList () {
        this.list.reverse()
      }
    }
  }
</script>
