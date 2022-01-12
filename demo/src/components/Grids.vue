<template>
  <van-grid :gutter="10">
    <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
  </van-grid>
</template>
<script>
import Vue from 'vue'
import { Grid, GridItem } from 'vant'

Vue.use(Grid)
Vue.use(GridItem)
export default {}
</script>
