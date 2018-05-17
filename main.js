Vue.component('coupon', {
  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      this.$emit('applied');
    }
  }
});

let app = new Vue({
  el: '#root',
  methods: {
    onCouponApplied() {
      console.log('coupon applied');
    }
  }
});