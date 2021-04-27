<template>
  <div class="list">
    <div class="fly-panel">
      <div class="fly-panel-title fly-filter">
        <a :class="{'layui-this': status === '' && tag === ''}" @click.prevent="search(0)">综合</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': status === 0}" @click.prevent="search(1)">未结</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': status === 1}" @click.prevent="search(2)">已结</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': status === '' && tag === '精华'}" @click.prevent="search(3)">精华</a>
        <span class="fly-filter-right layui-hide-xs">
          <a :class="{'layui-this': sort === 'created'}" @click.prevent="search(4)">按最新</a>
          <span class="fly-mid"></span>
          <a :class="{'layui-this': sort === 'answer'}" @click.prevent="search(5)">按热议</a>
        </span>
      </div>
      <list-item :lists="lists" @nextPage="nextPage"/>
    </div>
  </div>
</template>
<script>
import listItem from './ListItem'
import { getLists } from '@/api/content'
export default {
  name: 'List',
  data () {
    return {
      status: '',
      tag: '',
      sort: 'answer',
      page: 0,
      limit: 20,
      catalog: '',
      lists: []
    }
  },
  mounted () {
    this._getLists()
  },
  methods: {
    nextPage () {
      this.page++
      this._getLists()
    },
    _getLists () {
      const options = {
        catalog: this.catalog,
        isTop: 0,
        page: 0,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status
      }
      getLists(options).then(res => {
        console.log('_getLists -> res', res)
      })
    },
    search (val) {
      switch (val) {
        case 0:
          this.status = ''
          this.tag = ''
          break
        case 1:
          this.status = 0
          break
        case 2:
          this.status = 1
          break
        case 3:
          this.status = ''
          this.tag = '精华'
          break
        case 4:
          this.sort = 'created'
          break
        case 5:
          this.sort = 'answer'
          break
      }
    }
  },
  components: {
    listItem
  }
}
</script>
<style lang="scss">

</style>
