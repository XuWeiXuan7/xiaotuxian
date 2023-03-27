import { createStore } from 'vuex'
// vue2.0创建仓库 new Vuex.Store({})
// vue3.0创建仓库 createStore({})
// A模块
const moduleA = {
  state: {
    username: 'moduleA'
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleAAAAAA'
    }
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  }
}
// B模块
const moduleB = {
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  actions: {
    updateName (ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'moduleAAAAAA'
    }
  }
}

export default createStore({
  state: {
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    moduleA,
    moduleB
  }
})

// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newName (state) {
//       return state.username = "ww!!!!"
//     }
//   },
//   mutations: {
//     updateName (state) {
//       state.username = 'zl666'
//     }
//   },
//   actions: {
//     updateName (ctx) {
//       setTimeout(() => {
//         ctx.commit('updateName')
//       }, 1000);
//     }
//   },
//   modules: {
//   }
// })
