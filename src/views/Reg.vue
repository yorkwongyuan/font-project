<template>
 <div class="layui-container fly-marginTop register">
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{path: '/login'}">登录</router-link>
        </li>
        <li class="layui-this">注册</li>
      </ul>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane">
            <form method="post">
              <div class="layui-form-item">
                <label for="L_email" class="layui-form-label">邮箱</label>
                <ValidationProvider name="邮箱" rules="email|required" v-slot="{ errors }">
                  <div class="layui-input-inline">
                    <input type="text" name="email" v-model="email" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                  <div class="layui-form-mid">{{errors[0]}}</div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <label for="L_username" class="layui-form-label">昵称</label>
                <ValidationProvider name="昵称" rules="required" v-slot="{ errors }">
                  <div class="layui-input-inline">
                    <input type="text" v-model="username" name="username" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid">{{errors[0]}}</div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <ValidationProvider name="密码" rules="min:6|max:16" v-slot="{ errors }">
                <div class="layui-input-inline">
                  <input type="password" name="password" v-model="password" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                <div class="layui-form-mid">{{errors[0]}}</div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <label for="L_repass" class="layui-form-label">确认密码</label>
                <ValidationProvider name="密码" rules="min:6|max:16" v-slot="{ errors }">
                  <div class="layui-input-inline">
                    <input type="password" name="password" v-model="password" autocomplete="off" class="layui-input">
                  </div>
                  <div class="layui-form-mid">{{errors[0]}}</div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <label for="L_vercode" class="layui-form-label">验证码</label>
                <ValidationProvider name="验证码" rules="required" v-slot="{ errors }">
                <div class="layui-input-inline">
                  <input type="text" name="code" placeholder="请输入验证码" v-model="code" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid code" v-html="svg" @click="_getCode"></div>
                <div class="layui-form-mid">{{errors[0]}}</div>
                </ValidationProvider>
              </div>
              <div class="layui-form-item">
                <button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
              </div>
              <div class="layui-form-item fly-form-app">
                <span>或者直接使用社交账号快捷注册</span>
                <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'
import { getCode } from '@/api/login.js'
for (const [key, value] of Object.entries(rules)) {
  extend(key, { ...value, message: zh.messages[key] })
}
export default {
  name: 'Reg',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      svg: '',
      code: ''
    }
  },
  components: {
    ValidationProvider
  },
  methods: {
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

<style lang="scss" scoped>
.register {
  .code {
    position: relative;
    top: -15px;
  }
}
</style>
