<template>
  <div class="container">
    <h1 class="mt-5">
      <nuxt-link to="/courses">Go back</nuxt-link>
    </h1>
    <div class="row">
      <div class="col-3">
        <course-card-edit :course="course" @edit="course = $event" />
      </div>
    </div>
    <button type="button" class="btn btn-success" @click="addCourse()">Add</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      course: {}
    }
  },
  methods: {
    addCourse () {
      if (['name', 'description', 'cost', 'date'].every(p => p in this.course)) {
        this.$store.commit('courses/add', Object.assign(this.course, {
          id: this.$store.state.courses.list.length
        }))

        this.$router.push('/courses')
      } else {
        alert('Fill all fields!')
      }
    }
  }
}
</script>
