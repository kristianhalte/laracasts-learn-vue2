import Vue from 'vue'
// import App from './App.vue'

Vue.component('coupon', {
  props: ['code'],
  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" />
  `,
  methods: {
    updateCode(code) {
      // validation
      if(code == 'ALLFREE') {
        console.log('This coupon is no longer valid. Sorry!')
      }
      this.$emit('input', code);
    }
  }
})

new Vue({
  el: '#root',
  data: {
    coupon: 'FREEBIE',
    code: 'Other free stuff'
  }
  // render: h => h(App)
})