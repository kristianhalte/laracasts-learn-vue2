import Vue from 'vue';
import router from './router/routes'
import { store } from './store/store'
import App from './App.vue'

new Vue({
  el: '#root',
  store,
  router,
  data: {
    
  },
  render: h => h(App)
})