<template>
  <div class="table-container">
    <table class="table is-hoverable">
      <thead>
        <slot name="thead" />
      </thead>
      <tbody class="tbody">
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
.table {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.table-container {
  max-height: 250px;
  overflow-y: auto !important;
}
</style>