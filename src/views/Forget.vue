<template>
<div class="layui-container fly-marginTop forget">
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li><router-link :to="{path: '/login'}">登录</router-link></li>
        <li class="layui-this">找回密码<!--重置密码--></li>
      </ul>
      <form class="layui-form layui-tab-content" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane">
            <div>
              <div class="layui-form-item">
                <label for="email" class="layui-form-label">邮箱</label>
                <div class="layui-input-inline">
                  <input type="text" name="email" v-model="mail" autocomplete="off" class="layui-input">
                </div>
              </div>
              <div class="layui-form-item">
                <label for="code" class="layui-form-label">验证码</label>
                <div class="layui-input-inline">
                  <input type="text" name="code" placeholder="请输入验证码" v-model="code" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid code" v-html="svg" @click="_getCode">
                </div>
              </div>
              <div class="layui-form-item">
                <button type="button" class="layui-btn" @click="_sendMail">提交</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</template>
<script>
import { sendMail, getCode } from '@/api/login.js'
export default {
  name: 'Forget',
  data () {
    return {
      mail: '',
      code: '',
      svg: ''
    }
  },
  methods: {
    _sendMail () {
      sendMail({ username: this.mail, code: this.code })
    },
    _getCode () {
      getCode().then(res => {
        if (res.code === 200) {
          this.svg = res.message
        }
      })
    }
  },
  mounted () {
    this._getCode()
  }
}
</script>
<style lang="scss">
.forget {
  .code {
    position: relative;
    top: -15px;
  }
}
</style>
