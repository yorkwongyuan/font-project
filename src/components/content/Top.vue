<template>
  <div class="list" v-if="lists.length > 0">
    <div class="fly-panel">
      <div class="fly-panel-title fly-filter">
        <a>置顶</a>
        <a href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" id="LAY_goSignin" style="color: #FF5722;">去签到</a>
      </div>
      <list-item :isShowBottom="false" :lists="lists"/>
    </div>
  </div>
</template>
<script>
import listItem from './ListItem'
export default {
  name: 'Top',
  data () {
    return {
      lists: [{
        uid: {
          name: 'wyuan',
          isVip: 1
        },
        title: '大前端课程',
        content: '',
        created: '2021-4-25 01:00:00',
        catalog: 'ask',
        fav: 40,
        isEnd: 0,
        reads: 10,
        answer: 0,
        status: 0,
        isTop: 0,
        tags: [
          { name: '精华', class: 'layui-bg-red' },
          { name: '热门', class: 'layui-bg-blue' }
        ]
      }]
    }
  },
  components: {
    listItem
  }
}
</script>
<style lang="scss">

</style>
