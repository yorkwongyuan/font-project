<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree" lay-filter="test">
    <!-- 侧边导航: <ul class="layui-nav layui-nav-tree layui-nav-side"> -->
      <!-- <li class="layui-nav-item layui-nav-itemed">
        <i class="iconfont icon-home"></i>
        <a href="javascript:;">默认展开</a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:;">选项1</a></dd>
          <dd><a href="javascript:;">选项2</a></dd>
          <dd><a href="">跳转</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
          <dd><a href="">移动模块</a></dd>
          <dd><a href="">后台模版</a></dd>
          <dd><a href="">电商平台</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="">产品</a></li>
      <li class="layui-nav-item"><a href="">大数据</a></li> -->
      <li class="layui-nav-item" v-for="(list, index) in lists" :key="index + 'center'">
        <a href="">
          <i class="iconwyuan" :class="list.icon"></i>
          {{list.name}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'center',
  data () {
    return {
      lists: [{
        name: '我的主页',
        icon: 'icon-home'
      }, {
        name: '基本设置',
        icon: 'icon-settings'
      }, {
        name: '我的帖子',
        icon: 'icon-document'
      }, {
        name: '我的消息',
        icon: 'icon-message1'
      }, {
        name: '其他设置',
        icon: 'icon-settings1'
      }]
    }
  }
}
</script>
<style>
@import "../assets/custom/iconfont.css";
.iconfont {
  margin-right: 10px;
}
</style>
