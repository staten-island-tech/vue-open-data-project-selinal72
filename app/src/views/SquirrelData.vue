<template>
  <div v-if="squirrel">
    <h2>{{ squirrel.unique_squirrel_id }}</h2>
    <p>{{ squirrel.primary_fur_color }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const squirrel = ref(null)

async function getSquirrel(id) {
  try {
    const response = await fetch(
      `https://data.cityofnewyork.us/resource/vfnx-vebw.json?unique_squirrel_id=${id}`,
    )
    if (!response.ok) throw new Error('Network error')
    const data = await response.json()
    squirrel.value = data[0]
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getSquirrel(route.params.id)
})

watch(
  () => route.params.id,
  (newID) => {
    getSquirrel(newID)
  },
)
</script>

<style scoped></style>
