<template>
  <ul class="list">
    <li class="item"
      :class="{'active': letterText == item}"
      v-for="item of letters" :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd">
      {{item}}</li>
  </ul>
</template>

<script>
  export default {
    props: {
      cities: {
        type: Object
      }
    },
    data() {
      return {
        touchStatus: false,
        letterText: '',
        startY: 0,
        timer: null
      }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      handleLetterClick (e) {
        this.letterText = e.target.innerText;
        this.$emit('change', this.letterText)
      },

      handleTouchStart () {
        this.touchStatus = true;
      },

      handleTouchMove (e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79;
            const index = Math.floor((touchY - this.startY) / 20);
            if (index >= 0 && index < this.letters.length) {
              this.letterText = this.letters[index];
              this.$emit('change', this.letterText)
            }
          }, 16)
        }
      },

      handleTouchEnd () {
        this.touchStatus = false;
      }
    },
    computed: {
      letters () {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters;
      }
    },
    components: {}
  }
</script>

<style scoped lang="stylus">

  @import "~styles/varibles.styl"

  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem

    .item
      line-height: .4rem
      text-align: center
      color: $bgColor

      &.active
        font-weight: 700
        font-size: 25px
</style>
