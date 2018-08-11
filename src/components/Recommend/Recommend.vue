<template>
    <div>
      <div class="recommend-title">
        <img class="recommend-star" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"><span>热销推荐</span>
      </div>
      <ul class="item-list">
        <router-link :to="'/detail/' + recommend.id"  tag="li" class="item border-bottom" v-for="recommend of recommendList" :key="recommend.id">
          <img class="item-img" :src="recommend.imgUrl">
          <div class="item-info">
            <p class="item-title">{{recommend.title}}</p>
            <p class="item-desc">{{recommend.desc}}</p>
            <button class="item-btn">查看详情</button>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
  export default {
    props: {
      recommendList: Array
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="stylus">

@import "~styles/mixins.styl";

    .recommend-title
      line-height: .8rem
      background: #fff
      text-indent: .2rem

      .recommend-star
        width: .3rem
        height: .3rem
        margin: -.08rem .1rem 0 0

      & > span
        font-size: .32rem

    .item-list
      margin-left: .24rem

      .item
        display: flex
        height: 2rem
        padding: .2rem 0
        overflow: hidden

        .item-img
          width: 2rem
          height: 2rem

        .item-info
          flex: 1
          min-width: 0
          padding: .05rem .2rem 0

          .item-title
            line-height: .54rem
            font-size: .3rem

            @media only screen and (max-width: 320px)
              font-size: .25rem

          .item-desc
            line-height: .4rem
            font-size: .25rem
            color: #7a7a7a

            @media only screen and (max-width: 320px)
              ellipsis()

          .item-btn
            margin-top: .08rem
            padding: .02rem .16rem
            border-radius: .06rem
            background: #ff9300
            color: #fff

</style>
