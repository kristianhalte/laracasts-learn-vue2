<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="message" v-for="status in statuses">
          <div class="message-header" >
            <p>
              {{ status.user.name }} said...
            </p>
            <p>
              A moment ago
            </p>
          </div>
          <div class="message-body" v-text="status.body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let response = {
  data: [
    {
      user: {
        name: 'Kristian'
      },
      body: 'Something awesome'
    },
    {
      user: {
        name: 'George'
      },
      body: 'Something less awesome'
    }
  ]
}
export default {
  name: 'home',
  data() {
    return {
      statuses: []
    }
  },
  created() {
    // fire off ajax
    this.statuses = response.data;
  }
}
</script>

<style>

</style>
