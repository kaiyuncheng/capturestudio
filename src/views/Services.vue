<template>
  <div class="services container">
    <loading :active.sync="isLoading" ></loading>
    <h2 class="text-center">Our Services</h2>
    <div class="row mt-4">
      <div v-for="(item) in products" :key="item.id" class="col-md-4 mb-4">
        <div class="card border-1">
          <div class="card_badge badge-primary text-center rounded-top p-1 font-weight-bold">
            {{ item.category }}
          </div>
          <div style="height: 300px; background-size: cover; background-position: center"
          :style="{backgroundImage: `url(${item.imageUrl})`}">
          </div>

          <div class="card-body">
            <h3 class="h3 card-title">
              <a href="#" class="text-primary">{{ item.title }}</a>
            </h3>
            <p class="card-text" v-html="item.content">
              {{ item.content }}
            </p>
            <div class="d-flex justify-content-between align-items-baseline">
                <!-- 售價(price)欄位是可選的，因此售價若為空，就顯示原價(origin_price)
                售價若不為空，就顯示原價(origin_price)與售價(price) -->
              <div v-if="!item.price" class="h4 mt-4 text-danger">
                ${{ item.origin_price }}
              </div>
              <div v-else>
                <div class="h4 mt-4 text-danger">
                  <del class="text-dark">${{ item.origin_price }}</del>
                  <i class="fas fa-long-arrow-alt-right"></i> ${{ item.price }}
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-primary btn-sm"
            :disabled="status.loadingItem === item.id" @click="goService(item)">
              <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
              More Info
            </button>

            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                :disabled="status.loadingItem === item.id" @click="addToCart(item.id)">
              <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
              <i class="fas fa-shopping-cart mr-1"></i> Book Now !
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      products: [],
      status: {
        loadingItem: '',
      },

      isLoading: false,
      fullPage: true,
    };
  },

  methods: {
    goService(item) {
      this.$router.push(`/service/${item.id}`);
    },
  },

  created() {
    this.isLoading = true;
    const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
    this.$http.get(api)
      .then((res) => {
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
