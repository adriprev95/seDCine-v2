<template>
  <section role="popular-section" class="flex flex-col h-64 lg:h-[500px] mt-4">
    <HeaderSectionComponent header-name="Peliculas Populares" />
    <perfect-scrollbar
      class="flex flex-row grow relative mt-4 overflow-x-scroll scroll-m-1 overflow-y-hidden"
    >
      <figure
        v-for="movie in popular_movies"
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
import { getMoviePopularList, getMovieById } from '@/api/fetchApi'
import type { MovieList, Movie } from '@/api/types'

let movie_list = ref<MovieList | undefined>()
let popular_movies = ref<Movie[]>()
let movie = ref<Movie>()

let imageHttp: string = 'https://image.tmdb.org/t/p/original'

//Hacer la llamada a la api antes de que se monten los componentes usando el hook onBeforeMount()
onBeforeMount(async () => {
  movie_list.value = await getMoviePopularList()
  if (movie_list.value) {
    console.log(movie_list.value.results)
    popular_movies.value = movie_list.value.results
  }
})

const GetMovie = async (id: String | String[]) => {
  movie.value = await getMovieById(id)
  if (movie.value) {
    console.log(movie.value)
  }
}
</script>

<style scoped></style>
