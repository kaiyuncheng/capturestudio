<template>
  <div class="top__btn button" :class="{ 'show__btn': show }" @click="goTop()">
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.showGotop);
  },
  methods: {
    showGotop() {
      if (window.pageYOffset > 400) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
