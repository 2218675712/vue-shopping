<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MIUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:" v-if="username">{{ username }}</a>
          <a href="javascript:" v-if="!username" @click="login">登录</a>
          <a href="javascript:" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车({{ cartCount }})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.mainImage"
                        :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price|currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.mainImage"
                        :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price|currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>

            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img
                        :src="item.mainImage"
                        :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price|currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavHeader',
  data () {
    return {
      phoneList: []
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    cartCount () {
      return this.$store.state.cartCount
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
    const params = this.$route.params
    if (params && params.from === 'login') {
      this.getCartCount()
    }
  },
  methods: {
    /**
     * 获取手机数据
     */
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012'
        }
      }).then((res) => {
        if (res.list.length > 6) {
          this.phoneList = res.list.slice(0, 6)
          return
        }
        this.phoneList = res.list
      })
    },
    /**
     * 跳转订单页
     */
    goToCart () {
      this.$router.push('/cart')
    },
    /**
     * 跳转登录页
     */
    login () {
      this.$router.push('/login')
    },
    /**
     * 退出功能
     */
    logout () {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('退出成功')
        this.$cookie.set('userId', '', { expires: '-1' })
        // this.$store.dispatch('saveUserName', '')
        // this.$store.dispatch('saveCartCount', 0)
        this.saveUserName('')
        this.saveCartCount(0)
      })
    },
    ...mapActions(['saveUserName', 'saveCartCount']),
    /**
     * 获取购物车数量
     */
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/base";
@import "../assets/scss/mixin";
@import "../assets/scss/config";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;

    .container {
      @include flex();

      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }

      .my-cart {
        width: 110px;
        background-color: #ff6600;
        color: #ffffff;
        text-align: center;
        margin-right: 0;

        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 10px;
        }
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;

        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }

          &:hover {
            color: $colorA;

            .children {
              opacity: 1;
              height: 220px;
              transition: all 0.5s;
            }
          }

          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            z-index: 10;
            background-color: #ffffff;
            transition: all .5s;

            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;

              &:not(:last-child):before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                width: 1px;
                height: 100px;
                border-left: 1px solid $colorF;
              }

              a {
                display: inline-block;
              }

              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }

              .pro-img {
                height: 137px;
              }

              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }

              .pro-price {
                color: $colorA;
              }
            }
          }
        }
      }

      .header-search {
        width: 319px;

        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;

          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }

          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 10px;
          }
        }
      }
    }
  }

}
</style>
