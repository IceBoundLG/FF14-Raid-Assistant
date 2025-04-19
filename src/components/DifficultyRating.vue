<template>
  <div class="flex items-center gap-2">
    <span class="text-gray-600">难度：</span>
    <div class="flex items-center space-x-1">
      <template v-for="star in 5" :key="star">
        <div class="relative">
          <svg
            :style="{
              width: '24px',
              height: '24px',
              color: star <= rating ? '#f59e0b' : '#9ca3af'
            }"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
      </template>
    </div>
    <span class="text-sm text-gray-500">({{ rating }}/5)</span>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 1 && value <= 5
  }
})
</script>

<style scoped>
svg {
  transition: transform 0.2s ease-in-out;
}

svg:hover {
  transform: scale(1.2);
}
</style> 