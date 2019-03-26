import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)
let Router = new VueRouter({
	mode: 'history',
	routes
})

Router.beforeEach((to, from, next) => {
  NProgress.start()
  return next()
})

Router.afterEach(transition => {
  NProgress.done()
})

export default Router  
