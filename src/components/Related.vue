<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in related" :key="item.id">
        <div class="related__item"  @click.prevent="goService(item)">
          <div class="item__img">
            <img :src="item.imageUrl[0]">
            <div class="button">
              See More
            </div>
          </div>
          <div class="item__title">
            <h4>{{ item.title }}</h4>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Related',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },

  data() {
    return {
      products: [],
      swiperOption: {
        speed: 900,
        allowTouchMove: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  props: {
    product: {
      type: Object,
    },
  },
  created() {
    this.getProducts();
  },

  computed: {
    related() {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.product.category,
      );
    },
  },

  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`;
      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.data;
        });
    },
    goService(item) {
      this.$router.push(`/service/${item.id}`);
      this.$emit('update');
    },
  },
};
</script>
