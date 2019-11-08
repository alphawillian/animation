import Vue from 'vue'
import App from './App.vue'

import 'assets/scss/normalize.css'
import 'assets/scss/index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
