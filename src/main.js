import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
// import env from './env'
const moke = false
if (moke) {
  require('./mock/api')
}
Vue.use(VueAxios, Axios)
Vue.use(VueCookie)
// 根据前端的跨域方式做调整
Axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
// Axios.defaults.baseURL=env.baseURL
// 设置请求超时
Axios.defaults.timeout = 5000
/**
 * 接口错误拦截
 */
Axios.interceptors.response.use(function (response) {
  const res = response.data
  const path = location.hash
  // eslint-disable-next-line eqeqeq
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login'
    }
  } else {
    return Promise.reject(res)
  }
})
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
