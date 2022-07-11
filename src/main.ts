import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.css";
import { registerDirectives } from "@/directives";

const app = createApp(App);
registerDirectives(app);

app.use(router);

app.mount("#app");
