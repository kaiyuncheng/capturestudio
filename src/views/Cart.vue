<template>
  <div class="page__cart">
    <!-- 購物車列表 -->
    <h2 class="text-center">Shopping Cart</h2>
    <div class="my-5 row justify-content-center">
      <div class="col-md-10">
        <div class="text-right mb-3">
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="removeAllCartItem()"
          >
            <i class="far fa-trash-alt mr-2" /> Delete All
          </button>
        </div>
        <table class="table text-left">
          <thead>
            <th/>
            <th>Product</th>
            <th width="150px">
              Quantity
            </th>
            <th>Unit</th>
            <th class="text-right">Session Price</th>
            <th class="text-right">Total Price</th>
          </thead>
          <tbody v-if="cart.length">
            <tr v-for="item in cart" :key="item.id">
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.product.id)"
                >
                  <i class="far fa-trash-alt" />
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div
                  v-if="item.coupon"
                  class="text-success"
                >
                  Coupon Used
                </div>
              </td>
              <td class="align-middle">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      @click="updateQuantity(item.product.id, item.quantity - 1)"
                      :disabled="item.quantity === 1"
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    :value="item.quantity"
                    @keyup.enter="updateQuantity(item.product.id, $event.target.value)"
                  >
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-primary"
                      @click="updateQuantity(item.product.id, item.quantity + 1)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                {{ item.product.unit }}
              </td>
              <td class="align-middle text-right">
                {{ item.product.price }}
              </td>
              <td class="align-middle text-right">
                {{ item.product.price * item.quantity }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td/>
              <td/>
              <td/>
              <td
                colspan="3"
                class="text-right"
              >
                <div class="input-group input-group-sm">
                  <input
                    v-model="coupon_code"
                    type="text"
                    class="form-control"
                    placeholder="Enter Coupon Code"
                  >
                  <div class="input-group-append">
                    <button
                    class="btn btn-outline-primary"
                    @click="addCoupon"
                    >
                     <i class="fas fa-gift"> </i>   USE
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                class="text-right"
              >
                Total
              </td>
              <td class="text-right">
                {{ cartTotal }}
              </td>
            </tr>
            <tr v-if="coupon.enabled">
              <td
                colspan="5"
                class="text-right text-danger"
              >
                {{ 100 - coupon.percent }} % OFF
              </td>
              <td class="text-right text-danger">
                - {{ cartTotal * (100 - coupon.percent) / 100 }}
              </td>
            </tr>
            <tr v-if="coupon.enabled">
              <td
                colspan="5"
                class="text-right text-success"
              >
                Discounted
              </td>
              <td class="text-right text-success">
                {{ cartTotal * (coupon.percent / 100) }}
              </td>
            </tr>
          </tfoot>
        </table>
        <button type="button"
          class="btn btn-outline-primary text-right mr-2"
          @click="continueShopping">Continue to look around</button>
        <button type="button"
          class="btn btn-primary text-white text-right"
          @click="nextStep">Next Step</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      cart: {},
      cartTotal: 0,

      coupon: {},
      coupon_code: '',

      status: {
        loadingItem: '',
      },

      isLoading: false,
      fullPage: true,
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

      this.$http.delete(api)
        .then(() => {
          this.$bus.$emit('message:push',
            'Cart is empty.',
            'success');

          this.isLoading = false;
          this.getCart();
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`;

      this.$http.delete(api).then(() => {
        this.$bus.$emit('message:push',
          'Deleted',
          'success');

        this.isLoading = false;
        this.getCart();
      });
    },
    // 新增 coupon (實際是搜尋 coupon)
    addCoupon() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`;
      // 輸入 coupon 之前必須先戳一下 api/{{ uuid }}/coupon/search API 確定該 coupon 是存在的
      this.$http.post(api, { code: this.coupon_code }).then((res) => {
        // 若 coupon 存在就回寫回去到 this.coupon
        // 該資料會是一個物件格式，詳情可見 API 文件
        // https://course-ec-api.hexschool.io/document#frontend-search-coupon-code-code
        this.coupon = res.data.data;
        this.$bus.$emit('message:push',
          'Coupon applied.',
          'success');
        this.isLoading = false;
      }).catch((error) => {
        const errorData = error.response.data.errors;
        this.isLoading = false;
        console.log(errorData);

        if (errorData) {
          errorData.code.forEach((err) => {
            this.$bus.$emit('message:push',
              `Something is wrong. ${err}`,
              'danger');
          });

          this.isLoading = false;
        } else {
          const { message } = error.response.data;

          this.$bus.$emit('message:push',
            `Something is wrong. ${message}`,
            'danger');

          this.isLoading = false;
        }
      });
    },

    continueShopping() {
      this.$router.push('/services');
    },
    nextStep() {
      this.$router.push('/customer_info');
    },
  },
};
</script>
