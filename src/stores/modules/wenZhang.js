// ref() 就是 state 属性
// computed()计算函数 就是 getters
// function()同步，异步函数 就是 actions
// vuex比pinia差在
// 取消了modules 导出直接用 return
// 同步异步函数放在一起了 不再是以前的 异步actions 和 同步mutations 了
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useWengZhangStore = defineStore('big-wengZhang', () => {
  const wenZhanglest = ref([
    {
      shiJ: '2024-09-04',
      biaoTi: '标题1',
      content: '内容1',
      // 开发地址/public/shoYe/img/11.png  打包地址/shoYe/img/11.png
      imageUrl: '/public/shoYe/img/11.png',
      id: 1
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题2',
      content: '内容2',
      // 开发地址/public/shoYe/img/12.png  打包地址/shoYe/img/12.png
      imageUrl: '/public/shoYe/img/12.png',
      id: 2
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题3',
      content: '内容3',
      // 开发地址/public/shoYe/img/25.png  打包地址/shoYe/img/25.png
      imageUrl: '/public/shoYe/img/25.png',
      id: 3
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题4',
      content: '内容4',
      // 开发地址/public/shoYe/img/26.png  打包地址/shoYe/img/26.png
      imageUrl: '/public/shoYe/img/26.png',
      id: 4
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题5',
      content: '内容5',
      // 开发地址/public/shoYe/img/35.png  打包地址/shoYe/img/35.png
      imageUrl: '/public/shoYe/img/35.png',
      id: 5
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题6',
      content: '内容6',
      // 开发地址/public/shoYe/img/16.png  打包地址/shoYe/img/16.png
      imageUrl: '/public/shoYe/img/16.png',
      id: 6
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题7',
      content: '内容7',
      // 开发地址/public/shoYe/img/30.png  打包地址/shoYe/img/30.png
      imageUrl: '/public/shoYe/img/30.png',
      id: 7
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题8',
      content: '内容8',
      // 开发地址/public/shoYe/img/29.png  打包地址/shoYe/img/29.png
      imageUrl: '/public/shoYe/img/29.png',
      id: 8
    },
    {
      shiJ: '2024-09-04',
      biaoTi: '标题9',
      content: '内容9',
      // 开发地址/public/shoYe/img/28.png  打包地址/shoYe/img/28.png
      imageUrl: '/public/shoYe/img/28.png',
      id: 9
    },
    {
      shiJ: '2024-09-05',
      biaoTi: '标题10',
      content: '内容10',
      // 开发地址/public/shoYe/img/20.png  打包地址/shoYe/img/20.png
      imageUrl: '/public/shoYe/img/20.png',
      id: 10
    }
  ])

  const listT = ref(0)
  const listW = ref(2)

  function getlistT(val) {
    listT.value = val
  }
  function getlistW(val) {
    listW.value = val
  }

  // computed 计算函数
  const getWenZhang = computed(() => {
    // slice() = slice[) 左闭右开 中括号带等于  小括号不带等于
    return wenZhanglest.value.slice(listT.value, listW.value)
  })

  const XSS = ref(0)

  function getXSS(val) {
    XSS.value = val
  }

  // function 这个是普通函数  异步同步都用她
  return { wenZhanglest, getWenZhang, getlistT, getlistW, XSS, getXSS }
})
