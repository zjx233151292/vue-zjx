import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

// 1. 注册路由插件
const app = createApp(App)

app.use(createPinia().use(persist))

// 2. 注册路由插件
app.use(router)
app.mount('#app')
