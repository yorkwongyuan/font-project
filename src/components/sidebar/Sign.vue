<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinHelp" @click="showModel">说明</a>
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinTop" @click="showTopList">活跃榜<span class="layui-badge-dot"></span></a>
      <span class="fly-signin-days">已连续签到<cite>{{count}}</cite>天</span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <!-- 未签到的状态 -->
      <template v-if="!isSign">
        <button class="layui-btn layui-btn-danger" id="LAY_signin" @click="sign()">今日签到</button>
        <span>可获得<cite>{{favs}}</cite>飞吻</span>
      </template>
      <!-- 已签到状态 -->
      <template v-else>
        <button class="layui-btn layui-btn-disabled">今日已签到</button>
        <span>获得了<cite>{{favs}}</cite>飞吻</span>
      </template>
    </div>
    <div class="modal" v-show="isShowModal">
      <div class="mask" @click="close"></div>
      <div class="layui-layer layui-layer-page" :class="{active: isShowModal}">
        <div class="layui-layer-title">
          签到说明
          <i class="layui-icon layui-icon-close pull-right" @click="close"></i>
        </div>
        <div class="layui-layer-content">
          <div class="layui-text">
            <blockquote class="layui-elem-quote">
              "签到"可获得的社区积分，规则如下
            </blockquote>
            <table class="layui-table">
              <thead>
                <tr>
                  <th>连续签到天数</th>
                  <th>每天可获得积分</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&lt;5</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>&ge;5</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>&ge;15</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>&ge;30</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>&ge;100</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>&ge;365</td>
                  <td>50</td>
                </tr>
              </tbody>
            </table>
            <div>
              <p>中间若有间隔，则连续天数重新计算</p>
              <p class="orange">不可复用程序自动签到,否则积分清零</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   <!--  -->
  </div>
</template>
<script>
import { userSign } from '@/api/user.js'
export default {
  name: 'Sign',
  data () {
    return {
      isShowModal: false,
      isShowTopList: false,
      lists: [{ name: 'xxx', count: 12, created: '2021-3-12' }, { name: 'xxx', count: 12, created: '2021-3-12' }],
      current: 0,
      isSign: this.$store.state.userInfo && this.$store.state.userInfo.isSign
    }
  },
  computed: {
    favs () {
      let fav = 0
      if (this.count < 5) {
        fav = 5
      } else if (this.count >= 5 && this.count < 15) {
        fav = 10
      } else if (this.count >= 15 && this.count < 30) {
        fav = 15
      } else if (this.count >= 30 && this.count < 100) {
        fav = 20
      } else if (this.count >= 100 && this.count < 365) {
        fav = 30
      } else if (this.count >= 365) {
        fav = 50
      }
      return fav
    },
    count () {
      if (this.$store.state.userInfo) {
        if (typeof this.$store.state.userInfo.count !== 'undefined') {
          return this.$store.state.userInfo.count
        } else {
          return 0
        }
      } else {
        return 0
      }
    }
  },
  methods: {
    selectTab (index) {
      this.current = index
    },
    showModel () {
      this.isShowModal = true
    },
    showTopList () {
      this.isShowTopList = true
    },
    close () {
      this.isShowModal = false
    },
    closeTopList () {
      this.isShowTopList = false
    },
    sign () {
      userSign().then(res => {
        if (res.code === 200) {
          const user = this.$store.state.userInfo
          user.favs = res.favs
          user.count = res.count
          console.log('sign -> user', user)
          this.$store.commit('setUserInfo', user)
        } else {
          this.$alert('您已经签到了')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes boundIn {
  0%{
    opacity: 0;
    transform: scale(0.5)
  }
  100%{
    opacity: 1;
    transform: scale(1)
  }
}
.mask{
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 20000;
}
.layui-layer-page{
  &.active{
    animation-duration: .3s;
    animation-fill-mode: both;
    animation-name: boundIn
  }
}
.layui-layer {
  position: fixed;
  width: 300px;
  height: 480px;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -150px;
  z-index: 21000;
  background-color: #fff;
  .layui-layer-title {
    height: 42px;
    line-height: 42px;
    padding:0 20px;
    color: #333;
    background-color: #f8f8f8;
  }
  .layui-layer-content {
    padding: 20px;
  }
  .layui-tab-content {
    padding: 0 10px;
  }
  .layui-tab-item{
    line-height: 45px;
    li {
      border-bottom: 1px dotted #dcdcdc;
      &:last-child {
        border-bottom: none;
      }
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 2px;
    }
  }
}
</style>
