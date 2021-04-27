<template>
  <div class="panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <!-- <li class="layui-hide-xs"><a href="">首页</a></li> -->
        <router-link to="/" tag="li">
          <a href="">首页</a>
          <!-- <span class="layui-badge-dot" v-if="item.isNew"></span> -->
        </router-link>
        <router-link v-for="(item,index) in lists" :key="'panel' + index" :to="item.path" tag="li">
          <a href="">{{item.name}}</a>
          <span class="layui-badge-dot" v-if="item.isNew"></span>
        </router-link>
        <li class="layui-hide-xs">
          <div class="line"></div>
        </li>
        <template v-if="isLogin">
          <li class="layui-hide-xs"><a href="">我发表的帖</a></li>
          <li class="layui-hide-xs"><a href="">我收藏的帖</a></li>
        </template>
      </ul>
      <div class="right">
        <span class="layui-icon layui-icon-search"></span>
        <a href="" class="layui-btn">发表新帖</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLogin: this.$store.state.isLogin,
      lists: [
        {
          name: '提问',
          path: '/index/ask',
          isNew: false
        },
        {
          name: '分享',
          path: '/index/share',
          isNew: false
        },
        {
          name: '讨论',
          path: '/index/discuss',
          isNew: false
        },
        {
          name: '建议',
          path: '/index/advise',
          isNew: false
        },
        {
          name: '公告',
          path: '/index/notice',
          isNew: false
        },
        {
          name: '动态',
          path: '/index/logs',
          isNew: false
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@media (max-width: 768px) {
  .panel {
    height: auto !important;
    ul > li {
      width: 33.33%;
    }
  }
}
.panel {
  position: relative;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  .layui-this {
    color: #009688;
  }
  ul {
    li {
      display: inline-block;
      a{
        padding: 0 20px;
      }
    }
    .line {
      display: inline-block;
      width: 1px;
      height: 10px;
      background-color: #e2e2e2;
      vertical-align: middle;
      margin: 0 20px;
    }
  }
  .right{
    position: absolute;
    top: 0;
    right: 0;
    .layui-icon-search {
      margin-right: 10px;
      font-size: 20px;
      &:hover {
        color: #5fb878;
        cursor: pointer;
      }
    }
  }
}
</style>
