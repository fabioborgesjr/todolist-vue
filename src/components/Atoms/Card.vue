<template>
  <div class="card">
    <article class="custom-card-header">
      <figure class="image is-128x128">
        <img 
          :src="headerImage"
          alt 
          srcset 
        >
      </figure>
      <h2 class="card-header-title">
        {{ title }}
      </h2>
    </article>
    <article class="card-content">
      <slot name="body" />
    </article>
    <article class="card-footer">
      <slot name="footer" />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    headerImage: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss">
.card {
  background: #fff;
  margin: 4em auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: fit-content;
  display: flow-root;
  align-self: center;
}

.card-footer {
  align-self: flex-start;
  padding: 1.25em;
  text-align: center;
  display: inherit !important;
}

.custom-card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5em auto 0.3em;
}

.card-header-title {
  color: #222222;
  text-align: center;
  padding: 0.5rem 1rem 0;
}

article.custom-card-header > h2 {
  font-size: em(28);
  font-size: 44px;
  max-width: 250px;
  min-width: fit-content;
  margin: 0;
  font-weight: 300;
  margin: 0.4rem 0 0;
  color: #2193b0;
}

.card-content {
  max-height: 325px;
}

.noTodos {
  margin-top: 1.25em !important;
}
</style>
