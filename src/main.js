import Vue from 'vue';
import router from './routes'
import VueRouter from 'vue-router';
// import App from './App.vue'

Vue.use(VueRouter);

new Vue({
  el: '#root',
  router,
  data: {
    
  }
  // render: h => h(App)
})