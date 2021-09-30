import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const USER_KEY = 'user'
export default new Vuex.Store({
  state: {
      user: localStorage.getItem(USER_KEY)
  },
  mutations: {
      setUser(state, data) {
          state.user = data;   //设置传值时，把data数据json化后再传进来
            // 存本地
          localStorage.setItem(USER_KEY, data);
      }
  },
  actions: {
  },
  modules: {
  }
})
