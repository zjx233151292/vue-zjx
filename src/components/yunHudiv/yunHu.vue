<!-- 用户 -->
<script setup>
import { useYunHuStore, useWengZhangStore } from '@/stores'
// import { ref } from 'vue'

const yunH = useYunHuStore()
const yunHuXin = useYunHuStore().yunHuXinXi
const WengZhang = useWengZhangStore()
console.log(yunH)
</script>

<template>
  <div class="yunHu">
    <div class="yunHuDiv WZYS">
      <div>
        <el-avatar class="el toXiang" :size="110" :src="yunHuXin.imgurl" />
      </div>
      <!-- 认真摸鱼 -->
      <div class="RZMY">
        <el-icon><SwitchFilled /></el-icon>
        <span class="RZMYZT">认真摸鱼中</span>
      </div>
      <!-- 名字 -->
      <div class="NeiRonJuZhong name">{{ yunHuXin.name }}</div>
      <div class="NeiRonJuZhong boKe">博客</div>
      <!-- 文章 标签 类别 -->
      <div class="NeiRonJuZhong WBLJiHe">
        <div class="WBLJiHeBG">
          <p class="WBLT">Articles</p>
          <p class="WBLW">{{ WengZhang.wenZhanglest.length }}</p>
        </div>
        <div class="WBLJiHeBG">
          <p class="WBLT">Tags</p>
          <p class="WBLW">1</p>
        </div>
        <div class="WBLJiHeBG">
          <p class="WBLT">Categories</p>
          <p class="WBLW">0</p>
        </div>
      </div>
      <el-button class="WZYS el elButton">
        <svg class="icon gitHub" aria-hidden="true">
          <use xlink:href="#icon-github-fill"></use>
        </svg>
        前往小家...
      </el-button>
      <div class="NeiRonJuZhong Git">
        <svg class="icon gitHubB rotate-on-hover" aria-hidden="true">
          <use xlink:href="#icon-github-fill"></use>
        </svg>
        <svg class="icon YX rotate-on-hover" aria-hidden="true">
          <use xlink:href="#icon-youxiang"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yunHu {
  width: 290px;
  height: 400px;
  background-color: rgb(24, 24, 24, 0.9);
  border-radius: 25px;
  display: flex;
  justify-content: center;
}
/* 内容居中 */
.NeiRonJuZhong {
  display: flex;
  justify-content: center;
}
/* 文字颜色 */
.WZYS {
  color: rgb(189, 189, 189);
}
/* 组件内部宽度 */
.yunHuDiv {
  width: 241px;
}
/* el的居中 */
.el {
  position: relative;
  left: 26.9%;
}

/* 头像 */
.toXiang {
  margin-top: 20px;
  /* 动画 */
  /* breathe：这是动画名称，对应于 @keyframes 规则定义的动画序列。 */
  /* 3s：动画持续时间。 */
  /* ease-in-out 是一种常用的计时函数，用于控制动画的速度曲线。它决定了动画在不同时间段内的加速度和减速情况。 */
  /* linear：匀速变化。  ease：默认值，开始和结束时速度较慢。  ease-in：仅在开始时速度较慢。  ease-out：仅在结束时速度较慢。  ease-in-out：开始和结束时速度较慢，中间部分速度较快。  cubic-bezier(x1, y1, x2, y2)：自定义速度曲线。 */
  /* infinite：动画无限循环。 */
  animation: breathe 3s ease-in-out infinite;
}
/* 呼吸动画 */
@keyframes breathe {
  /* 动画开始时 (0%)：元素的阴影效果为 0 0 10px rgba(56, 192, 183, 0.5)。 */
  /* 动画进行到一半时 (50%)：元素的阴影效果为 0 0 20px rgba(56, 192, 183, 1) */
  /* 动画结束时 (100%)：元素的阴影效果为 0 0 10px rgba(56, 192, 183, 0.5) */
  0%,
  100% {
    /* 0 0 表示水平偏移和垂直偏移均为 0。 */
    /* 10px 表示模糊半径为 10 像素。 */
    /* rgba(56, 192, 183, 0.5) 表示阴影的颜色为 rgb(56, 192, 183)，透明度为 0.5。 */
    box-shadow: 0 0 10px rgba(56, 192, 183, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(56, 192, 183, 1);
  }
}
/* 认真摸鱼 */
.RZMY {
  width: 25px;
  height: 25px;
  background-color: rgb(33, 33, 33, 0.8);
  position: relative;
  left: 61%;
  bottom: 7%;
  display: flex;
  padding-left: 4.1px;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgb(79, 82, 82);
  overflow: hidden;
  /* 加个动画效果 鼠标放上去0.5秒后宽度放大100px */
  /* 没加就直接放大到100px */
  transition: width 0.5s;
}
.RZMY:hover {
  overflow: hidden;
  width: 100px;
}
.RZMYZT {
  padding-left: 10px;
  font-size: 10px;
}

/* 名字 */
.name {
  font-size: 23px;
  margin-top: -15px;
}

/* 博客 */
.boKe {
  margin-top: 5px;
}

/* 文标类 集合 */
.WBLJiHe {
  margin-top: 25px;
  display: flex;
  /* 均分  左右一个 中间平均分配 */
  justify-content: space-between;
}
.WBLJiHeBG:hover {
  color: rgb(72, 179, 239);
}
.WBLT {
  font-size: 15px;
}
.WBLW {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  font-size: 22px;
}

/* 按钮 */
.elButton {
  margin-top: 20px;
  width: 241px;
  height: 36px;
  margin-left: -67px;
  background-color: rgb(62, 184, 190);
  border: none;
  color: rgb(183, 230, 231);
  font-size: 16px;
}
.gitHub {
  margin-right: 5px;
  font-size: 19px;
}

/* Git */
.Git {
  margin-top: 20px;
  display: flex;
}
.gitHubB {
  font-size: 25px;
}
.YX {
  margin-left: 20px;
  font-size: 25px;
}
.rotate-on-hover {
  transition: transform 0.5s; /* 设置过渡效果 */
  cursor: pointer; /* 设置鼠标指针为手型 */
}

.rotate-on-hover:hover {
  transform: rotate(360deg); /* 鼠标悬停时旋转 360 度 */
}
</style>
