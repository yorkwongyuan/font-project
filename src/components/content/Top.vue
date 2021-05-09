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
import { getLists } from '@/api/content'
export default {
  name: 'Top',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    _getLists () {
      const options = {
        isTop: 1,
        limit: 10
      }
      getLists(options).then(res => {
        this.lists = res.data
        console.log('_getLists111 -> this.lists', this.lists)
      }).catch(error => {
        if (error) {
          this.$alert(error.msg)
        }
      })
    }
  },
  mounted () {
    this._getLists()
  },
  components: {
    listItem
  }
}
</script>
<style lang="scss">

</style>
