import Vue from 'vue';

Vue.prototype.$bus = new Vue();

// Bus
// Message
// vm.$bus.$emit('message:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式
