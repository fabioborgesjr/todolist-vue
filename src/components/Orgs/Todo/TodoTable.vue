<template>
  <table-vue>
    <template slot="thead">
      <tr>
        <th
          v-for="(header, index) in headers"
          :key="index"
        >
          {{ header }}
        </th>
      </tr>
    </template>
    <template slot="tbody">
      <tr
        v-for="(todo, index) in todos"
        :key="index"
        :class="todo.status === done ? 'has-text-success' : 'has-text'"
      >
        <td class="todo-cell">
          <strike v-if="todo.status === done">
            {{ todo.value }}
          </strike>
          <template v-else>
            <todo-edit-vue
              v-if="editingTodo.status === true && todo.id === editingTodo.todo"
              :currentTodo="todo"
              :submit="updateEditedTodo"
              :status="editingTodo.status"
              @stopEditing="toggleEdit"
            />
            <span
              v-else
              :title="todo.value"
              @click="toggleEdit(todo.id)"
            >
              {{ todo.value }}
            </span>
          </template>
        </td>
        <td>{{ todo.status }}</td>
        <td class="todo-actions">
          <button-vue
            v-if="todo.status !== done"
            extraClass="is-success is-small"
            icon="check"
            :onClick="() => handleCheck(todo)"
            tooltip="Concluir"
          />
          <button-vue
            v-else
            extraClass="is-light is-small"
            icon="history"
            :onClick="() => handlePendency(todo)"
            tooltip="Pendente"
          />
          <button-vue
            extraClass="is-danger is-small"
            icon="trash-alt"
            :onClick="() => handleDelete(todo)"
            tooltip="Remover"
          />
        </td>
      </tr>
    </template>
  </table-vue>
</template>

<script>
import TableVue from "../../Atoms/Table.vue";
import ButtonVue from "../../Atoms/Button.vue";

import { mapActions } from "vuex";

import todoStatus from "@/store/todos/status";
import TodoEditVue from "./TodoEdit.vue";

export default {
  components: {
    TableVue,
    ButtonVue,
    TodoEditVue
  },
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    todos: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      editingTodo: {
        status: false,
        todo: null
      }
    };
  },
  computed: {
    done() {
      return todoStatus.DONE;
    }
  },
  methods: {
    ...mapActions("todos", ["deleteTodo", "updateTodo"]),
    handleDelete(todo) {
      this.deleteTodo(todo.id);
    },
    handleCheck(todo) {
      this.updateTodo({ ...todo, status: todoStatus.DONE });
    },
    handlePendency(todo) {
      this.updateTodo({ ...todo, status: todoStatus.PENDING });
    },
    updateEditedTodo(todo) {     
      this.updateTodo(todo);
      this.editingTodo = {
        status: false,
        todo: null
      };
    },
    toggleEdit(todo) {
      this.editingTodo = {
        status: !this.editingTodo.status,
        todo: todo
      }

      document.getElementById('newTodo').click();
    }
  }
};
</script>

<style scoped>
.todo-actions {
  display: flex;
  justify-content: space-evenly;
}

.todo-cell {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px;
}
</style>
