import Vue from 'vue'
import Router from 'vue-router'

import LoadingComp from '@/widget/loading'
import ErrorComp from '@/widget/error'
import Hello from '@/demo/get-started'
import TemplateInterpolation from '@/demo/template-interpolation'
import Computed from '@/demo/computed'
import Key from '@/demo/key'
import VModel from '@/demo/v-model'
import ComponentProps from '@/demo/component-props'

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
      component: import('@/demo/component-event')
    },
    {
      path: '/async-component',
      name: 'async-component',
      component: resolve => import('@/demo/async-component'),

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
