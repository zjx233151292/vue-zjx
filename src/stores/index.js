// 导入createPinia函数，用于创建Pinia实例
import { createPinia } from 'pinia'
// 导入persist插件，用于数据持久化
import persist from 'pinia-plugin-persistedstate'

// 创建Pinia实例，用于管理Vuex状态
const pinia = createPinia()
// 使用persist插件，使得Pinia管理的状态可以持久化
pinia.use(persist)

// 导出Pinia实例，以便在其他地方使用
export default pinia

// 从'user'模块导入useUserStore，用于管理和访问用户状态
import { useUserStore } from './modules/user'
// 导出useUserStore，允许其他模块引用，以便可以统一管理和使用用户状态
export { useUserStore }

// 文章
import { useWengZhangStore } from '@/stores/modules/wenZhang.js'
export { useWengZhangStore }
