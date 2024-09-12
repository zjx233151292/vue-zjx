import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//  引入公共样式 阿里巴巴图标库
import '../public/iconfont/iconfont'

const app = createApp(App)

app.use(createPinia().use(persist))

// 2. 注册路由插件
app.use(router)
app.mount('#app')

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
