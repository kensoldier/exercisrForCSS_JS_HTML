import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
axios.defaults.baseURL='https://www.obvibase.com/#token/1SUswryPi7RQQ35n/rw/2QjX4rWrGNxLnsxm'


Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
