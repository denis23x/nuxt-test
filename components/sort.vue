<template>
  <ul class="pagination my-3">
    <li class="page-item disabled">
      <a class="page-link" href="#">Sort by</a>
    </li>
    <li :class="['page-item', { 'active': sort === 'cost' }]">
      <a class="page-link" href="#" @click="$emit('setSort', 'cost')">Cost</a>
    </li>
    <li :class="['page-item', { 'active': sort === 'date' }]">
      <a class="page-link" href="#" @click="$emit('setSort', 'date')">Date</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'sort',
  props: {
    sort: {
      type: String,
      default () {
        return '';
      }
    }
  }
}
</script>
