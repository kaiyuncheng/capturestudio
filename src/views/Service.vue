<template>
  <div class="section page__service">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-blocks-qb5ljn1p9ul">
        <div class="ldio-t4qo1eyy1z">
          <div style="left:22px;top:22px;animation-delay:0s"></div>
          <div style="left:42px;top:22px;animation-delay:0.125s"></div>
          <div style="left:62px;top:22px;animation-delay:0.25s"></div>
          <div style="left:22px;top:42px;animation-delay:0.875s"></div>
          <div style="left:62px;top:42px;animation-delay:0.375s"></div>
          <div style="left:22px;top:62px;animation-delay:0.75s"></div>
          <div style="left:42px;top:62px;animation-delay:0.625s"></div>
          <div style="left:62px;top:62px;animation-delay:0.5s"></div>
        </div>
      </div>
    </loading>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <img :src="`${product.imageUrl[1]}`" alt="" />
        </div>
        <div class="col-md-6 col-12">
          <span class="service__category">- {{ product.category }}</span>
          <h3>{{ product.title }}</h3>
          <p>{{ product.content }}</p>

          <h4>What you get</h4>
          <p class="service__content" v-html="product.description" />

          <div class="service__prices">
            <div class="service__price" v-if="!product.price">
              <h4>
                ${{ product.origin_price }}
              </h4>
            </div>
            <div v-else class="service__price">
              <h4>
                <del> ${{ product.origin_price }} </del>
                <i class="fas fa-long-arrow-alt-right"></i>
                ${{ product.price }} <span>per {{ product.unit }}</span>
              </h4>
            </div>
          </div>

          <div class="select__group">

            <select v-model="product.num" name class="session__select">
              <option value="0" disabled>
                Select Sessions
              </option>
              <option v-for="num in 5" :key="num"  :value="num">
                {{ num }} {{ product.  unit }}
              </option>
            </select>

            <div
              v-if="product.num"
              class="session__total"
            >
              Total
                <span> $ {{ product.num * product.price }}</span>
            </div>

            <button v-if="product.num"
              type="button"
              class="button session__btn"
              @click="addToCart(product.id, product.num)">
              Add To Cart
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="col-12">
          <h4 class="service__title">View Our Works</h4>
          <div class="detail__slide">
            <div
              id="carouselExampleIndicators_detail"
              class="carousel slide"
              data-ride="carousel"
              data-interval="2000"
            >
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators_detail"
                role="button"
                data-slide="prev"
              >
                <div class="prev"><i class="fas fa-chevron-left"></i></div>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators_detail"
                role="button"
                data-slide="next"
              >
                <div class="next"><i class="fas fa-chevron-right"></i></div>
                <span class="sr-only">Next</span>
              </a>

              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators_detail"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselExampleIndicators_detail" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators_detail" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div
                  class="carousel-item active"
                  :style="{ backgroundImage: `url(${product.imageUrl[2]})` }"
                ></div>

                <div
                  class="carousel-item"
                  :style="{ backgroundImage: `url(${product.imageUrl[3]})` }"
                ></div>

                <div
                  class="carousel-item"
                  :style="{ backgroundImage: `url(${product.imageUrl[4]})` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <h4 class="service__title">Recommendation</h4>
          <Related :product="product" @update="getProduct" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Related from '@/components/Related.vue';

export default {
  name: 'Service',
  components: {
    Related,
  },
  data() {
    return {
      product: {
        imageUrl: [],
        num: 0,
      },
      status: {
        loadingItem: '',
      },

      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;

      this.$http.get(api).then((res) => {
        this.product = {
          ...res.data.data,
          num: 0,
        };
        this.isLoading = false;
      });
    },
    addToCart(id, quantity = 1) {
      this.status.loadingItem = id;
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      const cart = {
        product: id,
        quantity,
      };

      this.$http.post(api, cart).then(() => {
        this.status.loadingItem = '';

        this.$bus.$emit('message:push',
          'Added to cart',
          'primary');

        this.getCart();
        this.isLoading = false;
      }).catch((error) => {
        this.status.loadingItem = '';

        const errorList = error.response.data.errors;

        errorList.forEach(() => {
          this.$bus.$emit('message:push',
            'This service has been added to cart.',
            'danger');
        });
        this.isLoading = false;
      });
    },

    getCart() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        this.$bus.$emit('cartUpdate', {
          cart: this.cart,
        });

        this.cartTotal = 0;
        this.cart.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
        });

        this.isLoading = false;
      });
    },
  },
};
</script>
