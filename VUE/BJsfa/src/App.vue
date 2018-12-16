<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">Login</router-link>
       <router-link to="/user">User</router-link>
      <router-link to="/product">Product</router-link>  
      <router-link :to="Product">Product</router-link>  
    </div>
    <hr/>
    <input type="button" value="跳轉Login1" @click="$router.push('/login/6666')">
    <!-- 也可以用對象的方式  如果提供path 屬性 則 params會被戶略-->
    <input type="button" value="跳轉Login2" @click="$router.push({name:'login',params:{id:8888}})">
    <!-- 方法跳轉 -->
    <input type="button" value="方法跳轉to Home" @click="toHome">
        <input type="button" value="後退一頁" @click="backPage">
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Product:"/product/1999"//:to 綁定to
    }
  },
  methods:{
    toHome(){
      // console.log(this.$router)
      // console.log(this.$route)
      this.$router.push({  name: "home"})
    },
    backPage(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
