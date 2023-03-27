import { createStore } from 'vuex'
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  //配置插件
  plugins: [
    createPersistedState({
      //本地存储名字
      key: "erabbit-client-pc",
      paths: ['user', 'cart']
    })
  ]
})
