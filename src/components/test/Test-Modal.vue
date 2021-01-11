<!--
 * @Author: 汤波
 * @Date: 2020-10-25 13:35:30
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-28 16:58:26
 * @FilePath: \vue3.0-tung-base\src\components\test\Test-Modal.vue
-->
<template>
  <a-modal title="编辑" v-model:visible="visible" @cancel="resetFields">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="名称" v-bind="validateInfos.name">
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="编号" v-bind="validateInfos.code">
        <a-input v-model:value="modelRef.code" :readonly="disableCode" />
      </a-form-item>
    </a-form>
    <template v-slot:footer>
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click="onSubmit"
      >
        确认
      </a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
import { computed, inject, reactive, SetupContext, toRefs } from "vue";
import { useForm } from "@ant-design-vue/use";
import Test from "@/model/test";
import { IGlobalProperties } from "@/model/common";

export default {
  name: "TestModal",
  emits: ["on-submit"],
  setup(props: any, { emit }: SetupContext) {
    const { post, message } = inject<IGlobalProperties>(
      "globalProperties",
      {} as never
    );

    const state = reactive({
      visible: false,
      loading: false
    });

    const modelRef = reactive({
      id: "",
      code: "",
      name: ""
    });

    const rulesRef = reactive({
      code: [{ required: true, message: "编号不能为空", trigger: "blur" }],
      name: [{ required: true, message: "名称不能为空", trigger: "blur" }]
    });

    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef
    );

    const disableCode = computed(() => {
      return modelRef.id !== "" && modelRef.id !== undefined;
    });

    const showModal = (value: Test) => {
      state.visible = true;
      if (value) {
        modelRef.id = value.id;
        modelRef.code = value.code;
        modelRef.name = value.name;
      }
    };

    const submit = async () => {
      state.loading = true;
      await post("/test/save", modelRef);
      state.loading = false;
      message.success("保存成功");
      emit("on-submit");
      resetFields();
      state.visible = false;
    };

    const onSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      validate()
        .then(() => {
          submit();
        })
        .catch(e => {
          console.log(e);
        });
    };

    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      ...toRefs(state),
      validateInfos,
      modelRef,
      disableCode,
      resetFields,
      showModal,
      onSubmit
    };
  }
};
</script>
