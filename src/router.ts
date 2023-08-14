import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "./components/HomeView.vue";
import ContactView from "./components/ContactView.vue";
import AboutView from "./components/AboutView.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

// export default createRouter({
//   history: createWebHistory(),
//   routes,
// });
