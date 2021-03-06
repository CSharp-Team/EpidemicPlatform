// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery'
import Axios from 'axios'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = Axios;
Vue.use(Vuex);
Vue.use(router)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created() {
    if(localStorage.getItem("isLogin"===null))
    {
      localStorage.setItem("isLogin",'');
    }
    this.$store.state.isLogin=localStorage.getItem("isLogin");
  },
  template: '<App/>',
})

// const originalReplace = router.prototype.replace;
// router.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// };





