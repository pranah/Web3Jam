import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fef56e2a = () => interopDefault(import('..\\pages\\collector.vue' /* webpackChunkName: "pages/collector" */))
const _3db0ceda = () => interopDefault(import('..\\pages\\publisher.vue' /* webpackChunkName: "pages/publisher" */))
const _1c1c0457 = () => interopDefault(import('..\\pages\\readPage.vue' /* webpackChunkName: "pages/readPage" */))
const _638e0db0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/collector",
    component: _fef56e2a,
    name: "collector"
  }, {
    path: "/publisher",
    component: _3db0ceda,
    name: "publisher"
  }, {
    path: "/readPage",
    component: _1c1c0457,
    name: "readPage"
  }, {
    path: "/",
    component: _638e0db0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
