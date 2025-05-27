<template>
  <div class="text-center px-4 py-10">
    <h2 class="text-4xl font-bold mb-4">Finde dein Lieblingsgericht</h2>
    <p class="text-lg text-zinc-600 mb-8">
      Durchsuche unsere besten Gerichte nach Land oder Geschmack 🍝
    </p>

    <SearchBar @onSearch="handleSearch" />

    <div class="mt-10 text-center">
      <button
        @click="goToFavorites"
        class="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-pink-700 transition"
      >
        ❤️ Zu den Favoriten
      </button>
    </div>
  </div>

  <RandomPicks />
  <VegetarianPicks />
</template>

<script setup>
import { useRouter } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import RandomPicks from '../components/RandomPicks.vue'
import VegetarianPicks from '../components/VegetarianPicks.vue'

const router = useRouter()

function handleSearch({ query, diet, sort }) {
  const params = new URLSearchParams()
  if (query) params.append('q', query)
  if (diet) params.append('diet', diet)
  if (sort) params.append('sort', sort)
  router.push(`/search?${params.toString()}`)
}

function goToFavorites() {
  router.push('/favorites')
}
</script>