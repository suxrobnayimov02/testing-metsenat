<template>
  <div class="mx-auto main-app">
    <div
      class="flex justify-between container px-6 py-4 mx-auto items-center"
    >
      <div class="w-full">
        <el-button-group>
          <el-button size="large" class="">DASHBOARD</el-button>
          <el-button type="primary" size="large" class=""
            >HOMIYLAR</el-button
          >
          <el-button size="large" class="">TALABALAR</el-button>
        </el-button-group>
      </div>
      <div class="flex filter_list">
        <form class="flex items-center">
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
            <el-input
              type="text"
              v-model="search"
              id="simple-search"
              class="search_input w-full"
              :prefix-icon="Search"
              size="large"
              placeholder="Izlash"
              required
            />
          </div>
        </form>
        <el-button
          size="large"
          class="
            filter-btn
            flex
            justify-center
            text-white
            font-medium
            rounded-lg
            mr-2
            ml-6
          "
          @click="dialogVisible = true"
        >
          <svg
            class="w-6 h-6"
            style="margin-right: 9px !important; width: 18px"
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
        </el-button>
      </div>
    </div>
		<el-dialog v-model="dialogVisible" title="Tips" width="35%" align-center>
        <el-form class="w-full">
          <el-select v-model="status_name" placeholder="Status" filterable size="large"  class="filter-item w-full" style="margin-right: 10px;" @change="getItems()">
            <el-option :value="null" label="Barchasi" />
            <el-option v-for="item in status" :key="item.id" :label="item.name" :value="item.id" class="w-full"/>
          </el-select>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false" size="large">Cancel</el-button>
            <el-button type="primary" @click="searchResults" size="large">Confirm</el-button
            >
          </span>
        </template>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HeaderTab",
  data() {
    return {
      search: "",
			dialogVisible: false,
			status: [
				{ id: 1, name: 'Yangi' },
				{ id: 2, name: 'Moderatsiyada' },
				{ id: 3, name: 'Tasdiqlangan' },
				{ id: 4, name: 'Bekor qilingan' }
			]
    }
  },
  computed: {
    filterBlogs() {
			return this.sponsors.filter(item =>item.full_name.toLowerCase().includes(this.search.toLowerCase()) | item.phone.toLowerCase().includes(this.search.toLowerCase()) | item.get_status_display.toLowerCase().includes(this.search.toLowerCase()))
		}
  },
	methods: {
		searchResults() {
			this.dialogVisible = false
		}
	},
};
</script>

<style>
.search_input {
  width: 284px;
}
.filter-btn {
  width: 123px;
}
</style>