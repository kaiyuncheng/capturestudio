<template>
  <div
  id="delProductModal"
  class="modal fade text-left"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>Delete product</span>
          </h5>
          <button
            type="button"
            class="close text-white"
            data-dismiss="modal"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">Are you sure to delete this product?<br/>
          <strong class="text-danger">
            {{ tempProduct.title }}
          </strong><br/>
            (You will not be able to recover this product.)
        </div>
        <div class="modal-footer">
          <button
             type="button"
             class="btn btn-outline-secondary"
             data-dismiss="modal">
                Cancel
          </button>
          <button type="button" class="btn btn-danger" @click.prevent="emitDel">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelProductModal',
  data() {
    return {
    };
  },
  props: {
    tempProduct: {
      imageUrl: [],
    },
  },
  methods: {
    emitDel() {
      this.$emit('emit-del', this.tempProduct.id);
    },
  },
};
</script>
