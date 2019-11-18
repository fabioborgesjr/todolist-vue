<template>
  <div class="control">
    <button 
      class="button" 
      :class="extraClass" 
      :title="tooltip"
      @click="onClick"
    >
      {{ text }}
      <template v-if="icon">
        <span class="icon">
          <font-awesome-icon :icon="icon" />
        </span>
      </template>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    extraClass: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "button"
    },
    onClick: {
      type: Function,
      default: function() {}
    },
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="css" scoped>
.button {
  margin: 0 .8em 0 0
}
</style>