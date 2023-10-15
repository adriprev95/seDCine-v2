<template>
  <section role="currently_theatres-section" class="flex w-full mt-4">
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-10 w-full"
    >
      <figure
        v-for="movie in trend_movies"
        :key="movie.id"
        class="transition duration-200 hover:scale-105"
      >
        <img
          :src="imageHttp + movie.poster_path"
          alt="algo"
          class="object-cover rounded-xl md:rounded-3xl h-full"
        />
      </figure>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { getMovieCurrentlyList } from '@/api/fetchApi'
import type { MovieList, Movie } from '@/api/types'

let movie_list = ref<MovieList | undefined>()
let trend_movies = ref<Movie[]>()
let movie = ref<Movie>()

let imageHttp: string = 'https://image.tmdb.org/t/p/original'

//Hacer la llamada a la api antes de que se monten los componentes usando el hook onBeforeMount()
onBeforeMount(async () => {
  movie_list.value = await getMovieCurrentlyList()
  if (movie_list.value) {
    console.log(movie_list.value.results)
    trend_movies.value = movie_list.value.results
  }
})
</script>

<style scoped></style>
