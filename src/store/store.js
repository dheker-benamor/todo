import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: ''
    },
    mutations: {
        ADD_TODO(state,newTodo){
            state.todos.push(newTodo)
        },
        CHANGE_STATE(state,id){
            state.todos.find(e=>e.id===id).completed = !state.todos.find(e=>e.id===id).completed;
        },


    },
    actions: {
        addTodo({commit},todo){
            commit('ADD_TODO',todo)
        },
        changeStatus({commit},id){
            commit('CHANGE_STATE',id)
        },

    },

})
