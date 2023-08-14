// import { createApp } from "vue";
import "./style.scss";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router";
// import router from "./router";

// export const createApp = ViteSSG(App);

// const app = createApp(App);
// app.use(router);
// app.mount("#app");
export const createApp = ViteSSG(App, { routes });
