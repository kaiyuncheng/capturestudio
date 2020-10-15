<template>
  <div class="section page__info">
    <Process :process="2" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Please fill out your information</h2>
          <div class="row justify-content-center text-left">
            <validation-observer v-slot="{ invalid }">
              <form @submit.prevent="createOrder" class="info__form">
                <div class="form-group">
                  <validation-provider v-slot="{ errors, classes }" rules="required" name="Name">
                    <label for="username">Your Name</label>
                    <input
                      id="username"
                      v-model="form.name"
                      type="text"
                      class="form-control"
                      :class="classes"
                    />
                    <span v-if="errors[0]">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider
                    v-slot="{ errors, classes }"
                    name="E-mail"
                    rules="required|email"
                  >
                    <label for="email">Email</label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      class="form-control"
                      :class="classes"
                    />
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider
                    v-slot="{ errors, classes }"
                    rules="required|numeric|min:8"
                    name="Phone Number"
                  >
                    <label for="tel">Phone Number</label>
                    <input
                      id="tel"
                      v-model="form.tel"
                      type="tel"
                      class="form-control"
                      :class="classes"
                    />
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group">
                  <validation-provider v-slot="{ errors, classes }" rules="required" name="Address">
                    <label for="address">Address</label>
                    <input
                      id="address"
                      v-model="form.address"
                      type="text"
                      class="form-control"
                      :class="classes"
                    />
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group form__pay">
                  <validation-provider v-slot="{ errors, classes }" rules="required" name="payment">
                    <label for="payment">Payment</label>
                    <select v-model="form.payment" :class="classes" required id="payment">
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
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </validation-provider>
                </div>
                <div class="form-group form__textarea">
                  <label for="message"
                    >Message
                    <span>(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    class="form-control"
                    cols="50"
                    rows="5"
                  >
                  </textarea>
                </div>
                <div class="text-right info__btn">
                  <button type="button" class="button-outline" @click="goBack">
                    <i class="fas fa-chevron-left mr-2"></i> Back
                  </button>
                  <button type="submit" class="button" :disabled="invalid">
                    <i class="fas fa-check mr-2"></i> Submit
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Process from '@/components/Process.vue';

export default {
  name: 'CustomerInfo',
  components: {
    Process,
  },
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
      coupon: {
        type: Object,
      },
      coupon_code: '',

      isLoading: false,
      fullPage: true,
    };
  },

  created() {
    const vm = this;
    vm.$bus.$on('coupon:push', (coupon) => {
      vm.coupon = coupon;
    });
  },

  beforeDestroy() {
    const vm = this;
    vm.$bus.$off('coupon:push', (coupon) => {
      vm.coupon = coupon;
    });
  },

  methods: {
    createOrder() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`;

      const order = { ...this.form };

      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }

      this.$validator.validate().then((result) => {
        if (!result) {
          this.$bus.$emit('message:push', 'This service has been added to cart.', 'danger');
        }
      });
      this.$http
        .post(api, order)
        .then((res) => {
          if (res.data.data.id) {
            this.$router.push(`/customer_confirm/${res.data.data.id}`);
          }
          this.isLoading = false;
        })
        .catch((error) => {
          const errorData = error.response.data.errors;

          errorData.forEach((err) => {
            this.$bus.$emit('message:push', `creating order failed. ${err}`, 'danger');
          });

          this.isLoading = false;
        });
    },

    goBack() {
      this.$router.push('/cart');
    },
  },
};
</script>
