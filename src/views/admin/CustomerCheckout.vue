<template>
  <div class="Customer_checkout container">
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
    <h2>Order Test System - Check Out</h2>
    <div class="my-5 row no-gutters justify-content-center">
    <form
      class="col-md-6 text-left"
      @submit.prevent="payOrder"
    >
      <table class="table">
        <thead>
          <th>#</th>
          <th>Products</th>
          <th>Quantity</th>
          <th class="text-right">Session Price</th>
          <th class="text-right">Total Price</th>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in order.products"
            :key="key"
          >
            <td>
              {{ key + 1 }}
            </td>
            <td class="align-middle">
              {{ item.product.title }}
            </td>
            <td class="align-middle">
              {{ item.quantity }}/{{ item.product.unit }}
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
            <td
              colspan="4"
              class="text-right"
            >
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
              <span
                v-else
                class="text-success"
              >Payment Completed</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-if="order.paid === false"
        class="text-right"
      >
        <button class="btn btn-danger">
          Go To Payment
        </button>
      </div>
    </form>
    <hr class="w-100">

    <div class="col-md-10 text-left">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Number</th>
            <th>Time</th>
            <th  width="400px">Products</th>
            <th class="text-right">Total Price</th>
            <th>Payment</th>
            <th>Paid?</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody v-if="orders.length">
          <tr
            v-for="(item, key) in orders"
            :key="key"
            :class="{'text-secondary': !item.is_paid}"
          >
            <td>
              {{ key + 1 }}
            </td>
            <td>
              {{ item.created.timestamp }}
            </td>
            <td>{{ item.created.datetime }}</td>
            <td>
              <ul class="list-unstyled">
                <li
                  v-for="(product, i) in item.products"
                  :key="i"
                >
                  {{ product.product.title }} --{{ product.quantity }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">
              {{ item.amount }}
            </td>
            <td>
              {{ item.payment }}
            </td>
            <td>
              <strong
                v-if="item.paid"
                class="text-primary"
              >
                Paid
              </strong>
              <span
                v-else
                class="text-muted"
              >
                Unpaid
              </span>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  class="btn btn-outline-primary"
                  :disabled="item.paid"
                  @click.prevent="getDetailed(item.id)"
                >
                  Select
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerCheckout',
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
