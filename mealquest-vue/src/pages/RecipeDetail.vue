<template>
  <div v-if="loading" class="text-center mt-10 text-gray-500">
    Lade Rezept...
  </div>

  <div v-else-if="recipe" class="max-w-4xl mx-auto px-6 py-10 text-gray-800">
    <p class="text-sm text-orange-600 uppercase tracking-wide text-center mb-2">
      {{ recipe.dishTypes?.join(' • ') }}
    </p>

    <h1 class="text-3xl font-bold text-center">{{ recipe.title }}</h1>

    <img
      :src="recipe.image"
      :alt="recipe.title"
      class="w-full rounded-xl my-6 shadow-md"
    />

    <!-- Tabs -->
    <div class="flex justify-center gap-6 mb-8">
      <button
        @click="activeTab = 'instructions'"
        :class="activeTab === 'instructions' ? 'text-orange-600 border-b-2 border-orange-500' : 'text-gray-400'"
        class="pb-2 font-medium text-md"
      >
        Instructions
      </button>
      <button
        @click="activeTab = 'ingredients'"
        :class="activeTab === 'ingredients' ? 'text-orange-600 border-b-2 border-orange-500' : 'text-gray-400'"
        class="pb-2 font-medium text-md"
      >
        Ingredients
      </button>
    </div>

    <!-- Tabs Content -->
    <div v-if="activeTab === 'instructions'" class="prose max-w-none">
      <div v-html="recipe.summary"></div>
      <h3 class="mt-6 text-lg font-bold">Zubereitung</h3>
      <div
        class="mt-2"
        v-html="recipe.instructions || '<p>Keine Anweisungen verfügbar.</p>'"
      ></div>
    </div>

    <div v-else class="text-left mt-6">
      <h3 class="text-lg font-bold mb-4">Zutaten</h3>
      <ul class="list-disc list-inside space-y-1">
        <li v-for="ingr in recipe.extendedIngredients" :key="ingr.id">
          {{ ingr.original }}
        </li>
      </ul>

      <h3 class="text-md font-bold mt-6">Nährwerte</h3>
      <p>Kalorien: {{ getCalories() }}</p>
    </div>

    <!-- Favorite Button -->
    <button
      @click="toggleFavorite"
      class="w-full px-4 py-2 rounded-md font-semibold text-lg mt-10 transition"
      :class="isFavorite ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'"
    >
      {{ isFavorite ? '❤️ Aus Favoriten entfernen' : '🤍 Zu Favoriten hinzufügen' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getRecipeDetails } from '../api/spoonacular.js';
import { useFavorites } from '../composables/useFavorites.js';

const route = useRoute();
const recipe = ref(null);
const loading = ref(true);
const activeTab = ref('instructions');

const { favorites, addFavorite, removeFavorite, isInFavorites } = useFavorites();
const isFavorite = ref(false);

const fetchRecipe = async () => {
  loading.value = true;
  const id = route.params.id;
  try {
    const data = await getRecipeDetails(id);
    recipe.value = data;
    isFavorite.value = isInFavorites(data.id);
  } catch (err) {
    console.error('Fehler beim Laden des Rezepts:', err);
  } finally {
    loading.value = false;
  }
};

const toggleFavorite = () => {
  if (!recipe.value) return;
  if (isFavorite.value) {
    removeFavorite(recipe.value.id);
  } else {
    addFavorite(recipe.value);
  }
  isFavorite.value = !isFavorite.value;
};

const getCalories = () => {
  const nutrients = recipe.value?.nutrition?.nutrients;
  const cal = nutrients?.find(n => n.name === 'Calories')?.amount;
  return cal ? `${cal} kcal` : '? kcal';
};

onMounted(fetchRecipe);
</script>