import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import routes from './routes/router'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'


const app = createApp(App)
app.use(routes)
app.use(ElementPlus, {
  locale: zhCn
})
app.mount('#app')
