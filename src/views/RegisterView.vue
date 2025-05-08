<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
      <h1 class="mb-6 text-2xl font-bold text-black md:text-4xl text-center">Register</h1>
      <form>
        <div class="space-y-2">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            id="username"
            type="text"
            class="mb-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your username"
            required
          />
        </div>
        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            class="mb-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            class="mb-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer transition duration-300"
        >
          Register
        </button>
        <p class="mt-4 text-sm text-black">
          Already have an account?
          <RouterLink class="text-blue-500 hover:underline" to="/login"> Login </RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>
