import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import todos from "./todos/store";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    new VuexPersistence({ storage: global.localStorage, key: "state" }).plugin
  ],
  modules: {
    todos
  }
});
