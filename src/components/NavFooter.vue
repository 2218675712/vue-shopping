<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="#">彼岸</a><span>|</span>
      <a href="#">Vue全栈课程</a><span>|</span>
      <a href="#">React全家桶课程</a><span>|</span>
      <a href="#">React全家桶微信支付专项课程课程</a><span>|</span>
    </div>
    <div class="copyright">©<span class="domain"> mi.com</span> 京ICP证110507号</div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/config";

  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;

    .footer-logo {
      margin-top: 46px;
      margin-bottom: 41px;

      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }

    .footer-link {
      a {
        color: $colorD;
        display: inline-block;
      }

      span {
        margin: 0 10px;

      }

      margin-bottom: 13px;
    }

    .copyright {
      .domain{
      color: $colorA;
      }
    }
  }
</style>
