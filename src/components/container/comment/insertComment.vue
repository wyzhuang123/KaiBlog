<template>
  <div class="addcomment-container">
     <h3>添加评论</h3> 
     <div class="insertcomment">
       <input type="text">
       <input type="text">
       <input type="text">
     </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
 /deep/ .addcomment-container{
  background-color: gray !important;
  width: 800px;
  
  .insertcomment{
   /deep/ input{
      border: unset !important;
    }
    input:hover{
      border-bottom:1px solid black
    }
  }
  
}
</style>