<template>
  <input
    :id="id"
    ref="input"
    v-model="model"
    class="input"
    :class="extraClass"
    :type="type"
    :placeholder="placeholder"
    :readonly="readOnly"
    @input="onInput"
    @blur="onBlur"
    @keyup.enter="handleEnter"
    @click="() => { isEditing = true }"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    onEnter: {
      type: Function,
      default: function() {}
    },
    onBlur: {
      type: Function,
      default: function() {}
    },
    onInput: {
      type: Function,
      default: function() {}
    },
    extraClass: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    isEditing: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      readOnly: !this.isEditing,
      model: ""
    };
  },
  mounted: function () {
    this.model = "";
    this.focusInput('input');
  },
  methods: {
    focusInput(inputRef) {
      this.$refs[inputRef].focus();
    },
    handleEnter(e) {
      this.cleanInput();
      this.onEnter(e);
    },
    cleanInput() {
      this.model = "";
    }
  }
};
</script>