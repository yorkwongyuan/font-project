<template>
  <div v-show="isShow" class="alert">
    <div class="alert__panel">
      <div class="alert__msg">{{msg}}</div>
      <button class="alert__btn" @click="isShow = false">确定</button>
    </div>
    <div class="mask"></div>
  </div>
</template>
<script>
export default {
  data () {
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
$--color-primary: #009688;
$--color-hover: darken($--color-primary, 5%);
.alert {
  .alert__panel {
    width: 300px;
    height: 150px;
    background:white;
    border-radius: 4px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    box-shadow: 3px 2px 14px 2px #444;
    z-index: 9999;
    .alert__msg{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }
  }
  .alert__btn {
    background-color: $--color-primary;
    color: white;
    border-radius: 3px;
    border: none;
    width: 150px;
    height: 32px;
    cursor: pointer;
    &:hover {
      background-color: $--color-hover;
    }
  }
  .mask{
    position: fixed;
    z-index: 200;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0, .4);
  }
}
</style>
