<!-- 观看人数 -->
<script setup>
import { useYunHuStore, useWengZhangStore } from '@/stores'
const YunHu = useYunHuStore()
const WengZhang = useWengZhangStore()
</script>

<template>
  <div class="GKRS">
    <div class="GKRST">
      <el-icon><DataLine /></el-icon> lnfo
    </div>
    <div>
      <div class="GKRSD">
        <div>Article :</div>
        <div>{{ WengZhang.wenZhanglest.length }}</div>
      </div>
      <div class="GKRSD">
        <div>Total Count :</div>
        <div>22</div>
      </div>
      <div class="GKRSD">
        <div>UV :</div>
        <div>{{ YunHu.yunHuXinXi.uv }}</div>
      </div>
      <div class="GKRSD">
        <div>PV :</div>
        <div>{{ YunHu.yunHuXinXi.pv }}</div>
      </div>
      <div class="GKRSD">
        <div>Last Push :</div>
        <div>{{ YunHu.yunHuXinXi.LastPush }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.GKRS {
  margin-top: -18px;
  padding-left: 20px;
  width: 290px;
  height: 242px;
  background-color: rgb(25, 25, 25, 0.9);
  border-radius: 25px;
  color: rgb(185, 185, 185);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.GKRST {
  font-size: 22px;
  margin-bottom: 10px;
}
.GKRSD {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 35px;
}
</style>
