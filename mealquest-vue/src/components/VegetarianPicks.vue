<template>
  <section class="mt-16 px-6 max-w-6xl mx-auto text-left">
    <div class="flex items-center gap-2 mb-4">
      <span class="text-2xl">🥦</span>
      <h3 class="text-xl font-semibold text-zinc-700">Our Vegetarian Picks</h3>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
        @click="$router.push(`/recipe/${recipe.id}`)"
      >
        <img
          :src="recipe.image"
          :alt="recipe.title"
          class="w-full h-48 object-cover"
          loading="lazy"
        />
        <div class="p-4">
          <h3 class="font-semibold text-lg text-center">{{ recipe.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { searchRecipes } from '../api/spoonacular.js'

const recipes = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const result = await searchRecipes('', 'vegetarian', '', '', 0)
    recipes.value = result.slice(0, 3)
  } catch (err) {
    console.error('Fehler beim Laden der Vegetarian Picks:', err)
  }
})
</script>