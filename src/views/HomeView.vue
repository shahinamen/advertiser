<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center">
    <h1 class="text-center mt-[100px] mb-[60px] text-xl font-medium md:text-4xl">
      Earn with Ads on the Blockchain
    </h1>
    <div class="flex space-x-4">
      <RouterLink
        class="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300"
        to="/register"
      >
        REGISTER
      </RouterLink>
      <RouterLink
        class="px-6 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 hover:from-blue-600 hover:via-teal-600 hover:to-green-600 transition-all duration-300"
        to="/login"
      >
        LOGIN
      </RouterLink>
    </div>
    <div class="px-4 space-x-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div
          class="bg-black shadow-md rounded-lg p-6 ring ring-red-500 cursor-pointer hover:bg-cyan-500 hover:text-black transition duration-300"
        >
          <h2 class="text-lg font-semibold mb-4">What is AdChain?</h2>
          <p>
            AdChain is a decentralized platform that allows users to earn rewards by viewing and
            interacting with ads on the blockchain.
          </p>
        </div>
        <div
          class="bg-black shadow-md rounded-lg p-6 ring ring-red-500 cursor-pointer hover:bg-cyan-500 hover:text-black transition duration-300"
        >
          <h2 class="text-lg font-semibold mb-4">How does it work?</h2>
          <p>
            Users can register on the platform, view ads, and earn tokens as rewards. The more ads
            you view, the more you earn!
          </p>
        </div>
        <div
          class="bg-black shadow-md rounded-lg p-6 ring ring-red-500 cursor-pointer hover:bg-cyan-500 hover:text-black transition duration-300"
        >
          <h2 class="text-lg font-semibold mb-4">How does it work?</h2>
          <p>
            Users can register on the platform, view ads, and earn tokens as rewards. The more ads
            you view, the more you earn!
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 space-x-4">
      <div class="grid grid-cols-1 gap-4 mt-10">
        <div class="bg-black shadow-md rounded-lg p-6 ring ring-red-500 cursor-pointer hover:bg-cyan-500 hover:text-black transition duration-300">
          <h2 class="text-lg font-semibold mb-4">What is AdChain?</h2>
          <p>
            AdChain is a decentralized platform that allows users to earn rewards by viewing and
            interacting with ads on the blockchain.
          </p>
          <p>
            AdChain is a decentralized platform that allows users to earn rewards by viewing and
            interacting with ads on the blockchain.
          </p>
          <p>
            AdChain is a decentralized platform that allows users to earn rewards by viewing and
            interacting with ads on the blockchain.
          </p>
        </div>
      </div>
    </div>
    <div class="px-4 space-x-4 mb-6">
      <div class="grid grid-cols-1 gap-4 mt-10">
        <div class="bg-black shadow-md rounded-lg p-6 ring ring-red-500 cursor-pointer hover:bg-cyan-500 hover:text-black transition duration-300">
          <h2 class="text-lg font-semibold mb-4">What is AdChain?</h2>
          <p>
            AdChain is a decentralized platform that allows users to earn rewards by viewing and
            interacting with ads on the blockchain.
          </p>
          <p>
            AdChain is a decentralized platform that allows users to earn rewards by viewing and
            interacting with ads on the blockchain.
          </p>
          <p>
            AdChain is a decentralized platform that allows users to earn rewards by viewing and
            interacting with ads on the blockchain.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
