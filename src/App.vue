<template>
  <div v-bind:style="{ backgroundcolor: color}">
    <DoctorScreen1/>
  </div>
</template>

<script>
import DoctorScreen1 from './components/DoctorScreen1.vue'

export default {
  name: 'App',
  components: {
    DoctorScreen1
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-color: #F2FFF5;
}

</style>

