/*
 * @Author: 汤波
 * @Date: 2020-10-14 08:01:57
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-15 18:29:33
 * @FilePath: \vue3.0-tung-base\babel.config.js
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
};
