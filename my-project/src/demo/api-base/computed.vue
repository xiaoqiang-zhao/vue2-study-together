<template>
  <section>
    <div>
      computedFullName: {{computedFullName}}
    </div>
    <div>
      methodFullName: {{methodFullName()}}
    </div>
    <div>
      firstName: <input type="text" v-model="firstName">
      lastName: <input type="text" v-model="lastName">
    </div>
    <div>
      computedDeepName:{{computedDeepName}}
    </div>
    <div>
      computedDeepName:{{computedDeepName}}
    </div>
    <div>
      <input type="text" v-model="deep.name">
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      setTimeout(() => {
        this.deep.name = 'tom'
      }, 1000)

      return {
        firstName: 'xiaoqiang',
        lastName: 'zhao',
        deep: {
          name: 'jack'
        }
      }
    },
    computed: {
      computedFullName () {
        return this.firstName + this.lastName
      },
      computedDeepName () {
        return this.deep.name + '-deep'
      }
    },
    watch: {
      deep: {
        handler (value, oldValue) {
          console.log(value)
          console.log(oldValue)
        },
        deep: true
      }
    },
    methods: {
      methodFullName () {
        return this.firstName + this.lastName
      }
    }
  }
</script>
