<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">永恒女王歼灭战</h1>
    <DifficultyRating :rating="2" class="mb-4" />
    <div class="grid grid-cols-1">
      
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">攻略要点</h2>
        <p class="text-gray-600 mb-4">
          全流程需要频繁跑位，保持机敏，注意冰阶段连线机制。
        </p>
      </div>
    </div>

    <!-- 水晶游戏区域 -->
    <div class="mt-6 bg-white rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">冰阶段练习</h2>
      <p class="text-gray-600 mb-4">点击右上角开始新回合，亮起的水晶代表连线水晶，依次选择对应冰桥与点位。</p>
      <CrystalGame />
    </div>
  </div>
</template>

<script setup>
import CrystalGame from '../components/CrystalGame.vue'
import DifficultyRating from '../components/DifficultyRating.vue'
</script> 