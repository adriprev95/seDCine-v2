<template>
  <section role="trend-slide" class="h-64 md:h-[500px]">
    <div v-if="trend_movies" class="w-full h-full flex">
      <img
        v-for="movie in trend_movies"
        :key="movie.id"
        :src="imageHttp + movie.poster_path"
        alt="Pancarta publicitaria de Pelicula"
        class="object-cover w-0 grow opacity-60 transition-all ease-in-out delay-150 hover:opacity-100 hover:md:w-52 hover:2xl:w-0 hover:contrast-125 duration-300"
        @click="$router.push({ name: 'detail', params: { id: movie.id } })"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { getMovieTrendList, getMovieById } from '@/api/fetchApi'
import type { MovieList, Movie } from '@/api/types'

let movie_list = ref<MovieList | undefined>()
let trend_movies = ref<Movie[]>()
let movie = ref<Movie>()
let imageHttp: string = 'https://image.tmdb.org/t/p/original'

//Hacer la llamada a la api antes de que se monten los componentes usando el onBeforeMount()
onBeforeMount(async () => {
  movie_list.value = await getMovieTrendList()
  if (movie_list.value) {
    console.log(movie_list.value.results)
    trend_movies.value = movie_list.value.results.slice(0, 6)
    console.log(trend_movies.value)
  }
})

const GetMovie = async (id: String | String[]) => {
  movie.value = await getMovieById(id)
  if (movie.value) {
    console.log(movie.value)
  }
}

/* 

 <img
        v-for="movie in trend_movies"
        :key="movie.id"
        :src="imageHttp + movie.backdrop_path"
        alt="Pancarta publicitaria de Pelicula"
        class="object-cover h-full w-full lg:w-3/5 snap-center absolute"
      />

<figure
        v-for="movie in trend_movies"
        :key="movie.id"
        class="object-cover h-full w-full absolute flex"
      >
        <img
          :src="imageHttp + movie.backdrop_path"
          alt="Pancarta publicitaria de Pelicula"
          class="object-cover h-full w-full md:w-3/5 lg:w-4/5"
        />
        <figcaption class="flex align-middle items-center w-full">
          <h2 class="text-lg text-center align-middle w-full">{{ movie.title }}</h2>
        </figcaption>
      </figure>

<div
      class="absolute w-full h-full top-0 left-0 z-40 flex items-center content-center justify-center bg-slate-900/80 transition-all ease-in-out delay-150 hover:w-0 hover:h-0 duration-300"
    >
      <h1 class="w-full text-center text-[#e5cc7c] font-bold text-4xl">Recomendaciones del Dia</h1>
    </div>

*/
</script>

<style scoped></style>
