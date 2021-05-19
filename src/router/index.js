import Vue from 'vue'
import VueRouter from 'vue-router'

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
    name: 'ProductCard',
    meta: { layout: 'Main'},
    component: () => import('../views/ProductCard.vue')
  },
  {
    path: '*',
    name: 'ErrorPage',
    meta: { layout: 'Main'},
    component: () => import('../views/ErrorPage.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { layout: 'Main'},
    component: () => import('../views/Cart.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
