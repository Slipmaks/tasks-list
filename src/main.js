import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import "./index.css";

const app = createApp(App);
app.component("the-header", TheHeader);

app.mount("#app");
