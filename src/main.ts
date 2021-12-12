import { createApp } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

import App from "@/App.vue";
import router from "@/router";

import "@/assets/main.scss";

createApp(App).use(router).mount("#app");
