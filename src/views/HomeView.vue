<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center h-screen">
    <h1 class="text-center mt-[100px] mb-[60px] text-xl font-medium md:text-4xl">
      Earn with Ads on the Blockchain
    </h1>
    <div class="flex space-x-4">
      <RouterLink
        class="px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300"
        to="/register"
      >
        REGISTER
      </RouterLink>
      <RouterLink
        class="px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 hover:from-blue-600 hover:via-teal-600 hover:to-green-600 transition-all duration-300"
        to="/login"
      >
        LOGIN
      </RouterLink>
    </div>
  </div>
</template>
