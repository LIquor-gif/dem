import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/my',
    name: 'My',
        component: () => import(/* webpackChunkName: "my" */ '../views/my.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
