<template>
  <div class="fly-panel fly-rank fly-rank-reply" id="LAY_replyRank">
    <h3 class="fly-panel-title">回贴周榜</h3>
    <dl>
      <!--<i class="layui-icon fly-loading">&#xe63d;</i>-->
      <dd v-for="(item, index) in lists" :key="index + 'top'">
        <a href="user/home.html">
          <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>{{item.title}}</cite><i>{{item.answer}}次回答</i>
        </a>
      </dd>
    </dl>
  </div>
</template>
<script>
import { getTop } from '@/api/content'
export default {
  name: 'HotList',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    _getTop () {
      getTop().then(res => {
        console.log('_getTop -> res', res)
        this.lists = res.data
      }).catch(error => {
        if (error) {
          this.$alert(error.msg)
        }
      })
    }
  },
  mounted () {
    this._getTop()
  }
}
</script>
<style lang="scss">

</style>
