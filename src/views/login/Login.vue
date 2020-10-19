<!--
 * @Author: 汤波
 * @Date: 2020-10-14 11:08:52
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-19 15:26:23
 * @FilePath: \vue3.0-tung-base\src\views\login\Login.vue
-->
<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <p class="title">
          代开代征监管系统
        </p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">登录</h4>
          <UserLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserLogin from "@/components/login/User-Login.vue";

export default defineComponent({
  name: "Login",
  components: {
    UserLogin
  }
});
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
