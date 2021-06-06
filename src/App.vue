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
.pl10 {
  padding-left: 10px;
}
.pull-right{
  float:right;
}
.text-right{
  text-align:right;
}
.pr0{
  padding-right: 0;
}
.orange {
  color: #ff5722;
}
.panel {
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.02);
  transition: all .2s;
  &.main{
    margin: 0 0 10px 225px;
  }
}
.fly-panel{
  padding: 20px;
}
.fly-panel-user{
  padding-top: 5px;
}

@for $i from 0 through 5 {
  .pd#{$i} {
    padding: $i * 10 + px!important
  }
  .pl#{$i} {
    padding-left: $i * 10 + px!important;
  }
  .pr#{$i} {
    padding-right: $i * 10 + px!important;
  }
  .pb#{$i} {
    padding-bottom: $i * 10 + px!important;
  }
  .mr#{$i} {
    margin-right: $i * 10 + px!important;
  }
  .mt#{$i} {
    margin-top: $i * 10 + px!important;
  }
  .ml#{$i} {
    margin-left: $i * 10 + px!important;
  }
}

</style>
