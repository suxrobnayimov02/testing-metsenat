<template>
  <div class="app main-tabs">
    <div class="mx-auto container relative">
      <div class="mx-auto">
        <div class="h-12 w-full mt-4 mb-4">
          <el-tabs v-model="activeTab" type="border-card" class=" seeker-tab d-flex justify-content-end " >
            <el-tab-pane label="DASHBOARD" name="dashboard">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ullam reprehenderit fugit ea veniam expedita ducimus. Distinctio architecto doloribus dicta, veritatis repudiandae eaque similique deserunt quibusdam, sint odit voluptates debitis.
            </el-tab-pane>
            <el-tab-pane label="HOMIYLAR" name="sponsor">
              <Table />
            </el-tab-pane>
            <el-tab-pane label="TALABALAR" name="student">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dignissimos itaque repudiandae, ipsa eligendi illum. Qui nobis ab at commodi autem quidem labore ex blanditiis, doloremque iste facilis reiciendis neque!
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="flex h-12 filter_list">
          <form class="flex items-center" style="height: 43px;">
            <div class="relative w-full">
              <div
                class="
                  flex
                  absolute
                  inset-y-0
                  left-0
                  items-center
                  pl-3
                  pointer-events-none
                "
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="
                  search_input
                  bg-gray-50
                  border border-gray-300
                  text-gray-900 text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  pl-10
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                placeholder="Izlash"
                required
              />
            </div>
          </form>
          <button
            type="button"
            class="
              filter-btn
              flex
              justify-center
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              mr-2
              mb-2
              ml-6
              dark:bg-blue-600 dark:hover:bg-blue-700
              focus:outline-none
              dark:focus:ring-blue-800
            "
          >
            <svg
              class="w-6 h-6"
              style="margin-right: 9px !important; width: 18px;"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
            Filter
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Table from "./table.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: { Table },

  data() {
    return {
      activeTab: 'sponsor'
    }
  },
  methods: {
  },

  
};
</script>

<style >
  .hover\:bg-blue-800:hover {
    background-color: #dae2fd;
  }
  .main-tabs {
    background-color: #f5f5f7;
  }
  .el-tabs__nav-wrap::after {
    height: 0;
  }
  .el-tabs--border-card {
    border: none;
    background-color: transparent;
  }
  .el-tabs--border-card>.el-tabs__header {
    background-color: transparent;
    border-bottom: 0px;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    background: #3366FF;
    color: white;
    border-radius: 0px;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    border: 2px solid #E0E7FF;
    width: 200px;
    text-align: center;
    height: 43px;
    background-color: #ffffff;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(1) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(3) {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  /* .el-tabs__content {
    background-color: #f5f5f7;
  } */

</style>