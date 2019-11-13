import Vue from "vue";
import Vuex from "vuex";
import Persistence from "vuex-persist";

Vue.use(Vuex);

const local = new Persistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    todos: []
  },

  mutations: {},

  getters: {
    todos: state => {
      return state.todos;
    },
    todoByID: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },

  plugins: [local.plugin]
});
