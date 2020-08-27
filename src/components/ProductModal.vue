<template>
  <div
    id="productModal"
    class="modal fade text-left"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span v-if="isNew">Add new product</span>
            <span v-else>Editing {{ tempProduct.title }} </span>
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
          <div class="row">
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                   id="title"
                   v-model="tempProduct.title"
                   type="text"
                   class="form-control"
                   placeholder="Enter product title"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">Category</label>
                  <input
                     id="category"
                     v-model="tempProduct.category"
                     type="text"
                     class="form-control"
                     placeholder="Enter category"
                     required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">Unit</label>
                  <input
                    id="unit"
                    v-model="tempProduct.unit"
                    type="unit"
                     class="form-control"
                     placeholder="Enter product unit"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">List Price</label>
                  <input
                    id="origin_price"
                    v-model="tempProduct.origin_price"
                    type="number"
                    class="form-control"
                    placeholder="Enter list price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">Sale Price</label>
                  <input
                    id="price"
                    v-model="tempProduct.price"
                    type="number"
                    class="form-control"
                    placeholder="Enter sale price"
                  />
                </div>
              </div>
              <hr>
              <div class="form-group">
                <label for="description">Product Description</label>
                <textarea
                  id="description"
                  v-model="tempProduct.description"
                  type="text"
                  class="form-control"
                  placeholder="Enter description"
                  required
                >
                </textarea>
              </div>
              <div class="form-group">
                  <label for="content">Content</label>
                  <vue-editor
                    id="content"
                    v-model="tempProduct.content"
                  />
              </div>
              <div class="form-group">
                  <div class="form-check">
                    <input
                      id="enabled"
                      v-model="tempProduct.enabled"
                      class="form-check-input"
                      type="checkbox"
                    />
                    <label class="form-check-label" for="enabled">Enabled?</label>
                  </div>
              </div>
            </div>

            <!-- 上傳圖片區 -->
            <div class="col-sm-4">
              <div class="form-group" v-for="i in 5" :key="'img' + i">
                <label :for="'img' + i">Enter image source {{ i }}</label>
                <input
                  :id="'img' + i"
                  v-model="tempProduct.imageUrl[i - 1]"
                  type="text"
                  class="form-control"
                  placeholder="Enter image source"
                />
                <img class="img-fluid img-thumbnail w-50" :src="tempProduct.imageUrl[i - 1]" alt />
              </div>
              <div class="form-group">
                <label for="customFile">Or upload image
                    <i v-if="status.fileUploading" class="fas fa-spinner fa-spin"></i>
                </label>
                <input id="customFile" ref="file" type="file" class="form-control"
                @change="emitFile">
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button"
            class="btn btn-outline-secondary"
            data-dismiss="modal">
            Cancel
          </button>
          <button type="button"
            class="btn btn-primary"
            @click="emitProduct">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor/dist/vue2-editor.core';

export default {
  name: 'ProductModal',
  components: {
    VueEditor,
  },
  data() {
    return {};
  },
  props: {
    tempProduct: {
      imageUrl: [],
    },
    status: {},
    isNew: Boolean,
  },

  methods: {
    emitProduct() {
      this.$emit('emit-product', this.tempProduct.id);
    },
    emitFile() {
      this.$emit('emit-file', this.$refs.file.files[0]);
    },
  },
};
</script>
<style lang="css">
@import '~vue2-editor/dist/vue2-editor.css';

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
</style>
