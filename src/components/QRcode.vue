<template>
  <div>
    <qrcode-vue :value="value" :size="size" level="H" />
  </div>
</template>
<script>
  import QrcodeVue from 'qrcode.vue'
  import store from "../store"
  export default {
    data() {
      return {
        value: store.state.qr_string, 
        size: 300,
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>

<style scoped>
  div{
      position: absolute;
      width: 450px;
      height: 620px;
      left: 800px;
      top: 400px;
  }
</style>