import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import './viewport'  // require('./viewport') 

new Vue({
  render: (h) => h(App)
}).$mount('#app')