<template>
  <div>
    <ul class="fly-list">
      <li v-for="(item, index) in items" :key="'items' + index">
        <a href="user/home.html" class="fly-avatar">
          <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
        </a>
        <h2>
          <a class="layui-badge">{{item.catalog}}</a>
          <a href="jie/detail.html">{{item.title}}</a>
        </h2>
        <div class="fly-list-info">
          <a href="user/home.html" link>
            <cite>{{item.uid.name}}</cite>
            <i class="layui-badge fly-badge-vip" v-if="item.uid.isVip !== '0'">{{ 'VIP' + item.uid.isVip }}</i>
          </a>
          <span>{{item.created | moment}}</span>
          <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻">
            <i class="iconfont icon-kiss"></i>
            {{item.fav}}
          </span>
          <span class="layui-badge fly-badge-accept layui-hide-xs" v-show="item.status !== 0">
            已结
          </span>
          <span class="fly-list-nums">
            <i class="iconfont icon-pinglun1" title="回答"></i>
            {{item.answer}}
          </span>
        </div>
        <div class="fly-list-badge" v-show="item.tags.length > 0">
          <span class="layui-badge" :class="tag.class" v-for="(tag, index) in item.tags" :key="'tag' + index">
            {{tag.name}}
          </span>
        </div>
      </li>
    </ul>
    <div style="text-align: center" v-show="isShowBottom">
      <div class="laypage-main" v-if="!isEnd">
        <a href="" class="laypage-next" @click.prevent="more()">更多求解</a>
      </div>
      <div v-else class="nomore gray">
        没有更多了
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import moment from 'moment'
import 'moment/locale/zh-cn'
export default {
  name: 'list-item',
  props: {
    lists: {
      default: () => [],
      type: Array
    },
    isShowBottom: {
      type: Boolean,
      default: true
    },
    isEnd: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    more () {
      this.$emit('nextPage')
    }
  },
  filters: {
    moment (date) {
      // 超过7天，显示日期
      if (moment(date).isBefore(moment().subtract(7, 'days'))) {
        return moment(date).format('YYYY-MM-DD')
      } else {
        // 一小时前，xx小时前，xx天前
        return moment(date).from(moment())
      }
    }
  },
  computed: {
    items () {
      _.map(this.lists, (item) => {
        switch (item.catalog) {
          case 'ask':
            item.catalog = '提问'
            break
          case 'share':
            item.catalog = '分享'
            break
          case 'advise':
            item.catalog = '建议'
            break
          case 'discuss':
            item.catalog = '交流'
            break
          case 'logs':
            item.catalog = '动态'
            break
          case 'notice':
            item.catalog = '公告'
            break
        }
      })
      return this.lists
    }
  }
}
</script>
<style lang="scss">
.nomore {
  padding: 30px 0;
  font-size: 16px;
}
</style>
