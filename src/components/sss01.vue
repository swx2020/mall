<template>
  <div id="app">
    <h2>11111</h2>
    <!-- 配置之后就可以直接使用别名，
      但是要注意
        img中src的路径前要加上 ~
          否则无法渲染出来  
     -->
    <img src="~assets/img/01.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'sss01'
}
</script>