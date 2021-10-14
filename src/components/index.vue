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
  <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop> -->
  </div>
</template>

<script>
import HeaderNav from  '@/components/header/index.vue'
import ArticleList from './container/article/articleList.vue'
import {checkUserLogin} from '@/api/user.js'
  export default {
    data() {
      return {
        user: JSON.parse(this.$store.state.user)
      }
    },
    methods: {
     async checkUserLogin() {
       if(this.user) {
         const {data} = await checkUserLogin(this.user);
         console.log(data);
          if(data.status === 0) {  // 等于0的时候表示token过期, 通过commit删除掉localStroge的用户数据
              this.$store.commit('deleteUser');
              this.$router.go(0);
          }
       } 
      }
    },
    created () {
          this.checkUserLogin();
    },
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
    /deep/ .el-notification__content > p {
            color:black;
            background: white;
        }
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