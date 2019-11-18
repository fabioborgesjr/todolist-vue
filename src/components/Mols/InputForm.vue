<template>
  <div class="field is-grouped">
    <div class="control is-expanded">
      <input-vue
        id="newTodo"
        :placeholder="placeholder"
        :onInput="handleInput"
        :onEnter="handleEnter"
        :isValid="isValid"
        :extraClass="isValid ? 'is-primary' : 'is-danger'"
        :value="value"
      />
    </div>
    <button-vue
      :extra-class="isLoading ? 'is-success is-loading' : 'is-success'"
      :on-click="handleClick"
      text="Adicionar"
    />
  </div>
</template>

<script>
import InputVue from "../Atoms/Input.vue";
import ButtonVue from "../Atoms/Button.vue";

export default {
  components: {
    InputVue,
    ButtonVue
  },
  props: {
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    onInput: {
      type: Function,
      default: function() {}
    },
    onEnter: {
      type: Function,
      default: function() {}
    },
    onClick: {
      type: Function,
      default: function() {}
    },
    isLoading: Boolean,
    isValid: Boolean
  },
  methods: {
    handleClick(e) {
      const me = this;

      me.$children[0].$refs.input.value = "";
      me.onClick(e);
    }, 
    handleEnter(e) {
      const me = this;

      me.onEnter(e)
    },
    handleInput(e) {
      const me = this;

      me.onInput(e)
    }
  }
};
</script>

<style lang="css" scoped>
.field {
  margin-left: .4em;
}
</style>