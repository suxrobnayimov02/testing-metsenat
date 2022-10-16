<template>
  <div class="app main-tabs" style="padding-top: 30px;">
    <div class="mx-auto container">
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
        <tbody v-for="item in sponsors" :key="item.id" style="border-radius: 12px;">
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
              style="border-bottom-left-radius: 8px; border-top-left-radius: 8px;"
            >
              {{ item.id }}
            </th>
            <td class="py-4 px-4 font-medium" style="font-size: 15px;color: #1D1D1F;">{{ item.full_name }}</td>
            <td class="py-4 px-4">{{ item.phone }}</td>
            <td class="py-4 px-4 text-center">
              <b>{{ item.sum }}</b><span class="uppercase pl-2" style="color: #B2B7C1;">uzs</span>
            </td>
            <td class="py-4 px-4 text-center">
              <b style="color: #2E384D;">{{ item.spent }}</b><span class="uppercase pl-2" style="color: #B2B7C1;">uzs</span>
            </td>
            <td class="py-4 px-4 text-center">{{ toLocaleDateString(item.created_at) }}</td>
            <td class="py-4 px-4 text-center font-medium" style="font-size: 15px; color: blue;">
              <el-link :type="item.get_status_display === 'Yangi' ? 'primary' : 'warning'">
                {{ item.get_status_display }}
              </el-link>
            </td>     
            <td class="py-4 px-4 text-center" style="width: 60px; border-bottom-right-radius: 8px; border-top-right-radius: 8px;">
              <button class="eye" type="text">
                <img src="@/assets/images/icons/eye1.svg" alt="" />
              </button>
            </td>
          </tr>
        </tbody>	
      </table>

      <VueTailwindPagination
        :current="currentPage"
        :total="total"
        :per-page="perPage"
        @page-changed="pageChange($event)"

        text-before-input="Go to page"
        text-after-input="Go"/>

    </div>

  </div>
</template>

<script>
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
import '@ocrv/vue-tailwind-pagination/styles'
import { Search } from '@element-plus/icons-vue'
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  // eslint-disable-next-line vue/no-unused-components
  components: { Search, VueTailwindPagination },

  data() {
    return {
      activeTab: 'sponsor',
      sponsors: [],
      search: '',
      get_status_display: '',
      listLoading: true,
      dialogVisible: false,
      currentPage: 1,
      perPage: 10,
      total: 0,
      filter: {
        page: 1,
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
    this.currentPage = 1
    this.getResult() 

	},

	computed: {

		filterBlogs() {
			return this.sponsors.filter(item =>item.full_name.toLowerCase().includes(this.search.toLowerCase()) | item.phone.toLowerCase().includes(this.search.toLowerCase()) | item.get_status_display.toLowerCase().includes(this.search.toLowerCase()))
		}
	},

  methods: {
    pageChange(pageNumber) {
      this.currentPage = pageNumber
      this.getResult()
    },

    getResult() {
      this.listLoading = true
      axios.get(`https://club.metsenat.uz/api/v1/sponsor-list/?page=${this.currentPage}`)
        .then((response) => {
          this.sponsors = response.data.results
          this.total = response.data.count
        })
        this.listLoading = false
    },
    searchResults() {
      this.dialogVisible = false
      if (this.status.id == this.item.id ) {
        this.getItems()
      }
    },

		toLocaleDateString(date) {
      const date1 = new Date(date)
      return date1.toLocaleDateString('tr-TR')
    },
    formatPrice(value) {
      const val = (value / 1).toFixed(0).replace(' ', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    currentDate() {
      return new Date().toLocaleDateString('tr-TR')
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
  .el-link {
    cursor: default;
  }
  .el-link:hover {
    text-decoration: inherit !important;
  }

  .primary {
    border: 1px solid #3366FF;
  }
</style>