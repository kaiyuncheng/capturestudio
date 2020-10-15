<template>
  <div class="admin__coupons container">
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
    <h2>COUPONS LIST</h2>
    <div class="text-right mt-4">
      <button type="button"
        class="btn btn-primary"
        @click="openCouponModal('created')"
      >
        <i class="fas fa-plus"></i>   Add new coupon
      </button>
    </div>
    <table class="table mt-4 table-hover text-left">
      <thead class="thead-dark">
        <tr>
          <th width="50">#</th>
          <th>Title</th>
          <th>Code</th>
          <th>Discount %</th>
          <th>Due Date</th>
          <th>Enabled?</th>
          <th width="160">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in coupons"
          :key="key"
        >
          <td>{{ key + 1 }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.deadline.datetime }}</td>
          <td>
            <span
              v-if="item.enabled"
              class="text-success"
            >Enabled</span>
            <span
              v-else
              class="text-danger"
            >Disabled</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal('edit', item)"
              >
                <i class="fas fa-wrench"></i>  Edit
              </button>
              <button type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openCouponModal('delete', item)"
              >
                <i class="fas fa-trash-alt"></i>  Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      id="couponModal"
      class="modal fade text-left"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
             {{ status === 'created' ? 'Add new coupon' : 'Editing' }}
            </h5>
            <button
              type="button"
              class="close text-white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                v-model="tempCoupon.title"
                type="text"
                class="form-control"
                placeholder="Enter Coupon Title"
              >
            </div>
            <div class="form-group">
              <label for="coupon_code">Coupon Code</label>
              <input
                id="coupon_code"
                v-model="tempCoupon.code"
                type="text"
                class="form-control"
                placeholder="Enter Coupon Code"
              >
            </div>
            <div class="form-group">
              <label for="due_date">Due Date</label>
              <input
                id="due_date"
                v-model="due_date"
                type="date"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="due_time">Due Time</label>
              <input
                id="due_time"
                v-model="due_time"
                type="time"
                step="1"
                class="form-control"
              >
            </div>
            <div class="form-group">
              <label for="price">Discount %</label>
              <input
                id="price"
                v-model="tempCoupon.percent"
                type="number"
                class="form-control"
                placeholder="Enter Discount %"
              >
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  id="enabled"
                  v-model="tempCoupon.enabled"
                  class="form-check-input"
                  type="checkbox"
                >
                <label
                  class="form-check-label"
                  for="enabled"
                >Enabled?</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateCoupon"
            >
              {{ status === 'created' ? 'Create' : 'Update' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="delCouponModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>Delete Coupon</span>
            </h5>
            <button
              type="button"
              class="close text-white"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure to delete this coupon?
            <strong class="text-danger">{{ tempCoupon.title }}</strong>
            <br>(You will not be able to recover this product.)
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>

            <button
              type="button"
              class="btn btn-danger"
              @click="delCoupon"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Coupons',
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        enabled: false,
        percent: 100,
        deadline_at: 0,
        code: '',
      },
      due_date: '',
      due_time: '',
      status: '',
      isLoading: false,
    };
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupons`;

      this.$http.get(api).then((res) => {
        this.coupons = res.data.data;
        this.isLoading = false;
      });
    },
    openCouponModal(status, item) {
      this.status = status;

      switch (status) {
        case 'created':
          this.tempCoupon = {};
          $('#couponModal').modal('show');
          break;
        // 由於 const 與 let 宣告環境較特別，故需要在 case 外層宣告一個 {} 確保作用域
        case 'edit': {
          this.tempCoupon = { ...item };

          // 使用 split 切割相關時間戳
          const deadlineAt = this.tempCoupon.deadline.datetime.split(' ');
          [this.due_date, this.due_time] = deadlineAt; // 日期
          $('#couponModal').modal('show');
          break;
        }
        case 'delete':
          this.tempCoupon = { ...item };
          $('#delCouponModal').modal('show');
          break;
        default:
          break;
      }
    },
    updateCoupon() {
      this.isLoading = true;

      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      let httpMethod = '';
      let msg = 'New coupon has been added.';

      if (this.status === 'created') {
        httpMethod = 'post';
      } else {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;
        msg = 'Coupon has been updated.';
        httpMethod = 'patch';
      }

      // 針對日期做組合重新寫入到物件中
      // 日期格式 Y-m-d H:i:s，例如：「2020-06-16 09:31:18」
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`;

      this.$http[httpMethod](api, this.tempCoupon).then(() => {
        $('#couponModal').modal('hide');
        this.$bus.$emit('message:push',
          msg,
          'success');

        this.getCoupons();
      }).catch(() => {
        this.$bus.$emit('message:push',
          'Something is wrong.',
          'danger');
        this.isLoading = false;
      });
    },
    delCoupon() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`;

      this.$http.delete(api).then(() => {
        $('#delCouponModal').modal('hide');
        this.$bus.$emit('message:push',
          'Coupon has been deleted',
          'success');

        this.getCoupons();

        this.isLoading = false;
      }).catch(() => {
        this.$bus.$emit('message:push',
          'Something is wrong.',
          'danger');
        this.isLoading = false;
      });
    },
  },
};
</script>
