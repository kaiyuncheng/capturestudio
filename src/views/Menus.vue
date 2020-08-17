<template>
  <div class="menus">

    <div class="menu__bar d-flex justify-content-center pt-4">
        <ul class="social__icons d-flex flex-row">
          <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
        <div class="logo d-flex justify-content-center">
          <h1><router-link to="/">Capture Studio</router-link></h1>
        </div>
        <ul class="search d-flex justify-content-end">
          <li><a href="#"><i class="fas fa-search"></i></a></li>
          <li><router-link to="/login"><i class="fas fa-user-circle"></i></router-link></li>
          <li>
            <router-link to="/cart">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge badge-pill badge-danger">0</span>
            </router-link>
          </li>

        </ul>
    </div>

    <div class="nav__bar">
        <ul class="d-flex justify-content-center">
          <li class="menu_item m-3"><router-link to="/">Home</router-link></li>
          <li class="menu_item m-3"><router-link to="/about">About</router-link></li>
          <li class="menu_item m-3"><router-link to="/services">Services</router-link></li>
          <li class="menu_item m-3"><router-link to="/special">Special Offer</router-link></li>
          <li class="menu_item m-3"><router-link to="/galleries">Galleries</router-link></li>
          <li class="menu_item m-3"><router-link to="/contact">Contact</router-link></li>

        </ul>
    </div>

    <router-view/>
  </div>
</template>

<script>

</script>

<script>
export default {
  name: 'Menus',
  data() {
    return {
      carts: [],
    };
  },
  created() {
    this.isLoading = true;
    const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;
    this.$http.get(api)
      .then((res) => {
        console.log(res)
        this.carts = res.data.data;
        this.isLoading = false;
      });
  },

  methods: {

  },
};
</script>
