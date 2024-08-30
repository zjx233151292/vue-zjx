<script setup></script>

<template>
  <!-- 一级路由出口 -->
  <div class="router-view">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.router-view {
  position: relative;
  width: 100%;
  height: 880px;
  background-image: url('./assets/app/img/3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
