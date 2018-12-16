<template>
  <div class="demo">
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      name: "ken"
    };
  }
};
</script>
<style lang="css">
.demo {
  font-size: 30px;
  color: green;
}
</style>
