import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Dashboard from "./dashboard.vue";
import Overview from "./pages/overview.vue";
import Users from "./pages/users.vue";

/* const routes = [
  { path: "/", component: App },
  { path: "/dashboard", component: Dashboard },
]; */

/* const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
}); */

createApp(App).mount("#app");
// createApp(Dashboard).mount("#app");
// createApp(Overview).mount("#app");
// createApp(Users).mount("#app");

