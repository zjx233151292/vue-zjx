<!-- 首页 -->
<script setup>
import { onMounted } from 'vue'

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
      <div class="wenZan">文章</div>
      <div class="Yh">用户</div>
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
  background-color: wheat;
  width: 60%;
  height: 880px;
  display: flex;
  justify-content: space-between;
  left: 50%;
  transform: translate(-50%);
}

/* 文章 */
.wenZan {
  width: 70%;
  background-color: aqua;
}

/* 用户 */
.Yh {
  width: 30%;
  background-color: brown;
}
</style>
