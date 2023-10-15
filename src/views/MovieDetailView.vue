<template>
  <header
    class="bg-gradient-to-b from-slate-800 from-20% to-slate-800/0 h-14 md:h-20 fixed min-w-full w-full p-1 md:p-3 top-0 z-40"
  >
    <img src="@/assets/icons/identidad.svg" alt="logo seDcine" class="h-full mx-auto" />
  </header>
  <main class="relative w-screen h-screen">
    <figure class="w-full h-full object-cover bg-cover">
      <img
        :src="imageHttp + movie?.backdrop_path"
        alt=""
        class="relative h-full w-full object-cover sm:object-center md:object-left z-10 saturate-75"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-800/95 from-20% via-slate-800/60 via-60% to-slate-800/0 z-20"
      ></div>
      <figcaption class="absolute top-0 left-0 w-1/2 z-50 md:pl-16 pt-44 xl:pl-36">
        <h1 class="text-[#e5cc7c] md:text-2xl xl:text-5xl font-extrabold">{{ movie?.title }}</h1>
        <h2 class="text-[#e5cc7c] md:text-base xl:text-xl italic font-semibold mt-5">
          "{{ movie?.tagline }}"
        </h2>
        <section class="flex">
          <span
            v-for="generes in movie?.genres"
            :key="generes.id"
            class="ring-1 ring-[#e5cc7c] m-2 text-[#e5cc7c] px-2"
          >
            {{ generes.name }}
          </span>
        </section>
        <section class="mt-16 xl:mt-28">
          <h3 class="text-[#e5cc7c] italic font-semibold text-xl">Sinopsis:</h3>
          <p class="text-[#e5cc7c] text-xl hyphens-auto pr-10">{{ movie?.overview }}</p>
        </section>
        <section class="mt-8">
          <span class="ring-1 ring-[#e5cc7c] m-2 text-[#e5cc7c] px-2 h-10 inline-flex items-center">
            <img src="../assets/icons/like-svgrepo-com.svg" alt="like" class="h-7 fill-slate-200" />
            {{ movie?.vote_average.toPrecision(1) }}/10
          </span>
        </section>
      </figcaption>
    </figure>
  </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import type { Movie } from '@/api/types'
import { getMovieById } from '@/api/fetchApi'
import { useRoute } from 'vue-router'
const route = useRoute()

let id = route.params.id
let movie = ref<Movie>()
let imageHttp: string = 'https://image.tmdb.org/t/p/original'

onBeforeMount(async () => {
  movie.value = await getMovieById(id)
  if (movie.value) {
    console.log(movie.value)
  }
})
</script>

<style scoped></style>
