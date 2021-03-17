<template>
  <div class="layui-container fly-marginTop login">
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li class="layui-this">登录</li>
        <li>
          <router-link :to="{path: '/reg'}">注册</router-link>
        </li>
      </ul>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane">
            <div method="post" action="">
              <div class="layui-form-item">
                <label for="L_email" class="layui-form-label">用户名</label>
                <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
                  <div class="layui-input-inline">
                    <input type="text" id="L_email" name="username" lay-verify="required" autocomplete="off" class="layui-input" v-model="username">
                  </div>
                  <div class="layui-form-mid error-tips">
                    {{errors[0]}}
                  </div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <ValidationProvider v-slot="{errors}" name="password" rules="min:6">
                  <div class="layui-input-inline">
                    <input type="password" name="password" v-model="password" autocomplete="off" class="layui-input">
                  </div>
                   <div class="layui-form-mid error-tips">
                    {{errors[0]}}
                  </div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">验证码</label>
                <ValidationProvider v-slot="{errors}" name="code" rules="required|length:4">
                  <div class="layui-input-inline">
                    <input type="text" name="code" v-model="code" placeholder="请输入验证码" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid code" @click="_getCode">
                    <span v-html="svg"></span>
                  </div>
                  <div class="layui-form-mid error-tips">
                    {{errors[0]}}
                  </div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <button class="layui-btn" lay-filter="*" lay-submit @click="_login">立即登录</button>
                <span style="padding-left:20px;">
                  <router-link :to="{path: '/forget'}">忘记密码？</router-link>
                </span>
              </div>
              <div class="layui-form-item fly-form-app">
                <span>或者使用社交账号登入</span>
                <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
// import * as rules from 'vee-validate/dist/rules'
// import zh from 'vee-validate/dist/locale/zh_CN'
import { getCode, login } from '@/api/login.js'
// import uuid from 'uuid/v4'
// for (const [key, value] of Object.entries(rules)) {
//   extend(key, { ...value, message: zh.messages[key] })
// }
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: '',
      uuid: ''
    }
  },
  methods: {
    _getCode () {
      getCode().then(res => {
        if (res.code === 200) {
          this.svg = res.message
          this.uuid = res.uuid
        }
      })
    },
    _login () {
      login({ username: this.username, password: this.password, uuid: this.uuid, code: this.code }).then(res => {
        if (res.code === 200) {
          this.svg = res.message
          this.uuid = res.uuid
        }
      })
      console.log(this.uuid, 'uuid')
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    this._getCode()
  }
}
</script>

<style scoped lang="scss">
.login {
  .error-tips{
    color: red
  }
  .code {
    position: relative;
    top: -15px;
  }
}
</style>
