<template>
  <div class="container">
    <div class="login-register-container">
      <div class="login" v-if="isLogin">
          <h3 style="margin-top:25px;font-size: 30px">Login in</h3>
          <input type="text" v-model="user.name" placeholder="name..." style="margin-top:50px">
          <input type="password" v-model="user.password" placeholder="password...">
          <div class="btns">
            <button @click="userLoginBtnClick">submit</button>
            <button @click="isLogin=!isLogin">register</button>
          </div>
      </div>
      <div class="register" v-else>
          <h3 style="margin-top:25px;font-size: 30px background:white">Come on!</h3>
          <input type="text" v-model="newUser.name" placeholder="name..." style="margin-top:50px">
          <input type="password" v-model="newUser.password" placeholder="password...">
          <input type="email" v-model="newUser.email" placeholder="email...">
          <div class="btns">
            <button @click="userRegisterBtnClick">submit</button>
            <button @click="isLogin=!isLogin">login</button>
          </div>
      </div>
    </div>
    <!-- <div></div> -->
  </div>
</template>

<script>
import {userLogin} from '@/api/user.js'
  export default {
    data() {
      return {
        isLogin: true,
        user:{
          name:'',
          password:''
        },
        newUser:{
          name:'',
          password:'',
          email: ''
        }
      }
    },
    methods: {
      async userLoginBtnClick() {
          const {data} = await userLogin(this.user);
          console.log(data);
          if(data) {
                // localStorage.setItem('user',JSON.stringify(this.user));
                this.$store.commit('setUser',JSON.stringify(data));
                this.$notify({
                  message: '登录成功！',
                  duration: 1000,
                  position: 'top-left',
                  showClose: false
                });
                this.$router.replace('/');
          }
        this.user.name = '';
        this.user.password = '';
      },

     async  userRegisterBtnClick() {
      
      }
    },
    created () {
    },
  }
</script>

<style lang="less" scoped>
.container{
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -200px;
  margin-left: -400px;
    .login-register-container{
        // background-color: gray;
        height: 400px;
        width: 800px;
        display: flex;
        .login{
          height: 100%;
          width: 400px;
          transition: 1.5s;
          box-shadow: 10px 0 15px gray;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
                input{
                  width: 60%;
                  height: 30px;
                  line-height: 30px;
                  // border: unset;
                  outline: none;
                  margin: 10px 0;
                }
                .btns{
                  margin-top: 30px;
                  button{
                      height: 30px;
                      width: 80px;
                      border-radius: 40px;
                      margin-right: 25px;
                      margin-left: 25px;
                      transition: 1.5s;
                  } 
                }
        }
        .register{
          height: 100%;
          width: 400px;
          // background-color: #fff;
          transition: 1.5s;
          margin: 0 auto;
          box-shadow: 0 10px 15px gray;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

              input{
                  width: 60%;
                  height: 30px;
                  line-height: 30px;
                  // border: unset;
                  outline: none;
                  margin: 10px 0;
              }
                 .btns{
                  margin-top: 30px;
                  button{
                      height: 30px;
                      width: 80px;
                      border-radius: 40px;
                      margin-right: 25px;
                      margin-left: 25px;
                  } 
                }
        }
        
    }

}
</style>