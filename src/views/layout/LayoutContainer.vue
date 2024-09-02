<!-- 布局架子 -->
<script setup>
// 引入图标
import { ref, onMounted } from 'vue'
const count = ref([
  {
    name: 'sy',
    label: '首页',
    id: 1,
    icon: 'House',
    route: '/headJump/headJumpHomePage'
  },
  {
    name: 'gd',
    label: '归档',
    id: 2,
    icon: 'Box',
    route: '/headJump/headJumpPigeonhole'
  },
  {
    name: 'bq',
    label: '标签',
    id: 3,
    icon: 'DataBoard',
    route: '/headJump/headJumpLabel'
  },
  {
    name: 'fl',
    label: '分类',
    id: 4,
    icon: 'FolderOpened',
    route: '/headJump/headJumpClassify'
  },
  {
    name: 'lb',
    label: '列表',
    id: 5,
    icon: 'List',
    route: ''
  },
  {
    name: 'lyb',
    label: '留言板',
    id: 6,
    icon: 'Message',
    route: '/headJump/headJumpMessageBoard'
  },
  {
    name: 'yl',
    label: '友链',
    id: 7,
    icon: 'Link',
    route: '/headJump/headJumpFriendLink'
  },
  {
    name: 'gy',
    label: '关于',
    id: 8,
    icon: 'HelpFilled',
    route: '/headJump/headJumpInRegardTo'
  }
])

const leiBiaoNR = ref([
  {
    route: '/headJump/headJumpMusic'
  },
  {
    route: '/headJump/headJumpFilm'
  }
])

// 列表的值
const Arrow = ref('ArrowDown')

const leiBiaoRef = ref(null)

const leiBiaoD = (index) => {
  if (index === 4) {
    // vue2 是用 this.Arrow 获取动态值 vue3没有this 是用 Arrow.value 获取动态值 也就是以前用 this 现在用 valus 来获取
    Arrow.value = 'ArrowUp'
    leiBiaoRef.value.classList.add('conceal')
    leiBiaoRef.value.classList.remove('conceal')
  }
}

// 删除列表分类
const Delete = () => {
  Arrow.value = 'ArrowDown'
  leiBiaoRef.value.classList.add('conceal')
}

// 其他标题页按删除列表分类
const DeleteSC = (index) => {
  if (index !== 4) {
    Arrow.value = 'ArrowDown'
    leiBiaoRef.value.classList.add('conceal')
  }
}

// 副标题打字机文字
const fuBiaoTi = ref([
  {
    message: '人生三大错觉，我能反杀，下一发能出金，她喜欢我。'
  },
  {
    message: '停下脚步才注意到 世界被染的雪白。'
  },
  {
    message: '最值得欣赏的风景，是自己奋斗的足迹。'
  },
  {
    message: '如果别人朝你扔石头，就不要扔回去了，留着作你建高楼的基石。'
  },
  {
    message: '圆满是稍纵即逝的，而非圆满才是人生的常态。'
  },
  {
    message: '平坦的柏油马路好走，但唯有泥泞的土路才能留下你的脚印。'
  },
  {
    message: '一切最高明的智慧都是无用的，除非你把它运用在生活之中。'
  },
  {
    message: '人生是一种无法抵抗的前进。'
  },
  {
    message: '人生就像弈棋，一步失误，全盘皆输。'
  }
])

const fuBiaoTiDiv = ref('')

// 控制打字机打的是第几个字
const i = ref(0)

// 控制打字机打的是第几个对象
const j = ref(0)

// 打字机效果方法
const fuBiaoTiFF = () => {
  fuBiaoTiDiv.value += fuBiaoTi.value[j.value].message.charAt(i.value)
  i.value++
  if (fuBiaoTi.value[j.value].message.charAt(i.value) === '') {
    j.value++
    i.value = 0
    fuBiaoTiDiv.value = ''
  }
  if (j.value >= fuBiaoTi.value.length) {
    j.value = 0
  }
}

// 打字机启动定时器
const daZhiJiDSQ = setInterval(fuBiaoTiFF, 325)

onMounted(() => {
  daZhiJiDSQ
})

let qieHuangBei = ref(null)
let xSwZ = ref(true)
qieHuangBei = ref(qieHuangBei)
const qieHuangBeiF = (index) => {
  if (index !== 0) {
    qieHuangBei.value.classList.add('beiJingYanSi')
    qieHuangBei.value.classList.remove('router-view')
    xSwZ.value = false
  } else {
    qieHuangBei.value.classList.add('router-view')
    qieHuangBei.value.classList.remove('beiJingYanSi')
    xSwZ.value = true
  }
}
</script>

