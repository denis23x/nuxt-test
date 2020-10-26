<template>
  <ul class="pagination my-3">
    <li :class="['page-item', { 'disabled': page === 1 }]">
      <a class="page-link" href="#" @click="$emit('setPage', page - 1)">Previous</a>
    </li>
    <li :class="['page-item', { 'active': page === num }]" v-for="num of pages">
      <a class="page-link" href="#" @click="$emit('setPage', num)">{{num}}</a>
    </li>
    <li :class="['page-item', { 'disabled': page === Math.ceil(length / limit) }]">
      <a class="page-link" href="#" @click="$emit('setPage', page + 1)">Next</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'pagination',
  computed: {
    pages () {
      return Array.from({ length: Math.ceil(this.length / this.limit) }, (_, k) => k + 1)
    }
  },
  props: {
    limit: {
      type: Number,
      default () {
        return 2;
      }
    },
    length: {
      type: Number,
      default () {
        return 0;
      }
    },
    page: {
      type: Number,
      default () {
        return 1;
      }
    }
  }
}
</script>
