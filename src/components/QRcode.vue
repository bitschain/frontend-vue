<template>
  <qrcode-vue :value="value" :size="size" level="H" />
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