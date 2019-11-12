<template>
  <main class="container">
    <DogFight></DogFight>
    <PkVer></PkVer>
    <PkHor></PkHor>
  </main>
</template>

<script>
// import { getParams } from '@jdpay/jdpay_utils'
import DogFight from './components/dogFight/dogFight'
import PkVer from './components/pkVer/pkVer'
import PkHor from './components/pkHor/pkHor'
export default {
  components: {
    DogFight,
    PkVer,
    PkHor
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
  background-color: #ededed;
  
}

</style>
