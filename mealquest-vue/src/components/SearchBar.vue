<template>
  <div class="flex justify-center mt-6">
    <input
      v-model="search"
      @keyup.enter="handleSearch"
      type="text"
      placeholder="Suche nach einem Rezept..."
      class="border border-gray-300 rounded-l px-4 py-2 w-64"
    />
    <button
      @click="handleSearch"
      class="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600"
    >
      🔍
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['search']);
const search = ref('');

const handleSearch = () => {
  if (search.value.trim()) {
    emit('search', search.value);
  }
};
</script>