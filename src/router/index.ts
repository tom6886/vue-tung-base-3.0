/*
 * @Author: 汤波
 * @Date: 2020-10-14 15:23:37
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-14 16:13:29
 * @FilePath: \vue3.0-tung-base\src\router\index.ts
 */
import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";
import routes from "./routers";

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  if (!Cookies.get("accessToken") && to.name !== "login") {
    router.push({
      name: "login"
    });
  } else {
    next();
  }
});

export default router;
