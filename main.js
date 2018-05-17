Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.description }}</task>
    </ul>
  `,
  data() {
    return {
      tasks: [
        { description: 'Go to the store', complete: true },
        { description: 'Go to the mall', complete: false },
        { description: 'Go to the farm', complete: true },
        { description: 'Go to work', complete: false },
      ]
    }
  }
})

Vue.component('task', {
  template: '<li><slot></slot></li>'
})

new Vue({
  el: '#root'
})