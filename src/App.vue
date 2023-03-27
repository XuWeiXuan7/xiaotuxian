<template>
  <router-view></router-view>
</template>

<script>
import { useStore } from 'vuex'
import request from '@/utils/request'
export default {
  setup () {
    const fn = () => {
      //测试请求
      request('/member/profile', 'get', { name: 'zs' })
    }
    return {
      fn
    }
  }
}
</script>

<style>
</style>
