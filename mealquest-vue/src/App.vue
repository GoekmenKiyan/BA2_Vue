<template>
  <div class="font-sans min-h-screen bg-gray-50">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>