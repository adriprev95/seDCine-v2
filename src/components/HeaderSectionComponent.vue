<template>
  <header
    class="flex flex-row justify-between items-center h-14 border-[#e5cc7c] border-dashed border-b-2"
  >
    <h2 class="text-[#e5cc7c] font-semibold text-xl md:text-3xl">{{ headerName }}</h2>
    <img src="@/assets/icons/recurso de viñeta.svg" alt="" class="h-3 md:h-7" />
  </header>
</template>

<script setup lang="ts">
defineProps<{
  headerName?: String
}>()
</script>

<style scoped></style>
