import Vue from 'vue'
// import App from './App.vue'

let source = {
  user: {
    name: 'John Doe'
  }
}

new Vue({
  el: '#one',
  data: source,
  // render: h => h(App)
})

new Vue({
  el: '#two',
  data: source,
  // render: h => h(App)
})