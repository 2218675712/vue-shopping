<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                      {{ sub ? sub.name : '小米9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="SwiperOption">
          <swiper-slide v-for="(item,index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>

    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i) in phoneList" :key="i">
              <div class="item" v-for="(item,j) in arr" :key="j">
                <span :class="{'new-pro':j%2===0}">新品</span>
                <div class="item-img">
                  <img
                    v-lazy="item.mainImage"
                    alt="">
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">{{ item.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <service-bar></service-bar>
    <Modal
      title="提示"
      sure-text="查看购物车"
      btn-type="1"
      modal-type="middle"
      :show-modal="showModal"
      @submit="goToCart"
      @cancel="showModal=false">
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Modal from '@/components/Modal'

export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  data () {
    return {
      SwiperOption: {
        autoplay: true,
        loop: true,
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'

        }, {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'

        }, {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'

        }, {
          id: '',
          img: '/imgs/slider/slide-4.jpg'

        }, {
          id: '',
          img: '/imgs/slider/slide-5.jpg'

        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          }, {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          }, {
            id: 33,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          }, {
            id: 34,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        }, {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        }, {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        }, {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [[1, 1, 1, 1], [1, 1, 1, 1]],
      showModal: false

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    /**
     * 获取手机列表
     */
    init () {
      this.axios.get('/products/', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        res.list = res.list.slice(6, 14)
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
      })
    },
    addCart (id) {
      this.showModal = true

      this.axios.post('/carts', {
        productId: id,
        selected: false
      }).then((res) => {
        this.showModal = true
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      }).catch(() => {
        this.showModal = true
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config";
@import "../assets/scss/mixin";

.index {
  .swiper-box {
    position: relative;

    .nav-menu {
      position: absolute;
      height: 451px;
      width: 264px;
      left: 0;
      z-index: 9;
      padding: 26px 0;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.3);

      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;

          &:hover {
            background-color: $colorA;

            .children {
              display: block;
            }
          }

          a {
            font: $fontI;
            color: $colorG;
            padding-left: 30px;
            position: relative;
            display: block;

            &:after {
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              position: absolute;
              right: 30px;
              top: 17.5px;
            }

          }

          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;

            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;

              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }

              a {
                color: $colorB;
                font-size: $fontJ;
              }

              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }

    .swiper-container {
      height: 451px;

      .swiper-button-prev {
        left: 274px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;

    a {
      width: 296px;
      height: 167px;
    }
  }

  .banner {
    margin-bottom: 50px;
  }

  .product-box {
    background: $colorJ;
    padding: 30px 0 50px;

    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }

    .wrapper {
      display: flex;

      .banner-left {
        margin-right: 16px;

        img {
          width: 224px;
          height: 619px;
        }
      }

      .list-box {
        .list {
          @include flex();
          width: 985px;
          margin-bottom: 14px;

          &:last-child {
            margin-bottom: 0;
          }

          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;

            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: $fontJ;
              color: $colorG;
              text-align: center;
              line-height: 24px;

              &.new-pro {
                background-color: #7ecf68;
              }

              &.kill-pro {
                background-color: #e82626;
              }
            }

            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }

            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }

            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px 0 13px;
            }

            .price {
              color: #f20a0a;
              font-size: $fontJ;
              font-weight: bold;
              cursor: pointer;

              &:after {
                content: '';
                @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>
