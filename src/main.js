import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'
import env from './env'

Vue.use(VueAxios, Axios)
// 根据前端的跨域方式做调整
Axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
Axios.defaults.baseURL=env.baseURL
// 设置请求超时
Axios.defaults.timeout = 5000
/**
 * 接口错误拦截
 */
Axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
