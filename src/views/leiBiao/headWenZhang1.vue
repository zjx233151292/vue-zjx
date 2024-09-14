<script setup>
import { useWengZhangStore } from '@/stores'
import YunHu from '@/components/yunHudiv/yunHu.vue'
import GongGao from '@/components/yunHudiv/gongGao.vue'
import GuanKanRenShu from '@/components/yunHudiv/guanKanRenShu.vue'

const WenZhang = useWengZhangStore()
let XSS = WenZhang.XSS
</script>

<template>
  <div class="wengZhangBT">{{ WenZhang.wenZhanglest[XSS].biaoTi }}</div>
  <div class="beiJingDiv">
    <div class="zhengWen">
      <div class="WZ">
        <div class="LoadingDiv">
          <el-icon class="is-loading Loading"><Loading /></el-icon>
          <h1>{{ WenZhang.wenZhanglest[XSS].biaoTi }}</h1>
        </div>
        <p class="zhengW">{{ WenZhang.wenZhanglest[XSS].content }}</p>
      </div>

      <div class="BQ">
        <h2>{{ WenZhang.wenZhanglest[XSS].biaoTi }}</h2>
        <p class="tom url">
          http://example.com/2023/09/02/2023-9-02-%E5%8A%A0%E5%AF%86%E6%B5%8B%E8%AF%95/
        </p>
        <div class="tom">
          <div class="zuoZ">
            作者
            <p class="YS">Zhuang</p>
          </div>
          <div class="zuo zuoZ">
            发布与
            <p class="YS">{{ WenZhang.wenZhanglest[0].shiJ }}</p>
          </div>
          <div class="zuo zuoZ">
            更新与
            <p class="YS">{{ WenZhang.wenZhanglest[0].shiJ }}</p>
          </div>
          <div class="zuo zuoZ">
            许可协议
            <p class="url">CC BY-NC-SA 4.0</p>
          </div>
        </div>
        <div>
          <svg class="icon CC" aria-hidden="true">
            <use xlink:href="#icon-cc"></use>
          </svg>
        </div>
      </div>
    </div>

    <!-- 用户 -->
    <div class="Yh">
      <!-- 用户 -->
      <div class="yunHudiv">
        <YunHu></YunHu>
      </div>
      <!-- 公告 -->
      <div class="gongGaodiv">
        <GongGao></GongGao>
      </div>
      <!-- 日历 -->
      <div class="riLidiv"></div>
      <!-- 观看人数 -->
      <div class="guanKanRenShudiv">
        <GuanKanRenShu></GuanKanRenShu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wengZhangBT {
  font-size: 50px;
  display: flex;
  justify-content: center;
  margin-top: 300px;
  color: rgb(239, 239, 239);
}

.beiJingDiv {
  margin-top: 540px;
  width: 70%;
  height: 880px;
  display: flex;
  position: relative;
  left: 15%;
  justify-content: space-between;
}

.zhengWen {
  width: 70%;
  height: 90%;
  margin-top: 40px;
  background-color: rgb(25, 25, 25, 0.9);
  border-radius: 25px;
  color: rgb(185, 185, 185);
}

.WZ {
  margin-top: 40px;
  margin-left: 40px;
}

.zhengW {
  margin-top: 40px;
  text-align: center;
  font-size: 21px;
}

.LoadingDiv {
  display: flex;
}

.Loading {
  color: rgb(251, 115, 97);
  margin-top: 3px;
  margin-right: 5px;
  font-size: 40px;
}

.BQ {
  overflow: hidden;
  margin-top: 40px;
  margin-left: 40px;
  width: 730px;
  height: 190px;
  background-color: rgb(7, 8, 10);
  border-radius: 15px;
  padding: 30px;
  font-size: 17px;
  animation: breathe 3s ease-in-out infinite;
}
@keyframes breathe {
  /* 动画开始时 (0%)：元素的阴影效果为 0 0 10px rgba(56, 192, 183, 0.5)。 */
  /* 动画进行到一半时 (50%)：元素的阴影效果为 0 0 20px rgba(56, 192, 183, 1) */
  /* 动画结束时 (100%)：元素的阴影效果为 0 0 10px rgba(56, 192, 183, 0.5) */
  0%,
  100% {
    /* 0 0 表示水平偏移和垂直偏移均为 0。 */
    /* 10px 表示模糊半径为 10 像素。 */
    /* rgba(56, 192, 183, 0.5) 表示阴影的颜色为 rgb(56, 192, 183)，透明度为 0.5。 */
    box-shadow: 0 0 10px rgba(20, 61, 98, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(20, 61, 98, 1);
  }
}

.url {
  color: rgb(153, 169, 191);
}
.url:hover {
  color: rgb(72, 179, 239);
}

.YS {
  color: rgb(73, 177, 245);
}

.tom {
  width: 730px;
  height: 50px;
  margin-top: 5px;
  display: flex;
}

.zuo {
  margin-left: 50px;
}
.zuoZ {
  display: flex;
  flex-direction: column;
}

.CC {
  position: relative;
  left: 545px;
  bottom: 185px;
  font-size: 180px;
  color: rgb(185, 185, 185, 0.4);
}

/* 用户 */
.Yh {
  width: 30%;
}
/* 用户组件 */
.yunHudiv {
  display: grid;
  place-items: center;
  margin-top: 40px;
}
/* 公告组件 */
.gongGaodiv {
  display: grid;
  place-items: center;
  margin-top: 20px;
}
/* 日历组件 */
.riLidiv {
  display: grid;
  place-items: center;
  margin-top: 20px;
}
/* 观看人数组件 */
.guanKanRenShudiv {
  display: grid;
  place-items: center;
  margin-top: 20px;
}

.conceal {
  display: none;
}
</style>
<style></style>
