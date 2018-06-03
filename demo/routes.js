import Vue from 'vue'
import Router from 'vue-router'

import VueComponentTree from '../src/app.ts'

Vue.use(Router)

const router = new Router({
  routes: [
    VueComponentTree(require.context('./tree', true, /.vue$/), '/demo'),
    VueComponentTree(require.context('./../src', true, /.demo.vue$/), '/sourcecomponents'),
  ]
})

export default router
