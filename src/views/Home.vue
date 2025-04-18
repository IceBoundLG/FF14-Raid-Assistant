<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center">FF14副本攻略</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link 
        to="/eternal-queen" 
        class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold mb-2">永恒女王忆想歼灭战</h2>
        <p class="text-gray-600">点击查看详细攻略</p>
      </router-link>
      <!-- 这里可以添加更多副本卡片 -->
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script> 