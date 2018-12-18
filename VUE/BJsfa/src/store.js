import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},//全局狀態數
  mutations: {},//必須是純函數，但要求不是很高拉  但這裡是同步的 所以無發處裡一步操作
  actions: {}
});
