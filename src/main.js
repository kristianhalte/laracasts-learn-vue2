import Vue from 'vue'
// import App from './App.vue'

new Vue({
  el: '#one',
  data: {
    user: {
      name: 'John Doe'
    }
  },
  // render: h => h(App)
})

new Vue({
  el: '#two',
  data: {
    user: {
      name: 'Jane Doe'
    }
  },
  // render: h => h(App)
})