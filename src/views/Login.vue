<template>
  <div class="login">
    <form class="form-sign-in" @submit.prevent="signin">
      <span>- Member Sign in</span>
      <h2 class="font-weight-light">
        Please sign in with Email
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

      <button class="button" type="submit">
        SIGN IN
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
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}auth/login`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          const { token } = res.data;
          const { expired } = res.data;
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `token=${token};expires=${new Date(expired * 1000)};`;
          this.isLoading = false;
          this.$bus.$emit('message:push',
            'Sign in successful.',
            'success');
          this.$router.push('/admin/products');
        })
        .catch((err) => {
          this.$bus.$emit('message:push',
            `Sign in failed.
            ${err}`, 'danger');

          this.isLoading = false;
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
