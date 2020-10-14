/*
 * @Author: 汤波
 * @Date: 2020-10-14 16:31:14
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-14 16:42:01
 * @FilePath: \vue3.0-tung-base\src\utils\ant.ts
 */
import { App } from "vue";
import { Button, message } from "ant-design-vue";

const ant = {
  install(Vue: App) {
    Vue.component(Button.name, Button);

    Vue.config.globalProperties.$message = message;
  },
};

export default ant;
