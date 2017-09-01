// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import './theme/index.css'
// import Icon from 'vue-svg-icon/Icon.vue'
// import './theme/font-awesome.min.css'
//import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI);
// Vue.component('icon',Icon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
