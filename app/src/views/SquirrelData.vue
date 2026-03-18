<template>
  <div>
    <h2>{{ squirrel.unique_squirrel_id }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const squirrel = ref({})
async function getSquirrel(id) {
  const response = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
  const data = await response.json()
  squirrel.value = data[id]
}
onMounted(function () {
  getSquirrel(route.params.id)
})
watch(
  () => route.params.id,
  function (id) {
    getSquirrel(id)
  },
)
</script>

<style scoped></style>
