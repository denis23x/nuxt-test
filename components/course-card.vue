<template>
  <div class="card my-3">
    <div class="card-body">
      <h5 class="card-title">{{course.name}}</h5>
      <p class="card-text">{{course.description}}</p>
      <nuxt-link v-if="link" class="btn btn-primary" :to="'/courses/' + course.id">Read more</nuxt-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <strong>Cost:</strong> {{new Intl.NumberFormat('ru-RU').format(course.cost)}} $
      </li>
      <li class="list-group-item">
        <strong>Date:</strong> {{new Date(course.date).toLocaleDateString('ru-RU')}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'course-card',
  props: {
    link: {
      type: Boolean,
      default () {
        return true;
      }
    },
    course: {
      type: Object,
      default () {
        return {};
      }
    }
  }
}
</script>
