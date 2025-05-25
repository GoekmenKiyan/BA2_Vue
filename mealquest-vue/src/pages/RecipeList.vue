<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
      🍽️ Gefundene Rezepte für "{{ query }}"
    </h2>

    <div v-if="loading" class="text-center text-gray-500">Lade Rezepte...</div>

    <div v-else-if="recipes.length === 0" class="text-center text-gray-500">
      Keine Rezepte gefunden.
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
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
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { searchRecipes } from '../api/spoonacular.js';

const route = useRoute();
const router = useRouter();

const query = ref(route.query.q || '');
const recipes = ref([]);
const loading = ref(true);

const loadRecipes = async () => {
  loading.value = true;
  try {
    recipes.value = await searchRecipes(query.value);
  } catch (err) {
    console.error('Fehler beim Laden der Rezepte:', err);
    recipes.value = [];
  } finally {
    loading.value = false;
  }
};

const goToDetail = (id) => {
  router.push({ name: 'recipeDetail', params: { id } });
};

onMounted(loadRecipes);
watch(() => route.query.q, () => {
  query.value = route.query.q;
  loadRecipes();
});
</script>
