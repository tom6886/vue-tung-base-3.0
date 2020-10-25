/*
 * @Author: 汤波
 * @Date: 2020-10-14 08:01:57
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 19:34:52
 * @FilePath: \vue3.0-tung-base\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index";
import ant from "./utils/ant";
import "ant-design-vue/dist/antd.css";

require('./mock');

const app = createApp(App);
app.use(router);
app.use(ant);

app.mount("#app");
