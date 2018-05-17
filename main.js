Vue.component('progress-view', {
  data() {
    return {
      completionRate: 50
    };
  }
});

let app = new Vue({
  el: '#root'
});