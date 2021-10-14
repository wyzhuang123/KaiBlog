<template>
  <div class="container">
    <div class="article-comment-container">
      <div class="first-comment-message">
      <el-image 
      :src="comment.avatar"
      fit="cover"
      ></el-image>
      <div class="comment-name"> {{ comment.name }}</div>
      </div>
      <div class="comment-content">
        <div class="first-comment">{{ comment.comment }}</div>
        <div class="comment-time">{{ comment.time|relativeTime }}</div> 
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
  export default {
    data() {
      return {
        // time:dayjs(this.comment.time).format('MMM D, YYYY h:mm A') 
      }
    },
      props: {
        comment: {
          type: Object,
          // default: 
          required: true
        },
      },
  }
</script>

<style lang="less" scoped>
  .article-comment-container{
    width: 1200px;
    margin-top: 60px;
    display: flex;
    .first-comment-message{
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-image{
          width: 60px;
          height: 60px;
          border-radius: 30px;
          max-width: 60px;
          max-height: 60px;
      }
      .comment-name{
        margin-top:10px;
      }
    }
    .comment-content{
      width: 1100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 20px;
      box-sizing: border-box;
      .first-comment{
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
      }
      .comment-time{
        align-self: flex-end;
        justify-self: flex-end;
      }
      .next-comment{
        width: 900px;
            .comments{
                  display: flex;
                  .commucation{
                    margin-left: 10px;
                  }
                  span{
                    line-height: 40px;
                  }
                  margin-top:15px;
                    .el-image{
                      width: 40px;
                      height: 40px;
                      border-radius: 20px;
                    }
                    .responser{
                      margin-left: 4px;
                      margin-right: 4px;
                    }
                    .receiver{
                      margin-left: 6px;
                    }
                    p{
                      line-height: 40px;
                    }
            }
            .commucation-content{
                  margin-left: 60px;
                  margin-bottom: 20px;
                  margin-top: 10px;
            }
            .comments-right{
              float: right;
                          .time{
                            margin-right: 15px;
                          }
                          a{
                            color:#303133;
                            transition: .5s;
                          }
                          a:hover{
                                color:white;
                                transition: 1s;
                          }
                    }
      }
    }
  }
        .el-image:hover{
          opacity: .8;
      }
</style>