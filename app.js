var app = new Vue({
  el: '#app',
  components: {
    'task': {props: ['task'],
    template: `
              <div class="ui segment task"
                          v-bind:class="task.completed ? 'done' : 'todo' ">
                {{ task.id }}  {{ task.name }}: {{ task.description }} completed? {{ task.completed }}
              </div>
              `}
  },
  data: {
    tasks: [
      { id: 1, name: 'Todo1', description: 'This is a todo', completed: false },
      { id: 2, name: 'Todo 2', description: 'This is another todo', completed: true },
      { id: 3, name: 'Three', description: 'This is a complete todo', completed: true },
      { id: 4, name: 'Four', description: 'This is another complete todo', completed: true }
    ],
    message: 'Hello World!'
  },
  computed: {
    completedTasks: function() {
      return this.tasks.filter( item => item.completed == true );
    },

    todoTasks: function() {
      return this.tasks.filter( item => item.completed == false );
    }
  }
})
