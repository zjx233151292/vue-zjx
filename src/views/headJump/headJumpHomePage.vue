<!-- 首页 -->
<script setup>
import { onMounted, ref } from 'vue'
// 导入记得使用  导入的是一个方法  useWengZhangStore（）
import { useWengZhangStore } from '@/stores'

// 全部文章数据
const wenZhang = useWengZhangStore().wenZhanglest
// 显示3个文章的数据
const getwenZhang = useWengZhangStore().getWenZhang

// 控制滑动，动态模糊的 true开启 false关闭
const huaDon = ref(true)
console.log(wenZhang)

// 星空背景
onMounted(() => {
  var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight),
    hue = 217,
    stars = [],
    count = 0,
    maxStars = 1400

  var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d')
  canvas2.width = 100
  canvas2.height = 100
  var half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
  gradient2.addColorStop(0.025, '#fff')
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
  gradient2.addColorStop(1, 'transparent')

  ctx2.fillStyle = gradient2
  ctx2.beginPath()
  ctx2.arc(half, half, half, 0, Math.PI * 2)
  ctx2.fill()

  // End cache

  function random(min, max) {
    if (arguments.length < 2) {
      max = min
      min = 0
    }

    if (min > max) {
      var hold = max
      max = min
      min = hold
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function maxOrbit(x, y) {
    var max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max))
    return diameter / 2
  }

  var Star = function () {
    this.orbitRadius = random(maxOrbit(w, h))
    this.radius = random(60, this.orbitRadius) / 12
    this.orbitX = w / 2
    this.orbitY = h / 2
    this.timePassed = random(0, maxStars)
    this.speed = random(this.orbitRadius) / 500000
    this.alpha = random(2, 10) / 10

    count++
    stars[count] = this
  }

  Star.prototype.draw = function () {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10)

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }

    ctx.globalAlpha = this.alpha
    ctx.drawImage(
      canvas2,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    )
    this.timePassed += this.speed
  }

  for (var i = 0; i < maxStars; i++) {
    new Star()
  }

  function animation() {
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 0.8
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter'
    for (var i = 1, l = stars.length; i < l; i++) {
      stars[i].draw()
    }

    window.requestAnimationFrame(animation)
  }

  animation()
})
</script>

<template>
  <!-- 包裹背景和正文的div -->
  <div class="parent">
    <!-- 背景 -->
    <canvas id="canvas"></canvas>
    <!-- 正文 -->
    <div class="beiJingDiv">
      <!-- 文章 -->
      <div class="wenZan">
        <!-- el走马灯 -->
        <el-carousel height="200px" :motion-blur="huaDon">
          <el-carousel-item v-for="item in getwenZhang" :key="item.id">
            <!-- 走马灯每一次循环内容 -->
            <div class="zoMaDen">
              <!-- 图片 -->
              <div class="zoMaDenTP">
                <img class="zoMaDenTPImg" :src="item.imageUrl" alt="" />
              </div>
              <!-- 文字 -->
              <div class="wengZhi">
                <div class="wengZhiDing">{{ item.shiJ }}</div>
                <div class="wengZhiTi">{{ item.biaoTi }}</div>
                <div class="wengZhiDi">再怎么看我也不知道怎么描述他拉！</div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
        <div class="FgX"></div>
        <div class="wengZhangAn">
          <div>
            <img class="wengZhang1imgTp" src="@/assets/shoYe/img/11.png" />
          </div>
          <div class="wengZhang1BiaoTi">
            <div>
              <div class="wengZhang1biaoti">标题</div>
              <div class="wengZhang1ShiJ">时间</div>
              <div class="wengZhang1FuBiaoTi">副标题</div>
            </div>
          </div>
        </div>
        <div class="wengZhangAn">文章2</div>
        <div>
          <el-pagination background layout="prev, pager, next" :total="500" />
        </div>
      </div>
      <!-- 用户 -->
      <div class="Yh">
        <div>用户</div>
        <div>公告</div>
        <div>日历</div>
        <div>观看人数</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 包裹背景的样式  相对  等级1 */
.parent {
  position: relative;
  z-index: 1;
}

/* 背景样式 绝对 等级2 */
#canvas {
  width: 100%;
  height: 880px;
  position: absolute;
  z-index: 2;
}

/* 正文样式 绝对 等级3 */
.beiJingDiv {
  position: absolute;
  z-index: 3;
  width: 70%;
  height: 880px;
  display: flex;
  justify-content: space-between;
  left: 50%;
  transform: translate(-50%);
}

/* 文章 */
.wenZan {
  width: 70%;
  height: 200px;
  background-color: rgb(21, 21, 21, 0.7);
  margin-right: 15px;
  border-radius: 32px;
  margin-top: 40px;
}
/* 走马灯样式 */
.zoMaDen {
  padding-left: 20px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  height: 200px;
}
/* 走马灯图片 */
.zoMaDenTP {
  width: 180px;
  height: 180px;
}
.zoMaDenTPImg {
  height: 180px;
  width: 180px;
  /* 1. scale-down 此值的效果等同于 none 或 contain，取决于哪个会导致更小的对象尺寸。*/
  /* 2. none 替换内容会被缩放以完全覆盖元素的内容框，同时保持其长宽比。 */
  /* 3. contain 替换内容会被缩放以适应元素的内容框，同时保持其长宽比。 */
  /* 4. 替换内容会被缩放以完全覆盖元素的内容框，同时保持其长宽比。 */
  object-fit: cover;
  border-radius: 7px;
}

/* 文字 */
.wengZhi {
  width: 100%;
  height: 180px;
  margin-left: 50px;
  display: grid;
  align-items: center;
}
.wengZhiDing {
  padding-top: 25px;
  color: rgb(185, 185, 185);
}
.wengZhiTi {
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: 600;
  color: rgb(185, 185, 185);
}
.wengZhiDi {
  padding-bottom: 30px;
  color: rgb(185, 185, 185);
}

/* 文章 */
.wengZhangAn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 252px;
  background-color: rgb(21, 21, 21, 0.7);
  margin-top: 20px;
  border-radius: 25px;
}
/* 文章1 */
/* 图片 */
.wengZhang1imgTp {
  height: 252px;
  width: 340px;
  object-fit: cover;
  border-radius: 25px 0 0 25px;
  filter: brightness(0.75);
}
.wengZhang1BiaoTi {
  width: 100%;
  height: 252px;
  text-align: left;
  display: flex;
  align-items: center;
  margin-left: 45px;
}
/* 文章1标题 */
.wengZhang1biaoti {
  color: rgb(232, 232, 232);
  font-size: 30px;
  font-weight: 600;
}
/* 文章1时间 */
.wengZhang1ShiJ {
  color: rgb(133, 133, 133);
}
/* 文章1副标题 */
.wengZhang1FuBiaoTi {
  color: rgb(185, 185, 185);
}

/* 分割线 */
.FgX {
  margin-top: 20px;
  height: 5px;
  width: 100%;
  background-color: rgb(21, 21, 21, 0.7);
  padding-bottom: 5px;
}

/* 用户 */
.Yh {
  width: 30%;
  background-color: brown;
}
</style>
