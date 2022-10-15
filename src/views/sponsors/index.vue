<template>
  <div class="app main-tabs">
    <div class="mx-auto container relative">
      <div class="mx-auto">
        <div class="h-12 w-full mt-4 mb-4">
          <el-tabs v-model="activeTab" type="border-card" class="seeker-tab d-flex justify-content-end " >
            <el-tab-pane label="DASHBOARD" name="dashboard">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ullam reprehenderit fugit ea veniam expedita ducimus. Distinctio architecto doloribus dicta, veritatis repudiandae eaque similique deserunt quibusdam, sint odit voluptates debitis.
            </el-tab-pane>
            <el-tab-pane label="HOMIYLAR" name="sponsor">
              <table class="w-full text-sm text-left" v-loading="listLoading">
                <thead class="text-xs uppercase">
                  <tr class="text-header">
                    <th scope="col" class="py-3 px-6" style="width: 45px">
                      #
                    </th>
                    <th scope="col" class="py-3 px-6">F.I.SH</th>
                    <th scope="col" class="py-3 px-6 text-center">TEL.RAQAMI</th>
                    <th scope="col" class="py-3 px-6 text-center">Homiylik summasi</th>
                    <th scope="col" class="py-3 px-6 text-center">Sarflangan summa</th>
                    <th scope="col" class="py-3 px-6 text-center">Sana</th>
                    <th scope="col" class="py-3 px-6 text-center">Holati</th>
                    <th scope="col" class="py-3 px-6">Amallar</th>
                  </tr>
                </thead>
                <tbody v-for="item in filterBlogs" :key="item.id">
                  <tr class="spacer">
                    <td colspan="8"></td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800 mt-2 mb-2 tbody-tr"
                    style="color: #1D1D1F;">
                    <th
                      scope="row"
                      class="
                        py-4
                        px-6
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        dark:text-white
                      "
                    >
                      {{ item.id }}
                    </th>
                    <td class="py-4 px-6 font-medium" style="font-size: 15px;color: #1D1D1F;">{{ item.full_name }}</td>
                    <td class="py-4 px-6">{{ item.phone }}</td>
                    <td class="py-4 px-6 text-center">
                      <b>{{ item.sum }}</b><span class="uppercase pl-2" style="color: #B2B7C1;">uzs</span>
                    </td>
                    <td class="py-4 px-6 text-center">
                      <b style="color: #2E384D;">{{ item.spent }}</b><span class="uppercase pl-2" style="color: #B2B7C1;">uzs</span>
                    </td>
                    <td class="py-4 px-6 text-center">{{ toLocaleDateString(item.created_at) }}</td>
                    <td class="py-4 px-6 text-center font-medium" style="font-size: 15px; color: blue;">
                      <el-link :type="item.get_status_display === 'Yangi' ? 'primary' : 'warning'">
                        {{ item.get_status_display }}
                      </el-link>
                    </td>     
                    <td class="py-4 px-6 text-center">
                      <button class="eye" type="text">
                        <img src="@/assets/images/icons/eye1.svg" alt="" />
                      </button>
                    </td>
                  </tr>
                </tbody>	
              </table>
              <div class="text-left">
                <el-pagination background :total="filter.totalPage" :pager-count="10" :page-size="sponsors.limit" @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="prev, pager, next" />
                <!-- <div class="flex">
                  <div v-for="page in totalPage" :key="page.id" >
                    <el-button class="pagination-button">{{page}}</el-button>
                  </div>
                </div> -->
              </div>
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
                v-model="search"
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
            @click="dialogVisible = true"
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

      <el-dialog v-model="dialogVisible" title="Tips" width="35%" align-center>
        <el-form class="w-full">
          <el-select v-model="filter.type" placeholder="Status" filterable  class="filter-item w-full" style="margin-right: 10px;">
            <el-option :value="null" label="Barchasi" />
            <el-option v-for="item in status" :key="item.id" :label="item.name" :value="item.id" class="w-full"/>
          </el-select>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="searchResults"
              >Confirm</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import { setItem } from '../../utils/storage'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",

  data() {
    return {
      activeTab: 'sponsor',
      sponsors: [],
      search: '',
      // listLoading: true,
      dialogVisible: false,
      filter: {
        page: 1,
        totalPage: 0,
        limit: 10,
				full_name: undefined,
      },
			status: [
				{ id: 1, name: 'Yangi' },
				{ id: 2, name: 'Moderatsiyada' },
				{ id: 3, name: 'Tasdiqlangan' },
				{ id: 4, name: 'Bekor qilingan' }
			]
    }
  },
  mounted() {
    this.getItems()
	},

	computed: {
		filterBlogs() {
			return this.sponsors.filter(item =>item.full_name.toLowerCase().includes(this.search.toLowerCase()) | item.phone.toLowerCase().includes(this.search.toLowerCase()) | item.get_status_display.toLowerCase().includes(this.search.toLowerCase()))
		}
	},

  methods: {
		...mapActions({ fetchSponsors: 'sponsor/index' }),
    handleCurrentChange(val) {
      this.filter.limit = this.sponsors.limit
      this.filter.page = val
      this.getItems()
    },
    handleSizeChange(val) {
      this.filter.limit = val
      this.filter.page = this.sponsors.page
      this.getItems()
    },
		getItems() {
			// this.listLoading = true
      this.fetchSponsors(this.filter)
        .then(res => {
          this.filter.limit = this.sponsors.limit
          this.filter.page = this.sponsors.page
          this.filter.totalPage = this.sponsors.totalPage
          this.filter.totalPage = Math.ceil(res.count / this.filter.limit)
					this.sponsors = res.results

					setTimeout(() => {
						// this.listLoading = false
					}, 1.5 * 3000)
        })
        .finally(() => {
					// this.listLoading = false
        })
    },

    searchResults() {
      this.dialogVisible = false
    },
		toLocaleDateString(date) {
      const date1 = new Date(date)
      return date1.toLocaleDateString('ko-KR')
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace(' ', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    currentDate() {
      return new Date().toLocaleDateString('ko-KR')
    },
  }
  
};
</script>

<style >
  .hover\:bg-blue-800:hover {
    background-color: #dae2fd;
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
  .pagination-button {

  }

</style>