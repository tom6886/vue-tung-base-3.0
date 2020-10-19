<!--
 * @Author: 汤波
 * @Date: 2020-10-15 16:37:21
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-19 16:42:43
 * @FilePath: \vue3.0-tung-base\src\components\login\User-Login.vue
-->
<template>
  <div>
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username" />
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input type="password" v-model:value="modelRef.password" />
      </a-form-item>
    </a-form>
    <a-button type="primary" block @click="onSubmit" :loading="loading"
      >登录</a-button
    >
  </div>
</template>

<script lang="ts">
import { inject, reactive, ref } from "vue";
import { useForm } from "@ant-design-vue/use";
import { IR, IGlobalProperties } from "@/model/common";
import Cookies from "js-cookie";

export default {
  name: "UserLogin",
  setup() {
    const { post, message, router } = inject<IGlobalProperties>(
      "globalProperties",
      {} as never
    );

    const loading = ref(false);

    const modelRef = reactive({
      username: "",
      password: ""
    });

    const rulesRef = reactive({
      username: [
        {
          required: true,
          message: "用户名不能为空"
        }
      ],
      password: [{ required: true, message: "密码不能为空" }]
    });

    const { validate, validateInfos } = useForm(modelRef, rulesRef);

    const login = async () => {
      const res: IR<string> = await post("/system/user/login", modelRef);
      if (res.code !== 200) {
        message.error(res.msg);
        loading.value = false;
        return;
      }
      Cookies.set("accessToken", res.data);
      router.push({
        name: "index"
      });
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      validate()
        .then(() => {
          login();
        })
        .catch(e => {
          console.log(e);
        });
    };

    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      loading,
      validateInfos,
      modelRef,
      onSubmit
    };
  }
};
</script>

<style></style>
