<!--
 * @Author: 汤波
 * @Date: 2020-10-20 09:52:48
 * @Description: 
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 20:24:25
 * @FilePath: \vue3.0-tung-base\src\components\test\Test-Table.vue
-->
<template>
  <a-row :gutter="10">
    <a-col :span="6">
      <a-input v-model:value="name" addon-before="姓名" @pressEnter="fetch" />
    </a-col>
    <a-col :span="6">
      <a-input v-model:value="code" addon-before="编号" @pressEnter="fetch" />
    </a-col>
    <a-col :span="6" class="col-query">
      <a-button type="primary" @click="fetch">搜索</a-button>
      <a-button type="primary" @click="edit">新增</a-button>
    </a-col>
  </a-row>
  <a-row>
    <a-table
      :columns="columns"
      :row-key="record => record.id"
      :data-source="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template v-slot:action="{ record }">
        <a-button type="primary" @click="edit(record)">编辑</a-button>
        <a-button type="primary" @click="onRemove(record)">删除</a-button>
      </template>
    </a-table>
  </a-row>
  <TestModal ref="editModal" @on-submit="fetch" />
</template>

<script lang="ts">
import { createVNode, inject, reactive, ref, toRefs } from "vue";
import { Modal } from "ant-design-vue";
import {
  IR,
  IGlobalProperties,
  IPage,
  IModal,
  IPagination
} from "@/model/common";
import Test, { TestRefs } from "@/model/test";
import TestModal from "./Test-Modal.vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "编号",
    dataIndex: "code",
    key: "code"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator"
  },
  {
    title: "创建时间",
    dataIndex: "gmtCreate",
    key: "gmtCreate"
  },
  {
    title: "最近修改人",
    dataIndex: "modifier",
    key: "modifier"
  },
  {
    title: "最近修改时间",
    dataIndex: "gmtModified",
    key: "gmtModified"
  },
  {
    title: "操作",
    key: "action",
    slots: { customRender: "action" }
  }
];

export default {
  name: "TestTable",
  components: {
    TestModal
  },
  setup() {
    const { post, message } = inject<IGlobalProperties>(
      "globalProperties",
      {} as never
    );
    const editModal = ref<IModal<Test>>();

    const state = reactive<TestRefs>({
      name: "",
      code: "",
      data: [],
      pagination: {
        pageSize: 10,
        current: 1
      },
      loading: false
    });

    const fetch = async () => {
      state.loading = true;
      const res: IR<IPage<Test>> = await post("/test/list", {
        name: state.name,
        code: state.code,
        page: state.pagination.current,
        limit: state.pagination.pageSize
      });
      state.loading = false;
      state.data = res.data.records;
      state.pagination.current = res.data.current;
      state.pagination.pageSize = res.data.size;
      state.pagination.total = res.data.total;
    };

    const handleTableChange = (pagination: IPagination) => {
      state.pagination.current = pagination.current;
      state.pagination.pageSize = pagination.pageSize;
      state.pagination.total = pagination.total;
      fetch();
    };

    const edit = (record: Test) => {
      editModal.value?.showModal(record);
    };

    const remove = async (id: string) => {
      await post("/test/delete/" + id, {});
      message.success("删除成功");
      fetch();
    };

    const onRemove = (record: Test) => {
      Modal.confirm({
        title: "确认删除本条数据?",
        icon: createVNode(ExclamationCircleOutlined),
        content: "数据删除后将无法恢复",
        okText: "确认",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          remove(record.id);
        }
      });
    };

    fetch();

    return {
      columns: columns,
      ...toRefs(state),
      fetch,
      handleTableChange,
      edit,
      editModal,
      onRemove
    };
  }
};
</script>
