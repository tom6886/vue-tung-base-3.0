/*
 * @Author: 汤波
 * @Date: 2020-10-14 16:31:14
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-19 15:46:58
 * @FilePath: \vue3.0-tung-base\src\utils\ant.ts
 */
import { App } from "vue";
import { Button, Form, Input, Modal } from "ant-design-vue";

const ant = {
  install(Vue: App) {
    Vue.component(Button.name, Button);
    Vue.component(Form.name, Form);
    Vue.component(Form.Item.name, Form.Item);
    Vue.component(Input.name, Input);
    Vue.component(Modal.name, Modal);
  }
};

export default ant;
