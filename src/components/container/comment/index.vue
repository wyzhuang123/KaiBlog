<template>
  <div>
    <div class="comment-list">
        <comment-item v-for="item in comments" :key="item._id" :comment="item"></comment-item>
    </div>
     <el-divider></el-divider>
    <insert-comment></insert-comment>
  </div>
</template>

<script>
import InsertComment from './insertComment.vue'
import commentItem from './commentItem'
import {allComments} from '@/api/comment.js'
  export default {
    data() {
      return {
        comments: []
      }
    },
  components: { commentItem,InsertComment },
  created () {
    this.loadComments();
  },
  methods: {
    async  loadComments() {
        const {data} = await allComments();
        this.comments = data;
    }
  },
  }
</script>

<style lang="less" scoped>
.comment-list{

}
.el-divider{
  margin-top:50px;
}
</style>