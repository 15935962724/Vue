// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false  //关闭语法检查
// })


module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
     
    },
    
  },
  lintOnSave :false, //关闭语法检查
  //开启代理服务器（方式一）
    // devServer: {
    //   proxy: 'http://localhost:5000'
    // }
  // 开启代理服务器(方式二)
    devServer: {
      proxy: {
        '/atguigu': {  //请求前缀
          target: 'http://localhost:5000',//代理目标的基础路径
          pathRewrite:{'^/atguigu':''},//匹配正则表达式
          ws: true,       //用于支持   websocket
          changeOrigin: true   //用于控制请求头中的host值      
        },
        '/demo': {  //请求前缀
          target: 'http://localhost:5001',//代理目标的基础路径
          pathRewrite:{'^/demo':''},//匹配正则表达式
          ws: true,       //用于支持   websocket
          changeOrigin: true   //用于控制请求头中的host值      
        },
      }
    }
}