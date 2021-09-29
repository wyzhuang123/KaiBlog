<template>
  <div class="all-container">
      <manage-index></manage-index>
      <router-view></router-view>
  </div>
</template>
<script>
import ManageIndex from './container/index'
  export default {
    components: {
      ManageIndex
    },
  }
</script>

<style lang="less" scoped>


  .all-container{

  }
</style>