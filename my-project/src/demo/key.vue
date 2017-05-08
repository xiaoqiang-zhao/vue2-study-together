<template>
  <section>
    <h2>没有 key</h2>
    <div v-for="item in list">
      <span>{{item.text}}、</span>
      <input type="text">
    </div>

    <h2>以 index 作为 key</h2>
    <div v-for="(item, index) in list" :key="index">
      <span>{{item.text}}、</span>
      <input type="text">
    </div>

    <h2>以 id 作为 key</h2>
    <div v-for="item in list" :key="item.id">
      <span>{{item.text}}、</span>
      <input type="text">
    </div>

    <button @click="reverseList">反转列表</button>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          {
            text: '一',
            id: 1
          },
          {
            text: '二',
            id: 2
          },
          {
            text: '三',
            id: 3
          }
        ]
      }
    },
    methods: {
      reverseList () {
        this.list.reverse()
      }
    }
  }
</script>
