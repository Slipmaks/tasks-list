import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import DefaultButton from "./components/UI/DefaultButton.vue";
import DefaultInput from "./components/UI/DefaultInput.vue";
import "./index.css";

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("default-button", DefaultButton);
app.component("default-input", DefaultInput);

app.mount("#app");
