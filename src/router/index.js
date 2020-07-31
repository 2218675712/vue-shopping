import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/pages/home'
import index from '@/pages/index'
import product from '@/pages/product'
import detail from '@/pages/detail'
import login from '@/pages/login'
import cart from '@/pages/cart'
import order from '@/pages/order'
import orderList from '@/pages/orderList'
import orderConfirm from '@/pages/orderConfirm'
import orderPay from '@/pages/orderPay'
import alipay from '@/pages/alipay'

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
        component: product
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: detail
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/cart',
    name: 'cart',
    component: cart
  }, {
    path: '/order',
    name: 'order',
    component: order,
    children: [
      {
        path: 'list',
        name: 'orderList',
        component: orderList
      },
      {
        path: 'confirm',
        name: 'orderConfirm',
        component: orderConfirm
      },
      {
        path: 'pay',
        name: 'orderPay',
        component: orderPay
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: alipay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
