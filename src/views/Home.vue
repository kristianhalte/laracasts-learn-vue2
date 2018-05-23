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
              {{ status.created_at | ago }}
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
      body: 'Something awesome',
      created_at: Date.now() - 23494304
    },
    {
      user: {
        name: 'George'
      },
      body: 'Something less awesome',
      created_at: Date.now() - 2349823
    }
  ]
};
import moment from 'moment';
export default {
  name: 'home',
  data() {
    return {
      statuses: []
    }
  },
  filters: {
    ago(date) {
      return moment(date).fromNow();
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
