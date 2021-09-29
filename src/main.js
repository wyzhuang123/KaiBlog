import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import mavonEditor from 'mavon-editor'
import dayjs from 'dayjs'
import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  dayjs,
  render: h => h(App)
}).$mount('#app')
