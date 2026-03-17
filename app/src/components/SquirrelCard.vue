<template>
  <router-link :to="sqPath" class="card">
    <h2>{{ squirrel.unique_squirrel_id }}</h2>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  squirrel: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})
const sqPath = computed(() => {
  return `/sq/${props.squirrel.unique_squirrel_id}`
})
</script>

<style scoped>
.card {
  display: block;
  padding: 1rem;
  margin: 1rem;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
h2 {
  margin: 0;
}
</style>
