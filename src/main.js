import Vue from 'vue'
// import App from './App.vue'

Vue.component('coupon', {
  props: ['code'],
  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)">
  `,
  methods: {
    updateCode(code) {
      // validation
      if(code == 'ALLFREE') {
        alert('This coupon is no longer valid. Sorry!')
        return
      }
      this.$emit('input', code);
    }
  }
})

new Vue({
  el: '#root',
  data: {
    coupon: 'FREEBIE'
  }
  // render: h => h(App)
})