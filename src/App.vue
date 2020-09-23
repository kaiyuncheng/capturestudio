<template>
  <div id="app">
    <Toast/>
    <router-view/>
    <Gotop/>
  </div>
</template>

<script>
import Toast from '@/components/Toasts.vue';
import Gotop from '@/components/Gotop.vue';

export default {
  name: 'App',
  components: {
    Toast,
    Gotop,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import './assets/scss/all';

#app {
  text-align: center;
}

</style>
