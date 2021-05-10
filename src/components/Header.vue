<template>
  <div class="fly-header layui-bg-black">
  <div class="layui-container">
    <a class="fly-logo" href="/">
      <img :src="require('@/assets/images/logo.png')" alt="layui">
    </a>
    <ul class="layui-nav fly-nav layui-hide-xs">
      <li class="layui-nav-item layui-this">
        <a href="/"><i class="iconfont icon-jiaoliu"></i>交流</a>
      </li>
      <li class="layui-nav-item">
        <a href="case/case.html"><i class="iconfont icon-iconmingxinganli"></i>案例</a>
      </li>
      <li class="layui-nav-item">
        <a href="/" target="_blank"><i class="iconfont icon-ui"></i>框架</a>
      </li>
    </ul>
    <!-- {{userInfo}} -->
    <!-- 未登入的状态 -->
    <ul class="layui-nav fly-nav-user">
      <template v-if="!userInfo">
        <li class="layui-nav-item">
          <a class="iconfont icon-touxiang layui-hide-xs" href="../user/login.html"></a>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{path: '/login'}">登录</router-link>
        </li>
        <li class="layui-nav-item">
          <router-link :to="{path: '/register'}">注册</router-link>
        </li>
        <li class="layui-nav-item layui-hide-xs">
          <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" title="QQ登入" class="iconfont icon-qq"></a>
        </li>
        <li class="layui-nav-item layui-hide-xs">
          <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" title="微博登入" class="iconfont icon-weibo"></a>
        </li>
      </template>
      <template v-else>
        <!-- 登入后的状态 -->
        <li class="layui-nav-item" @mouseover="show" @mouseleave="hide">
          <a class="fly-nav-avatar" href="javascript:;">
            <cite class="layui-hide-xs">{{userInfo.name}}</cite>
            <i class="iconfont icon-renzheng layui-hide-xs" :title="'认证信息：' + userInfo.name" v-if="userInfo.isVip === 1"></i>
            <i class="layui-badge fly-badge-vip layui-hide-xs" v-if="userInfo.isVip === 1">VIP</i>
            <img :src="baseUrl + userInfo.pic" >
          </a>
          <dl class="layui-nav-child layui-anim-scale" :class="{'layui-show': isShow}">
            <dd><a href="user/set.html"><i class="layui-icon">&#xe620;</i>基本设置</a></dd>
            <dd><a href="user/message.html"><i class="iconfont icon-tongzhi" style="top: 4px;"></i>我的消息</a></dd>
            <dd><a href="user/home.html"><i class="layui-icon" style="margin-left: 2px; font-size: 22px;">&#xe68e;</i>我的主页</a></dd>
            <hr style="margin: 5px 0;">
            <dd><a href="/user/logout/" style="text-align: center;">退出</a></dd>
          </dl>
        </li>
      </template>
    </ul>
  </div>
</div>
</template>
<script>
import config from '@/config/index.js'
console.log('config1', config)
export default {
  name: 'Header',
  data () {
    return {
      baseUrl: process.env.NODE_ENV === 'production' ? config.baseURL.prod : config.baseURL.dev,
      isShow: false,
      timer: {}
    }
  },
  methods: {
    show () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isShow = true
      }, 200)
    },
    hide () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isShow = false
      }, 500)
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  }
}
</script>
