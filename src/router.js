import Vue from "vue";
import Router from "vue-router";

import TodoList from "@/view/TodoList";
import Main from "@/layout/Main";
import NotFound from "@/view/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          component: TodoList
        },
        {
          path: "404",
          component: NotFound
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
