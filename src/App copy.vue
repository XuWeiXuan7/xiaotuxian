<template>
  <div>
    APP
  </div>
  <!-- 1. 使用根模块的state数据 -->
  <p>{{$store.state.username}} </p>
  <!-- 2. 使用根模块getters的数据 -->
  <p>{{$store.getters.newName}}</p>
  <button @click="mutationsFn">修改</button>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用vuex的仓库
    const store = useStore()
    // 1.使用根模块state的数据
    console.log(store.state.username)
    // 2.使用根模块的getters数据
    console.log(store.getters.newName)
    // 3.使用根模块mutations函数
    const mutationsFn = () => {
      store.dispatch('updateName')
    }
    return {
      mutationsFn
    }
  }
}
</script>
