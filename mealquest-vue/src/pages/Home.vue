<template>
  <div class="text-center px-4 py-10">
    <h2 class="text-4xl font-bold mb-4">Finde dein Lieblingsgericht</h2>
    <p class="text-lg text-gray-600 mb-8">
      Durchsuche unsere besten Gerichte nach Land oder Geschmack 🍝
    </p>
    <SearchBar @search="onSearch" />
  </div>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const onSearch = (query) => {
  router.push({ name: 'recipes', query: { q: query } });
};
</script>