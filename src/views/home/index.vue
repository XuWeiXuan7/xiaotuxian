<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <HomeBanner />
        <HomeNew></HomeNew>
        <HomeHot></HomeHot>
        <HomeBrand></HomeBrand>
        <HomeProduct></HomeProduct>
        <HomeSpecial></HomeSpecial>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import HomeCategory from '@/views/home/components/home-category.vue'
import HomeBanner from '@/views/home/components/home-banner.vue'
import HomeNew from '@/views/home/components/home-new.vue'
import HomeHot from '@/views/home/components/home-hot.vue'
import HomeBrand from '@/views/home/components/home-brand.vue'
import HomeProduct from '@/views/home/components/home-product.vue'
import HomeSpecial from '@/views/home/components/home.special.vue'
import { useStore } from 'vuex'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot, HomeBrand, HomeProduct, HomeSpecial },
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