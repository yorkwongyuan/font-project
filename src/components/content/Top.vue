<template>
  <div class="list">
    <div class="fly-panel">
      <div class="fly-panel-title fly-filter">
        <a>置顶</a>
        <a href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" id="LAY_goSignin" style="color: #FF5722;">去签到</a>
      </div>
      <list-item />
    </div>
  </div>
</template>
<script>
import listItem from './ListItem'
export default {
  name: 'Top',
  components: {
    listItem
  }
}
</script>
<style lang="scss">

</style>
