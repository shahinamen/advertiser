<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { HousePlus, Share2, UserPlus, LogIn, Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
const route = useRoute()
</script>

<template>
  <nav class="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-md">
    <div class="flex justify-between items-center p-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <span
          class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-3xl font-bold"
        >
          Advertiser
        </span>
      </router-link>

      <!-- Mobile menu toggle button -->
      <button class="md:hidden text-white" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <component :is="isMobileMenuOpen ? X : Menu" class="w-6 h-6" />
      </button>

      <!-- Desktop menu -->
      <ul class="hidden md:flex space-x-4">
        <li>
          <RouterLink
            :class="[
              'flex items-center space-x-1 p-2 rounded hover:bg-white hover:text-black',
              route.path === '/' ? 'bg-white text-black' : '',
            ]"
            to="/"
          >
            <HousePlus />
            <span>Home</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="[
              'flex items-center space-x-1 p-2 rounded hover:bg-white hover:text-black',
              route.path.startsWith('/advertise') ? 'bg-white text-black' : '',
            ]"
            to="/advertise"
          >
            <Share2 />
            <span>Advertise</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="[
              'flex items-center space-x-1 p-2 rounded hover:bg-white hover:text-black',
              route.path.startsWith('/register') ? 'bg-white text-black' : '',
            ]"
            to="/register"
          >
            <UserPlus />
            <span>Register</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="[
              'flex items-center space-x-1 p-2 rounded hover:bg-white hover:text-black',
              route.path.startsWith('/login') ? 'bg-white text-black' : '',
            ]"
            to="/login"
          >
            <LogIn />
            <span>Login</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden px-4 pb-4 space-y-2">
      <RouterLink
        :class="[
          'flex items-center space-x-2 p-2 rounded hover:bg-white hover:text-black',
          route.path === '/' ? 'bg-white text-black' : '',
        ]"
        to="/"
      >
        <HousePlus />
        <span>Home</span>
      </RouterLink>
      <RouterLink
        :class="[
          'flex items-center space-x-2 p-2 rounded hover:bg-white hover:text-black',
          route.path.startsWith('/advertise') ? 'bg-white text-black' : '',
        ]"
        to="/advertise"
      >
        <Share2 />
        <span>Advertise</span>
      </RouterLink>
      <RouterLink
        :class="[
          'flex items-center space-x-2 p-2 rounded hover:bg-white hover:text-black',
          route.path.startsWith('/register') ? 'bg-white text-black' : '',
        ]"
        to="/register"
      >
        <UserPlus />
        <span>Register</span>
      </RouterLink>
      <RouterLink
        :class="[
          'flex items-center space-x-2 p-2 rounded hover:bg-white hover:text-black',
          route.path.startsWith('/login') ? 'bg-white text-black' : '',
        ]"
        to="/login"
      >
        <LogIn />
        <span>Login</span>
      </RouterLink>
    </div>
  </nav>
</template>
