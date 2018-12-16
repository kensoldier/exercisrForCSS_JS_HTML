import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  //下面是es6的縮寫 屬姓名和變量一樣
  router,//所有子組件都可以用  $router當前路由器對象  $route當前匹配德路由對象
  store,
  render: h => h(App)
}).$mount("#app");
