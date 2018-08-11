<template>
  <div>
    <div class="recommend-title">
      <img class="recommend-star" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"><span>周末去哪儿</span>
    </div>
    <ul class="item-list">
      <li class="item" v-for="recommend of weekendList" :key="recommend.id">
        <div class="item-img-wrap">
          <img class="item-img" :src="recommend.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      weekendList: Array
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="stylus">

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
    .item
      margin-bottom: .3rem

      .item-img-wrap
        overflow: hidden
        height: 0
        padding-bottom: 37.9%

        .item-img
          width: 100%

      .item-info
        flex: 1
        padding: .2rem .2rem 0

        .item-title
          line-height: .54rem
          font-size: .3rem


        .item-desc
          line-height: .4rem
          font-size: .25rem
          color: #7a7a7a



</style>
