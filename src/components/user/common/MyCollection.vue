<template>
  <div>
    <table class="layui-table">
      <thead>
        <tr>
          <th class="title">
            <div class="layui-table-cell pl10">
              <span>帖子标题</span>
            </div>
          </th>
          <th>
            <div class="layui-table-cell text-right pr0">
              <span>收藏时间</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>帖子的标题</td>
          <td class="text-right">帖子的时间</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'my-collection'
}
</script>
<style lang="scss" scoped>
.title{
  width: 70%;
}
</style>
