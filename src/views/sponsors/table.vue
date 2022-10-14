<template>
  <div class="w-full">
    <table class="w-full text-sm text-left" :loading="loading">
      <thead class="text-xs uppercase">
        <tr class="text-gray-300 text-header">
          <th scope="col" class="py-3 px-6 text-gray-300" style="width: 45px">
            #
          </th>
          <th scope="col" class="py-3 px-6">F.I.SH</th>
          <th scope="col" class="py-3 px-6">TEL.RAQAMI</th>
          <th scope="col" class="py-3 px-6">Homiylik summasi</th>
          <th scope="col" class="py-3 px-6">Sarflangan summa</th>
          <th scope="col" class="py-3 px-6">Sana</th>
          <th scope="col" class="py-3 px-6">Holati</th>
          <th scope="col" class="py-3 px-6">Amallar</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr class="bg-white dark:bg-gray-800 mt-2 mb-2 tbody-tr">
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
            1
          </th>
          <td class="py-4 px-6">Alimov Abror Xabibullayevich</td>
          <td class="py-4 px-6">+99899 973-72-60</td>
          <td class="py-4 px-6">
            <b>30 000 000</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">
            <b>0</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">15.01.2021</td>
          <td class="py-4 px-6">Yangi</td>
          <td class="py-4 px-6">
            <button class="eye" type="text">
              <img src="@/assets/images/icons/eye1.svg" alt="" />
            </button>
          </td>
        </tr> -->
        <tr class="spacer">
          <td colspan="8"></td>
        </tr>
        <tr class="bg-white dark:bg-gray-800 mt-2 mb-2 tbody-tr"
					v-for="item in sponsors" :key="item.id">
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
          <td class="py-4 px-6">{{ item.full_name }}</td>
          <td class="py-4 px-6">{{ item.phone }}</td>
          <td class="py-4 px-6">
            <b>{{ item.sum }}</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">
            <b>{{ item.spent }}</b><span class="uppercase pl-2">uzs</span>
          </td>
          <td class="py-4 px-6">{{ toLocaleDateString(item.created_at) }}</td>
          <td class="py-4 px-6">{{ item.get_status_display }}</td>
          <td class="py-4 px-6">
            <button class="eye" type="text" @click="dialogVisible = true">
              <img src="@/assets/images/icons/eye1.svg" alt="" />
            </button>
          </td>
        </tr>
      </tbody>	
    </table>

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
			loading: true,
			dialogVisible: false,
			filter: {
				page: 1,
				total: 0,
				per_page: 10,
      }
    }
  },

	mounted() {
    this.getItems()
	},

  methods: {
		...mapActions({ fetchSponsors: 'sponsor/index' }),
		getItems() {
      this.fetchSponsors(this.filter)
        .then(res => {
					this.sponsors = res.results
        })
        .finally(() => {
					this.loading = false
        })
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
</style>