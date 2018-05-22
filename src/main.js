import Vue from 'vue'
// import App from './App.vue'

let store = {
  user: {
    name: 'John Doe'
  }
}

new Vue({
  el: '#one',
  data: {
    foo: 'bar',
    shared: store
  }
  // render: h => h(App)
})

new Vue({
  el: '#two',
  data: {
    foo: 'other bar',
    shared: store
  }
  // render: h => h(App)
})