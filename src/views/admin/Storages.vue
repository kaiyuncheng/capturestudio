<template>
  <div class="admin__storages container">
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
    <h2>STORAGES LIST</h2>
    <table class="table mt-4 table-hover text-left">
      <thead class="thead-dark">
        <tr>
          <th width="50">#</th>
          <th width="350">images</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody v-if="storages.length">
        <tr
          v-for="(item, key) in storages"
          :key="key"
        >
          <td>
            {{ key + 1 }}
          </td>
          <td>
            <img
              :src="item.path"
              width="200px"
              class="img-fluid"
            >
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <div class="d-flex flex-column">
                <div class="btn-group">
                  <input
                    :id="item.id"
                    v-model="item.path"
                    type="text"
                  />
                  <button type="button"
                  class="btn btn-primary"
                  @click.prevent="copyPath(item)"
                  >
                  <i class="far fa-copy"></i>  Copy Image Path
                  </button>

                  <button type="button"
                  class="btn btn-outline-danger"
                  @click.prevent="openModel(item)"
                  >
                  <i class="fas fa-trash-alt"></i>  Delete
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination
      :pages="pagination"
      @emit-pages="getData"
    />

    <div
      id="deleteModal"
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
              <span>Delete Image</span>
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
            Are you sure to delete this image? <br>(You will not be able to recover this image.)
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
              @click="deleteData"
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
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Storages',
  components: {
    Pagination,
  },
  data() {
    return {
      storages: {},
      tempData: {},
      pagination: {},
      isLoading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${page}`;

      this.$http.get(api).then((res) => {
        this.storages = res.data.data;
        this.pagination = res.data.meta.pagination;

        this.isLoading = false;
      });
    },
    openModel(item) {
      $('#deleteModal').modal('show');
      this.tempData = { ...item };
    },
    deleteData() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${this.tempData.id}`;

      this.$http.delete(api).then(() => {
        $('#deleteModal').modal('hide');

        this.$bus.$emit('message:push',
          'The image has been deleted.',
          'success');

        this.isLoading = false;

        this.getData();
      });
    },
    copyPath(item) {
      const input = $(`#${item.id}`);
      input.select();
      document.execCommand('copy');
      this.$bus.$emit('message:push',
        'Copied',
        'success');
    },
  },
};
</script>
