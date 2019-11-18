import Vue from "vue";
import Vuelidate from "vuelidate";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";

import store from "@/store/index";
import router from "@/router";

import "@/assets/main.scss";

library.add(faTrashAlt);
library.add(faCheck);
library.add(faHistory);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
