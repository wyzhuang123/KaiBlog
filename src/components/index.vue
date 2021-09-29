<template>
  <div class="all-container">
    <header class="header">
      <header-nav></header-nav>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- <div class="footer">
    123
    </div> -->
  </div>
</template>

<script>
import HeaderNav from  '@/components/header/index.vue'
import ArticleList from './container/article/articleList.vue'
  export default {
    components: {
      HeaderNav,
      
        ArticleList,
    },
  }
</script>

<style lang="less" scoped>
.all-container{
}
.header{
    height: 40px;
}
.container{
  display: flex;
  justify-content: center;
}
.footer{
  height: 110px;
  // width: 100%;
  box-shadow: rgb(240 240 240 / 50%) 0px 0px 5px inset !important;
  border-top:1px solid rgb(160, 160, 160,.1);
  margin-top: 40px;
  // background-color: red;
}
</style>