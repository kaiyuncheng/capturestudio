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
      <img v-if="filterCategory === ''" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Tvw45YwgP0yLQxSvv5aNHqXdaunqK0SukpvWyCneTjmVp9ahdxihd9OawLlRWkseiY0gQAHdLWHvBOn9erq8z2mbmjjbgnF6pijWznu7ZsGrdeaWLaTurPtIGPWgPlnF.jpeg" alt="">
      <img v-if="filterCategory === 'Wedding'" src="https://images.unsplash.com/photo-1541262350848-1fe9d17310eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
      <img v-if="filterCategory === 'Family'" src="https://images.unsplash.com/photo-1521252517631-1a6549100bd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
      <img v-if="filterCategory === 'Children'" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
      <img v-if="filterCategory === 'Maternity'" src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="">
      <img v-if="filterCategory === 'Couple'" src="https://images.unsplash.com/photo-1474552028796-8d1a00327610?ixlib=rb-1.2.1&auto=format&fit=crop&w=1305&q=80" alt="">
      <img v-if="filterCategory === 'Event'" src="https://images.unsplash.com/photo-1482731910308-31e96e5d1d28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
      <img v-if="filterCategory === 'Commercial'" src="https://images.unsplash.com/photo-1462690417829-5b41247f6b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
      <img v-if="filterCategory === 'Portrait'" src="https://images.unsplash.com/photo-1556755211-4335bebdd699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80" alt="">
      <img v-if="filterCategory === 'Pet'" src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
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
                <img :src="`${item.imageUrl}`" alt="">
                <div class="item__price">
                  <div class="more">MORE INFO</div>
                  <div class="price">
                    <span>$ {{ item.price }}</span> per Session
                    <i class="fas fa-angle-right">
                    </i>
                  </div>
                </div>
              </a>
              <div class="item__cart" @click.prevent="addToCart(item.id)">
                <span>Add to cart <i class="fas fa-plus"></i></span>
              </div>
              <div class="item__info">
                <span>- {{ item.category }}</span>
                <a href="#" @click.prevent="goService(item)" class="item__title text-left">
                  <h2>{{ item.title }}</h2>
                </a>
                <p class="item__text" v-html="item.content" />
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
        errorList.forEach((err) => {
          this.$bus.$emit('message:push',
            `Something is wrong. ${err}`,
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
