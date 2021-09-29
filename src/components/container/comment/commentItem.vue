<template>
  <div class="item-container">
    <div class="message">
      <span class="name">{{ comment.name }}</span> <span class="time">{{ comment.time }}</span>
    </div>
    <div class="content">{{comment.Content}}</div>
  </div>
</template>

<script>
  export default {
      props: {
        comment: {
          type: Object,
          required: true
        },
      },
  }
</script>

<style lang="less" scoped>
.item-container{
      width: 800px;
      box-sizing: border-box;
      // padding:0 20px;
      transition: 1s;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
        .message{
          align-self: start;
          padding-left: 25px;
          margin-bottom: 10px;
          .name{
            margin-right: 40px;
          }
        }
        .content{
          word-wrap: break-word;
          text-indent: 20px;
          width: 700px;
          margin-top:10px;
          margin-left: 10px;
        }
}
.item-container:hover{
  // box-shadow: -1px 0px 4px  white;
  border-left: 1px solid gray;
  transition: 1s;
}
</style>  