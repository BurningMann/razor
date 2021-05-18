import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'Main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    meta: { layout: 'Category' },
    component: () => import('../views/Category.vue')
  },
  {
    path: '/category/*/',
    name: 'Product',
    meta: { layout: 'Main'},
    component: () => import('../views/Cart.vue')
  },
  {
    path: '*',
    name: 'ErrorPage',
    meta: { layout: 'Main'},
    component: () => import('../views/ErrorPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
