<template>
  <div id="app">

    <!-- 使用组件 -->
    <sss01></sss01>
  </div>
</template>

<script>
// 要想在这里注册组件，一定要导入！！！！
// import sss01 from 'components/sss01.vue'
import sss01 from './components/sss01.vue'
    //  配置之后路径中就可以直接使用别名

export default {
  name: 'App',
  components: {
      sss01
  }
}
</script>

<style>
/* 导入 base.css文件，这里要注意：文件名一定要写全，后缀名也不能落下，例如：base.css写成base就会报错 */
@import './assets/css/base.css';
/* 此时编译时，从入口文件查找到App.vue，然后在App.vue中又查到base.css，最后在base.css中查找到normalize.css */

</style>
