<!-- 布局架子 -->
<script setup>
// 引入图标
import { ref } from 'vue'
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
    route: '/headJump/headJumpMusic'
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
// 控制列表后面箭头
const Arrow = ref('ArrowDown')

const handleMouseEnter = (index) => {
  if (index === 4) {
    Arrow.value = 'ArrowUp'
  }
}

const handleMouseLeave = (index) => {
  if (index === 4) {
    Arrow.value = 'ArrowDown'
  }
}
</script>

<template>
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
                @click="$router.push(item.route)"
                @mouseenter="handleMouseEnter(index)"
                @mouseleave="handleMouseLeave(index)"
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
        <div class="leiBiao">列表里的东西</div>
      </el-tabs>
    </div>

    <!-- 搜索 -->
    <div class="Search">
      <h3>Search</h3>
      <el-icon class="el-icon-search"><Search /></el-icon>
    </div>
  </div>

  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
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
  margin-left: 44.1%;
  width: 168px;
  height: 45px;
  background-color: white;
  border-radius: 5px;
}

/* 标签头 */
.biaoQT {
  display: block;
}
</style>
