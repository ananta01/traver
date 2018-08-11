<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="img of swiperList" :key="img.id">
        <img class="swiper-img" :src="img.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      swiperList: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3000
        }
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="stylus">
  .swiper-wrap >>> .swiper-pagination-bullet-active
    background: #fff

  .swiper-wrap
    width: 100%
    height: 0
    padding-bottom: 26.7%
    overflow: hidden

    .swiper-img
      width: 100%



</style>
