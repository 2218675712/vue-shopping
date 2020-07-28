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
  mounted () {

  }
}
</script>
<style lang="scss">
  /*引入初始化样式*/
  @import "./assets/scss/reset";
  /*引入配置样式*/
  @import "./assets/scss/config";
  /*引入自定义样式*/
  @import "./assets/scss/bass";
  /*引入自定义函数*/
  @import "./assets/scss/mixin";
  /*引入模态框样式*/
  @import "./assets/scss/modal";
  /*引入按钮样式*/
  @import "./assets/scss/button";
</style>
