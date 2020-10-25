/*
 * @Author: 汤波
 * @Date: 2020-10-14 16:31:14
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 18:21:04
 * @FilePath: \web\src\utils\ant.ts
 */
import { App } from "vue";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Menu,
  Modal,
  Row,
  Table
} from "ant-design-vue";

const ant = {
  install(Vue: App) {
    Vue.component(Button.name, Button);
    Vue.component(Col.name, Col);
    Vue.component(Divider.name, Divider);
    Vue.component(Form.name, Form);
    Vue.component(Form.Item.name, Form.Item);
    Vue.component(Input.name, Input);
    Vue.component(Input.Search.name, Input.Search);
    Vue.component(Layout.name, Layout);
    Vue.component(Layout.Sider.name, Layout.Sider);
    Vue.component(Layout.Header.name, Layout.Header);
    Vue.component(Layout.Content.name, Layout.Content);
    Vue.component(Menu.name, Menu);
    Vue.component(Menu.Item.name, Menu.Item);
    Vue.component(Modal.name, Modal);
    Vue.component(Row.name, Row);
    Vue.component(Table.name, Table);
  }
};

export default ant;
