<template>
  <div class="card my-3">
    <div class="card-body">
      <label>
        <input type="text" class="form-control" v-model="course.name" @input="$emit('edit', course)">
      </label>
      <hr>
      <label>
        <input type="text" class="form-control" v-model="course.description" @input="$emit('edit', course)">
      </label>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <label>
          <input type="number" class="form-control" v-model="course.cost" @input="$emit('edit', course)">
        </label>
      </li>
      <li class="list-group-item">
        <label>
          <input type="date" class="form-control" v-model="course.date" @input="$emit('edit', course)">
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'course-card-edit',
  props: {
    course: {
      type: Object,
      default () {
        return {};
      }
    }
  }
}
</script>
