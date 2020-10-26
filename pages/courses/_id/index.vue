<template>
  <div class="container">
    <h1 class="mt-5">
      <nuxt-link to="/courses">Go back</nuxt-link>
    </h1>
    <div class="row">
      <div class="col-3">
        <course-card :course="course" :link="false" />
      </div>
    </div>
    <nuxt-link class="btn btn-primary" :to="`/courses/${course.id}/edit`">Edit course</nuxt-link>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  computed: {
    course () {
      return this.$store.getters["courses/id"](parseInt(this.$route.params.id, 10))
    }
  }
}
</script>
