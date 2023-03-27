// 1.插件新的axios实例
// 2.请求拦截器，如果token进行头部携带
// 3.响应拦截器 1.剥离无效数据 2.处理token失效
// 4.导出一个函数，调用当前的axios实例发请求，返回promise

import axios from 'axios'
import store from '@/store'
import router from '@/router'

//导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
    // axios 的一些配置，baseURL timeout
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use((config) => {
    //拦截业务逻辑
    //进行请求配置的修改
    //如果本地又token在头部携带
    //1.获取用户信息对象
    const { profile } = store.state.user
    // 判断是否携带token
    if (profile.token) {
        //设置token
        config.headers.Authorization = 'Bearer ' + profile.token
    }
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use((res) => {

    return res.data
}, err => {
    //401 状态码，进入改函数
    if (err.response && err.response.status == 401) {
        // 1. 清空本地无效的用户信息
        store.commit('user/setUser', {})
        // 2. 跳转到登录页
        //当前路由地址 组件里头:`/user?a=10` $route.path===/user  $route.fullPath==/user? a=10
        // js模块中:router.currentRoute.fullPath 就是当前路由地址 是ref的响应式数据
        // encodeURIComponent 解析url编码防止出现特殊字符串
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        // 3. 跳转需要传参(当前路由地址)
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
})

//请求工具函数
export default (url, method, submitData) => {
    //负责发请求，请求地址，请求方式 ，提交的数据

    return instance({
        url,
        method,
        // 1.如果是get请求 需要使用params来传递 submitData
        // 2.如果不是get请求 需要使用data来传递 submitData
        // []可以设置一个动态的key
        [method.toLowerCase() === 'get' ? "params" : 'data']: submitData
    })
}