Vue.component('coupon', {
  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      console.log('applied!');
    }
  }
});

let app = new Vue({
  el: '#root'
});