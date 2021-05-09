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
      <list-item :lists="lists" @nextPage="nextPage" :isEnd="isEnd"/>
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
      status: '0',
      tag: '',
      sort: 'created',
      page: 0,
      limit: 20,
      catalog: 'index',
      lists: [],
      isEnd: false,
      isLoading: false,
      current: '' // 当前的tab
    }
  },
  mounted () {
    // let mock = {
    //   "code":"200",
    //   "msg": "mock",
    //   "data": [{
    //     "uid": {
    //       "name": "wyuan",
    //       "isVip": "1"
    //     },
    //     "title": "大前端课程",
    //     "content": "",
    //     "created": "2021-4-25 01:00:00",
    //     "catalog": "ask",
    //     "fav": "40",
    //     "isEnd": "0",
    //     "reads": "10",
    //     "answer": "0",
    //     "status": "0",
    //     "isTop": "0",
    //     "tags": [
    //       { "name": "精华", "class": "layui-bg-red" },
    //       { "name": "热门", "class": "layui-bg-blue" }
    //     ]
    //   }]
    // }
    const catalog = this.$route.params.catalog
    if (typeof catalog !== 'undefined' && catalog !== '') {
      console.log('mounted -> catalog', catalog)
      this.catalog = catalog
    }
    this._getLists()
  },
  watch: {
    current (newVal, oldVal) {
      console.log('current -> oldVal', oldVal)
      console.log('current -> newVal', newVal)
      if (newVal !== oldVal) {
        this.init()
      }
    },
    '$route' (newVal, oldVal) {
      const catalog = this.$route.params.catalog
      if (typeof catalog !== 'undefined' && catalog !== '') {
        console.log('catalog', catalog)
        this.catalog = catalog
      }
      this.init()
    }
  },
  methods: {
    init () {
      this.lists = []
      this.page = 0
      this.isEnd = false
      this._getLists()
    },
    nextPage () {
      this.page++
      if (this.isEnd) return
      this._getLists()
    },
    _getLists () {
      if (this.isLoading) return
      const options = {
        catalog: this.catalog,
        isTop: 0,
        page: this.page,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status
      }
      this.isLoading = true
      getLists(options).then(res => {
        this.isLoading = false
        console.log('_getLists -> res', res)
        // 如果返回数小于规定的数量，则不执行
        if (res.data.length < this.limit) {
          this.isEnd = true
        }
        // 如果数据为空则直接赋值,否则合并
        // 错误提示
        if (this.lists.length === 0) {
          this.lists = res.data
        } else {
          this.lists = this.lists.concat(res.data)
        }
      }).catch(error => {
        if (error) {
          this.isLoading = false
          this.$alert(error.msg)
        }
      })
    },
    search (val) {
      if (this.current === val) return
      this.current = val
      console.log('search -> val', val)
      switch (val) {
        case 0:
          this.catalog = ''
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
