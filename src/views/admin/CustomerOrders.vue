<template>
  <div class="Customer_orders container">
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
    <h2>Order Test System</h2>
    <!-- 產品列表 -->
    <div class="row mt-4 text-left">
      <div v-for="(item) in products" :key="item.id" class="col-md-4 mb-4">
        <div class="card border-1">
          <div class="card_badge badge-primary text-center rounded-top p-1 font-weight-bold">
            {{ item.category }}
          </div>
          <div style="height: 300px; background-size: cover; background-position: center"
          :style="{backgroundImage: `url(${item.imageUrl[0]})`}">
          </div>

          <div class="card-body">
            <h3 class="h3 card-title">
              <a href="#" class="text-primary">{{ item.title }}</a>
            </h3>
            <p class="card-text" v-html="item.content">
              {{ item.content }}
            </p>
            <div class="d-flex justify-content-between align-items-baseline">
                <!-- 售價(price)欄位是可選的，因此售價若為空，就顯示原價(origin_price)
                售價若不為空，就顯示原價(origin_price)與售價(price) -->
              <div v-if="!item.price" class="h4 mt-4 text-danger">
                ${{ item.origin_price }}
              </div>
              <div v-else>
                <div class="h4 mt-4 text-danger">
                  <del class="text-dark">${{ item.origin_price }}</del>
                  <i class="fas fa-long-arrow-alt-right"></i> ${{ item.price }}
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-primary btn-sm"
            :disabled="status.loadingItem === item.id" @click="getProduct(item.id)">
              <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
              More Info
            </button>

            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                :disabled="status.loadingItem === item.id" @click="addToCart(item.id)">
              <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
              <i class="fas fa-shopping-cart mr-1"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 產品詳細彈跳視窗 -->
    <div
      id="productModal"
      class="modal fade text-left"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              {{ tempProduct.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="detail__slide">
              <div
                id="carouselExampleIndicators_detail"
                class="carousel slide"
                data-ride="carousel"
                data-interval="2000"
              >
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicatrs_detail"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-pre-icon"
                    aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators_detail"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>

                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators_detail"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators_detail"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators_detail"
                    data-slide-to="2"
                  ></li>
                </ol>

                <div class="carousel-inner">

                  <div class="carousel-item active"
                    style="height: 400px;background-size: cover;background-position: center;"
                    :style="{backgroundImage: `url(${tempProduct.imageUrl[0]})`}"
                  >
                  </div>

                  <div class="carousel-item"
                    style="height: 400px;background-size: cover;background-position: center;"
                    :style="{backgroundImage: `url(${tempProduct.imageUrl[1]})`}">
                  </div>

                  <div class="carousel-item"
                    style="height: 400px;background-size: cover;background-position: center;"
                    :style="{backgroundImage: `url(${tempProduct.imageUrl[2]})`}">
                  </div>
                </div>
              </div>
            </div>

            <blockquote class="blockquote mt-3">
              <!-- 由於 content 是使用 vue2Editor 生成 HTML 標籤
              所以必須使用 v-html 渲染，因此這邊會出現提示警告是正常的 -->
              <!-- eslint-disable -->
              <p
                class="mb-2"
                v-html="tempProduct.content"
              />
              <!--eslint-enable-->
              <footer class="blockquote-footer text-left mb-2">
                {{ tempProduct.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div v-if="!tempProduct.price" class="h4 mt-4 text-danger">
                ${{ tempProduct.origin_price }}
              </div>

              <div v-else>
                <div class="h4 mt-4 text-danger">
                  <del class="text-dark">
                    ${{ tempProduct.origin_price }}
                  </del>
                  <i class="fas fa-long-arrow-alt-right"></i>
                  ${{ tempProduct.price }}
                </div>
              </div>
            </div>

            <select
              v-model="tempProduct.num"
              name
              class="form-control mt-3"
            >
              <option
                value="0"
                disabled
                selected
              >
                Select Sessions
              </option>
              <option
                v-for="num in 5"
                :key="num"
                :value="num"
              >
                {{ num }} {{ tempProduct.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div
              v-if="tempProduct.num"
              class="text-muted text-nowrap mr-3"
            >
              Total
              <strong>$ {{ tempProduct.num * tempProduct.price }}</strong>
            </div>
            <button
              type="button"
              class="btn btn-danger"
              @click="addToCart(tempProduct.id, tempProduct.num)"
            >
              <i
                v-if="tempProduct.id === status.loadingItem"
                class="fas fa-spinner fa-spin"
              />
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
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
                    <button type="button"
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
                    <button type="button"
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
                    <button type="button"
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
      </div>
    </div>
    <!-- 訂單個人資料 -->
    <h2 class="text-center">Your Information</h2>
    <div class="my-5 row justify-content-center text-left">
      <validation-observer v-slot="{ invalid }" class="col-md-6">
        <form @submit.prevent="createOrder">
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }" rules="required" name="Name">
              <label for="username">Your Name</label>
              <input id="username" v-model="form.name"
              type="text" class="form-control" :class="classes">
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
            v-slot="{ errors, classes }"
            name="E-mail"
            rules="required|email">
              <label for="email">Email</label>
              <input id="email" v-model="form.email"
              type="email" class="form-control" :class="classes">
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }" rules="required|numeric|min:8" name="Phone Number">
              <label for="tel">Phone Number</label>
              <input id="tel"
              v-model="form.tel" type="tel" class="form-control" :class="classes">
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
            v-slot="{ errors, classes }" rules="required" name="Address">
              <label for="address">Address</label>
              <input id="address" v-model="form.address"
              type="text" class="form-control" :class="classes">
              <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group">
            <label for="payment">Payment</label>
            <select v-model="form.payment" class="form-control" required id="payment">
              <option value="" disabled>
                Please select a payment method for your order
              </option>
              <option value="WebATM">
                WebATM
              </option>
              <option value="ATM">
                ATM
              </option>
              <option value="CVS">
                CVS
              </option>
              <option value="Barcode">
                Barcode
              </option>
              <option value="Credit">
                Credit
              </option>
              <option value="ApplePay">
                ApplePay
              </option>
              <option value="GooglePay">
                GooglePay
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" class="form-control" cols="30" rows="3">
            </textarea>
          </div>
          <div class="text-right">
            <button type="submit" class="btn btn-primary" :disabled="invalid">
              Submit
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'CustomerOrders',
  data() {
    return {
      products: [],
      tempProduct: {
        imageUrl: [],
        num: 0,
      },
      status: {
        loadingItem: '',
      },
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },
      cart: {},
      cartTotal: 0,

      coupon: {},
      coupon_code: '',
      // coupon 不建議預先定義，如果預先定義的話通常是空值
      // 如果傳送一個空值的 coupon 就會出現 500 錯誤
      // 因此會建議打完 coupon API 確定該 coupon 是存在並啟用的狀態在加入到訂單內
      isLoading: false,
    };
  },
  created() {
    this.getProducts();
    this.getCart();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?page=${page}`;

      this.$http.get(api).then((res) => {
        this.products = res.data.data;

        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.status.loadingItem = id;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`;

      this.$http.get(api).then((res) => {
        // this.tempProduct = res.data.data;
        // 由於 tempProduct 的 num 沒有預設數字
        // 因此 options 無法選擇預設欄位，故要增加這一行解決該問題
        // 另外如果直接使用物件新增屬性進去是會雙向綁定失效，因此需要使用 $set
        // this.$set(this.tempProduct, 'num', 0);

        this.tempProduct = {
          ...res.data.data,
          num: 0,
        };

        $('#productModal').modal('show');

        this.status.loadingItem = '';
      });
    },
    addToCart(id, quantity = 1) {
      this.status.loadingItem = id;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`;

      const cart = {
        product: id,
        quantity,
      };

      this.$http.post(api, cart).then(() => {
        this.status.loadingItem = '';

        this.$bus.$emit('message:push',
          'Added to cart',
          'primary');

        $('#productModal').modal('hide');
        this.getCart();
      }).catch((error) => {
        this.status.loadingItem = '';

        const errorList = error.response.data.errors;

        errorList.forEach((err) => {
          this.$bus.$emit('message:push',
            `Something is wrong. ${err}`,
            'danger');
        });

        $('#productModal').modal('hide');
      });
    },
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
        // console.log(errorData);

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
    createOrder() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;

      const order = { ...this.form };

      // 如果有優惠卷就加入，請注意該 coupon 必須先執行過 this.addCoupon()
      // 主要會使用 enabled 屬性判斷該 coupon 是否可以使用
      // 如果沒有執行 this.addCoupon() 那麼 enabled 就會是 undefined，因此還是不會執行
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }

      this.$http.post(api, order).then((res) => {
        if (res.data.data.id) {
          this.$router.push(`/admin/customer_checkout/${res.data.data.id}`);
        }

        this.isLoading = false;
        this.getCart();
      }).catch((error) => {
        const errorData = error.response.data.errors;
        // console.log(errorData);

        errorData.forEach((err) => {
          this.$bus.$emit('message:push',
            `creating order failed. ${err}`,
            'danger');
        });

        this.isLoading = false;
      });
    },
  },
};
</script>
