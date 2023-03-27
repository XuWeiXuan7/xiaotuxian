<template>
  <!-- 顶部组件 -->
  <nav></nav>
  <!-- 头部组件 -->
  <header></header>
  <div class="main">
    <!-- 内容组件 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer></footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style>
</style>