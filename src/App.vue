<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Navigation />
    <main class="pt-16">
      <router-view />
    </main>
  </div>
</template>

<style>
/* 全局样式 */
</style>
