<template>
  <div class="list-container">
    <div v-for="(item, index) in children" class="item">
      <div class="text-container">
        <span class="index-str">{{currentIndexStr(index)}}</span>
        <span class="text">{{item.text}}</span>
      </div>
      <template v-if="item.children && item.children.length > 0">
        <recursive-component :data="item.children" :index-str="currentIndexStr(index)"/>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recursive-component',
    props: {
      data: Array,
      indexStr: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        children: this.data
      }
    },
    computed: {},
    methods: {
      currentIndexStr (index) {
        let dot = ''
        if (this.indexStr !== '') {
          dot = '.'
        }
        return this.indexStr + dot + (index + 1)
      }
    }
  }
</script>

<style>
  .list-container {
    text-align: left;
  }
  .list-container .item {
    padding-left: 20px;
  }
</style>
