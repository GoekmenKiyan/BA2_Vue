<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
      🍽️ Gefundene Rezepte für "{{ query }}"
    </h2>

    <div v-if="loading && recipes.length === 0" class="text-center text-gray-500">Lade Rezepte...</div>

    <div v-if="!loading && recipes.length === 0" class="text-center text-gray-500">
      Keine Rezepte gefunden.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        @click="goToDetail(recipe.id)"
        class="cursor-pointer bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
      >
        <img :src="recipe.image" :alt="recipe.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-semibold text-lg text-center">{{ recipe.title }}</h3>
        </div>
      </div>
    </div>

    <p v-if="loading && recipes.length > 0" class="text-center text-gray-500 mt-6">Mehr wird geladen...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { searchRecipes } from '../api/spoonacular.js';

const route = useRoute();
const router = useRouter();

const recipes = ref([]);
const loading = ref(false);
const hasMore = ref(true);
const offset = ref(0);

const query = ref(route.query.q || '');
const diet = ref(route.query.diet || '');
const sort = ref(route.query.sort || '');

const loadMore = async () => {
  if (loading.value || !hasMore.value) return;
  loading.value = true;

  try {
    const newResults = await searchRecipes(query.value, diet.value, sort.value, offset.value);
    if (newResults.length === 0) {
      hasMore.value = false;
    } else {
      recipes.value = [...recipes.value, ...newResults];
      offset.value += newResults.length;
    }
  } catch (err) {
    console.error('Fehler beim Nachladen:', err);
  } finally {
    loading.value = false;
  }
};

const handleScroll = () => {
  if (loading.value || !hasMore.value) return;
  const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
  if (scrollBottom) loadMore();
};

const resetAndLoad = () => {
  recipes.value = [];
  offset.value = 0;
  hasMore.value = true;
  loadMore();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  resetAndLoad();
});

watch(() => route.query, (newQuery) => {
  query.value = newQuery.q || '';
  diet.value = newQuery.diet || '';
  sort.value = newQuery.sort || '';
  resetAndLoad();
});
</script>
