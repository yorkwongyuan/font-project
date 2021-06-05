<template>
  <div class="layui-container flex">
    <img :src="require('@/assets/logo.png')" alt="" width="100px">
    <p class="error-tips">找不到页面了</p>
    <button class="layui-btn" @click="$router.replace('/')">回到首页</button>
  </div>
</template>
<script>
export default {
  name: 'no-found'
}
</script>
<style lang="scss">
.flex {
  align-items: center;
  justify-content: center;
  min-height: 400px;
  display: flex;
  flex-flow: column wrap;
  .error-tips {
    padding: 15px;
  }
}
</style>
