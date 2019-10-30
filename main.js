// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)    
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
import store from "./store"
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
