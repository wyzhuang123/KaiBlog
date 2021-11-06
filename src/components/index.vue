<template>
  <transition>
    <div class="all-container">
      <header class="header">
        <header-nav></header-nav>
      </header>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </transition>

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
       if(this.user != null) {
         const {data} = await checkUserLogin(this.user);
         console.log(data);
          if(data.status === 0) {  // 等于0的时候表示token过期, 通过commit删除掉localStroge的用户数据
              this.$store.commit('deleteUser');
              this.$router.go(0);
          }
       } 
      },
      // userJSONP() {
      //     this.$http.jsonp('http://localhost:3001/students', {
      //       params: {},
      //       jsonp: 'handleCallback'
      //     }).then((res) => {  
      //         console.log(res);
      //     })
      //  }
    },
    created () {
          this.checkUserLogin();
          // this.userJSONP();
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