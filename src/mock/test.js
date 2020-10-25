/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: 汤波
 * @Date: 2020-10-25 19:35:11
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 20:11:01
 * @FilePath: \vue3.0-tung-base\src\mock\test.js
 */
const Mock = require("mockjs");

export default {
  "post|/api/test/list": () => {
    const records = [];
    for (let i = 0; i < 10; i++) {
      records.push(
        Mock.mock({
          id: Mock.mock("@id"),
          name: Mock.mock("@cname"),
          "code|100-999": 1,
          gmtCreate: Mock.mock("@time"),
          gmtModified: Mock.mock("@time"),
          creator: "管理员",
          modifier: "管理员"
        })
      );
    }

    return {
      code: 200,
      message: "success",
      data: {
        total: 100,
        size: 10,
        current: 1,
        pages: 1,
        records: records
      }
    };
  }
};
