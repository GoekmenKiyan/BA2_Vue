<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">❤️ Meine Favoriten</h1>

    <p v-if="favorites.length === 0" class="text-center text-gray-500">
      Du hast noch keine Favoriten gespeichert.
    </p>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <div
        v-for="recipe in favorites"
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

    <!-- PDF Export Button -->
    <div class="text-center mt-10" v-if="favorites.length > 0">
      <button
        @click="downloadPDF"
        class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold shadow"
      >
        📄 Als PDF exportieren
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useFavorites } from '../composables/useFavorites.js';
import { exportFavoritesAsPDF } from '../utils/pdfExport.js';

const router = useRouter();
const { favorites } = useFavorites();

const goToDetail = (id) => {
  router.push({ name: 'recipeDetail', params: { id } });
};

const downloadPDF = () => {
  exportFavoritesAsPDF(favorites.value);
};
</script>