<template>
  <div class="list-container">
    <article-item 
      v-for="article in articles" 
      :key="article.id" 
      :article="article" 
      class="item"
      >
      </article-item>

  </div>
</template>

<script>
import articleItem from './articleItem.vue'
import {AllArticles} from '@/api/article.js'
  export default {
    data() {
      return {
        articles: []
      }
    },
    methods: {
      async  loadAllArticles() {
            const {data} = await AllArticles();
            // console.log(data);
            this.articles = data;
        }
      },
    created () {
      this.loadAllArticles();
    },
     components: { 
       articleItem 
    }
  }
</script>

<style lang="less" scoped>

</style>