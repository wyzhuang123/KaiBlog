<template>
  <div class="article-comment-container">
    <div class="first-comment-message">
      <el-image 
      src="https://cdn.pixabay.com/photo/2020/11/25/03/04/russian-blue-cat-5774414__340.jpg"
      fit="cover"
      ></el-image>
      <div class="comment-name">123</div>
    </div>
    <div class="comment-content">
      <div class="first-comment">123</div>
      <div class="next-comment">
            <div class="comments">
                <div style="margin-left:10px;">
                  <el-image 
                    src="https://cdn.pixabay.com/photo/2020/11/25/03/04/russian-blue-cat-5774414__340.jpg"
                    fit="cover"
                    ></el-image>
                </div>
                <div class="commucation">
                      <span class="responser">吴彦祖</span>
                      <span>回复</span>
                      <span class="receiver">123</span>
                </div>
            </div>
                <div class="commucation-content">
                      <p>你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气你还差点帅气</p>
                </div> 
            <div class="comments-right">
                <span class="time">2021/11/11 18:22:02</span>
                <a>回复</a>
            </div>
    </div>      
  </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
  .article-comment-container{
    // box-shadow: 1px 0px 1px white;
    // border-top:.1px solid white;
    width: 1300px;
    background-color: pink !important;
    margin-top: 100px;
    display: flex;
    .first-comment-message{
      width: 200px;
      // background-color: red;
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-image{
          width: 80px;
          height: 80px;
          border-radius: 40px;
          max-width: 80px;
          max-height: 80px;
      }
      .comment-name{
        margin-top:2px;
      }
    }
    .comment-content{
      width: 1100px;
      // height: 300px;
      // background-color: blue;
      .first-comment{
        height: 80px;
        line-height: 80px;
        margin-left: 60px;
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