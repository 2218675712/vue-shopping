import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  status: 0,
  data: {
    id: 12,
    username: 'admin',
    email: 'admin@51purse.com',
    phone: null,
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048325000
  }
})
Mock.mock('/api/orders', {
  status: 0,
  data: {
    pageNum: 1,
    pageSize: 3,
    size: 3,
    orderBy: null,
    startRow: 1,
    endRow: 3,
    total: 16,
    pages: 6,
    list: [
      {
        orderNo: 1485158676346,
        payment: 2999.11,
        paymentType: 1,
        paymentTypeDesc: '在线支付',
        postage: 0,
        status: 10,
        statusDesc: '未支付',
        paymentTime: '2017-02-11 12:27:18',
        sendTime: '2017-02-11 12:27:18',
        endTime: '2017-02-11 12:27:18',
        closeTime: '2017-02-11 12:27:18',
        createTime: '2017-01-23 16:04:36',
        orderItemVoList: [
          {
            orderNo: 1485158676346,
            productId: 2,
            productName: 'oppo R8',
            productImage: 'mainimage.jpg',
            currentUnitPrice: 2999.11,
            quantity: 1,
            totalPrice: 2999.11,
            createTime: '2017-01-23 16:04:36'
          }
        ],
        imageHost: 'http://img.happymmall.com/',
        shippingId: 5,
        receiverName: 'geely',
        shippingVo: null
      },
      {
        orderNo: 1485158675516,
        payment: 2999.11,
        paymentType: 1,
        paymentTypeDesc: '在线支付',
        postage: 0,
        status: 10,
        statusDesc: '未支付',
        paymentTime: '2017-02-11 12:27:18',
        sendTime: '2017-02-11 12:27:18',
        endTime: '2017-02-11 12:27:18',
        closeTime: '2017-02-11 12:27:18',
        createTime: '2017-01-23 16:04:35',
        orderItemVoList: [
          {
            orderNo: 1485158675516,
            productId: 2,
            productName: 'oppo R8',
            productImage: 'mainimage.jpg',
            currentUnitPrice: 2999.11,
            quantity: 1,
            totalPrice: 2999.11,
            createTime: '2017-01-23 16:04:35'
          }
        ],
        imageHost: 'http://img.happymmall.com/',
        shippingId: 5,
        receiverName: 'geely',
        shippingVo: null
      },
      {
        orderNo: 1485158675316,
        payment: 2999.11,
        paymentType: 1,
        paymentTypeDesc: '在线支付',
        postage: 0,
        status: 10,
        statusDesc: '未支付',
        paymentTime: '2017-02-11 12:27:18',
        sendTime: '2017-02-11 12:27:18',
        endTime: '2017-02-11 12:27:18',
        closeTime: '2017-02-11 12:27:18',
        createTime: '2017-01-23 16:04:35',
        orderItemVoList: [
          {
            orderNo: 1485158675316,
            productId: 2,
            productName: 'oppo R8',
            productImage: 'mainimage.jpg',
            currentUnitPrice: 2999.11,
            quantity: 1,
            totalPrice: 2999.11,
            createTime: '2017-01-23 16:04:35'
          }
        ],
        imageHost: 'http://img.happymmall.com/',
        shippingId: 5,
        receiverName: 'geely',
        shippingVo: null
      }
    ],
    firstPage: 1,
    prePage: 0,
    nextPage: 2,
    lastPage: 6,
    isFirstPage: true,
    isLastPage: false,
    hasPreviousPage: false,
    hasNextPage: true,
    navigatePages: 8,
    navigatepageNums: [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  }
})
