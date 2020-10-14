<!--
 * @Author: 汤波
 * @Date: 2020-10-14 11:08:52
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-14 13:39:48
 * @FilePath: \vue3.0-tung-base\src\views\login\Login.vue
-->
<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <div class="login-time">
          {{ time }}
        </div>
        <img class="img" src="/img/logo.png" alt="" />
        <p class="title">
          代开代征监管系统
        </p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">登录</h4>
          <userLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
// import Cookies from "js-cookie";
// import { IR } from "@/model/common";
// import { ILoginUser } from "@/model/login";
// import { Form } from "view-design";
// import UserLogin from "@/components/login/User-Login.vue";

// const loginRules: object = {
//   userName: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
//   password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
// };

export default defineComponent({
  name: "Login",
  setup() {
    const state = reactive({
      time: "",
      loading: false,
      loginBtn: "登录",
      user: {
        userName: "",
        password: "",
      },
    });

    return {
      state,
    };
  },
});

// sublogin() {
//   const _this = this;
//   _this.$refs.loginForm.validate(valid => {
//     if (valid) {
//       _this.loading = true;
//       _this.login();
//     } else {
//       _this.$Message.error("用户名或密码不能为空，请完善表单");
//     }
//   });
// }

// async login() {
//   let res = await this.$post("/system/user/login", this.user);

//   if (res.code !== 0) {
//     this.$Message.error(res.msg);
//     this.loading = false;
//     return;
//   }

//   Cookies.set("accessToken", res.data);
//   this.$router.push({
//     name: "map"
//   });
// }
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
