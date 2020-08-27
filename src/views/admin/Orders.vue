<template>
  <div class="admin__orders container">
    <Loading :active.sync="isLoading" />
    <h2>ORDERS LIST</h2>
    <table class="table mt-4 text-left">
      <thead class="thead-dark">
        <tr>
          <th>#</th>
          <th>Order Number</th>
          <th width="120">Time</th>
          <th>Products</th>
          <th>Payment</th>
          <th>Total Price</th>
          <th>Paid?</th>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr
          v-for="(item, key) in orders"
          :key="key"
          :class="{'text-secondary': !item.is_paid}"
        >
          <td>{{ key + 1 }}</td>
          <td>{{ item.created.timestamp }}</td>
          <td>{{ item.created.datetime }}</td>
          <td>
            <ul class="list-unstyled">
              <li
                v-for="(product, i) in item.products"
                :key="i"
              >
                ({{ i + 1}}) {{ product.product.title }} --- {{ product.quantity }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>
            {{ item.payment }}
          </td>
          <td class="text-right">
            {{ item.amount }}
          </td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                v-model="item.paid"
                type="checkbox"
                class="custom-control-input"
                @change="setOrderPaid(item)"
              >
              <label
                class="custom-control-label"
                :for="item.id"
              >
                <strong
                  v-if="item.paid"
                  class="text-primary"
                >Paid</strong>
                <span
                  v-else
                  class="text-muted"
                >Unpaid</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination
      :pages="pagination"
      @emit-pages="getOrders"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Orders',
  components: {
    Pagination,
  },
  data() {
    return {
      orders: {
        user: {},
      },
      pagination: {},
      isLoading: false,
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(pages = 1) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${pages}`;

      this.$http.get(api).then((res) => {
        this.orders = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
        console.log(this.orders);
      });
    },
    setOrderPaid(item) {
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`;

      if (!item.paid) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`;
      }

      this.$http.patch(api, item.id).then(() => {
        this.$bus.$emit('message:push',
          'Payment statue has been updated',
          'success');
        this.getOrders();
      });
    },
  },
};
</script>
