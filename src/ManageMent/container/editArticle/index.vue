<template>
  <div class="mavonEditor">
    
      <mavon-editor :toolbars="markdownOption" v-model="handbook"
        toolbarsBackground="white" previewBackground="white" codeStyle="code-github"
        toolbarsFlag="true"
      />
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
      },
      handbook: "#### how to use mavonEditor in nuxt.js",
    };
  }
};
</script>

<style scoped lang="less">
.mavonEditor {
  width: 100%;
  height: 100%;
}
 /deep/   .content-input-wrapper{
  background-color: black !important;
}
/deep/  .v-show-content{
  background-color:black !important;
}
 /deep/ .v-note.show{
  color:black !important; 
  
  
}
/deep/ .v-show-content{
   h1,p{
      background-color: unset !important;
      color:white;
  }
  pre{
    color: black !important;
    background-color: gray;
  }
  code{
    background-color: gray;
  }
}
</style>

