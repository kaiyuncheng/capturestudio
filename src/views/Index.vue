<template>
  <div class="login">
    <loading :active.sync="isLoading" ></loading>
    <h2>這裡是首頁</h2>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
