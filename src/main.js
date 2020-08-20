import Vue from 'vue'; // node_modules
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import jQuery from 'jquery';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
window.$ = jQuery;
Vue.use(VueAxios, axios);
Vue.use(Loading);
Vue.component('Loading', Loading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
