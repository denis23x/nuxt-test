<template>
  <div class="container">
    <h1 class="mt-5">
      <nuxt-link :to="'/courses/' + course.id">Go back</nuxt-link>
    </h1>
    <div class="row">
      <div class="col-3">
        <course-card-edit :course="course" @edit="course = $event" />
      </div>
    </div>
    <button type="button" class="btn btn-success" @click="updateCourse()">Update</button>
    <button type="button" class="btn btn-danger" @click="deleteCourse()">Delete</button>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      course: {}
    }
  },
  created() {
    this.course = { ...this.$store.getters["courses/id"](parseInt(this.$route.params.id, 10)) }
  },
  methods: {
    updateCourse () {
      this.$store.commit('courses/update', this.course)
      this.$router.push('/courses/' + this.course.id)
    },
    deleteCourse () {
      this.$store.commit('courses/delete', this.course)
      this.$router.push('/courses')
    }
  }
}
</script>
