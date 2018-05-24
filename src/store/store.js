import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    statuses: [
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
  },
  getters: {
    statuses: state => {
      return state.statuses
    }
  },
  mutations: {
    addStatus: (state, payload) => {
      var status = {
        user: {
          name: payload.name
        },
        body: payload.body,
        created_at: Date.now()
      }
      state.statuses.push(status)
    }
  },
  actions: {
    addStatus: (context, payload) => {
      setTimeout(function() {
        context.commit('addStatus', payload)
      }, 1000)
    }
  }
})