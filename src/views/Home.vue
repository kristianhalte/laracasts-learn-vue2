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
              {{ status.created_at | ago | capitalize }}
            </p>
          </div>
          <div class="message-body" v-text="status.body"></div>
        </div>
        <add-to-stream></add-to-stream>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import AddToStream from '../components/AddToStream'
export default {
  name: 'home',
  components: { AddToStream },
  computed: {
    ...mapGetters([
      'statuses'
    ])
  },
    filters: {
    ago(date) {
      return moment(date).fromNow();
    },
    capitalize(value) {
      return value.toUpperCase();
    }
  }
}
</script>

<style>

</style>
