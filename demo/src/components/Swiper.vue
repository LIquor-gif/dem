<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)

Vue.use(Lazyload)

export default {
  data() {
    return {
      images: ['https://img01.yzcdn.cn/vant/apple-1.jpg', 'https://img01.yzcdn.cn/vant/apple-2.jpg'],
    }
  },
}
</script>
