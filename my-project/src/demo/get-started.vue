<template>
  <div class="hello">
    <div>
      <h2> Demo 列表</h2>
      <ul>
        <li>API 基础篇 Demo:</li>
        <li>
          <router-link to="template-interpolation">模板插值表达式</router-link>
        </li>
        <li>
          <router-link to="computed">计算属性</router-link>
        </li>
        <li>
          <router-link to="key">key</router-link>
        </li>
        <li>
          <router-link to="v-model">v-model</router-link>
        </li>
        <li>API 组件篇 Demo:</li>
        <li>
          <router-link to="component-props">component-props</router-link>
        </li>
        <li>
          <router-link to="component-event">component-event</router-link>
        </li>
        <li>
          <router-link to="async-component">async-component</router-link>
        </li>
        <li>
          <router-link to="recursive-component">递归组件</router-link>
        </li>
        <li>
          <router-link to="inline-template">inline-template</router-link>
        </li>
        <li>API 进阶篇 Demo:</li>
        <li>
          <router-link to="data-set">data-set</router-link>
        </li>
        <li>
          <router-link to="transition">组件过渡</router-link>
        </li>
        <li>
          <router-link to="functional-comp">函数化组件</router-link>
        </li>
        <li>Vuex Demo:</li>
        <li>
          <router-link to="vuex-get-started">vuex get started</router-link>
        </li>
        <li>
          <router-link to="vuex-hope-1">vuex hope 1</router-link>
        </li>
        <li>
          <router-link to="vuex-hope-2">vuex hope 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '这是我们开课的第一个 Demo'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
