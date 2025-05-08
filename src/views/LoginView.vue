<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h1 class="mb-6 text-2xl font-bold text-black md:text-4xl text-center">Login</h1>
      <form>
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium text-black">Email</label>
          <input
            type="email"
            id="email"
            class="text-black w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm font-medium text-black">Password</label>
          <input
            type="password"
            id="password"
            class="text-black w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer transition duration-300"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-sm text-black">
        Don't have an account?
        <RouterLink class="text-blue-500 hover:underline" to="/register"> Register </RouterLink>
      </p>
    </div>
  </div>
</template>
