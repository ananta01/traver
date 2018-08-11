<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="icon of page" :key="icon.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="icon.imgUrl">
            </div>
            <p class="icon-text">{{icon.text}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    props: {
      iconList: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      }
    },
    methods: {},
    computed: {
      pages () {
        const pages = [];
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item)
        });
        return pages
      }
    }
  }
</script>

<style scoped lang="stylus">

  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"


  .icons >>> .swiper-container
    height: 0
    padding-bottom: 57%

  .icon
    position: relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    overflow: hidden

    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      padding: .1rem
      box-sizing: border-box

      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%

    .icon-text
      position: absolute
      bottom: 0
      left: 0
      right: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()


</style>
