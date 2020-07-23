import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home'
import index from '../pages/index.vue'
import product from '../pages/product.vue'
import detail from '../pages/detail.vue'
import cart from '../pages/cart.vue'
import order from '../pages/order.vue'
import orderConfirm from '../pages/orderConfirm.vue'
import orderList from '../pages/orderList.vue'
import orderPay from '../pages/orderPay.vue'
import alipay from '../pages/alipay.vue'

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
