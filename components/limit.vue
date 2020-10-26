<template>
  <ul class="pagination my-3">
    <li class="page-item disabled">
      <a class="page-link" href="#">Courses per page</a>
    </li>
    <li :class="['page-item', { 'active': limit === 2 }]">
      <a class="page-link" href="#" @click="$emit('setLimit', 2)">2</a>
    </li>
    <li :class="['page-item', { 'active': limit === 4 }]">
      <a class="page-link" href="#" @click="$emit('setLimit', 4)">4</a>
    </li>
    <li :class="['page-item', { 'active': limit === 6 }]">
      <a class="page-link" href="#" @click="$emit('setLimit', 6)">6</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'limit',
  props: {
    limit: {
      type: Number,
      default () {
        return 2;
      }
    }
  }
}
</script>
