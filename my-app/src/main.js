import router from './router.js'
import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
