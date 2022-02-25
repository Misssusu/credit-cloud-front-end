import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import './styles/common.scss'

createApp(App).use(router).use(ElementPlus).use(createPinia()).mount('#app')
