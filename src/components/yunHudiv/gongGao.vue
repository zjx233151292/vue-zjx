<!-- 公告 -->
<script setup></script>

<template>
  <div class="GG">
    <div class="GGDiv">
      <svg class="icon GGIcom" aria-hidden="true">
        <use class="GGIcom" xlink:href="#icon-gonggao-copy"></use>
      </svg>
      <span class="GGText">Announcement</span>
    </div>
    <div class="GGText GGHY">欢迎来到我的博客</div>
  </div>
</template>

<style scoped>
.GG {
  width: 289px;
  height: 112px;
  background-color: rgb(24, 24, 24, 0.9);
  border-radius: 15px;
}
.GGDiv {
  margin-top: 22px;
  margin-left: 20px;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
}
.GGIcom {
  font-size: 30px;
}
.GGText {
  color: rgb(185, 185, 185);
  margin-left: 5px;
  font-size: 18px;
}
.GGHY {
  margin-left: 22px;
  margin-top: 10px;
  font-size: 17px;
}
</style>
