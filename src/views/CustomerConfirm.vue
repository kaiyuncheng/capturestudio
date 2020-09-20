<template>
  <div class="page__confirm">
    <h2>Order Test System - Check Out</h2>
    <div class="my-5 row no-gutters justify-content-center">
      <form class="col-md-6 text-left" @submit.prevent="payOrder">
        <table class="table">
          <thead>
            <th>#</th>
            <th>Products</th>
            <th>Quantity</th>
            <th class="text-right">Session Price</th>
            <th class="text-right">Total Price</th>
          </thead>
          <tbody>
            <tr v-for="(item, key) in order.products" :key="key">
              <td>
                {{ key + 1 }}
              </td>
              <td class="align-middle">
                {{ item.product.title }}
              </td>
              <td class="align-middle">{{ item.quantity }}/{{ item.product.unit }}</td>
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
              <td colspan="4" class="text-right">
                Total
              </td>
              <td class="text-right">
                {{ order.amount }}
              </td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th width="100">
                Email
              </th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>Paid?</th>
              <td>
                <span v-if="!order.paid">Unpaid</span>
                <span v-else class="text-success">Payment Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="order.paid === false" class="text-right">
          <button class="btn btn-danger">
            Go To Payment
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerConfirm',
  data() {
    return {
      order: {
        user: {},
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
        this.$bus.$emit('message:push',
          'Payment completed.',
          'success');
        this.isLoading = false;
      });
    },
  },
};
</script>
