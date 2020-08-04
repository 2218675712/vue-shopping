<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {
      res: ''
    }
  },
  methods: {
    getUser () {
      /**
       * 获取用户
       */
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username)
      })
    },
    /**
     * 获取购物车数量
     */
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  },
  mounted () {
    if (this.$cookie.get('userId')) {
      this.getUser()
      this.getCartCount()
    }
  }
}
</script>
<style lang="scss">
/*引入初始化样式*/
@import "./assets/scss/reset";
/*引入配置样式*/
@import "./assets/scss/config";
/*引入自定义样式*/
@import "assets/scss/base";
/*引入自定义函数*/
@import "./assets/scss/mixin";
/*引入模态框样式*/
@import "./assets/scss/modal";
/*引入按钮样式*/
@import "./assets/scss/button";
</style>
