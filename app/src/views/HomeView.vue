<template>
  <PieChart />
  <div class="container">
    <div v-if="store.loading">Loading...</div>
    <div v-if="store.error">Error: {{ store.error }}</div>
    <SquirrelCard v-for="squeak in store.squirrels" :key="squeak.unique_squirrel_id" :squirrel="squeak" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { store } from '@/store/store.js'
import SquirrelCard from '@/components/SquirrelCard.vue'
import PieChart from '@/components/PieChart.vue'

onMounted(() => {
  if (!store.squirrels.length) {
    store.fetchSquirrels()
  }
})
</script>
