<template>
  <div class="container">
    <p>{{$store.state.moduleA.username}}</p>
    <p>{{$store.state.moduleB.username}}</p>
    <!-- 拿A模块的getters  -->
    <p>{{$store.getters.newName}}</p>
    <p>{{$store.getters['moduleB/newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const mutationsFn = () => {
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      // 调用B模块的actions
      store.dispatch('moduleB/updateName')
    }
    return {
      mutationsFn,
      actionsFn
    }
  }
}
</script>

<style>
</style>
