<template>
  <div class="card" @click="goToDetails">
    <h2>{{ squirrel.unique_squirrel_id }}</h2>
    <p>primary fur color: {{ squirrel.primary_fur_color }}</p>
  </div>
</template>

<script setup>
/* import { ref, onMounted } from 'vue'
import { computed } from 'vue' */
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  squirrel: {
    type: Object,
    required: true,
  },
})

function goToDetails() {
  router.push(`/info/${squirrel.unique_squirrel_id}`)
}

/* const squirrels = ref([])
async function getSquirrels() {
  const response = await fetch(`https://data.cityofnewyork.us/resource/vfnx-vebw.json`)
  const data = await response.json()
  squirrels.value = data
}
onMounted(() => {
  getSquirrels()
})

const fur_colors = ref([])

async function getColors(fur_colors, squirrels) {
  squirrels.forEach((squirrel) => {
    if (fur_colors.includes(squirrel.primary_fur_color) == false) {
      fur_colors.push(squirrel.primary_fur_color)
    }
    console.log(fur_colors)
  })
}
onMounted(() => {
  getSquirrels()
}) */
</script>

<style scoped>
.card {
  display: block;
  padding: 1rem;
  margin: 1rem;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
h2 {
  margin: 0;
}
</style>
