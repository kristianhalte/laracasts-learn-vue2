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
              {{ postedOn(status) }}
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
      created_at: Date.now() - 5000000
    },
    {
      user: {
        name: 'George'
      },
      body: 'Something less awesome',
      created_at: Date.now() - 500000
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
  created() {
    // fire off ajax
    this.statuses = response.data;
  },
  methods: {
    postedOn(status) {
      return moment(status.created_at).fromNow();
    }
  }
}
</script>

<style>

</style>
