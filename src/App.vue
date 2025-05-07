<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarView from './components/NavbarView.vue'
</script>

<template>
  <div class="bg-gray-900 text-gray-200 min-h-screen">
    <NavbarView />
    <RouterView />
  </div>
</template>

<style scoped></style>
