import Vue from 'vue'
import Router from 'vue-router'

import LoadingComp from '@/widget/loading'
import ErrorComp from '@/widget/error'
import Hello from '@/demo/get-started'
// API 基础篇 Demo
import TemplateInterpolation from '@/demo/api-base/template-interpolation'
import Computed from '@/demo/api-base/computed'
import Key from '@/demo/api-base/key'
import VModel from '@/demo/api-base/v-model'
// API 组件篇 Demo
import ComponentProps from '@/demo/api-component/component-props'
import ComponentEvent from '@/demo/api-component/component-event'
import RecursiveComponentContainer from '@/demo/api-component/recursive-component-container'
import InlineTemplate from '@/demo/api-component/inline-template'
// API 进阶篇 Demo
import DataSet from '@/demo/api-advanced/data-set'
import Transition from '@/demo/api-advanced/transition'
import FunctionalComp from '@/demo/api-advanced/functional-component-parent'
// Vuex
import VuexGetStarted from '@/demo/vuex/get-started'
import VuexHope1 from '@/demo/vuex/hope-1'
import VuexHope2 from '@/demo/vuex/hope-2'
// 插件
import VueColor from '@/demo/vue-color'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/template-interpolation',
      name: 'TemplateInterpolation',
      component: TemplateInterpolation
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed
    },
    {
      path: '/key',
      name: 'key',
      component: Key
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: VModel
    },
    {
      path: '/component-props',
      name: 'component-props',
      component: ComponentProps
    },
    {
      path: '/component-event',
      name: 'component-event',
      component: ComponentEvent
    },
    {
      path: '/recursive-component',
      component: RecursiveComponentContainer
    },
    {
      path: '/inline-template',
      component: InlineTemplate
    },
    {
      path: '/data-set',
      component: DataSet
    },
    {
      path: '/transition',
      component: Transition
    },
    {
      path: '/functional-comp',
      component: FunctionalComp
    },
    {
      path: '/vuex-get-started',
      component: VuexGetStarted
    },
    {
      path: '/vuex-hope-1',
      component: VuexHope1
    },
    {
      path: '/async-component',
      name: 'async-component',
      component: resolve => import('@/demo/api-component/async-component'),

      // 下面的配置项不生效，在源码搜了一下没找到相关实现
      // loading 时应当渲染的组件
      loading: LoadingComp,
      // 出错时渲染的组件
      error: ErrorComp,
      // 渲染 loading 组件前的等待时间。默认：200ms.
      // delay: 200,
      // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
      timeout: 3000
    }
  ]
})
