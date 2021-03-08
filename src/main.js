import { createApp } from "vue";
import App from "./App.vue";
import test from "./test";
console.log("test", test);
import "ant-design-vue/dist/antd.css";
import LazyAntdv from "../lib/index.js";
createApp(App).use(LazyAntdv).mount("#app");
