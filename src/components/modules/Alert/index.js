import AlertComponent from './Alert.vue'
const Alert = {}

Alert.install = function (Vue) {
  const AlertConstruct = Vue.extend(AlertComponent)
  const instance = new AlertConstruct()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$alert = (msg) => {
    instance.msg = msg
    instance.isShow = true
  }
  Vue.prototype.$confirm = (msg, confirm, cancel) => {
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShow = true
    confirm && (instance.confirm = confirm)
    cancel && (instance.cancel = cancel)
  }
}

export default Alert
