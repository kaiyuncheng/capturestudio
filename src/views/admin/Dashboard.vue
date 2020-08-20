<template>
  <div class="dashboard">
    <!-- <loading :active.sync="isLoading" ></loading> -->

    <div class="menu__bar d-flex justify-content-center pt-4">
        <ul class="social__icons d-flex flex-row">
          <li><i class="far fa-user"></i> 後台管理 Dashboard</li>
        </ul>
        <div class="logo d-flex justify-content-center">
          <h1><router-link to="/">Capture Studio</router-link></h1>
        </div>
        <ul class="search d-flex justify-content-end">
          <li><router-link to="/">
            <i class="fas fa-arrow-circle-left"></i> 回前台</router-link></li>
          <li><router-link to="/admin/settings"><i class="fas fas fa-cog"></i> 設定</router-link></li>
          <li>
            <router-link to="/" @click.prevent="signout">
              <i class="fas fa-sign-out-alt"></i> 登出
            </router-link>
          </li>
        </ul>
    </div>

    <div class="nav__bar">
        <ul class="d-flex justify-content-center">
          <li class="menu_item m-3"><router-link to="/admin/products">Products</router-link></li>
          <li class="menu_item m-3"><router-link to="/admin/coupons">Coupons</router-link></li>
          <li class="menu_item m-3"><router-link to="/admin/orders">Orders</router-link></li>
          <li class="menu_item m-3"><router-link to="/admin/images">Images</router-link></li>

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
          console.log(res);
          if (res.data.success) {
            this.checkSuccess = true;
          }
        })
        .catch((err) => {
          console.log('錯誤', err);
          this.$router.push('/login');
        });
    },

    signout() {
      document.cookie = 'token=;expires=;';
      console.log('token 已清除');
      this.$router.push('/login');
    },
  },
};
</script>
