import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Dashboard from "./pages/dashboard.vue";
import Login from "./pages/login.vue";
import Overview from "./pages/dashboard/overview.vue";
import Users from "./pages/dashboard/users.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/dashboard/overview", name: "Overview", component: Overview },
  { path: "/dashboard/users", name: "Users", component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");

