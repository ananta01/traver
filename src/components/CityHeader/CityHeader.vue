<template>
    <div class="header">
      城市选择
      <router-link to="/">
        <span class="iconfont back-icon">&#xe624;</span>
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
@import "~styles/varibles.styl"

  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem

    .back-icon
      position: absolute
      left: .2rem
      width: .64rem
      font-size: .4rem
      color: #fff
</style>
