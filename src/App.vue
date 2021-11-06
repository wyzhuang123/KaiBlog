<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="scale-slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- 返回顶部 -->
    <el-backtop  :bottom="100" style="border-radius:2px;">
        <div
          style="{
            height: 100%;
            width: 100%;
            background-color: gray;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            border-radius:1px;
            color: white;
          }"
        >
        <i class="el-icon-top"></i>
        </div>
    </el-backtop>

  </div>
</template>

<style lang="less">
 *{
   margin: 0;
   padding: 0;
   color:white;
   background-color: rgb(0, 0, 0);  
 }
  body::-webkit-scrollbar {
    display: none;
}
 /deep/ .el-message{
    background-color: red;
 }
 .el-icon-top{
   background-color: gray;
 }
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  opacity: 0;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
  
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
