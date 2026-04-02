<template>
    <div>
      <div v-if="store.loading">Loading positions…</div>
      <div v-else-if="store.error" class="error">{{ store.error }}</div>
      <Scatter v-else :options="options" :data="store.scatterData" />
    </div>
</template>

<script setup>
import { Scatter } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale, } from 'chart.js'
import { store } from '@/store/store.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale)

const options = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Squirrel Positions' },
    },
    scales: {
        x: {
        title: { display: true, text: 'X coordinate' },
        },
        y: {
        title: { display: true, text: 'Y coordinate' },
        },
    },
}
</script>

<style scoped>
.error {
    color: #c00;
    margin-top: 1rem;
}

div {
    min-width: 40%;
}
</style>