<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const query = ref('');
const diet = ref('');
const sort = ref('');

const router = useRouter();

const handleSubmit = () => {
  const params = new URLSearchParams();
  if (query.value) params.set('q', query.value);
  if (diet.value) params.set('diet', diet.value);
  if (sort.value) params.set('sort', sort.value);

  router.push(`/search?${params.toString()}`);
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-4 justify-center">
    <input
      v-model="query"
      type="text"
      placeholder="Was möchtest du kochen?"
      class="w-full sm:w-64 px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />

    <select
      v-model="diet"
      class="px-4 py-2 border border-zinc-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      <option value="">Alle Diäten</option>
      <option value="vegan">Vegan</option>
      <option value="vegetarian">Vegetarisch</option>
      <option value="gluten free">Glutenfrei</option>
    </select>

    <select
      v-model="sort"
      class="px-4 py-2 border border-zinc-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      <option value="">Sortierung</option>
      <option value="popularity">Beliebtheit</option>
      <option value="healthiness">Gesundheit</option>
      <option value="time">Zubereitungszeit</option>
    </select>

    <button
      type="submit"
      class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 h-[42px] flex items-center gap-2 rounded-md font-semibold shadow-md transition"
    >
      🔍 <span>Suchen</span>
    </button>
  </form>
</template>