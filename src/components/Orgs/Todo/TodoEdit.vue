<template>
  <input-vue
    :onEnter="checkTodoValue"
    :onBlur="handleBlur"
    :onInput="setValue"
    placeholder="Esse campo não pode ficar vazio"
    :isValid="isValid"
    :value="todo.value"
    extraClass="is-small"
  />
</template>

<script>
import InputVue from '../../Atoms/Input.vue';
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  components: {
    InputVue
  },
  props: {
    submit: {
      type: Function,
      default: function() {}
    },
    currentTodo: {
      type: Object,
      default: () => {}
    },
    status: Boolean
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
      prevTodo: this.currentTodo,
      todo: {...this.currentTodo, value: ""},
      isValid: true,
      editing: true
    };
  },
  computed: {
    ...mapGetters("todos", ["getDefaultTodo"])
  },
  methods: {
    setValue({ target }) {
      this.todo.value = target.value;
    },
    checkTodoValue({ target }) {
      const me = this, todo = {...me.prevTodo, value: target.value},
        formIsValid = !me.$v.todo.value.$invalid;

      me.isValid = formIsValid;

      if (formIsValid) {
        me.handleSubmit(todo);
      }
    },
    handleSubmit(todo) {
      const me = this;

      me.stopEditing();
      me.submit(todo);
    },
    handleBlur() {
      this.stopEditing();
    },
    stopEditing() {
      const me = this;

      if (this.editing) {
        this.editing = !this.editing;
        me.$emit("stopEditing", this.prevTodo.id);
      }
    }
  }
};
</script>

<style>
</style>