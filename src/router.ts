import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "./components/HomeView.vue"
import ContactView from "./components/ContactView.vue"
import AboutView from "./components/AboutView.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactView
    },
    {
        path: "/about",
        name: "About",
        component: AboutView
    }
  ],
})