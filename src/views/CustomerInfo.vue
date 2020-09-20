<template>
  <div class="page__info">
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
export default {
  name: 'CustomerInfo',
  data() {
    return {
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: '',
      },

      coupon: {},
      coupon_code: '',

      isLoading: false,
      fullPage: true,
    };
  },

  methods: {
    createOrder() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;

      const order = { ...this.form };

      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }

      this.$http.post(api, order).then((res) => {
        if (res.data.data.id) {
          this.$router.push(`/customer_confirm/${res.data.data.id}`);
        }

        this.isLoading = false;
        this.getCart();
      }).catch((error) => {
        const errorData = error.response.data.errors;

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
