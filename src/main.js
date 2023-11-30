import 'virtual:windi.css'
// Register icon sprite
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { setupStore } from '@/store'

import App from './App.vue'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'

import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'

const app = createApp(App)

setupStore(app)
setupRouter(app)
setupRouterGuard(router)

// 注册全局组件
app.use(Antd)

app.mount('#app')
