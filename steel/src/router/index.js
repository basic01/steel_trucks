import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/tecnologia',
    name: 'technology',
    component: () => import(/* webpackChunkName: "Technology" */ '../views/Technology.vue')
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue')
  },
  {
    path: '/cuenta',
    name: 'account',
    component: () => import(/* webpackChunkName: "Account" */ '../views/Account.vue')
  },
  {
    path: '/componentes',
    name: 'components',
    component: () => import(/* webpackChunkName: "Components" */ '../views/Components.vue')
  },
  {
    path: '/tienda',
    name: 'shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/shop/Shop.vue')
  },
  {
    path: '/tienda/producto/',
    name: 'shop.product',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/shop/Product.vue')
  },
  {
    path: '/tienda/top15',
    name: 'shop.stop15',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/shop/Top15.vue')
  },
  {
    path: '*',
    name: 'not_found',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
