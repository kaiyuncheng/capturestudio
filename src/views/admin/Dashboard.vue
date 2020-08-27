<template>
  <div class="dashboard">
    <!-- <loading :active.sync="isLoading" ></loading> -->

    <div class="menu__bar d-flex justify-content-center pt-4">
        <ul class="social__icons d-flex flex-row">
          <li><i class="far fa-user"></i> ADMIN DASHBOARD</li>
        </ul>
        <div class="logo d-flex justify-content-center">
          <h1><router-link to="/">Capture Studio</router-link></h1>
        </div>
        <ul class="search d-flex justify-content-end">
          <li><router-link to="/">
            <i class="fas fa-arrow-circle-left"></i> Back</router-link></li>
          <li><router-link to="/admin/settings">
            <i class="fas fas fa-cog"></i> Settings</router-link></li>
          <li>
            <a herf="#" @click.prevent="signOut">
              <i class="fas fa-sign-out-alt"></i> Sign Out
            </a>
          </li>
        </ul>
    </div>

    <div class="nav__bar">
        <ul class="d-flex justify-content-center">
          <li class="menu_item m-3"><router-link to="/admin/products">Products</router-link></li>
          <li class="menu_item m-3"><router-link to="/admin/coupons">Coupons</router-link></li>
          <li class="menu_item m-3"><router-link to="/admin/storages">Storages</router-link></li>
          <li class="menu_item m-3"><router-link to="/admin/orders">Orders</router-link></li>
          <li class="menu_item m-3">
            <router-link to="/admin/customer_order">
            Order Test System
            </router-link>
          </li>

        </ul>
    </div>
    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },

  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

      // Axios 預設值
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const api = `${process.env.VUE_APP_APIPATH}auth/check`;

      this.$http
        // eslint-disable-next-line
        .post(api, { 'api_token': this.token })
        .then((res) => {
        // 登入沒有問題
          if (res.data.success) {
            this.checkSuccess = true;
          }
        })
        .catch((err) => {
          console.log('錯誤', err);
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
