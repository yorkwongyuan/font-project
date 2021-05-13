<template>
  <div class="panel main pb20">
    <div class="msg">你是大人物啊</div>
    <div class="layui-row layui-col-space20">
      <div class="layui-col-md6">
        <div class="panel border">
          <div class="title">我的会员信息</div>
          <div class="content">
            <p>你的积分有: 50</p>
            <p>您当前为非vip</p>
          </div>
        </div>
      </div>
      <div class="layui-col-md6">
        <Sign class="border"></Sign>
      </div>
      <div class="layui-col-md12 mt-20">
        <div class="panel border" style="height: auto">
          <div class="title">快捷方式</div>
          <div class="content">
            <ul class="layui-row layui-col-space10">
              <li class="layui-col-sm3 layui-col-xs4">
                <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改信息</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改头像</span>
                </a></li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>修改密码</span>
                </a></li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>账号绑定</span>
                </a></li>
            </ul>
            <ul class="layui-row layui-col-space10">
              <li class="layui-col-sm3 layui-col-xs4">
                <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>发表新帖</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>查看分享</span>
                </a></li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>我的帖子</span>
                </a></li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>我的收藏</span>
                </a></li>
            </ul>
            <ul class="layui-row layui-col-space10">
              <li class="layui-col-sm3 layui-col-xs4">
                <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>其他资料</span>
                </a>
              </li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>关注公众号</span>
                </a></li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>文档</span>
                </a></li>
              <li class="layui-col-sm3 layui-col-xs4"> <a href="">
                  <div class="layui-icon layui-icon-set shortcut"></div>
                  <span>后台管理</span>
                </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sign from '../sidebar/Sign'
export default {
  name: 'user-center',
  components: {
    Sign
  }
}
</script>
<style lang="scss">
@media screen and (max-width: 768px) {
  .panel{
    &.main{
      margin: 0 !important;
    }
  }
}

.msg {
  background-color: #f8f8f8;
  color: #666;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.border{
  border: 1px solid #e6e6e6;
}
.pd20{
  padding: 20px;
}
.mt-20{
  margin-top: -20px;
}
.title {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px dotted #e9e9e9;
  font-size: 14px;
  padding: 0 15px;
}
.shortcut{
  background-color: #2f9688;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align:center;
  color: white;
  border-radius: 2px;
  font-size: 30px;
}
li {
  text-align:center;
}
.content {
  padding: 18px 15px;
  line-height: 26px;
  font-size: 14px;
  color: #666;
}
</style>
