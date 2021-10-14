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
          <input type="text" v-model="name" placeholder="name..." style="margin-top:50px">
          <p v-if="attention.show" style="font-size: 10px;color: gray;"
          >{{ attention.message }}
          </p>
          <input 
          type="password" 
          v-model="password" 
          placeholder="password..."
          ref="passwordInput"
          >
          <input type="password" v-model="againPassword" placeholder="password again...">
          <p v-if="isSamePasswordShow" style="font-size: 10px;color: gray;"
          >
          密码输入不相等
          </p>
          <input type="email" v-model="email" placeholder="email...">
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
import {userLogin,hasUser,register} from '@/api/user.js'
import { debounce } from 'lodash'
  export default {
    data() {
      return {
        isLogin: true,
        attention: {
          show: false,
          message: ''
        },
        user:{
          name:'',
          password:''
        },
          name:'',
          password:'',
          email: '',
          againPassword: '',
          ispasswordShow: false
      }
    },
    methods: {
      async userLoginBtnClick() {
          const {data} = await userLogin(this.user);
          console.log(data);
          let User = {
            name: data.name,
            avatar: data.avatar,
            token: data.token
          }
          if(data) {
                // localStorage.setItem('user',JSON.stringify(this.user));
                this.$store.commit('setUser',JSON.stringify(User));
                this.$notify({
                  message: '登录成功！',
                  duration: 2000,
                  position: 'bottom-left',
                  showClose: false,
                  customClass: 'attention-box'
                });
                this.$router.replace('/');
                this.$router.go(0);
          }
        this.user.name = '';
        this.user.password = '';
      },

     async  userRegisterBtnClick() {
        const {data} = await register({
          name: this.name,
          password: this.password,
          email: this.email
        })
        // console.log(data);
        this.$notify({
                  message: '注册成功，请登录吧！',
                  duration: 1000,
                  position: 'top-left',
                  showClose: false
                });
        this.isLogin = true;
        this.user.name = data.name;
     },  
    },
    created () {
    },
    watch: {
      name:{ 
        handler: debounce(
        async function() {
          const {data} = await hasUser({
            name: this.name
          });
          // console.log(data);
          if(data === 1) {
              this.attention.show = true;
              this.attention.message = '您的用户名已存在，请重新输入！'
          } else {
              this.attention.show = false;
          }
            },2000)
      },
    },
    computed: {
      isSamePasswordShow() {
        if(this.againPassword){
            if(this.password != this.againPassword) {
                // this.ispasswordShow = true;
                return true;
            } else {
                // this.ispasswordShow = false;
              return false;
            }
        }
      }
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
<style>
   .attention-box{
    background-color: white;
    width: 200px;
    text-align: center;
    transition: 1s;
  }
  /* .el-message__icon{
    background-color: white;
  }
  .el-message__content{
    background-color: white;
  } */
  .el-notification__group{
    background-color: white;
  }
  .el-notification__content > p{
    background-color: white;
    color:black;
    text-align: center;
    font-size: 15px;
  }
</style>