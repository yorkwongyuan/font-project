<style lang="scss">
@keyframes shake {
  0%, 100% {
    transform: translateX(0)
  }
  20%, 40%, 60%, 80% {
    transform: translateX(-10px)
  }
  10%, 30%, 50%, 70% {
    transform: translateX(10px)
  }
}
.pop {
  position: fixed;
  left: 50%;
  top: 50%;
  .pop__content{
    border-radius: 6px;
    background-color: rgba(0,0,0, .4);
    padding: 10px 15px;
    color: #fff;
  }
}
.shake {
  animation-name: shake
}
.animation {
  animation-fill-mode: both;
  animation-duration: .3s;
}
</style>
<template>
  <div class="pop tips animation" :class="{shake: type === 'shake'}" v-show="isShow" ref="tips">
    <div class="pop__content">{{msg}}</div>
  </div>
</template>
<script>
export default {
  name: 'pop',
  props: {
    type: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    }
  },
  watch: {
    isShow (newVal, oldVal) {
      if (newVal !== oldVal && newVal === true) {
        setTimeout(() => {
          const width = this.$refs.tips.clientWidth
          const height = this.$refs.tips.clientHeight
          this.$refs.tips.style.marginLeft = -width / 2 + 'px'
          this.$refs.tips.style.marginTop = -height / 2 + 'px'
        }, 0)
        setTimeout(() => {
          this.isShow = false
          this.msg = ''
          this.type = ''
        }, 3000)
      }
    }
  }
}
</script>
