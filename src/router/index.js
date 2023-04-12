import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home')
import TopCategory from '@/views/category'
import SubCategory from '@/views/category/sub'
const routes = [
    // 一级路由 布局容器
    {
        path: '/',
        component: Layout,
        children: [
            { path: '/', component: Home },
            { path: "/category/:id", component: TopCategory },
            { path: "/category/:id", component: SubCategory }
        ]
    }
]
// vue2.0 new VueRouter({})创建路由实例
// vue3.0 createRouter({})创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
