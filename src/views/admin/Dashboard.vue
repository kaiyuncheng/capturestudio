<template>
  <div class="dashboard">
    <!-- <loading :active.sync="isLoading" ></loading> -->
    <div class="menu">
      <div class="menu__bar">
        <ul class="social">
          <li class=""><i class="far fa-user"></i> ADMIN DASHBOARD</li>
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
          <li><router-link to="/">
            <i class="fas fa-arrow-circle-left"></i> Back</router-link></li>
          <li><router-link to="/admin/settings">
            <i class="fas fas fa-cog"></i> Settings</router-link></li>
          <li class="menu__signout">
            <a herf="#" @click.prevent="signOut">
              <i class="fas fa-sign-out-alt"></i> SignOut
            </a>
          </li>
        </ul>
      </div>

      <div class="nav__bar" :class="{'show': openNav }">
        <ul class="nav__items">
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/admin/products">Products</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/admin/coupons">Coupons</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/admin/storages">Storages</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/admin/orders">Orders</router-link>
          </li>
          <li class="nav__item links" @click.prevent="openNav = !openNav">
            <router-link to="/admin/customer_order">
            Order Test System
            </router-link>
          </li>

          <ul class="nav__item hide admin">
            <li @click.prevent="openNav = !openNav">
              <router-link to="/admin/settings">
                <i class="fas fas fa-cog"></i>
              </router-link>
            </li>
          </ul>

        </ul>
      </div>
    </div>
    <router-view v-if="checkSuccess"></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'Dashboard',
  components: {
    Footer,
  },
  data() {
    return {
      token: '',
      openNav: false,
      checkSuccess: false,
    };
  },

  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

      const api = `${process.env.VUE_APP_APIPATH}auth/check`;

      this.$http
        // eslint-disable-next-line
        .post(api, { 'api_token': this.token })
        .then((res) => {
        // 登入沒有問題
          if (res.data.success) {
            this.checkSuccess = true;
            // Axios 預設值
            this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
          }
        })
        .catch(() => {
          // console.log('錯誤', err);
          this.$router.push('/login');
        });
    },

    signOut() {
      document.cookie = 'token=;expires=;';
      this.$bus.$emit('message:push',
        'Sign out successful.',
        'success');
      this.$router.push('/login');
    },
  },
};
</script>
