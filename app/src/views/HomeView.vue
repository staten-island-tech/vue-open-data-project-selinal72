<template>
  <div class="container">
    <SquirrelCard
      v-for="(squeak, index) in squirrels"
      :key="squeak.name"
      :squirrel="squeak"
      :id="index + 1"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SquirrelCard from '@/components/SquirrelCard.vue'
const squirrels = ref([])
async function getSquirrels() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
    const data = await response.json()
    squirrels.value = data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getSquirrels()
})
</script>
