<template>
  <div class="pic-upload layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <div class="avatar-add">
        <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
        <label for="pic" class="layui-btn upload-img">
          <i class="layui-icon">&#xe67c;</i>上传头像
        </label>
        <img :src="baseURL + ($store.state.userInfo && $store.state.userInfo.pic)">
        <span class="loading"></span>
      </div>
    </div>
    <input type="file" id="pic" accept="image/jpg, image/png, image/gif" @change="handleChange">
  </div>
</template>
<script>
import { uploadImg } from '@/api/content'
import { updateUserInfo } from '@/api/user'
import config from '@/config/index.js'
export default {
  name: 'pic-upload',
  data () {
    return {
      formData: '',
      pic: '',
      baseURL: process.env.NODE_ENV === 'production' ? config.baseURL.prod : config.baseURL.dev
    }
  },
  methods: {
    handleChange (e) {
      const file = e.target.files
      const formData = new FormData()
      formData.append('file', file && file[0])
      this.formData = formData
      console.log('handleChange -> e', e)
      e.target.files = null
      uploadImg(this.formData).then(res => {
        if (res.code === 200) {
          const pic = res.data
          // 存入用户表中
          updateUserInfo({ pic }).then(res => {
            if (res.code === 200) {
              const user = this.$store.state.userInfo
              user.pic = pic
              this.$store.commit('setUserInfo', user)
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.pic-upload{
  #pic {
    display: none;
  }
}
</style>
