<template>
  <div>
    <div v-if="store.loading">Loading chart…</div>
    <div v-else-if="store.error" class="error">{{ store.error }}</div>
    <Pie v-else
      :options="chartOptions"
      :data="store.chartData"
    />
  </div>
</template>
  
<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { store } from '@/store/store.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Squirrel Colors' },
  },
}
</script>

<style scoped>
.error {
  color: #c00;
  margin-top: 1rem;
}

div {
  min-width: 20%;
}
</style>