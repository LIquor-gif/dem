<template>
  <div>
    <Search />
    <Swiper />
    <Grids />
  </div>
</template>
<script>
import { Search } from '../components/Search.vue'
import { Swiper } from '../components/Swiper.vue'
import { Grids } from '../components/Grids.vue'

export default {
  components: {
    Search,
    Swiper,
    Grids,
  },
}
</script>
<style lang="scss"></style>
