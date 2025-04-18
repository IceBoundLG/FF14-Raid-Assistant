<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">永恒女王忆想歼灭战</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- 左侧区域 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">副本信息</h2>
        <!-- 这里后续可以添加副本的具体信息 -->
      </div>
      
      <!-- 右侧区域 -->
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">攻略要点</h2>
        <!-- 这里后续可以添加攻略要点 -->
      </div>
    </div>

    <!-- 水晶游戏区域 -->
    <div class="mt-6 bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">冰阶段练习</h2>
      <p class="text-gray-600 mb-4">点击开始，亮起的水晶代表连线水晶，选择对应冰桥与点位。</p>
      <CrystalGame />
    </div>
  </div>
</template>

<script setup>
import CrystalGame from '../components/CrystalGame.vue'
</script> 