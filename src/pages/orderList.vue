<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{ order.createTime }}
                <span>|</span>
                {{ order.receiverName }}
                <span>|</span>
                订单号：{{ order.orderNo }}
                <span>|</span>
                {{ order.paymentTypeDesc }}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{ order.payment }}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{ item.productName }}</div>
                    <div class="p-money"> {{ item.totalPrice + 'X' + item.quantity }}</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status===20">
                <a href="javascript:">{{ order.statusDesc }}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:" @click="goPay(order.orderNo)">{{ order.statusDesc }}</a>
              </div>
            </div>
          </div>
          <el-pagination v-if="false"
                         class="pagination"
                         background
                         layout="prev, pager, next"
                         :page-size="pageSize"
                         :total="total"
                         @current-change="handleCurrentChange"
          >
          </el-pagination>
          <div class="load-more" v-show="showNextPage">
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
          <div class="scroll-more"
               v-infinite-scroll="scrollMore"
               infinite-scroll-disabled="busy"
               infinite-scroll-distance="410">
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
          <no-data v-if="loading===false&&list.length===0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import OrderHeader from '@/components/OrderHeader'
import Loading from '@/components/Loading'
import NoData from '@/components/NoData'
import { Button, Pagination } from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'

export default {
  name: 'orderList',
  components: {
    NoData,
    Loading,
    OrderHeader,
    // 引入部分组件
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  directives: { infiniteScroll },
  data () {
    return {
      // 订单信息列表
      list: [],
      loading: false,
      // 当前页
      pageNum: 1,
      // 每页查询几条
      pageSize: 10,
      // 共几页
      total: 0,
      // 滚动加载是否触发
      busy: true,
      // 加载更多是否显示按钮
      showNextPage: true
    }
  },
  mounted () {
    this.getOrderList()
  },
  methods: {
    /**
     * 获取订单信息
     */
    getOrderList () {
      this.loading = true
      this.busy = true
      this.axios.get('/orders', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then((res) => {
        this.loading = false
        this.busy = false
        // 数组拼接
        this.list = this.list.concat(res.list)
        this.total = res.total
        this.showNextPage = res.hasNextPage
      }).catch(() => {
        this.loading = false
      })
    },
    /**
     * 未支付跳转到支付页面
     * @param orderNo 订单ID
     */
    goPay (orderNo) {
      /*
      三种路由跳转方式
      this.$router.push('/order/pay)
      this.$router.push({
        name: 'orderPay',
        query: {
          orderNo
        }
      })
      */
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    },
    /**
     * 分页器分页
     * 页码改变
     * @param pageNum 当前页码
     */
    handleCurrentChange (pageNum) {
      this.pageNum = pageNum
      this.getOrderList()
    },
    /**
     * 加载更多按钮
     */
    loadMore () {
      this.pageNum++
      this.getOrderList()
    },
    /**
     * 利用vue-infinite-scroll
     * 滚动加载
     */
    scrollMore () {
      this.busy = true
      setTimeout(() => {
        this.pageNum++
        this.getList()
      }, 500)
    },
    /**
     * 分页器专用加载
     */
    getList () {
      this.loading = true
      this.axios.get('/orders', {
        params: {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then((res) => {
        // 数组拼接
        this.list = this.list.concat(res.list)
        this.loading = false
        if (res.hasNextPage) {
          this.busy = false
        } else {
          this.busy = true
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../assets/scss/config';
@import '../assets/scss/mixin';

.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;

    .order-box {
      .order {
        @include border();
        background-color: $colorG;
        margin-bottom: 31px;

        &:last-child {
          margin-bottom: 0;
        }

        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;

          .item-info {
            span {
              margin: 0 9px;
            }
          }

          .money {
            font-size: 26px;
            color: $colorB;
          }
        }

        .order-content {
          padding: 0 43px;

          .good-box {
            width: 88%;

            .good-list {
              display: flex;
              align-items: center;
              height: 145px;

              .good-img {
                width: 112px;

                img {
                  width: 100%;
                }
              }

              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }

          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;

            a {
              color: $colorA;
            }
          }
        }
      }

      .pagination {
        text-align: right;
      }

      .load-more {
        text-align: center;
      }
    }
  }
}
</style>
<style lang="scss">
@import '../assets/scss/config';
@import '../assets/scss/mixin';
//因为使用了scoped,只能作用于当前元素,所以无法修改
.order-list {
  .order-box {

    .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #ff6600;
      color: #FFF;
    }

    .load-more, .scroll-more {
      text-align: center;

      .el-button--primary {
        color: #FFF;
        background-color: #d95507;
        border-color: #D95507;
      }
    }
  }
}
</style>
