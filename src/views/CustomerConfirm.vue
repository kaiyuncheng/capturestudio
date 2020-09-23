<template>
  <div class="section page__confirm">
    <Process :process="3" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Order Confirmation</h2>
          <form @submit.prevent="payOrder" class="confirm__form">
              <ul class="col-lg-6 col-md-8 col-12">
                <li class="row confirm__title">
                  <div class="col-md-6 col-12">
                    <h5>Services</h5>
                  </div>
                  <div class="col-md-3 col-12">
                    <h5>Session</h5>
                  </div>
                  <div class="col-md-3 col-6 price">
                    <h5>Price</h5>
                  </div>
                </li>
                <li class="row cart__list" v-for="(item, key) in order.products" :key="key">
                  <div class="col-md-6 col-12 list__name">
                    <h5 class="">{{ key + 1 }} - {{ item.product.title }}</h5>
                  </div>
                  <div class="col-md-3 col-12 list_input">
                    {{ item.quantity }} / {{ item.product.unit}}
                  </div>
                  <div class="col-md-3 col-12 list_price">
                    $ {{ item.product.price * item.quantity }}
                  </div>
                </li>
                <li class="confirm__subtotal" v-if="order.coupon">
                  Subtotal $
                  {{ order.amount *  100 / order.coupon.percent}}
                </li>
                <li class="confirm__discount" v-if="order.coupon">
                  {{ 100 - order.coupon.percent }} % OFF  -$
                  {{ order.amount * ( 100 - order.coupon.percent) / order.coupon.percent}}
                </li>
                <li class="confirm__total">
                  Total $ {{ order.amount }}
                </li>
                <li class="confirm__info">
                    <h4>Your Information</h4>
                    <div class="info__item">
                      <p>Name:</p>
                      <p> {{ order.user.name }}</p>
                    </div>

                    <div class="info__item">
                      <p>Email:</p>
                      <p>{{ order.user.email }}</p>
                    </div>

                    <div class="info__item">
                      <p>Phone:</p>
                      <p>{{ order.user.tel }}</p>
                    </div>

                    <div class="info__item">
                      <p>Addres:</p>
                      <p>{{ order.user.address }}</p>
                    </div>
                    <div class="info__item">
                      <p>Message:</p>
                      <p>{{ order.message }}</p>
                    </div>
                    <div class="info__item">
                      <p>Payment:</p>
                      <p v-if="!order.paid"> {{ order.payment }} - Unpaid</p>
                      <p v-else> {{ order.payment }} - Payment Completed</p>
                    </div>
                </li>
                <li class="cart__btn">
                  <button type="button" class="button" @click="goBack">
                    <i class="fas fa-chevron-left mr-2"></i> Back
                  </button>
                  <button type="submit" class="button" v-if="order.paid === false">
                    <i class="fas fa-check mr-2"></i>
                    Go To Payment
                  </button>
                </li>
              </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Process from '@/components/Process.vue';

export default {
  name: 'CustomerConfirm',
  components: {
    Process,
  },
  data() {
    return {
      order: {
        user: {},
        coupon: {},
      },
      orders: [],
      orderId: '',
      isLoading: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    if (this.orderId) {
      this.getDetailed(this.orderId);
    }
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.orders = res.data.data;
        this.isLoading = false;
      });
    },
    getDetailed(id) {
      this.isLoading = true;
      this.orderId = id;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${id}`;

      this.$http.get(api).then((res) => {
        this.order = res.data.data;
        console.log(this.order);
        this.isLoading = false;
      });
    },
    payOrder() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`;

      this.$http.post(api).then((res) => {
        if (res.data.data.paid) {
          this.getDetailed(this.orderId);
        }
        this.getOrders();
        this.$bus.$emit('message:push', 'Payment completed.', 'success');
        this.isLoading = false;

        this.$router.push('/customer_complete');
      });
    },

    goBack() {
      this.$router.push('/customer_info');
    },
  },
};
</script>
