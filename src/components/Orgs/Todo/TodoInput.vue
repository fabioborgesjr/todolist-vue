<template>
  <input-form-vue
    :onEnter="checkTodoValue"
    :onInput="setValue"
    :onClick="checkTodoValue"
    placeholder="Nova tarefa"
    :isLoading="isLoading"
    :isValid="isValid"
    :value="todo.value"
  />
</template>

<script>
import InputFormVue from "@/components/Mols/InputForm.vue";

import { mapGetters } from "vuex";

import { required } from "vuelidate/lib/validators";

export default {
  components: {
    InputFormVue
  },
  props: {
    submit: {
      type: Function,
      default: function() {}
    }
  },
  validations: {
    todo: {
      value: {
        required
      }
    }
  },
  data() {
    return {
      todo: {},
      isLoading: false,
      isValid: true
    };
  },
  computed: {
    ...mapGetters("todos", ["getDefaultTodo"])
  },
  created() {
    this.todo = this.getDefaultTodo;
  },
  methods: {
    setValue({ target }) {
      this.todo.value = target.value;
    },
    checkTodoValue({ target }) {
      const me = this, todo = {...me.todo, value: target.value || me.todo.value},
        submit = me.handleSubmit,
        formIsValid = !me.$v.todo.value.$invalid;

      me.isValid = formIsValid;

      if (formIsValid) {
        me.isLoading = true;

        /**
       * Só para ver o loading no botão rs
       */
        setTimeout(function() {
          if (formIsValid) {
            submit(todo);
          }
        }, 500);
      }
    },
    handleSubmit(todo) {
      const me = this;

      me.isLoading = false;
      
      me.cleanInput();
      me.submit(todo);
    },
    cleanInput() {
      const me = this;

      me.todo.value = "";
    }
  }
};
</script>