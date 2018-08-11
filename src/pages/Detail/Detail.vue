<template>
    <div>
      <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
      ></detail-banner>
      <detail-header></detail-header>
      <detail-list :categoryList="categoryList"></detail-list>
      <div class="content"></div>
    </div>
</template>

<script>

  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'

  export default {
    name: 'Detail',
    data() {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        categoryList: []
      }
    },
    methods: {},
    computed: {},
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    created () {
      this.$http.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.sightName = data.sightName;
            this.bannerImg = data.bannerImg;
            this.gallaryImgs = data.gallaryImgs;
            this.categoryList = data.categoryList;
          }
        })
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height: 50rem
</style>
