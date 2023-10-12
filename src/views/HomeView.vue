<script setup lang="ts">
import CurrentlySectionComponent from '@/components/CurrentlySectionComponent.vue'
import PopularSectionComponent from '@/components/PopularSectionComponent.vue'
import TrendSlideComponent from '@/components/TrendSlideComponent.vue'
import UpcomingSectionComponent from '@/components/UpcomingSectionComponent.vue'
import HeaderSectionComponent from '@/components/HeaderSectionComponent.vue'

import { ref } from 'vue'
/*
interface Section {
  popularSection: Boolean
  currentlySection: Boolean
  upcomingSection: Boolean
}
*/
let currentSection = ref<String>('Actualmente en Cines')
</script>

<template>
  <header class="bg-slate-800 h-14 md:h-24 fixed min-w-full w-full p-1 md:p-3 top-0 z-40">
    <img src="@/assets/icons/identidad.svg" alt="logo seDcine" class="h-full mx-auto" />
  </header>
  <main class="flex-col justify-center items-center mt-16 md:mt-28 mx-5 md:mx-32">
    <TrendSlideComponent></TrendSlideComponent>
    <HeaderSectionComponent
      :header-name="currentSection"
      @getSection="(name) => (currentSection = name)"
    />
    <CurrentlySectionComponent v-if="currentSection === 'Actualmente en Cines'" />
    <UpcomingSectionComponent v-if="currentSection === 'Proximos Estrenos'" />
    <PopularSectionComponent v-if="currentSection === 'Peliculas Populares'" />
  </main>
  <footer>
    <h2 class="text-[#e5cc7c] text-center text-xl my-7">Se de cine</h2>
  </footer>
</template>
