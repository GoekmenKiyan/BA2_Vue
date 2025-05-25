<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
      🍽️ Gefundene Rezepte für "{{ query }}"
    </h2>

    <div v-if="recipes.length === 0 && loading" class="text-center text-gray-500">
      Lade Rezepte...
    </div>

    <div
      v-if="recipes.length > 0"
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

    <div ref="bottomEl" class="h-12"></div>

    <div class="text-center mt-8 text-gray-500" v-if="loading && recipes.length > 0">
      Lade mehr Rezepte...
    </div>
    <div class="text-center mt-8 text-gray-400" v-if="!hasMore && recipes.length > 0">
      Keine weiteren Ergebnisse.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { searchRecipes } from '../api/spoonacular';

const route = useRoute();
const router = useRouter();

const query = ref(route.query.q || '');
const recipes = ref([]);
const offset = ref(0);
const hasMore = ref(true);
const loading = ref(false);
const bottomEl = ref(null);
let observer = null;

const fetchMore = async () => {
  if (loading.value || !hasMore.value) return;
  loading.value = true;

  try {
    const result = await searchRecipes(query.value, offset.value);
    if (result.length === 0) {
      hasMore.value = false;
    } else {
      recipes.value.push(...result);
      offset.value += result.length;
    }
  } catch (err) {
    console.error('Fehler beim Nachladen:', err);
    hasMore.value = false;
  } finally {
    loading.value = false;
  }
};

const goToDetail = (id) => {
  router.push({ name: 'recipeDetail', params: { id } });
};

const setupObserver = () => {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) fetchMore();
  });

  if (bottomEl.value) observer.observe(bottomEl.value);
};

onMounted(async () => {
  await fetchMore();
  await nextTick();
  setupObserver();
});

watch(() => route.query.q, async (newQ) => {
  query.value = newQ;
  recipes.value = [];
  offset.value = 0;
  hasMore.value = true;
  await fetchMore();
  await nextTick();
  setupObserver();
});
</script>