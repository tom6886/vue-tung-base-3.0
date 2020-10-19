/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: 汤波
 * @Date: 2020-10-14 09:38:56
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-19 16:05:48
 * @FilePath: \vue3.0-tung-base\vue.config.js
 */
const TerserPlugin = require("terser-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  // 基本路径
  // publicPath: "/web/",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // chainWebpack: config => {
  //   config.module
  //     .rule("view-design")
  //     .test(/view-design.src.*?js$/)
  //     .use("babel")
  //     .loader("babel-loader")
  //     .end();
  // },
  // configureWebpack: () => {
  // },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
    // 启用 CSS modules for all css / pre-processor files.
    // requireModuleExtension: false
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置
      config.plugins.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true //生产环境自动删除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      );

      // gzip压缩
      const productionGzipExtensions = ["html", "js", "css"];
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 是否删除原文件
        })
      );
    }
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 10000,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:10010/", // target表示代理的服务器url
        pathRewrite: {
          // pathRewrite表示路径重写，key表示一个正则，value表示别名
          "^/api": "/" // 即用 '/api'表示'http://localhost:3000/api'
        }
      }
    },
    disableHostCheck: true
  }
};
