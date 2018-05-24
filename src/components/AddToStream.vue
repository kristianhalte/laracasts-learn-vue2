<template>
  <div>
    <div class="message">
      <div class="message-header">
        Push to the stream
      </div>
      <div class="message-body">
        <form @submit.prevent="addStatus(form)">
          <p class="control">
            <label class="label">Name</label>
            <input class="input" v-model="form.name">
            <label class="label">Status</label>
            <textarea class="textarea" v-model="form.body"></textarea>
          </p>
          <p class="control">
            <button class="button is-primary">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'add-to-stream',
  data() {
    return {
      form: {
        name: '',
        body: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addStatus'
    ])
  }
}
</script>

<style>

</style>
