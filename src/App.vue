<template>
  <main class="container">
    <DogFight></DogFight>
    <PkVer></PkVer>
    <PkHor></PkHor>
    <CarFan></CarFan>
    <Rocket></Rocket>
    <LittleItem></LittleItem>
    <TextStyle></TextStyle>
  </main>
</template>

<script>
// import { getParams } from '@jdpay/jdpay_utils'
import DogFight from './components/dogFight/dogFight'
import PkVer from './components/pkVer/pkVer'
import PkHor from './components/pkHor/pkHor'
import CarFan from './components/carFan/carFan'
import Rocket from './components/rocket/rocket'
import LittleItem from './components/littleItem/littleItem'
import Text from './components/text/text'
export default {
  components: {
    DogFight,
    PkVer,
    PkHor,
    CarFan,
    Rocket,
    LittleItem,
    TextStyle: Text
  },
  data () {
    return {
    }
  },
  created () { },
  mounted () {
  },
  filters: {
  },
  watch: {},
  methods: {

  }

}
</script>

<style lang="scss" scoped>
$r:100;
.container {
  margin: 0 auto;
  width: 7.5rem;
  max-width: 100vh;
  min-height: 100vh;
  background-color: #ddd;
}
</style>
