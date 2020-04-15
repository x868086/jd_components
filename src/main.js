import Vue from 'vue'
import App from './App.vue'
import './viewport'
Vue.config.productionTip = false // require('./viewport')

new Vue({
  render: (h) => h(App)
}).$mount('#app')
