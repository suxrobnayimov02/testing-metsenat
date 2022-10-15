export const mutations = {
	SET_LIST: (state, list) => {
		state.list = list
	},
	SET_ITEM: (state, item) => {
		state.item = item
	},
	SET_SPONSORS: (state, pagination) => {
		state.sponsors.data = pagination.data
		state.sponsors.per_page = pagination.per_page
		state.sponsors.total = pagination.total
		state.sponsors.current_page = pagination.current_page
		state.sponsors.last_page = pagination.last_page
	},
	SET_TOTAL_COUNT: (state, data) => {
	state.total_count = data
	}

}  