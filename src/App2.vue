<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <ValidationProvider v-slot="{errors}" rules="required|email" name="用户名">
            <div class="layui-input-inline">
                <input type="text" v-model="name" name="name"  lay-verify="required" placeholder="请输入用户姓名" autocomplete="off" class="layui-input">
            </div>
            <span class="layui-form-mid error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </form>
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input type="password" name="title" v-model="password" required  lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
          </div>
        </div>
      </form>
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" required v-model="code" lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid svg" v-html="svg" @click="getCaptcha"></div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm">点击登录</button>
        <a href="http://www.layui.com" class="my-link">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'
// 统一引入错误提示配置
for (const [key, value] of Object.entries(rules)) {
  extend(key, {
    ...value, message: zh.messages[key]
  })
}
export default {
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
    }
  },
  components: {
    ValidationProvider
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/getCaptcha').then(res => {
        if (res.status === 200) {
          this.svg = res.data.message
        }
      })
    },
    setName (value) {
      this.$v.name.$touch(value)
    },
    checkForm () {
      const arr = [{ key: 'name', label: '姓名' }, { key: 'password', label: '密码' }, { key: 'code', label: '验证码' }]
      const emptyItemArr = arr.filter(item => this[item.key] === '')
      if (emptyItemArr[0]) {
        console.log(emptyItemArr[0])
      }
    }
  },
  mounted () {
    this.getCaptcha()
  }
}
</script>
<style lang="scss" scoped>
#app{
  background-color: #f2f2f2;
  .layui-container {
    background-color: #fff;
  }
  input {
    width: 190px;
  }
  .my-link {
    margin-left: 10px;
    &:hover{
      color: #009688;
    }
  }
  .svg {
    position: relative;
    top: -15px;
  }
  .error {
    color: red;
  }
}
</style>
