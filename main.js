Vue.component('modal', {
  props: [],
  data() {
    return {
      
    }
  },
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  `
})

let app = new Vue({
  el: '#root',
  data: {
    showModal: false
  }
})