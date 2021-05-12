<template>
  <div class="fly-panel fly-panel-user layui-container fly-marginTop fly-user-main">
    <div class="layui-tab layui-tab-brief">
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{name: 'MyPost'}">我的发帖</router-link>
        </li>
        <li>
          <router-link :to="{name: 'MyCollection'}">我收藏的帖</router-link>
        </li>
      </ul>
      <div class="layui-tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-posts'
}
</script>
<style lang="scss">

</style>
