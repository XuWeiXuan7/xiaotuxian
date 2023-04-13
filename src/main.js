import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from './components/library/'
// 1.重置样式的库
import 'normalize.css'
// 2.自己项目的重置样式于公共样式
import '@/assets/style/common.less'
createApp(App).use(store).use(router).use(ui).mount('#app')
