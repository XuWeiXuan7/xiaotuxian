const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些文件自动引入,使用绝对路径
      // 需要使用path.join来拼接完整路径
      patterns: [
        path.join(__dirname, './src/assets/style/variables.less'),
        path.join(__dirname, './src/assets/style/mixins.less')
      ]
    }
  }
})
