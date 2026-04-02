<template>
  <div class="charts-row">
    <PieChart />
    <ScatterPlot /> 
  </div>
  <div class="container">
    <div v-if="store.loading">Loading...</div>
    <div v-if="store.error">Error: {{ store.error }}</div>
    <SquirrelCard v-for="squeak in store.squirrels" :key="squeak.unique_squirrel_id" :squirrel="squeak" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { store } from '@/store/store.js'
import SquirrelCard from '@/components/SquirrelCard.vue'
import PieChart from '@/components/PieChart.vue'
import ScatterPlot from '@/components/ScatterPlot.vue'

onMounted(() => {
  if (!store.squirrels.length) {
    store.fetchSquirrels()
  }
})
</script>

<style scoped>
.charts-row {
  display: flex;
  flex-wrap: wrap;          /* lets them stack on narrow screens */
  gap: 1rem;                /* space between the two charts */
  justify-content: center;  /* center when they’re narrower than the container */
}
</style>
