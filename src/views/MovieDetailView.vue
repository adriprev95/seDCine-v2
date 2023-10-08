<template>
  <div>
    {{ movie }}
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import type { Movie } from '@/api/types'
import { getMovieById } from '@/api/fetchApi'
import { useRoute } from 'vue-router'

const route = useRoute()

let id = route.params.id
let movie = ref<Movie>()

onBeforeMount(async () => {
  movie.value = await getMovieById(id)
  if (movie.value) {
    console.log(movie.value)
  }
})
</script>

<style scoped></style>
