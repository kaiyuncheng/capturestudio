<template>
  <div class="menus">
    <div class="menu">
      <div class="menu__bar">
        <ul class="social">
          <li><a href="https://github.com/kaiyuncheng"><i class="fab fa-facebook-square"></i></a></li>
          <li><a href="https://github.com/kaiyuncheng"><i class="fab fa-instagram"></i></a></li>
          <li><a href="https://github.com/kaiyuncheng"><i class="fab fa-youtube"></i></a></li>
          <li class="menu__burger" :class="{'close': openNav }" @click.prevent="openNav = !openNav">
              <span></span>
              <span></span>
              <span></span>
          </li>
        </ul>
        <div class="logo">
          <h1><router-link to="/">Capture Studio</router-link></h1>
        </div>
        <ul class="search">
          <li class="search__group">
            <input
                type="text"
                class="search__input"
                placeholder="Search"
              />
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li>
            <router-link to="/login">
            <i class="fas fa-user-circle"></i>
            </router-link>
          </li>
          <li class="menu__cart">
            <router-link to="/cart">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart__badge" v-if="cart.length">{{ cart.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav__bar" :class="{'show': openNav }">
        <ul class="nav__items">
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/services">Services</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/galleries">Galleries</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/contact">Contact</router-link>
          </li>

          <ul class="nav__item hide admin">
            <li @click.prevent="openNav = !openNav">
              <router-link to="/login">
                <i class="fas fa-user-circle"></i>
              </router-link>
            </li>
          </ul>
          <ul class="nav__item hide icons">
            <li class="icon"><a href="https://github.com/kaiyuncheng"><i class="fab fa-facebook-square"></i></a></li>
            <li class="icon"><a href="https://github.com/kaiyuncheng"><i class="fab fa-instagram"></i></a></li>
            <li class="icon"><a href="https://github.com/kaiyuncheng"><i class="fab fa-youtube"></i></a></li>
          </ul>
          <ul class="nav__item hide admin">
            <li class="search__nav">
              <input
                type="text"
                class="search__input"
                placeholder="Search"
              />
              <a href="#"><i class="fas fa-search"></i></a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Menus',
  components: {
    Footer,
  },
  data() {
    return {
      cart: {},
      openNav: false,
      isLoading: false,
    };
  },
  created() {
    this.getCart();
    this.$bus.$on('cartUpdate', (event) => {
      this.cart = event.cart;
    });
  },

  methods: {
    getCart() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http.get(api).then((res) => {
        this.cart = res.data.data;
        this.$bus.$emit('cartUpdate', { cart: this.cart });

        this.isLoading = false;
      });
    },

  },
};
</script>
