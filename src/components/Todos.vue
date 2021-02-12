<template>
    <div id="current-todos">
      <div style="display: flex;flex-direction:column;margin-left: 50px;margin-right: 50px">
        <h3 v-if="todos.length === 0">Task list is empty !</h3>
        <table  v-else  class="list-group" >
            <tr v-for="(todo) in todos" :key='todo.id' class="list-group-item" style="border: 1px solid;display: flex;justify-content: left">
              <td><input @change="edit(todo.id)" type="checkbox" :checked="todo.completed" :value="todo.completed"/> </td>
              <td  :style="todo.completed?'text-decoration:line-through;margin-left:10px':'margin-left:10px' ">
                {{todo.body}}
              </td>
            </tr>
        </table>
        <input v-model="newTodoText" type="text" placeholder="Add a new todo ( hit enter to add )" @keyup.enter="add"/>
      </div>
    </div>
</template>
<script>
export default{
  data(){
  return{
    newTodoText:'',
  }
  },
  methods: {
        edit(id) {
          this.$store.dispatch('changeStatus',id);
        },
        add(){
          if(this.newTodoText!==''){
            this.$store.dispatch('addTodo', {
              id:this.$store.state.todos.length+1,
              body:this.newTodoText,
              completed:false
            }).then(()=> this.newTodoText='');
          }
        },

    },
    computed: {
      todos() {
        return this.$store.state.todos;
      }
  }
}
</script>

