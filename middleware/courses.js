export default async ({ store }) => {
	if (!store.state.courses.list.length) {
		store.commit('courses/set', await fetch('http://localhost:3000/data.json').then(d => d.json()))
	}
}
