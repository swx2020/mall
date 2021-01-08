module.exports = {
    configureWebpack: {
      resolve: {
            alias: {
            // 项目中已经自动将 ‘src’ 设置了别名 ‘@’
          assets: "@/assets",
          common: "@/common",
          components: "@/components",
          network: "@/network",
          views: "@/views"
        }
      }
    }
  };