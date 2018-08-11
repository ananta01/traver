<template>
    <div>
      <home-header></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <icons :iconList="iconList"></icons>
      <recommend :recommendList="recommendList"></recommend>
      <weekend :weekendList="weekendList"></weekend>
    </div>
</template>

<script>

import HomeHeader from 'components/Header/Header';
import HomeSwiper from 'components/Swiper/Swiper';
import Icons from 'components/Icons/Icons';
import Recommend from 'components/Recommend/Recommend';
import Weekend from 'components/Weekend/Weekend';

  export default {

    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {},
    computed: {},
    components: {
      HomeHeader,
      HomeSwiper,
      Icons,
      Recommend,
      Weekend
    },
    created () {
      this.$http.get('/api/index.json').then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      })
    }
  }
</script>

<style scoped>

</style>
