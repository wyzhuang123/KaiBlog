<template>
  <div class="article-item-container" @click="articleContentBtnClick">
    <div class="articleImage">
      <el-image :src="article.Image" fit="cover" class="image" ></el-image>
    </div>
    <div class="articleContent">
      <div class="title">{{ article.title}}</div>
      <div class="somecontent">{{ article.Content}}</div>
      <div class="category">{{ article.Type }}</div>
      <div class="date">{{ article.time }}</div>
    </div>
  </div>
  
</template>

<script>
  import dayjs from 'dayjs'
 export default {
    data() {
      return {
        
      }
    },
    methods: {
      articleContentBtnClick() {
          this.$router.push(`/article/${this.article._id}`)
      }
    },
      props: {
        article: {
          type: Object,
          required: true 
        },
      },
  }
</script>

<style lang="less" scoped>
.article-item-container{
  display: flex;
  height: 200px;
  width: 1300px;
  // background-color: red;
  transition: 1s;
  box-sizing: border-box;
  margin-top: 45px;
  align-items: center;
  .articleContent{
    height: 100%;
    width: 950px;
    margin-left: 40px;
    .title{
      font-size: 30px;
      margin-bottom: 5px;
    }
    .somecontent{
        margin-top: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .category{
        margin-top: 20px;
    }
    .date{
        margin-top: 30px;
    }
  }
  .articleImage{
    height: 200px;
    width: 350px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    
  }
 .image{
    height: 100%;
    width: 100%;
    max-width: 300px;
  }
}
.article-item-container:hover{
  box-shadow: 
  0px 1px  rgba(244, 244, 244, .8),
  0px -1px  rgba(244, 244, 244, .8),
  1px 0px  rgba(244, 244, 244, .8)
  ;
  transition: 1s;
}
</style>