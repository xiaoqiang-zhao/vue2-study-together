import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Index = () => import('./page/index.vue');

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
          name: 'index',
          path: '/',
          component: Index
      }
    ]
  });
};