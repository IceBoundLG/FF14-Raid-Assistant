<template>
  <nav class="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold">FF14副本攻略</div>
        <div class="space-x-4">
          <router-link 
            to="/" 
            class="hover:text-gray-300 transition-colors"
          >
            首页
          </router-link>
          <router-link 
            to="/eternal-queen" 
            class="hover:text-gray-300 transition-colors"
          >
            永恒女王忆想歼灭战
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// 组件逻辑
</script> 