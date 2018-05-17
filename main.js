// 1. Global Event object created
window.Event = new Vue();

Vue.component('coupon', {
  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      // 2. local component emits custom event when trickered to global Event element
      Event.$emit('applied');
    }
  }
});

let app = new Vue({
  el: '#root',
  created() {
    // 3. root element listening for event
    Event.$on('applied', () => console.log('Handling it'))
  }
});