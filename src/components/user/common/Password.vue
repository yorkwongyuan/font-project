<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <ValidationObserver v-slot="{ validate }" ref="observer">
      <!-- <form action="/user/repass" method="post"> -->
      <div class="layui-form-item">
        <ValidationProvider v-slot="{errors}" name="password" rules="min:6|max:16">
          <div class="layui-row">
            <label for="L_nowpass" class="layui-form-label">当前密码</label>
            <div class="layui-input-inline">
            <input type="password" name="password" v-model="password" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid error-tips">
            {{errors[0]}}
          </div>
         </div>
        </ValidationProvider>
      </div>
      <div class="layui-form-item">
        <ValidationProvider v-slot="{errors}" name="password" rules="min:6|max:16|confirmed:confirmation">
          <div class="layui-row">
            <label for="L_pass" class="layui-form-label">新密码</label>
            <div class="layui-input-inline">
              <input type="password" name="password" v-model="newPwd" autocomplete="off" class="layui-input">
            </div>
            <div class="layui-form-mid error-tips">
              {{errors[0]}}
            </div>
          </div>
        </ValidationProvider>
        <div class="layui-form-mid layui-word-aux">6到16个字符</div>
      </div>
      <div class="layui-form-item">
        <ValidationProvider vid="confirmation" v-slot="{ errors }">
          <div class="layui-row">
            <label for="L_repass" class="layui-form-label">确认密码</label>
            <div class="layui-input-inline">
              <input type="password" name="password" v-model="reNewPwd" autocomplete="off" class="layui-input">
            </div>
            <div class="error-tips layui-form-mid">{{errors[0]}}</div>
          </div>
        </ValidationProvider>
      </div>
      <div class="layui-form-item">
        <button class="layui-btn" lay-submit @click="validate().then(_submit)">确认修改</button>
      </div>
    <!-- </form> -->
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'
import { changePwd } from '@/api/user'
for (const [key, value] of Object.entries(rules)) {
  extend(key, { ...value, message: zh.messages[key] })
}
export default {
  name: 'password',
  data () {
    return {
      newPwd: '',
      reNewPwd: '',
      password: ''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    async _submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) return
      console.log('submit')
      if (this.newPwd === this.password) {
        this.$pop('shake', '新旧密码不能相同')
        return
      }
      changePwd({ newPwd: this.newPwd, oldPwd: this.password }).then(res => {
        if (res.code === 200) {
          console.log('正确')
          this.password = ''
          this.reNewPwd = ''
          this.newPwd = ''
          this.$pop('', '修改密码成功')
        } else {
          this.$pop('shake', res.msg)
          console.log('错误')
        }
      })
    }
  }
}
</script>
