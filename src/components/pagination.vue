<template>
  <caption class="text-center">
    <div class="col-lg-12 mt-2 d-flex">
      <el-pagination
        :page-size="10"
        :total="pagination.total"
        :current-page="pagination.page"
        prev-text="Олдингиси"
        next-text="Кейингиси"
        :page-sizes="page_sizes"
        background
        layout="sizes, prev, pager, next, jumper"
        @size-change="sizeChange"
        @current-change="currentChange"
        @prev-click="currentChange"
        @next-click="currentChange"
      >
      </el-pagination>
    </div>
  </caption>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pagination',
  props: {
    pagination: { type: Object },
  },
  data() {
    return {};
  },
  computed: {
    page_sizes: () => {
      return [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200];
    },
  },
  methods: {
    sizeChange(newPageSize) {
      this.$emit("c-change", { key: "limit", value: newPageSize });
      // eslint-disable-next-line vue/no-mutating-props
      this.pagination.per_page = newPageSize;
      this.currentChange(1);
    },
    currentChange(page) {
      this.$emit("c-change", { key: "page", value: page });
    },
  },
};
</script>
<style>
.el-pagination__rightwrapper {
  margin-left: 4rem !important;
}
</style>
