<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:">手机 电话卡</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:">生活 箱包</a>
              <div class="children"></div>
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
      <div class="ads"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
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
      slideList: [{
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

      }]

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
  }
</style>
