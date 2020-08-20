<template>
  <div class="admin__products container">
    <Loading :active.sync="isLoading" />
    <h2>Products List</h2>
    <div class="text-right mt-4">
        <button class="btn btn-primary" @click.prevent="openModal('new')">
          Add new product
        </button>
    </div>

      <table class="table mt-4 table-hover text-left">
        <thead class="thead-dark">
          <tr>
            <th width="50">
              #
            </th>
            <th width="120">
              Category
            </th>
            <th>Product Name</th>
            <th width="120" class="text-right">
              List price
            </th>
            <th width="120" class="text-right">
              Sale Price
            </th>
            <th width="120">
              Enabled?
            </th>
            <th width="120">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
              {{ item.origin_price }}
            </td>
            <td class="text-right">
              {{ item.price }}
            </td>
            <td>
              <span v-if="item.enabled" class="text-success">Enabled</span>
              <span v-else class="text-danger">Disabled</span>
            </td>
            <td>
              <div class="btn-group">

                <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                  Edit
                </button>

                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', item)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>

      <ProductModal ref="productModel"
      :temp-product="tempProduct"
      :status="status"
      :is-new="isNew"
      @emit-product="updateProduct"
      @emit-file="uploadFile">
      </ProductModal>

      <DelProductModal :temp-product="tempProduct" @emit-del="delProduct">
      </DelProductModal>

  </div>
</template>

<script>
/* global $ */
import Pagination from '@/components/Pagination.vue';
import DelProductModal from '@/components/DelProductModal.vue';
import ProductModal from '@/components/ProductModal.vue';

export default {
  name: 'AdminProducts',
  components: {
    Pagination,
    DelProductModal,
    ProductModal,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
        filePath: '',
      },
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`;

      this.$http
        .get(api)
        .then((res) => {
          this.products = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.isLoading = false;
        });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: [],
          };
          this.isNew = true;
          $('#productModal').modal('show');
          break;

        case 'edit':
          this.isNew = false;
          this.getProduct(item.id);
          break;

        case 'delete':
          this.tempProduct = { ...item };
          $('#delProductModal').modal('show');
          break;

        default:
          break;
      }
    },
    getProduct(id) {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`;

      this.$http
        .get(api)
        .then((res) => {
          this.tempProduct = res.data.data;
          $('#productModal').modal('show');
          this.isLoading = false;
        });
    },
    updateProduct() {
      this.isLoading = true;
      // 新增商品
      let api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`;
      let httpMethod = 'post';

      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = 'patch';
      }

      this.$http[httpMethod](api, this.tempProduct)
        .then(() => {
          $('#productModal').modal('hide');

          // this.$bus.$emit('message:push',
          //   '新增成功囉，好棒ヽ(＾Д＾)ﾉ ',
          //   'success');

          this.isLoading = false;
          this.getProducts();
        }).catch((error) => {
          this.isLoading = false;
          const errorData = error.response.data;
          $('#productModal').modal('hide');
          console.log(errorData);

          // this.$bus.$emit('message:push',
          //   `出現錯誤惹，好糗Σ( ° △ °|||)︴
          //    ${errorData}`,
          //   'danger');
        });
    },
    delProduct() {
      this.isLoading = true;

      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;

      this.$http.delete(api).then(() => {
        $('#delProductModal').modal('hide');
        this.isLoading = false;

        // this.$bus.$emit('message:push',
        //   '刪除成功囉，好棒ヽ(＾Д＾)ﾉ',
        //   'success');
        this.getProducts();
      });
    },
    uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`;

      this.status.fileUploading = true;

      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        this.status.fileUploading = false;
        if (res.status === 200) {
          this.tempProduct.imageUrl.push(res.data.data.path);
          this.status.filePath = res.data.data.path;
        }
      }).catch(() => {
        this.$bus.$emit('message:push',
          `檔案上傳失敗惹，好糗Σ( ° △ °|||)︴
          請檢查是不是檔案大小超過 2MB`,
          'danger');

        this.status.fileUploading = false;
      });
    },

  },
};
</script>
