<template>
  <nav class="w-[350px] relative cursor-pointer">
    <header class="flex justify-between items-center h-14 gap-6" @click="clickDown">
      <h2 class="text-[#e5cc7c] font-semibold text-xl md:text-2xl">{{ activeName }}</h2>
      <img
        src="@/assets/icons/viñeta.svg"
        alt=""
        id="arrow"
        class="h-3 md:h-7 transition duration-300 focus:-rotate-90"
      />
    </header>
    <Transition name="slide-fade">
      <ul v-if="dropdowActive" class="w-full bg-slate-700 absolute z-50">
        <li
          v-for="(name, index) in sectionName"
          :key="index"
          class="text-[#e5cc7c] hover:bg-slate-500 flex justify-between items-center h-14 text-lg"
          @click="dropdown(name)"
        >
          {{ name }}
          <img v-if="name === activeName" src="@/assets/icons/viñeta.svg" alt="" class="h-5" />
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const emit = defineEmits<{
  (e: 'pushName', name: String): void
}>()
const sectionName: String[] = reactive([
  'Actualmente en Cines',
  'Peliculas Populares',
  'Proximos Estrenos'
])

let activeName = ref<String>(sectionName[0])

const dropdown = (n: String) => {
  activeName.value = n
  emit('pushName', n)
}

let dropdowActive = ref<Boolean>(false)
const clickDown = () => {
  dropdowActive.value = !dropdowActive.value
  if (dropdowActive.value) {
    document.getElementById('arrow')?.classList.add('-rotate-90')
  } else {
    document.getElementById('arrow')?.classList.remove('-rotate-90')
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.5, 1, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
