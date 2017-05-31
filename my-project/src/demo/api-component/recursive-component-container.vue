<template>
  <recursive-component :data="data" index-str=""/>
</template>

<script>
  import RecursiveComponent from './recursive-component.vue'
  export default {
    components: {
      RecursiveComponent
    },
    data () {
      return {
        data: [
          {
            text: '文字1',
            id: 1,
            children: [
              {
                text: '文字1.1',
                id: 2,
                children: [
                  {
                    text: '文字1.1.1',
                    id: 3
                  }
                ]
              },
              {
                text: '文字1.2',
                id: 4
              }
            ]
          },
          {
            text: '文字2',
            id: 5
          }
        ]
      }
    },
    methods: {}
  }
</script>
