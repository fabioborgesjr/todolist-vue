<template>
  <card-vue
    title="Todolist"
    headerImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmagazin.swisscom.ch%2Fapp%2Fuploads%2F2017%2F06%2Ficon-microsoft-to-do-app-1.jpg&f=1&nofb=1"
  >
    <template slot="body">
      <todo-input-vue :submit="submit" />
      <todo-table-vue
        v-if="getTodos.length"
        :headers="headers"
        :todos="getTodos"
      />
      <p 
        v-else 
        class="noTodos"
      >
        Parece que você não tem nenhuma tarefa pendente.
      </p>
    </template>
    <div slot="footer">
      Contribua com o projeto no
      <a href="https://github.com/salazenas/todolist-vue">Github</a>
    </div>
  </card-vue>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CardVue from "@/components/Atoms/Card";
import TodoInputVue from "../components/Orgs/Todo/TodoInput.vue";
import TodoTableVue from "../components/Orgs/Todo/TodoTable.vue";

export default {
  components: {
    CardVue,
    TodoTableVue,
    TodoInputVue
  },
  data() {
    return {
      headers: ["Tarefa", "Status", "Ações"]
    };
  },
  computed: {
    ...mapGetters("todos", ["getTodos"])
  },
  methods: {
    ...mapActions("todos", ["addTodo"]),
    submit(todo) {
      this.addTodo(todo);
    }
  }
};
</script>