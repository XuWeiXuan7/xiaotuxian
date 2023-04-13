<template>
  <!-- 顶部组件 -->
  <AppNavbar></AppNavbar>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <AppHeaderStickyVue />
  <div class="main">
    <!-- 内容组件 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderStickyVue from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderStickyVue
  },
  //获取下分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style>
</style>
