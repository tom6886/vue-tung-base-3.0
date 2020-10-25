/*
 * @Author: 汤波
 * @Date: 2020-10-14 15:33:50
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-20 16:32:10
 * @FilePath: \web\src\router\routers.ts
 */
import { RouteRecordRaw } from "vue-router";
import Main from "@/views/Main.vue";

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
      title: "Login - 登录"
    },
    component: () => import("@/views/login/Login.vue")
  },
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "/index",
        name: "index",
        meta: {
          title: "Index - 首页"
        },
        component: () => import("@/views/index/Index.vue")
      }
    ]
  }
];

export default [...appRouter];
