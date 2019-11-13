<template>
  <div class="card">
    <article>
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>

      <p>{{ description }}</p>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.card {
  background: #fff;
  margin: 4em auto;
  width: 90%;
  height: 90%;
  max-width: 496px;
  max-height: 496px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  article {
    padding: 1.25em 1.5em;

    h2,
    h3 {
      margin: 0;
      font-weight: 300;
    }

    h2 {
      font-size: em(28);
      color: #222222;
    }

    h3 {
      font-size: em(15);
      color: #838689;
    }

    p {
      margin: 1.25em 0;
      font-size: em(13);
      font-weight: 400;
      color: #222222;

      span {
        font-weight: 700;
        color: #000000;
      }
    }
  }
}
</style>