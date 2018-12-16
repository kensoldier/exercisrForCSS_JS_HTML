<template>
  <div class="home">
    <h1>i am Home</h1>
    <div class="left">
      <router-view></router-view>
    </div>
    <div class="right">
      <router-view name="right"></router-view>
    </div>
    <div class="footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
