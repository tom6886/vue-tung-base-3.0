/*
 * @Author: 汤波
 * @Date: 2020-10-25 19:35:56
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 19:43:27
 * @FilePath: \vue3.0-tung-base\src\mock\login.js
 */
export default {
  "post|/api/system/user/login": option => {
    return {
      code: 200,
      message: "success",
      data: null
    };
  }
};
