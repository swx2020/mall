module.exports = {
  //先写一个configureWebpack 表示你准备配置webpageconfig
  configureWebpack: {
      //配置路径相关的时候用resolve 可以解决路径相关的问题
      resolve: {
            alias: {
            // 项目中已经自动将 ‘src’ 设置了别名 ‘@’
          assets: "@/assets",
          common: "@/common",
          components: "@/components",
          network: "@/network",
          views: "@/views"
          //router 一般情况下不用配置，因为一般只有在main.js中引用一次，如果有需要也可以在这里配置
                // 'router': '@/router'
        }
      }
    }
};
  
  // 修改后要注意需要重新 npm run serve
