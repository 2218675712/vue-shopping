<template>
<div class="nav-bar">
<div class="container">
  <div class="pro-title">
    小米8
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
  name: 'ProductParam'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config";
@import "../assets/scss/mixin";
.nav-bar{
  height: 70px;
  line-height: 70px;
  border: 1px solid #e5e5e5;
  .container{
@include flex();
  }
  .pro-title{
    font-size: $fontH;
    color: $colorB;
    font-weight: bold;
  }
  .pro-param{
    font-size: $fontJ;
    a{
    color: $colorC;
    }
    span{
      margin: 0 10px;
    }
  }
}
</style>
