<template>
  <div>
    <div class="message">
      <div class="message-header">
        Push to the stream
      </div>
      <div class="message-body">
        <form @submit.prevent="onSubmit">
          <p class="control">
            <label class="label">Name</label>
            <input class="input" v-model="form.name">
            <label class="label">Status</label>
            <textarea class="textarea" v-model="form.body"></textarea>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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
    onSubmit() {

    }
  }
}
</script>

<style>

</style>
