<template>
    <div>
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :letter="letter" :hotCities="hotCities"></city-list>
      <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
    </div>
</template>

<script>

import CityHeader from 'components/CityHeader/CityHeader'
import CitySearch from 'components/CitySearch/CitySearch'
import CityList from 'components/CityList/CityList'
import Alphabet from 'components/Alphabet/Alphabet'

  export default {
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods: {
      handleLetterChange (letter) {
        this.letter = letter;
      }
    },
    computed: {},
    components: {
      CityHeader,
      CitySearch,
      CityList,
      Alphabet
    },
    created () {
      this.$http.get('/api/city.json').then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
      })
    }
  }
</script>

<style scoped lang="stylus">

</style>
