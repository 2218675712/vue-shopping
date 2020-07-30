<template>
  <div>
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>

import ProductParam from '@/components/ProductParam'

export default {
  name: 'product',
  components: {
    ProductParam
  }
}
</script>

<style lang="scss" scoped>
.pro-param {
  button {
    margin-left: 10px;
  }
}
</style>
