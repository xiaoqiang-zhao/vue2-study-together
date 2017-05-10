import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/demo/get-started'
import TemplateInterpolation from '@/demo/template-interpolation'
import Computed from '@/demo/computed'
import Key from '@/demo/key'
import VModel from '@/demo/v-model'
import ComponentProps from '@/demo/component-props'
import ComponentEvent from '@/demo/component-event'

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
    }
  ]
})
