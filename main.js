Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header"></slot>
          </p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <slot>
            Defaul;t content here.
          </slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">
            <slot name="footer-success"></slot>
          </button>
          <button class="button">
            <slot name="footer-fail"></slot>
          </button>
        </footer>
      </div>
    </div>
  `
});

let app = new Vue({
  el: '#root'
});