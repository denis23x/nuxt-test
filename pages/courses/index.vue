<template>
  <div class="container">
    <h1 class="mt-5">Available courses</h1>
    <nuxt-link class="btn btn-success" to="/courses/add">Add new</nuxt-link>
    <div class="row my-5">
      <div class="col-3" v-for="course of coursesPage">
        <course-card :course="course" />
      </div>
    </div>
    <sort :sort="sort" @setSort="setSort($event)" />
    <limit :limit="limit" @setLimit="setLimit($event)" />
    <pagination :limit="limit" :length="courses.length" :page="page" @setPage="setPage($event)" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      sort: '',
      page: 1,
      limit: 2
    }
  },
  computed: {
    courses () {
      return this.$store.state.courses.list
    },
    coursesPage () {
      return this.$store.getters["courses/page"](this.page, this.limit)
    }
  },
  methods: {
    setSort (sort) {
      this.sort = sort
      this.$store.commit('courses/sort', sort)
    },
    setLimit (limit) {
      this.page = 1
      this.limit = limit
    },
    setPage (page) {
      this.page = page
    }
  }
}
</script>
