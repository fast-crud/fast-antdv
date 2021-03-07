import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css";
import LazyAntdv from '../lib/index.js'
createApp(App).use(LazyAntdv).mount('#app')
