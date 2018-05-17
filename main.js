Vue.component('coupon', {
  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      // 1. local component emits custom event when trickered
      this.$emit('applied');
    }
  }
});

let app = new Vue({
  el: '#root',
  data: {
    couponApplied: false
  },
  methods: {
    onCouponApplied() {
      // 3. root method changes state
      this.couponApplied = true;
    }
  }
});