<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show MyInfo">
    <!-- <form method="post"> -->
    <ValidationObserver v-slot="{ validate }" ref="observer">
      <div class="layui-form-item">
      <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
          <label for="L_email" class="layui-form-label">邮箱</label>
          <div class="layui-input-inline">
            <input type="text" id="L_email" name="email" required lay-verify="email" autocomplete="off" value="" class="layui-input" v-model="username">
          </div>
          <!-- <div class="layui-form-mid layui-word-aux">如果您在邮箱已激活的情况下，变更了邮箱，需<a href="activate.html" style="font-size: 12px; color: #4f99cf;">重新验证邮箱</a>。</div> -->
        <div class="layui-form-mid error-tips">
          {{errors[0]}}
        </div>
      </ValidationProvider>
      </div>
      <div class="layui-form-item">
        <ValidationProvider name="name" rules="required" v-slot="{errors}">
          <label for="L_username" class="layui-form-label">昵称</label>
          <div class="layui-input-inline">
            <input  v-model="name" type="text" id="L_username" name="username" required lay-verify="required" autocomplete="off" value="" class="layui-input">
          </div>
          <div class="layui-form-mid error-tips">
            {{errors[0]}}
          </div>
        </ValidationProvider>
      </div>
      <div class="layui-form-item">
        <label for="L_city" class="layui-form-label">城市</label>
        <div class="layui-input-inline">
          <input  v-model="location" type="text" id="L_city" name="city" autocomplete="off" value="" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label for="L_city" class="layui-form-label">性别</label>
         <div class="layui-inline ml1 gray">
          <div class="layui-input-inline mt1">
            <label for="gender1" class="mr1">
              <input id="gender1" type="radio" name="sex" value="0" title="男" v-model="gender">
              <i class="layui-icon" :class="{'layui-icon-radio': gender === '0', 'layui-icon-circle': gender !== '0'}"></i>
              男
            </label>
            <label for="gender2">
              <input id="gender2" type="radio" name="sex" value="1" title="女" v-model="gender">
              <i class="layui-icon" :class="{'layui-icon-radio': gender === '1', 'layui-icon-circle': gender !== '1'}"></i>
              女
            </label>
          </div>
        </div>
      </div>
      <div class="layui-form-item layui-form-text">
        <label for="L_sign" class="layui-form-label">签名</label>
        <div class="layui-input-block">
          <textarea  v-model="regmark" placeholder="随便写些什么刷下存在感" class="layui-textarea" style="height: 80px;"></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <button class="layui-btn" key="set-mine" lay-filter="*" lay-submit @click="validate().then(submit)">确认修改</button>
      </div>
    <!-- </form> -->
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { updateUserInfo } from '@/api/user.js'
export default {
  name: 'my-info',
  data () {
    return {
      username: '',
      name: '',
      location: '',
      gender: '',
      regmark: ''
    }
  },
  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()
      console.log('submit -> isValid', isValid)
      if (!isValid) return
      const arr = ['username', 'name', 'location', 'gender', 'regmark']
      const params = {}
      arr.forEach(key => {
        params[key] = this[key]
      })
      updateUserInfo(params).then(res => {
        if (res.code === 200) {
          this.$pop('', res.msg)
          this.$store.commit('setUserInfo', res.data)
        } else {
          this.$pop('shake', res.msg)
        }
      })
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mounted () {
    const { username, name, location, regmark, gender } = this.$store.state.userInfo
    this.username = username || ''
    this.name = name || ''
    this.location = location || ''
    this.regmark = regmark || ''
    this.gender = gender || ''
  }
}
</script>
<style lang="scss">
@import "@/assets/css/color.scss";
.MyInfo {
  .layui-icon-circle, .layui-icon-radio {
    cursor: pointer;
    color: $--color-primary;
  }
  .error-tips{
    color: red
  }
}
</style>
