import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App";
import ElementPlus from "element-plus";
import "./styles/element-variables.scss";
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
