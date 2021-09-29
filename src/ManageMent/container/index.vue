<template>
  <div class="header-container">
    <div class="MyName">KaiKai</div>
    <!-- 开启router，index对应的便是路由 -->
    <el-menu class="el-menu-demo"  default-active="/index" >
     <el-menu-item index="/index" @click="$router.replace('/')">文章管理</el-menu-item>
     <el-menu-item index="/article" @click="$router.replace('/')">文章管理</el-menu-item>
     <el-menu-item index="/about" @click="$router.replace('/')">123</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:'HeaderNav'
  }
</script>

<style lang="less" scoped>
.header-container{
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  font-size: 20px;
  .el-menu-demo{
    display: flex;
   
  }
}
  .el-menu-demo > el-menu-item{
    color:#7e8085 !important;
    margin-right: 60px;
  }
  .el-menu-demo > el-menu-item:hover{
    background-color: black;
  }
  .el-menu-item.is-active {
    color: white;
  }
  .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    color:white;
    background-color: black;
  }
  .el-menu-item{
     color:#7e8085 ;
  }
  .MyName{
    color:white;
    margin-left: 40px;
    line-height: 40px;
    height: 40px;
  }
  .MyName:hover{
    box-shadow: 0 1px rgba( 244, 244, 244, .8);
    transition: .5s;
  }
</style>