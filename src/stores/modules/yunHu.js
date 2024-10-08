import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useYunHuStore = defineStore('yunHuXinXi', () => {
  const yunHuXinXi = ref({
    name: 'Zhuang',
    //  标签
    Tags: '1',
    // 类别
    Categories: '0',
    // 跳转地址
    url: '',
    // 图片地址  开发地址/public/shoYe/img/2.png  打包地址/shoYe/img/2.png
    imgurl: '/public/shoYe/img/2.png',
    // UV
    uv: '46000980',
    // PV
    pv: '68875851',
    // 最后更新
    LastPush: 'Just'
  })
  return { yunHuXinXi }
})
