<template>
  <!-- 活跃榜 -->
  <div class="modal">
    <div class="mask" @click="closeTopList"></div>
    <div class="layui-layer layui-layer-page" :class="{active: isShowModal}">
      <div class="layui-layer-title">
        签到活跃榜 - TOP
        <i class="layui-icon layui-icon-close pull-right" @click="closeTopList"></i>
      </div>
      <div class="layui-layer-content pd0">
        <div class="layui-tab layui-tab-brief">
            <ul class="layui-tab-title">
              <li :class="{'layui-this': current === 0}" @click="selectTab(0)">最新签到</li>
              <li :class="{'layui-this': current === 1}" @click="selectTab(1)">今日最快</li>
              <li :class="{'layui-this': current === 2}" @click="selectTab(2)">总签到榜</li>
            </ul>
            <div class="layui-tab-content">
              <ul class="layui-tab-item layui-show">
                <li v-for="(item, index) in lists" :key="'sign' + index" class="pl1">
                  <img src="/img/icons/android-chrome-192x192.png" alt="" class="mr1">
                  <cite class="fly-link">{{item.name}}</cite>
                  <span class="fly-grey" v-if="current !== 2">
                    签到于 {{item.created}}
                  </span>
                  <span class="fly-grey" v-else>
                    已经连续签到
                    <i class="orange">{{item.count}}</i>天
                  </span>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sign-list'
}
</script>
