import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './assets/js/bootstrap';

Vue.config.productionTip = false

Vue.use(bootstrap);

window.$ = require('jquery')
window.JQuery = require('jquery')
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
