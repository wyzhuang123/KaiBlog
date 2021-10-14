<template>
  <div class="container">
     <div class="edit-container">
       <div class="user-avatar">
         <el-image class="avatar" :src="user.avatar" fit="cover" @click="drawer.isDrawerShow =!drawer.isDrawerShow"></el-image>
         <span class="name">{{ user.name }}</span>
        <el-drawer
          :visible.sync="drawer.isDrawerShow"
          :direction="drawer.direction"
          :custom-class="drawer.class"
          :modal="drawer.modal"
          :modal-append-to-body="appendToBody"
          z-index="-1"
        >
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="showlist"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-drawer>
        <div>123</div>
        
       </div>
       <!-- <div class="user-profile">2</div>
       <div class="logout">
         <button>3</button>
       </div> -->

     </div>

  </div>
</template>

<script>
  export default {
      data() {
        return {
          size: 20,
          user: JSON.parse(this.$store.state.user),
          drawer: {
              isDrawerShow: false,
              direction: 'btt',
              class: 'drawer-box',
              modal: true
          },
          imageUrl:'',
          showlist: false,
          appendToBody: true
        }
      },
      methods: {
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          }
      },
  }
</script>

<style lang="less" scoped>
  .container{
    margin-top: 20px;
    .edit-container{
      width: 1000px;
      height: 600px;
      // background-color: gray;
      display: flex;
      flex-direction: column;
      justify-content: start;
       .user-avatar{
         width: 100%;
         height: 500px;
         display: flex;
         justify-content: start;
         align-items: center;
          .avatar{
              width: 60px;
              height: 60px;
              margin: 0px 10px;
              margin-left: 20px;
              border-radius: 30px;
          }
          .avatar:hover{
              opacity: .6;
          }
          .name{
            margin:  0px 10px;
            height: 40px;
            line-height: 40px;
            // background-color: gray;
            font-size: 25px;
            margin-left: 50px;
          }
      }
    }
    .edit-container > div{
      margin-bottom: 20px;
      box-shadow: 0px 1px 2px white, 1px 0px 2px white;
      transition: 1.5s;
    }
    .edit-container > div:hover {
      box-shadow: 0px 1px 5px white, 1px 0px 5px white;
      transition: 1.5s;
    }
  }
</style>
<style>
    .drawer-box{
      width: 400px !important;
      height: 400px !important;
      position: absolute;
      margin-bottom: 100px;
      background-color: gray;
    }
    .el-drawer.btt{
          width: 100%;
          left: 0;
          right: 0;
          top: 0;
          left: 0;
          margin: auto;
    }
    .el-drawer__header{
      display: none;
    }
</style>