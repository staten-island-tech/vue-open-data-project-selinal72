<template>
    <Pie
      :options="chartOptions"
      :data="chartData"
    />
</template>
  
<script setup>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { reactive } from 'vue'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const chartData = reactive({
    labels: ['January', 'February', 'March'],
    datasets: [
        {
        data: [40, 20, 12],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
})

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Monthly Data' },
  },
})
</script>