<template>
  <div class="login container">
    <form class="form-sign-in text-center" @submit.prevent="signin">
      <h2 class="h5 mb-3 font-weight-light">
        Sign in with Email
      </h2>
      <div class="form-input mb-3">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
            type="email"
            id="inputEmail" v-model="user.email"
            class="form-control shadow-none"
            placeholder="Email address"
            required
            autofocus
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
            type="password"
            id="inputPassword"
            v-model="user.password"
            class="form-control shadow-none"
            placeholder="Password"
            required
        />

      </div>
        <!-- <div class="checkbox mb-3 text-left">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> -->

      <button class="btn btn-primary btn-block" type="submit">
        Sign in
      </button>

    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          const { token } = res.data;
          const { expired } = res.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `token=${token};expires=${new Date(expired * 1000)};`;
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // signout() {
    //   document.cookie = 'token=;expires=;';
    //   console.log('token 已清除');
    // },

    // getData() {
    //   // 取得 token 的 cookies（注意取得的時間點）
    //   // 詳情請見：https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    //   this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');

    //   // API
    //   const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`;
    //   this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

    //   this.$http
    //     .get(api)
    //     .then((res) => {
    //       this.products = res.data.data;
    //       this.pagination = res.data.meta.pagination;
    //     });
    // },
  },
};
</script>
