<!-- 布局架子 -->
<script setup></script>

<template>
  <!-- 标签页 -->
  <div class="biaoQinDiv">
    <!-- 网站名log -->
    <div>
      <h3>Recording</h3>
    </div>
    <el-tabs class="demo-tabs" stretch="true">
      <!-- 这里的报错不用管 -->
      <el-tab-pane neme="sy">
        <!-- 具名插槽 -->
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>首页</span>
          </span>
        </template>
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="归档" name="gd">
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="标签" name="bq">
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="分类" name="fl">
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="列表" name="lb">
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="留言板" name="lyb">
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="友链" name="yl">
        <router-view></router-view>
      </el-tab-pane>

      <el-tab-pane label="关于" name="gy">
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>

    <div>Search</div>
  </div>
</template>

<style scoped>
/* 标签页 */
.biaoQinDiv {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
</style>
