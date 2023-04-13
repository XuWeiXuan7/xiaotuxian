<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <HomeBanner />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import HomeCategory from '@/views/home/components/home-category.vue'
import HomeBanner from '@/views/home/components/home-banner.vue'
import { useStore } from 'vuex'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner },
}
</script>
<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>