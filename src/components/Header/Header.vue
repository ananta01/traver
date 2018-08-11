<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
      <router-link to="/city">
        <div class="header-right">{{this.$store.state.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibles.styl";

  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff

    .header-left
      width: .64rem
      float: left

      .back-icon
        display: block
        text-align: center
        font-size: .4rem

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin: .12rem .12rem .2rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc

      & > span
        padding: 0 .14rem

    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff

      .arrow-icon
        font-size: .22rem




</style>
