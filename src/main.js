import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/main.css";
import store from './store'

createApp(App).use(store).use(router).mount("#app");
