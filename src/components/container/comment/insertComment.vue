<template>
  <div class="addcomment-container" >
     <h3 style="text-align: center ;font-size:40px; margin-bottom:20px">Add a Comment!</h3> 
     <div class="insertcomment" v-if="isInsertCommentShow">
      <input type="textarea" v-model="comment">
      <div class="btns-box" v-if="isBtnShow">      
        <button class="comment-btn" @click="insertComment">submit</button>
        <button class="comment-btn" @click="cleanConrtent">reset</button>
      </div>
     </div>
     <div class="register-box" v-else>
      <div class="register-command" @click="$router.replace('/login')">
        PLEASE LOGIN!
      </div>
     </div>
  </div>
</template>

<script>
import {saveComment} from '@/api/comment.js'
  export default {
    data() {
      return {
        comment:'',
        user: JSON.parse(this.$store.state.user)
      }
    },
    methods: {
     async insertComment() {
           const {data} = await saveComment({
             name: this.user.name,
             Content: this.comment
           });
           this.$router.go(0)
      },
      cleanConrtent() {
        this.comment = '';
        console.log(this.user.name);
      }
    },
    created () {
      // if(!this.user) {
      //     this.isLogin = !this.isLogin;
      // }
    },
    computed: {
      isBtnShow() {
        if(this.comment === '') {
          return false;
        }  else {
          return true;
        }
      },
      isInsertCommentShow() {
        if(!this.user) {
          return  false;
        } else {
          return true;
        }
      },   
    },
  }
</script>

<style lang="less" scoped>
  .addcomment-container{
  // background-color: gray !important;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  .insertcomment{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    input{
      border: unset !important;
      width: 100%;
      background-color: rgba(235, 229, 229, 0.4);
      outline: none;
      resize: none;
      box-shadow:  3px 0 10px white;
      border:1px solid rgb(221, 216, 216);
      transition: 1s;
      border-radius: 20px;
      padding:0 20px;
      box-sizing: border-box;
      font-size: 25px;
      max-height: auto;
      word-wrap: break-word;
      margin-bottom: 20px;
      }
    input:hover{
      box-shadow:  5px 0 15px white;
      transition: 1s;
    }
    .comment-btn{
      background-color: rgba(235, 229, 229, 0.4);
      border-radius: 20px;
      height: 40px;
      width: 120px;
      outline: none;
      box-shadow:  1px 0 5px white;
      transition: 1s;
      margin: 0 35px;
    }
    .comment-btn:hover{
      box-shadow:  1px 0 15px white;
      transition: 1s;
    }
        
  }
  .register-command{
    background-color: rgba(159, 158, 158,.6);
    width: 200px;
    height: 50px;
    margin-bottom: 20px;
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    box-shadow: 1px 0 5px gray;
    transition: 1s;
  }
  .register-command:hover{
    background-color: rgba(159, 158, 158,.8);
    transition: 1s;
    box-shadow: 2px 0 15px gray;
  }
}
.btns-box{
  transition: 1s;
  box-sizing: border-box;
}
.register-box{
  display: flex;
  justify-content: center;
}
</style>