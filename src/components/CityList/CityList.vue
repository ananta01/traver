<template>
  <div class="list" ref="listWrap">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrap">
            <div class="button active">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrap" v-for="city of hotCities" :key="city.id"
               @click="handleCityClick(city.name)">
            <div class="button">{{city.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="cityList of item"
                :key="cityList.id" @click="handleCityClick(cityList.name)"
          >{{cityList.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'

  export default {
    props: {
      hotCities: {
        type: Array
      },
      cities: {
        type: Object
      },
      letter: {
        type: String
      }
    },

    data() {
      return {}
    },
    methods: {
      handleCityClick (city) {
        this.$store.commit('changeCity', city);
        this.$router.push('/')
      }
    },
    computed: {},
    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element)
        }
      }
    },
    components: {

    },
    mounted () {
      this.scroll = new BScroll(this.$refs.listWrap, {

      })
    }
  }
</script>

<style scoped lang="stylus">

  @import "~styles/varibles.styl"

  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc

  .border-bottom
    &:before
      border-color: #ccc

  .list
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0

    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem


    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem

      .button-wrap
        float: left
        width: 33.33%

        .button
          padding: .1rem 0
          margin: .1rem
          text-align: center
          border: .02rem solid #ccc
          border-radius: .1rem

        .active
          border: 1px solid $bgColor
          color: $bgColor

  .item-list
      .item
        line-height: .76rem
        padding-left: .2rem



</style>