<template>
  <div class="router-view" ref="qieHuangBei">
    <!-- 标签页 -->
    <div class="biaoQinDiv">
      <!-- 网站名log -->
      <div class="logo">
        <h3 class="gradient-text">Recording</h3>
      </div>

      <!-- 标签头 -->
      <div class="biaoQT">
        <el-tabs class="demo-tabs biaoQin" stretch>
          <!-- 这里的报错不用管 -->
          <el-tab-pane
            :name="item.name"
            v-for="(item, index) in count"
            :key="item.id"
          >
            <!-- 具名插槽 -->
            <template #label>
              <span class="custom-tabs-label biaoQinMoRen">
                <div
                  @click="
                    $router.push(item.route),
                      leiBiaoD(index),
                      DeleteSC(index),
                      qieHuangBeiF(index)
                  "
                >
                  <el-icon>
                    <component :is="item.icon" class="itemIcon" />
                  </el-icon>
                  <span>{{ item.label }}</span>
                  <el-icon v-if="item.id === 5">
                    <component :is="Arrow" class="itemIcon itemIconArr" />
                  </el-icon>
                </div>
              </span>
            </template>
          </el-tab-pane>
          <!-- 列表分类  -->
          <div class="leiBiao conceal" ref="leiBiaoRef">
            <div
              class="music"
              @click="$router.push(leiBiaoNR[0].route), Delete()"
            >
              音乐
            </div>
            <div
              class="film"
              @click="$router.push(leiBiaoNR[1].route), Delete()"
            >
              电影
            </div>
          </div>
        </el-tabs>
      </div>

      <!-- 搜索 -->
      <div class="Search">
        <h3>Search</h3>
        <el-icon class="el-icon-search"><Search /></el-icon>
      </div>
    </div>

    <!-- 头部显示文字 -->
    <div class="toDiv" v-if="xSwZ">
      <h1 class="toText">Recording</h1>
      <p class="toTextF">{{ fuBiaoTiDiv }}</p>
    </div>

    <div class="xiaLa" v-if="xSwZ">
      <el-icon class="animated shakeY">
        <ArrowDownBold />
      </el-icon>
    </div>

    <div>
      <!-- 二级路由出口 -->
      <router-view></router-view>
    </div>
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
  background-image: url('../../assets/app/img/3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* 标签页 */
.biaoQinDiv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
}

/* 标签单个首页的样式 （首页） */
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.itemIconArr {
  margin-left: 4px;
}

/* 默认未选中的标签颜色 */
.el-tabs__nav .el-tabs__item:not(.is-active) .custom-tabs-label span {
  color: #dfdfdf;
}
/* 鼠标悬停时的颜色 */
.el-tabs__nav .el-tabs__item:hover .custom-tabs-label span {
  color: white; /* 鼠标悬停时颜色为白色 */
}

/* 图标的选中，未选中，悬停时的颜色  */
.el-tabs__nav .el-tabs__item:not(.is-active) .itemIcon {
  color: #dfdfdf; /* 未选中时颜色为灰色 */
}

.biaoQinMoRen {
  font-size: 18px;
}
/* 标签头整体 */
.biaoQin {
  margin-top: 6.5px;
  margin-right: 75px;
}

/* 搜索 */
/* 搜索样式 */
.Search {
  display: flex;
  align-items: center;
  margin-right: 25px;
}
.Search h3,
.Search .el-icon-search {
  color: #dfdfdf; /* 初始颜色为灰色 */
}
.Search:hover h3,
.Search:hover .el-icon-search {
  color: white; /* 鼠标悬停时颜色变为白色 */
}
/* 搜索图标 */
.el-icon-search {
  margin-left: 10px;
  font-size: 22px;
}

/* logo */
.logo {
  margin-left: 25px;
  position: relative;
  display: inline-block;
}

/* 渐变文字 */
.gradient-text {
  font-size: 30px;
  color: transparent;
  /* 背景 */
  -webkit-background-clip: text;
  background-clip: text;
  /* 动画 */
  animation: gradient-effect 4s infinite, text-shake 1s infinite,
    color-change 6s infinite;
}

/* 抖动 */
@keyframes text-shake {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

/* 颜色变换 */
@keyframes color-change {
  0% {
    color: #34ff99;
  }
  20% {
    color: #31f7fe;
  }
  40% {
    color: #148dff;
  }
  60% {
    color: #d028ff;
  }
  80% {
    color: #ff731e;
  }
  100% {
    color: #34ff99;
  }
}

/* 列表分类 */
.leiBiao {
  display: flex;
  justify-content: space-between;
  margin-left: 44.1%;
  width: 168px;
  height: 45px;
  background-color: #dfdfdf;
  border-radius: 5px;
  background: linear-gradient(to bottom right, #f0f0f0, #d0d0d0);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

/* 音乐 */
.music {
  display: flex;
  justify-content: center;
  line-height: 45px;
  border-radius: 5px;
  width: 84px;
  height: 45px;
  color: #535353;
}

.music:hover {
  color: black;
  background-color: #5fa9ed;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.07);
}

/* 电影 */
.film {
  display: flex;
  justify-content: center;
  line-height: 45px;
  border-radius: 5px;
  width: 84px;
  height: 45px;
  color: #535353;
}

.film:hover {
  color: black;
  background-color: #5fa9ed;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.07);
}

/* 标签头 */
.biaoQT {
  height: 52px;
}

/* 隐藏列表分类 */
.conceal {
  display: none;
}

/* 头部显示文字 */
.toDiv {
  height: 740px;
  width: 100%;
}

.toText {
  width: 100%;
  font-size: 45px;
  color: #efefef;
  display: flex;
  justify-content: center;
  padding-top: 16%;
}
.toTextF {
  width: 100%;
  font-size: 29px;
  color: #efefef;
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

/* 下拉图标 */
.xiaLa {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #dfdfdf;
}

/* 抖动动画 */
.shakeY {
  animation: shakeY 10s infinite;
}

/* 抖动动画的样式 */
@keyframes shakeY {
  from,
  to {
    transform: translate3d(0, 0, 0);
    color: #dfdfdf;
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    opacity: 1;
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    opacity: 0.5;
    transform: translate3d(0, 10px, 0);
  }
}

.beiJingYanSi {
  position: relative;
  width: 100%;
  height: 430px;
  background-image: url('../../assets/app/img/3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
