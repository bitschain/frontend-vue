<template>
  <div>
    <qrcode-vue :value="value" :size="size" level="H" />
  </div>
</template>
<script>
  import QrcodeVue from "qrcode.vue";
  import store from "../store";
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
    width: 100vh;
  }
</style>