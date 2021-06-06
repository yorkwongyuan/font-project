<template>
  <div class="layui-container flex">
    <div class="layui-row font pb2">确定更新账号为{{params.username}}吗?</div>
    <div class="layui-row">
      <button @click="submit" class="layui-btn" :class="{'layui-btn-disabled': isSend}">确定修改</button>
      <router-link :to="{path: '/'}" class="layui-btn layui-btn-primary">返回首页</router-link>
    </div>
  </div>
</template>
<script>
import { updateUserName } from '@/api/user.js'
export default {
  name: 'confirm',
  data () {
    return {
      params: {},
      isSend: false
    }
  },
  methods: {
    submit () {
      if (this.isSend) return
      updateUserName(this.params).then(res => {
        if (res.code === 200) {
          this.$pop('', '修改成功')
          this.isSend = true
          setTimeout(() => {
            this.$router.push('/')
          }, 1000)
        } else {
          this.isSend = false
          this.$pop('shake', '修改失败')
        }
      })
    }
  },
  mounted () {
    const querystr = window.location.href.replace(/.*\?/, '')
    const arr = querystr.split('&').map(item => item.split('='))
    this.params = Object.fromEntries(arr)
    this.params.username = this.params && decodeURIComponent(this.params.username)
    console.log('mounted -> this.params', this.params)
  }
}
</script>
<style lang="scss">
.flex {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 260px;
}
.font {
  font-size: 16px;
  color: #333;
}
</style>
