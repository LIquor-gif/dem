<template>
  <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
</template>
<script>
import Vue from 'vue'
import { Search } from 'vant'

Vue.use(Search)
export default {}
</script>
