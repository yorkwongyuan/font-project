<template>
  <div>
    <wy-panel></wy-panel>
    <router-view/>
  </div>
</template>
<script>
import Panel from '@/components/Panel.vue'
export default {
  name: 'Home',
  components: {
    'wy-panel': Panel
  }

}
</script>
