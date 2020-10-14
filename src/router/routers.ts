/*
 * @Author: 汤波
 * @Date: 2020-10-14 15:33:50
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-14 15:59:52
 * @FilePath: \vue3.0-tung-base\src\router\routers.ts
 */
import { RouteRecordRaw } from "vue-router";

// export const page404: RouteRecordRaw = {
//   path: "/*",
//   name: "error-404",
//   meta: {
//     title: "404-页面不存在",
//   },
//   component: () => import("@/views/error-page/404.vue"),
// };

export const appRouter: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login - 登录",
    },
    component: () => import("@/views/login/Login.vue"),
  },
];

export default [...appRouter];
