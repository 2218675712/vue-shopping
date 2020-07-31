<template>
  <div class="nav-bar" :class="{'is_Fixed': isFixed}">
    <div class="container">
      <div class="pro-title">
        {{ title }}
      </div>
      <div class="pro-param">
        <a href="">概述</a><span>|</span>
        <a href="">参数</a><span>|</span>
        <a href="">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductParam',
  props: {
    title: String

  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    /**
     * 吸顶功能制作
     */
    initHeight () {
      // 获取距离上面高度
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > 152
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.innerHeight, false)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config";
@import "../assets/scss/mixin";

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background-color: $colorG;
  z-index: 10;
  /*
  可以用
  position:sticky;
  top:0;
  来实现吸顶
  */
  &.is_Fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px #cccccc;
  }

  .container {
    @include flex();

    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }

    .pro-param {
      font-size: $fontJ;

      a {
        color: $colorC;
      }

      span {
        margin: 0 10px;
      }
    }
  }

}
</style>
