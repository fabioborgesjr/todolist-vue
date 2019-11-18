import todoStatus from "./status";
import { generateId } from "./id";

const state = {
  todos: [
    {
      value: "Começar a incluir tarefas nesse TodoList",
      status: todoStatus.DONE,
      id: 123
    }
  ],
  todo: {
    value: "",
    status: todoStatus.PENDING,
    id: 0
  }
};

const actions = {
  addTodo({ commit }, todo) {
    commit("ADD_TODO", todo);
  },
  updateTodo({ commit }, todo) {
    commit("UPDATE_TODO", todo);
  },
  deleteTodo({ commit }, id) {
    if (confirm("Confirmar exclusão?")) {
      commit("DELETE_TODO", id);
    }
  }
};

const mutations = {
  ADD_TODO(state, todo) {
    const newId = generateId(state.todos);

    state.todos.push({
      id: newId,
      value: todo.value,
      status: todo.status
    });
  },
  UPDATE_TODO(state, data) {
    const todos = state.todos;

    state.todos = todos.map(todo => {
      if (todo.id === data.id) {
        todo = data;
      }

      return todo;
    });
  },
  DELETE_TODO(state, id) {
    const todos = state.todos;

    state.todos = todos.filter(todo => {
      return todo.id !== id;
    });
  }
};

const getters = {
  getTodos(state) {
    return state.todos;
  },
  getDefaultTodo(state) {
    return state.todo;
  },
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
