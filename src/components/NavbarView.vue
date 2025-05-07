<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FastForward } from 'lucide-vue-next'
</script>
<template>
  <nav class="">
    <div class="flex justify-between items-center p-4 text-white">
      <router-link to="/" class="space-x-2 flex"
        ><FastForward /><span
          class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-3xl font-bold"
          >Advertiser</span
        ></router-link
      >
      <ul class="flex space-x-4">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/advertise">Advertise</RouterLink>
        </li>
        <li>
          <RouterLink to="/register">Register</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
