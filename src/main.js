import Vue from 'vue'; // node_modules
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import $ from 'jquery';

// 驗證套件
import {
  ValidationObserver,
  ValidationProvider,
  configure,
  localize,
  extend,
} from 'vee-validate';

// 規則檔案（ex: email...）
import * as rules from 'vee-validate/dist/rules';
// 語系檔案
import en from 'vee-validate/dist/locale/en.json';
// import zhTW from 'vee-validate/dist/locale/zh_TW.json';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
window.$ = $;
Vue.use(VueAxios, axios);

Vue.use(Loading);
Vue.component('Loading', Loading);

// Bus
// Message
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式
Vue.prototype.$bus = new Vue();

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
}); // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
localize('En', en);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
