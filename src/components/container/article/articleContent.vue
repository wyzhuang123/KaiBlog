<template>
  <div class="article-content">
    <div class="title">{{ article.title }}</div>
    <div class="message">
      <span>{{ article.Type }}</span>
      <span>{{ article.time }}</span>
    </div>
    <div class="content">
      <div class="article-image">
        <el-image :src="article.Image" fit="cover"></el-image>
      </div>
      <mavon-editor 
        v-model="article.Content" 
        default_open="preview" 
        defaultOpen= "preview"  
        :toolbarsFlag="false" 
        :subfield="false"
        style="margin-top: 20px; width:1100px"
      >
      </mavon-editor>
    </div>
    <!-- 通过user判断 -->
    <div class="input-box">
      <div class="comment-input" v-if="isInputShow" @click="attentionLoginBtnClick">
        <el-link :underline="false" @click="$router.replace('/login')">COMMENT</el-link>
      </div>
      <div v-else class="comment-box" style="border-radius: 30px">
        <p style="font-size:30px ;margin-bottom:15px; padding: 10px 0;">评论</p>
        <el-input type="textarea" style="background:gray; border-radius: 30px"  v-model="comment"/>
        <div class="btns-box">
          <button @click="comment = '' ">reset</button>
          <button @click="submitCommentBtnClick">submit</button>
        </div>
      </div>
    </div>

    <!-- 评论模块 -->
    <div class="comment" style="margin-bottom: 40px">
        <article-comment v-for="comment in articlecomments" :key="comment._id" :comment="comment"></article-comment>
    </div>
  </div>
</template>

<script>
import { getArticleContent, addArticleComment, getArticleComment } from '@/api/article.js'
import 'github-markdown-css'
import dayjs from 'dayjs'
import ArticleComment from './articleComment'
  export default {
  components: { ArticleComment },
    data() {
      return {
        article: {},
        isInputShow: true,
        user: JSON.parse(this.$store.state.user),
        comment: '',
        articlecomments:[]
      }
    },
    methods: {
      async  loadArticle() {
          const {data} = await getArticleContent(this.articleId);
          this.article = data;
        },
      async loadArticleComment() {
          const {data} = await getArticleComment(this.articleId);
          // console.log(data);
          this.articlecomments = data;
      },
      loadCommentInput() {
          if(this.user) {
            this.isInputShow = false;
          } else {
            this.isInputShow = true;
          }
      },
      attentionLoginBtnClick() {
       this.$notify({
           message: '请先登录',
           customClass:'attention-box',
           position: 'bottom-left',
           duration:2000,
           showClose: false
       });
      },
      async submitCommentBtnClick() {
        try {
          const {data} = await addArticleComment({
            articleId: this.articleId,
            comment: this.comment,
            user_id: this.user._id,
            name: this.user.name,
            avatar: this.user.avatar
          }) 
          console.log(data);
        } catch (error) {
          console.log(error);
        }
          // console.log(data);
           this.$notify({
              message: '评论成功！',
              customClass: 'attention-box',
              position: 'bottom-left',
              duration: 2000,
              showClose: false
            });
          this.$router.go(0);
      }
    },
    created () {
      this.loadArticle();
      this.loadCommentInput();
      this.loadArticleComment();
    },
    props: {
      articleId: {
        type: String,
        required: true 
      },
    },
  }
</script>

<style lang="less" scoped>
//  /deep/ .attention-box{
//     background-color: unset !important;
//   }
  .article-content {
    margin-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1300px;
            .articles-content {
                word-wrap: break-word;
                overflow: hidden;
            }

            .article-image{
                display: flex;
                justify-content: center;
                // width: 950px;
                .el-image{
                      width: 750px;
                      height: 500px;
                }
            }
            
            .title{
              font-size: 30px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              font-weight: 700;
              margin-bottom: 10px;
            }
            .message{
              margin-bottom: 20px;
              span{
                margin-right:10px;
              }
            }
            .articles-content{
              margin-top: 20px;
              text-indent: 32px;
              line-height: 30px;
            }
        }
      /deep/ .v-show-content{
          background-color: black !important;
          pre{
            background-color: gray;
          }
          div{
            background-color: gray;
          }
          span{
            background-color: gray;
            color: #292b2c;
            font-size: 15px;
          }
        }
  .input-box{
    transition: 1s;
      .comment-input{
          width: 520px;
          height: 80px;
          border-radius: 20px;
          line-height: 69px;
          text-align: center;
          transition: 1s;
          margin-top: 20px;
          /deep/  .el-link--inner{
              font-size: 70px;
              transition: 1s;
            }
  }
    .comment-input:hover{
        background-color: gray;
        box-shadow: 1px 1px 5px snow;
        transition: 1s;
        /deep/.el-link--inner{
                background-color: gray !important;
                transition: 1s;
            }
    }
   
 /deep/ .comment-box{
    width: 1050px;
           .el-textarea__inner{
          width: 100%;
          height: 150px !important;
          background: gray;
          outline: unset;
          color:white;
          font-size: 20px;
          resize: none;
          border:unset;
          }
        .el-textarea__inner:focus{
          border:white;
        }
        .el-textarea__inner:active{
          border:white;
        }
    }
    .btns-box{
      float: right;
      overflow: hidden;
        button{
          margin: 20px 10px;
          width: 80px;
          height: 30px;
          background-color: gray;
          border-radius: 15px;
          border:unset;
          transition: .5s;
        }
        button:hover{
          box-shadow: 1px 1px 10px white;
          transition: .5s;
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