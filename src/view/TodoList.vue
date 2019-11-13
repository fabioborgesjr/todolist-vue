<template>
  <card-vue :title="`Contatos (${todos.length})`"></card-vue>
</template>

<script>
import CardVue from "@/components/Atoms/Card";
import { mapGetters } from "vuex";

export default {
  components: {
    CardVue
  },
  computed: {
    ...mapGetters(["todos"])
  }
};
</script>