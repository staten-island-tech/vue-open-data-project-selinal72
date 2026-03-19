<template>
  <div class="container">
    <SquirrelCard v-for="squeak in squirrels" :key="squeak.unique_squirrel_id" :squirrel="squeak" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelCard from '@/components/SquirrelCard.vue'

const squirrels = ref([])

async function getSquirrels() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=50')
    if (!response.ok) throw new Error('Failed to fetch squirrels')
    const data = await response.json()
    squirrels.value = data.filter((squirrel) => squirrel.primary_fur_color)
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getSquirrels()
})
</script>
