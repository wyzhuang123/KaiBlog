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
      style="margin-top: 20px"
      >
      </mavon-editor>
    </div>
    <!-- 评论模块 -->
    <div class="comment">
        <article-comment></article-comment>
    </div>
  </div>
</template>

<script>
import { getArticleContent } from '@/api/article.js'
import 'github-markdown-css'
import dayjs from 'dayjs'
import ArticleComment from './articleComment'
  export default {
  components: { ArticleComment },
    data() {
      return {
        article: {},
      }
    },
    methods: {
     async  loadArticle() {
        const {data} = await getArticleContent(this.articleId);
        this.article = data;

      }
    },
    created () {
      this.loadArticle();
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
  .article-content {
    // background-color: gray;
    margin-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1300px;
    // border: 1px solid red;
    // box-shadow: 1px -1px 1px rgba(238, 220, 220, 0.3);
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
</style>