<template>
  <div class="section page__cart">
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
    <Process :process="1" />
    <div class="container">
      <div class="row">
        <div class="cart__empty col-md-12 col-12" v-if="!cart.length">
          <h3>Your cart is empty.</h3>
          <button type="button" class="button" @click="goPage('services')">
            <i class="fas fa-eye mr-2"></i>
            Continue Browsing
          </button>
        </div>
        <ul class="col-md-8 col-12" v-if="cart.length">
          <li class="row cart__title">
            <div class="col-md-1 col-6"></div>
            <div class="col-lg-6 col-md-5 col-12">
              <h5>Services</h5>
            </div>
            <div class="col-lg-3 col-md-4 col-12">
              <h5>Session</h5>
            </div>
            <div class="col-md-2 col-6">
              <h5>Price</h5>
            </div>
          </li>
          <li class="row cart__list" v-for="item in cart" :key="item.id">
            <div class="col-md-1 col-12 list_btn" @click="removeCartItem(item.product.id)">
              <i class="fas fa-times"></i>
            </div>
            <div class="col-lg-6 col-md-5 col-12 list__name">
              <img :src="`${item.product.imageUrl[1]}`" alt="" />
              <h5 class="">{{ item.product.title }}</h5>
            </div>
            <div class="col-lg-3 col-md-4 col-12 list_input">
              <div class="input-group">
                <div class="input-group-prepend">
                  <button type="button"
                    class="btn btn-outline-primary"
                    @click="updateQuantity(item.product.id, item.quantity - 1)"
                    :disabled="item.quantity === 1"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control text-center"
                  :value="item.quantity"
                  @keyup.enter="updateQuantity(item.product.id, $event.target.value)"
                />
                <div class="input-group-append">
                  <button type="button"
                    class="btn btn-outline-primary"
                    @click="updateQuantity(item.product.id, item.quantity + 1)"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-12 list_price">$ {{ item.product.price * item.quantity }}</div>
          </li>
          <li class="cart__btn">
            <button v-if="cart.length"
            type="button" class="button-outline" @click="removeAllCartItem()">
              <i class="far fa-trash-alt mr-2" /> Empty Cart
            </button>
            <button type="button" class="button-outline" @click="goPage('services')">
              <i class="fas fa-eye mr-2"></i>
              Continue Browsing
            </button>
          </li>
        </ul>

        <div class="col-md-4 col-12" v-if="cart.length">
          <div class="cart__detail">
            <h4>Order Detail</h4>
            <div class="cart__subtotal">
              <p>Subtotal</p>
              <p>$ {{ cartTotal }}</p>
            </div>

            <div class="cart__discount" v-if="coupon.enabled">
              <p>{{ 100 - coupon.percent }} % OFF</p>
              <p>- {{ (cartTotal * (100 - coupon.percent)) / 100 }}</p>
            </div>

            <div class="input__discount">
              <input v-model="coupon_code" type="text" placeholder="Enter Coupon Code" />
              <button class="button" type="button" @click="addCoupon">
                <i class="fas fa-gift"></i>
              </button>
            </div>

            <div class="discount__code">
              <p>Enter <strong>DISCOUNT10</strong> to get your first time experience 10%OFF.</p>
            </div>

            <div class="cart__final" v-if="!coupon.enabled">
              <p>Total</p>
              <p>${{ cartTotal }}</p>
            </div>

            <div class="cart__final" v-if="coupon.enabled">
              <p>Total</p>
              <p>${{ cartTotal * (coupon.percent / 100) }}</p>
            </div>

            <button type="button" class="detail__btn button" @click="goPage('customer_info')">
              <i class="fas fa-check mr-2"></i> Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Process from '@/components/Process.vue';

export default {
  name: 'Cart',
  components: {
    Process,
  },
  data() {
    return {
      cart: {},
      cartTotal: 0,

      coupon: {},
      discount: '',
      coupon_code: '',

      status: {
        loadingItem: '',
      },

      orders: {},

      isLoading: false,
      fullPage: true,
      page: '',
    };
  },
  created() {
    this.getCart();
  },
  methods: {
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
    updateQuantity(id, quantity) {
      // 避免商品數量低於 0 個
      if (quantity <= 0) return;
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      const data = {
        product: id,
        quantity,
      };

      this.$http.patch(api, data).then(() => {
        this.isLoading = false;
        this.getCart();
      });
    },
    removeAllCartItem() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;

      this.$http.delete(api).then(() => {
        this.$bus.$emit('message:push', 'Cart is empty.', 'success');

        this.isLoading = false;
        this.getCart();
      });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`;

      this.$http.delete(api).then(() => {
        this.$bus.$emit('message:push', 'Deleted', 'success');

        this.isLoading = false;
        this.getCart();
      });
    },
    // 新增 coupon (實際是搜尋 coupon)
    addCoupon() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`;
      // 輸入 coupon 之前必須先戳一下 api/{{ uuid }}/coupon/search API 確定該 coupon 是存在的
      this.$http
        .post(api, { code: this.coupon_code })
        .then((res) => {
          // 若 coupon 存在就回寫回去到 this.coupon
          // 該資料會是一個物件格式，詳情可見 API 文件
          // https://course-ec-api.hexschool.io/document#frontend-search-coupon-code-code
          this.coupon = res.data.data;
          this.$bus.$emit('message:push', 'Coupon applied.', 'success');
          this.isLoading = false;
        })
        .catch((error) => {
          const errorData = error.response.data.errors;
          this.isLoading = false;
          // console.log(errorData);

          if (errorData) {
            errorData.code.forEach((err) => {
              this.$bus.$emit('message:push', `Something is wrong. ${err}`, 'danger');
            });

            this.isLoading = false;
          } else {
            const { message } = error.response.data;
            this.$bus.$emit('message:push', `Something is wrong. ${message}`, 'danger');
            this.isLoading = false;
          }
        });
    },

    goPage(page) {
      this.$router.push(`/${page}`);
    },
  },

  beforeDestroy() {
    this.$bus.$emit('coupon:push', this.coupon);
  },
};
</script>
