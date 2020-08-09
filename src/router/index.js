import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home'
import index from '@/pages/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    redirect: './index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: index
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('@/pages/product')
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('@/pages/detail')
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import('@/pages/cart')
  }, {
    path: '/order',
    name: 'order',
    component: () => import('@/pages/order'),
    children: [
      {
        path: 'list',
        name: 'orderList',
        component: () => import('@/pages/orderList')
      },
      {
        path: 'confirm',
        name: 'orderConfirm',
        component: () => import('@/pages/orderConfirm')

      },
      {
        path: 'pay',
        name: 'orderPay',
        component: () => import('@/pages/orderPay')

      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('@/pages/alipay')

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
