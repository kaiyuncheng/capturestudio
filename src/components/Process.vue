<template>
  <div class="process">
    <ul class="process__list">
      <li class="process__item process__on">
        <span>1</span>
        <h3>Cart</h3>
      </li>
      <li class="process__item"
      :class="{'process__on':process===2 || process === 3 || process === 4}">
        <span>2</span>
        <h3>Info</h3>
      </li>
      <li class="process__item"
      :class="{'process__on':process===3 || process === 4}">
        <span>3</span>
        <h3>Confirm</h3>
      </li>
      <li class="process__item"
      :class="{'process__on':process===4}">
        <span>4</span>
        <h3>Complete</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    process: {
      type: Number,
    },
  },
};
</script>
