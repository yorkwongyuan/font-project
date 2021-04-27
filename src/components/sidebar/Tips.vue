<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main">
      <ul class="layui-clear wyuan-quick">
        <li class="layui-col-xs6">
          <a href="/jie/4281/" target="_blank">wyuan</a>
        </li>
        <li class="layui-col-xs6">
          <a href="/jie/4281/" target="_blank">wyuan</a>
        </li>
        <li class="layui-col-xs6">
          <a href="/jie/4281/" target="_blank">wyuan</a>
        </li>
        <li class="layui-col-xs6">
          <a href="/jie/4281/" target="_blank">wyuan</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tips'
}
</script>
<style lang="scss">
$--border-color: #f2f2f2;
.fly-panel-main {
  padding: 0 15px;
}
.wyuan-quick {
  border: 1px solid $--border-color;
  border-right: none;
  border-bottom: none;
  .layui-col-xs6{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border: 1px solid $--border-color;
    text-align:center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    border-left: none;
    border-top: none;
    a {
      display: block;
    }
  }
}
</style>
