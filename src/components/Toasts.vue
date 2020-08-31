<template>
  <div class="message-alert">
    <div
      v-for="(item, i) in messages"
      :id="`toast-${i}`"
      :key="i"
      class="alert fade show d-flex align-items-center"
      :class="`alert-${ item.status }`"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-autohide="false"
    >
      <div class="mr-3">
        {{ item.message }}
      </div>
      <button
          type="button"
          class="close text-right"
          :class="`text-${ item.status }`"
          data-dismiss="toast"
          aria-label="Close"
          @click="closeToast(`toast-${i}`)"
      >
          <span aria-hidden="true"><i class="fas fa-times"></i></span>
      </button>

    </div>
  </div>
</template>

<script>
/* global $ */

export default {
  name: 'Toasts',
  data() {
    return {
      messages: [],
    };
  },
  created() {
    const vm = this;
    vm.$bus.$on('message:push', (message, status = 'warning') => {
      vm.updateMessage(message, status);
    });
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 3000);
    },
    closeToast(element) {
      $(`#${element}`).toast('hide');
    },
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 20px;
  right: 0;
  z-index: 11000;
  animation: showup 5s;
}

@keyframes showup {
  from {right: -600px;}
  to {right: 0px;}
}
</style>
