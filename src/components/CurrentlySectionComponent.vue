<template>
  <section role="currently_theatres-section" class="flex flex-col h-64 lg:h-[500px] mt-4">
    <HeaderSectionComponent header-name="Actualmente en Cines" />
    <perfect-scrollbar
      class="flex flex-row grow relative mt-4 overflow-x-scroll scroll-m-1 overflow-y-hidden"
    >
      <figure
        v-for="movie in trend_movies"
        :key="movie.id"
        class="relative aspect-[2/3] h-full mr-4"
      >
        <img :src="imageHttp + movie.poster_path" alt="algo" class="h-[95%] rounded-3xl" />
      </figure>
    </perfect-scrollbar>
  </section>
</template>

<script setup lang="ts">
import HeaderSectionComponent from './HeaderSectionComponent.vue'
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
