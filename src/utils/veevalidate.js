import { extend, localize } from 'vee-validate'
import { email, min, length, confirmed, required } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('email', email)
extend('min', min)
extend('length', length)
extend('confirmed', confirmed)
extend('required', required)
localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    code: '验证码'
  },
  fields: {
    email: { // 对应上面的names属性中的值，如果provider上的name的值存在于names属性中，那么，提示语将会采用names中的值来提示
      // 总之，provider中的name，names中的值，files中的第一级属性，三者一致才能达到我们自定义的需求
      email: '请输入正确的{_field_}', // 规则，email规则
      required: '请输入{_field_}!!!'
    }
  }
})
