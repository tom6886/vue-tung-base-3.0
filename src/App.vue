<!--
 * @Author: 汤波
 * @Date: 2020-10-14 08:01:57
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-19 16:48:05
 * @FilePath: \vue3.0-tung-base\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { provide } from "vue";
import { post, get, upload } from "@/utils/api";
import { message } from "ant-design-vue";
import router from "@/router";

export default {
  setup() {
    provide("globalProperties", {
      post,
      get,
      upload,
      message,
      router
    });
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
