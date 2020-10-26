export const state = () => ({
	list: []
})

export const mutations = {
	set(state, list) {
		state.list = list
	},
	sort(state, sort) {
		state.list.sort((a, b) => {
			if (a[sort] > b[sort]) return 1
			if (a[sort] < b[sort]) return -1
			return 0
		})
	},
	delete(state, course) {
		state.list = state.list.filter(c => c.id !== course.id)
	},
	update(state, course) {
		state.list[state.list.findIndex(c => c.id === course.id)] = course
	},
	add(state, course) {
		state.list.unshift(course)
	}
}

export const getters = {
	page: state => (page, limit) => {
		const p = (page - 1) * limit

		return state.list.slice(p, p + limit)
	},
	id: state => id => {
		return state.list.filter(c => c.id === id)[0]
	}
}
