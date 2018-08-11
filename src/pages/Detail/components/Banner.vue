<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>10</div>
      </div>
    </div>
    <common-fade>
      <common-gallary :gallaryImgs="gallaryImgs" @close="handleBannerClick" v-show="showGallary"></common-gallary>
    </common-fade>
  </div>
</template>

<script>
  import CommonGallary from '../../../common/Gallary/Gallary'
  import CommonFade from '../../../common/Fade/Fade'

  export default {
    props: {
      gallaryImgs: {
        type: Array
      },
      bannerImg: {
        type: String
      },
      sightName: {
        type: String
      }
    },
    data() {
      return {
        showGallary: false
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = !this.showGallary
      }
    },
    computed: {},
    components: {
      CommonGallary,
      CommonFade
    }
  }
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%

    .banner-img
      width: 100%

    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem

      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem

        .banner-icon
          font-size: .24rem

</style>
