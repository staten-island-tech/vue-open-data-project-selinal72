<template>
    <Pie
      :options="chartOptions"
      :data="store.chartData"
    />
</template>
  
<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { reactive } from 'vue'
import { store } from '@/store/store.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Squirrel Colors' },
  },
})
</script>