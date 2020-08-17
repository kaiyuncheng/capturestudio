<template>
  <div class="service container">
    <h2>{{ product.title }}</h2>
    {{ product.description }}
  </div>
</template>

<script>
export default {
  name: 'Service',
  data() {
    return {
      product: {},
    };
  },
  created() {
    const { id } = this.$route.params;

    const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;
    this.$http.get(url)
      .then((res) => {
        this.product = res.data.data;
      });
  },
};
</script>
