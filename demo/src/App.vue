<template>
  <div id="app">
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {}
</script>

<style lang="scss"></style>
