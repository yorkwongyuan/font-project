<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Mock from 'mockjs'
// import axios from 'axios'
export default {
  name: 'app',
  components: {
    Footer,
    Header
  },
  methods: {
  },
  mounted () {
    const obj = { a: 1, b: 'haha', c: 'hehe' }
    Mock.mock('http://wy.mayfollower.com/getdata', {
      'list|1-3': [{
        'id|+1': 1,
        name: '@name',
        'age|10-28': 0,
        birthDay: '@date("yyyy-MM-dd")',
        city: '@city',
        'formObj|2': obj
      }]
    })
  }
}
</script>
<style lang="scss">
@import "assets/css/global.css";
.gray {
  color: #999
}
</style>
