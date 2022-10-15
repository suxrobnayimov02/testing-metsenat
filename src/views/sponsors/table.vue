<template>
  <div class="w-full">
    <table class="w-full text-sm text-left" v-loading="listLoading" @sort-change="sortChange">
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
            <button class="eye" type="text" @click="dialogVisible = true">
              <img src="@/assets/images/icons/eye1.svg" alt="" />
            </button>
          </td>
        </tr>
      </tbody>	
    </table>
		<el-pagination v-model:currentPage="filter.page" :pager-count="10" :total="sponsors.total" layout="prev, pager, next" :page-size="sponsors.per_page" @current-change="handleCurrentChange" />

		<el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
			<span>It's a draggable Dialog</span>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">Cancel</el-button>
					<el-button type="primary" @click="dialogVisible = false"
						>Confirm</el-button
					>
				</span>
			</template>
		</el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "table",

	data() {
    return {
			sponsors: [],
			listLoading: true,
			dialogVisible: false,
			total: 0,
			search: '',
			filter: {
				page: 1,
				per_page: 10,
				full_name: undefined,
				type: undefined,
				sort: '+id',
      },
			status: [
				{ id: 1, name: 'Barchasi' },
				{ id: 2, name: 'Yangi' },
				{ id: 3, name: 'Moderatsiyada' },
				{ id: 4, name: 'Tasdiqlangan' },
				{ id: 5, name: 'Bekor qilingan' }
			]
    }
  },

	mounted() {
    this.getItems()
	},

	computed: {
		filterBlogs() {
			return this.sponsors.filter(item =>item.full_name.toLowerCase().includes(this.search.toLowerCase()))
		}
	},

  methods: {
		...mapActions({ fetchSponsors: 'sponsor/index' }),
		getItems() {
			this.listLoading = true
      this.fetchSponsors(this.filter)
        .then(res => {
					this.sponsors = res.results

					setTimeout(() => {
						this.listLoading = false
					}, 1.5 * 3000)
        })
        .finally(() => {
					this.listLoading = false
        })
    },
		// handleFilter() {
    //   this.filter.page = 1
    //   this.getItems()
    // },
		sortChange(results) {
      const { prop, order } = results
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.filter.sort = '+id'
      } else {
        this.filter.sort = '-id'
      }
      this.handleFilter()
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
  },

};
</script>

<style>
.spacer {
	height: 10px;
	background-color: #f5f5f7;
}
</style>