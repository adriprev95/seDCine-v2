<template>
  <header
    class="flex flex-row justify-between items-center h-14 border-[#e5cc7c] border-dashed border-b-2"
  >
    <DropdownComponent @pushName="(name) => $emit('getSection', name)"></DropdownComponent>
    <img src="@/assets/icons/recurso de viñeta.svg" alt="" class="h-3 md:h-7" />
  </header>
</template>

<script setup lang="ts">
import DropdownComponent from './utils/DropdownComponent.vue'
defineProps<{
  headerName?: String
}>()
</script>

<style scoped></style>
