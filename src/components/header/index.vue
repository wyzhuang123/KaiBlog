<template>
  <div class="header-container">
    <div class="MyName">KaiKai</div>
    <!-- 开启router，index对应的便是路由 -->
    <el-menu class="el-menu-demo"  default-active="/" >
     <el-menu-item index="/" @click="$router.replace('/')">Home</el-menu-item>
     <!-- <el-menu-item index="/articles" @click="$router.replace('/articles')">Articles</el-menu-item> -->
     <el-menu-item index="/comment" @click="$router.replace('/comment')">Comment</el-menu-item>
     <el-menu-item index="/about" @click="$router.replace('/about')" >About</el-menu-item>
     <el-menu-item
       v-if="user"
       @click="isLoginOutShow = !isLoginOutShow"
       class="avatar"
     >
       
       <el-avatar 
       :size="size" 
       :src="user.avatar"
       fit="cover"
       >
       </el-avatar>
       <div class="loginOut" v-show="isLoginOutShow" >
         <div class="avatar-item" @click="LoginOutBtnClick">注销</div>
         <div class="avatar-item" @click="isLoadShow = !isLoadShow">更新头像</div>
       </div>
       </el-menu-item>
     <el-menu-item index="/Login" @click="$router.replace('/login')" v-else>Login</el-menu-item>
    </el-menu>

      <el-dialog
      title="更换头像"
      :visible.sync="isLoadShow"
      width="30%" 
      class="avatarDialog"
      >
      <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:3001/userAvatarChange"
            :show-file-list="false"
            :data="{imageUrl}"
            >
            <img v-if="imageUrl" :src="imageUrl" >
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      <span slot="footer" class="dialog-footer">
        <button @click="isLoadShow = !isLoadShow">取 消</button>
        <button >确 定</button>
      </span>
    </el-dialog>
     

  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name:'HeaderNav',
    data() {
      return {
        user: JSON.parse(this.$store.state.user),
        size:45,
        isLoginOutShow: false,
        imageUrl: "",
        isLoadShow: false,
        // uploadMessage: {
        //   name: this.user.name,
        //   imageUrl: this.imageUrl
        // }
      }
    },
    methods: {
      LoginOutBtnClick() {
            this.$store.commit('deleteUser');
            this.$router.go(0);
      }
    },
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
  .loginOut{
    // height: 50px;
    // width: 150px;
    padding-left: 4px;
    // font-size: 20px;
    // color: #7e8085;
    // box-shadow: 2px 2px 10px gray;
    position: absolute;
    right: 5px;
    text-align: center;
      .avatar-item{
          font-size: 18px;
          color: #7e8085;
          height: 35px;
          line-height: 35px;
          width: 100px;
          box-shadow: 2px 2px 8px gray;
          border-radius: 10px;
          margin-top:5px;
          transition: 0.5s;
      }
      .avatar-item:hover{
          color: white;
          box-shadow: 2px 2px 10px gray;
          transition: 0.5s;
          
      }
  }
  .loginOut:hover{
    color:white;
    transition: 0.5s;

  }
  .loginOut:left{
      display: inherit;
  }
  .avatar{
    position: relative;
  }
  .avatarDialog{
    background: rgba(0, 0, 0, 0.2);
      .dialog-footer > button{
          padding: 0 10px;
          margin: 0 5px;
      }
  }
 /deep/ .el-dialog__close:hover{
      color: white;
  }
</style>
<style >
    .uploadDrawer{
      background-color: rgba(0,0,0,0.2);
    }
</style>