<template>
  <div id="app">
    <div class="container">
      <appHeader></appHeader>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './views/Header'
export default {
  components:{
    appHeader:Header
  }
}
</script>



<style lang="scss">

</style>
