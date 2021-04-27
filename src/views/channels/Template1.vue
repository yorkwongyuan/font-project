<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <wy-list></wy-list>
      </div>
      <div class="layui-col-md4">
        <!-- <wy-tips></wy-tips>
        <wy-sign></wy-sign> -->
        <wy-hot-list></wy-hot-list>
        <wy-ads></wy-ads>
        <wy-link></wy-link>
      </div>
    </div>
  </div>
</template>
<script>

import Ads from '@/components/sidebar/Ads.vue'
import HotList from '@/components/sidebar/HotList.vue'
import Links from '@/components/sidebar/Links.vue'
// import Tips from '@/components/sidebar/Tips.vue'
// import Sign from '@/components/sidebar/Sign.vue'
import List from '@/components/content/List.vue'
export default {
  name: 'index',
  components: {
    'wy-ads': Ads,
    'wy-hot-list': HotList,
    'wy-link': Links,
    // 'wy-tips': Tips,
    // 'wy-sign': Sign,
    'wy-list': List
  }
}
</script>
<style scoped>

</style>
