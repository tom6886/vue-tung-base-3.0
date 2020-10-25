/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: 汤波
 * @Date: 2020-10-25 19:31:15
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 19:31:46
 * @FilePath: \vue3.0-tung-base\src\mock\index.js
 */
// 首先引入Mock
const Mock = require("mockjs");

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: "200-600"
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context(".", true, /\.js$/);
files.keys().forEach(key => {
  if (key === "./index.js") return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach(item => {
  for (const [path, target] of Object.entries(item)) {
    const protocol = path.split("|");
    Mock.mock(new RegExp("^" + protocol[1]), protocol[0], target);
  }
});
