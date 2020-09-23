<template>
  <div class="section page__complete">
    <Process :process="4" />
    <div class="container">
      <div class="row">
        <div class="complete col-md-12 col-12">
              <h3>Congratulation!<br> Your order is completed.</h3>
              <p>We will contact you as soon as possible.
                If you have any question, please feel free to contact us.</p>
              <button
                type="button"
                class="button"
                @click="goBack">
              <i class="fas fa-chevron-left mr-2"></i>
              Back to Home
            </button>
            <button
                type="button"
                class="button"
                @click="goContact"
            >
              <i class="fas fa-envelope mr-2"></i>
              Contact Us
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Process from '@/components/Process.vue';

export default {
  name: 'CustomerComplete',
  components: {
    Process,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },

  methods: {
    goBack() {
      this.$router.push('/');
    },
    goContact() {
      this.$router.push('/contact');
    },
  },
};
</script>
