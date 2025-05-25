<template>
  <header class="bg-white shadow-md py-4 mb-6 text-center">
    <div class="flex justify-center items-center gap-10">
      <router-link to="/" class="block">
        <h1 class="text-3xl font-bold font-serif text-gray-800 hover:text-indigo-600 transition">
          MealQuest 🍽️
        </h1>
      </router-link>

      <router-link
        to="/favorites"
        class="text-indigo-600 font-medium text-lg hover:underline"
      >
        ❤️ Favoriten
      </router-link>
    </div>
  </header>
</template>

<script setup></script>