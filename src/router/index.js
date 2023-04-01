import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import MainBox from "../views/MainBox.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
