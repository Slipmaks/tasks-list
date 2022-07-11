import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import UserTaskList from "./components/UserTaskList.vue";

const app = createApp(App);
app.component("user-task-list", UserTaskList);

app.mount("#app");
