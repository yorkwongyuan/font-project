<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree" lay-filter="test">
      <li class="layui-nav-item" v-for="(list, index) in lists" :key="index + 'center'">
        <router-link :to="{path: list.path}">
          <i class="layui-icon" :class="list.icon"></i>
          {{list.name}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'center',
  data () {
    return {
      lists: [{
        name: '我的主页',
        icon: 'layui-icon-home',
        path: '/user'
      }, {
        name: '用户中心',
        icon: 'layui-icon-friends',
        path: '/center/'
      }, {
        name: '基本设置',
        icon: 'layui-icon-set',
        path: '/center/user-setting'
      }, {
        name: '我的帖子',
        icon: 'layui-icon-form',
        path: '/center/user-post'
      }, {
        name: '我的消息',
        icon: 'layui-icon-reply-fill',
        path: '/center/user-msg'
      }, {
        name: '其他设置',
        icon: 'layui-icon-component',
        path: '/center/user-other'
      }]
    }
  }
}
</script>
<style>
/* @import "../assets/custom/iconfont.css";
.iconfont {
  margin-right: 10px;
} */
</style>
