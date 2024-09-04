// 导入defineStore函数，用于定义Vuex存储
// 导入ref函数，用于创建响应式状态
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 用户模块
/**
 * 定义一个名为big-user的存储实例
 * 该存储实例用于管理与用户相关的状态
 */
export const useUserStore = defineStore(
  // 唯一标识
  'big-user',
  () => {
    const token = ref('') // 定义 token
    const setToken = (t) => (token.value = t) // 设置 token

    return { token, setToken }
  },
  {
    persist: true // 持久化
  }
)
