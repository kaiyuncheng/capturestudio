<template>
  <div class="page__services">
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
    <div class="heading">
      <img v-if="filterCategory === ''" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Tvw45YwgP0yLQxSvv5aNHqXdaunqK0SukpvWyCneTjmVp9ahdxihd9OawLlRWkseiY0gQAHdLWHvBOn9erq8z2mbmjjbgnF6pijWznu7ZsGrdeaWLaTurPtIGPWgPlnF.jpeg" alt="All">
      <img v-if="filterCategory === 'Wedding'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/qrPIRw6IWUiWuwPeYiq4X7vXyROQSW7RToj8E2OnK8pz190704zEJpga5r6neu6UZn0qnJkv8rOxsUgCp41bJcLh3IWbmGIguQItiHatOxMDIXBVlgtytQSoslxecOdb.jpeg" alt="Wedding">
      <img v-if="filterCategory === 'Family'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tYajJqxG9V69O9qFMzHL1wLgZt81bJAqQBEO7y7b2YxaMEaAoXC23QSenuKfK1v6xnz26ASAQEgbA9lBEiWK3FvJJoSvKGCqhjc2O8ML5qNPb9BmkwwX1T8sTWCbEt8q.jpeg" alt="Family">
      <img v-if="filterCategory === 'Children'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/0ie1aFzCLQYY7bUPRjPKPCKvuWdvp1a5iFBoC7UIgcPrvJ6zEqXE8AUZT1cdpwwmjZl2A25MNQ4o5AIkYx5p9ZsN8Wkh8mKF70qKSXh3Bk5net8dkXz44yy16BY9IbA7.jpeg" alt="Children">
      <img v-if="filterCategory === 'Maternity'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nu6nScP4O3o0Avd5y9LOxJwdZfjaaAjOuqXKM3kyJkSMf4wmkpdJfQrYYz4b5Os20f3Rk6WV7kioOqz2BHVyXouHpikoItmdyf21lNA2V7vULsooDfVWPVl5SztsI9Ai.jpeg" alt="Maternity">
      <img v-if="filterCategory === 'Couple'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/lTUnOz8V3w8a9vP8OafmVQEwe7ojGmrGWnHWMvx1djRW6fHSRhg5oW0HwUlFyoFXeygFR4gl5qaPLoeyWlr3kszfUo8VNoLRETjjE4kzOlnHWQp6OgjCQ3JeL8N84W5q.jpeg" alt="Couple">
      <img v-if="filterCategory === 'Event'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/wDMPsHy5fHeHzTGtJZcSkpaJnZ8YHSu2irfILbVxsKCmb9G3EG0nhB8TokoVsoFNcMtBp123v6GtmtGQR8NilpSvAnj8yiP0KUnWiMybtBO3oUmUIuR4SUR08xUbHj8h.jpeg" alt="Event">
      <img v-if="filterCategory === 'Commercial'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PL5WNzgUwDE8ydBElB3tYdFhxyzqdwgMhlBuqzTFrElc48ytkVcOB4TwKmFMM211e6opcCLFMyoyAmQosWZ3qWStv4P3YH3LHCOAzgoOJhUx0z6SY8BpYcIW6vjqwoH6.jpeg" alt="Commercial">
      <img v-if="filterCategory === 'Portrait'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/T88hEF9IcHO2axATJG6s3cs22D4Y7QK8NhyGjSJmk2pSJMzd0g9lC3vxgtkwKE93qvZQS6osj1CQquFZaBJlNrIEhQVxnsPrJqtTfdymZ0R3CmtwjijpHvWuKMacYsF9.jpeg" alt="Portrait">
      <img v-if="filterCategory === 'Pet'" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/s7qjjRqQjptmvtPsDrZa3OA4zT1fV54s3rcDQRZOQ159cqODvf0uPfdLyr51jgQD9n6TwPwx05P6MlMMlGwGve6mFzbLYNWzy8qMpjfuBG1t6cLCFEUe0oElUEHQ96mx.jpeg" alt="Pet">
      <h3 class="heading__txt"> {{ filterCategory }} </h3>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="category__bar">
            <span class="category__title">- The Services We Provide</span>
            <a
             href="#"
               class="category__link"
               :class="{'is-active':filterCategory === ''}"
              @click.prevent="filterCategory = ''"
            >All</a>
            <a
              href="#"
              class="category__link"
              :class="{'is-active':filterCategory === item}"
              @click.prevent="filterCategory = item"
              v-for="item in categories"
              :key="item"
            >{{ item }}</a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div v-for="(item) in filterCategories"
              :key="item.id"
              class="services__item col-md-12 mb-4">
              <a href="#" @click.prevent="goService(item)" class="item__img">
                <img :src="`${item.imageUrl[0]}`" alt="Service image">
                <div class="item__price">
                  <div class="more">MORE INFO</div>
                  <div class="price">
                    <span>$ {{ item.price }}</span> per Session
                    <i class="fas fa-angle-right">
                    </i>
                  </div>
                </div>
              </a>
              <div class="item__info">
                <span>- {{ item.category }}</span>
                <a href="#" @click.prevent="goService(item)" class="item__title text-left">
                  <h2>{{ item.title }}</h2>
                </a>
                <div class="item__text">
                  <p v-html="item.content" />
                </div>
                <div class="item__cart" @click.prevent="addToCart(item.id)">
                <span>Add to cart <i class="fas fa-plus"></i></span>
                </div>
              </div>
            </div>
            <Pagination class="ml-3" v-if="filterCategory === ''"
              :pages="pagination"
              @emit-pages="getProducts"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Services',
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      status: {
        loadingItem: '',
      },
      categories: ['Wedding', 'Family', 'Children', 'Maternity', 'Couple', 'Event', 'Commercial', 'Portrait', 'Pet'],
      filterCategory: '',

      isLoading: false,
      fullPage: true,
    };
  },

  created() {
    this.getProducts();
    this.$bus.$on('category', (category) => {
      this.filterCategory = category;
    });
  },

  beforeDestroy() {
    this.$bus.$off('category', (category) => {
      this.filterCategory = category;
    });
  },

  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => item.category === this.filterCategory);
      } return this.products;
    },
  },

  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?page=${page}`;

      this.$http.get(api).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination;
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

    goService(item) {
      this.$router.push(`/service/${item.id}`);
    },
  },
};
</script>
