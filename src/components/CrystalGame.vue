<template>
  <div class="relative w-full h-196 bg-gray-800 rounded-lg p-4">
    <!-- 连线层 -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none z-50">
      <line
        v-if="showLine"
        :x1="lineStart.x"
        :y1="lineStart.y"
        :x2="lineEnd.x"
        :y2="lineEnd.y"
        stroke="purple"
        stroke-width="5"
        stroke-dasharray="10,5"
        stroke-linecap="round"
      />
    </svg>

    <!-- 左侧水晶区域 -->
    <div class="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-16">
      <div 
        v-for="(crystal, index) in leftCrystals" 
        :key="'left-' + index"
        class="relative w-16 h-16 transform rotate-45 bg-blue-500 border-2 border-blue-300 cursor-pointer crystal select-none"
        :class="{ 'opacity-50': !crystal.isActive, 'opacity-100': crystal.isActive }"
        @click="handleCrystalClick(crystal.id)"
        :data-id="crystal.id"
      >
        <span class="absolute -left-6 top-1/2 transform -translate-y-1/2 text-white font-bold text-lg select-none">
          {{ crystal.id }}
        </span>
      </div>
    </div>

    <!-- 左侧长方形 -->
    <div class="absolute left-48 top-1/2 transform -translate-y-1/2 w-64 h-160 bg-yellow-500 border-2 border-yellow-300 z-40">
      <!-- 左上角标记 -->
      <div 
        class="absolute top-2 left-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '1' }"
        @click="handlePointClick('1')"
        data-id="1"
      >
      </div>
      <!-- 右上角标记 -->
      <div 
        class="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '2' }"
        @click="handlePointClick('2')"
        data-id="2"
      >
      </div>
      <!-- 左下角标记 -->
      <div 
        class="absolute top-48 left-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '3' }"
        @click="handlePointClick('3')"
        data-id="3"
      >
      </div>
      <!-- 左下角标记 -->
      <div 
        class="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '4' }"
        @click="handlePointClick('4')"
        data-id="4"
      >
      </div>
    </div>

    <!-- 右侧长方形 -->
    <div class="absolute right-48 top-1/2 transform -translate-y-1/2 w-64 h-160 bg-yellow-500 border-2 border-yellow-300 z-40">
      <!-- 左上角标记 -->
      <div 
        class="absolute top-2 left-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '5' }"
        @click="handlePointClick('5')"
        data-id="5"
      >
      </div>
      <!-- 右上角标记 -->
      <div 
        class="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '6' }"
        @click="handlePointClick('6')"
        data-id="6"
      >
      </div>
      <!-- 左下角标记 -->
      <div 
        class="absolute top-48 right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '7' }"
        @click="handlePointClick('7')"
        data-id="7"
      >
      </div>
      <!-- 右下角标记 -->
      <div 
        class="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-red-500 border-2 border-red-300 flex items-center justify-center cursor-pointer point transition-all duration-200 select-none"
        :class="{ 'ring-4 ring-red-400 scale-125': selectedPoint === '8' }"
        @click="handlePointClick('8')"
        data-id="8"
      >
      </div>
    </div>

    <!-- 右侧水晶区域 -->
    <div class="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-16">
      <div 
        v-for="(crystal, index) in rightCrystals" 
        :key="'right-' + index"
        class="relative w-16 h-16 transform rotate-45 bg-blue-500 border-2 border-blue-300 cursor-pointer crystal select-none"
        :class="{ 'opacity-50': !crystal.isActive, 'opacity-100': crystal.isActive }"
        @click="handleCrystalClick(crystal.id)"
        :data-id="crystal.id"
      >
        <span class="absolute -right-6 top-1/2 transform -translate-y-1/2 text-white font-bold text-lg select-none">
          {{ crystal.id }}
        </span>
      </div>
    </div>

    <!-- 中间水晶区域 -->
    <div class="flex justify-center space-x-16 absolute bottom-12 left-0 right-0">
      <div 
        v-for="(crystal, index) in middleCrystals" 
        :key="'middle-' + index"
        class="relative w-16 h-16 transform rotate-45 bg-blue-500 border-2 border-blue-300 cursor-pointer crystal select-none"
        :class="{ 'opacity-50': !crystal.isActive, 'opacity-100': crystal.isActive }"
        @click="handleCrystalClick(crystal.id)"
        :data-id="crystal.id"
      >
        <span class="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg select-none">
          {{ crystal.id }}
        </span>
      </div>
    </div>

    <!-- 冰块区域 -->
    <div class="absolute top-1/2 left-0 right-0">
      <!-- 上方两个冰块 -->
      <div class="flex justify-center space-x-32 mb-16">
        <div 
          v-for="index in 2" 
          :key="'top-' + (index-1)"
          class="relative w-32 h-16 bg-white border-2 border-blue-200 cursor-pointer transition-all duration-200 select-none"
          :class="{ 
            'opacity-50': iceBlocks[(index-1)].isPlaced,
            'ring-4 ring-blue-400 scale-105': selectedIce === (index-1)
          }"
          @click="handleIceClick(index-1)"
        >
          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-bold text-xl select-none">
            {{ iceBlocks[index-1].id }}
          </span>
        </div>
      </div>
      <!-- 下方两个冰块 -->
      <div class="flex justify-center space-x-32">
        <div 
          v-for="index in 2" 
          :key="'bottom-' + (index-1)"
          class="relative w-32 h-16 bg-white border-2 border-blue-200 cursor-pointer transition-all duration-200 select-none"
          :class="{ 
            'opacity-50': iceBlocks[index+1].isPlaced,
            'ring-4 ring-blue-400 scale-105': selectedIce === (index+1)
          }"
          @click="handleIceClick(index+1)"
        >
          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-bold text-xl select-none">
            {{ iceBlocks[index+1].id }}
          </span>
        </div>
      </div>
    </div>

    <!-- 游戏状态显示 -->
    <div class="absolute top-4 left-4 text-white select-none">
      <!-- <div>当前回合: {{ currentRound }}</div> -->
      <div>连线水晶: {{ activeCrystal?.id || '等待开始' }}</div>
    </div>

    <!-- 开始按钮 -->
    <button 
      class="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 select-none"
      @click="startNewRound"
    >
      开始新回合
    </button>

    <!-- 提示框 -->
    <div v-if="showMessage" class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-4 rounded-lg z-50 select-none">
      {{ message }}
      <button 
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 select-none"
        @click="showMessage = false; startNewRound()"
      >
        继续
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const allCrystals = ref([
  { id: 'L1', isActive: false },
  { id: 'L2', isActive: false },
  { id: 'M1', isActive: false },
  { id: 'M2', isActive: false },
  { id: 'M3', isActive: false },
  { id: 'M4', isActive: false },
  { id: 'R1', isActive: false },
  { id: 'R2', isActive: false }
])

const leftCrystals = computed(() => allCrystals.value.filter(c => c.id.startsWith('L')))
const middleCrystals = computed(() => allCrystals.value.filter(c => c.id.startsWith('M')))
const rightCrystals = computed(() => allCrystals.value.filter(c => c.id.startsWith('R')))

const iceBlocks = ref([
  { id: '1', isPlaced: false },
  { id: '2', isPlaced: false },
  { id: '3', isPlaced: false },
  { id: '4', isPlaced: false }
])

const currentRound = ref(0)
const activeCrystal = ref(null)
const selectedIce = ref(null)
const selectedPoint = ref(null)
const showMessage = ref(false)
const message = ref('')
const showLine = ref(false)
const lineStart = ref({ x: 0, y: 0 })
const lineEnd = ref({ x: 0, y: 0 })

// 水晶与冰块和点位的对应关系
const crystalMappings = {
  'M1': { ice: '2', point: '5' },
  'M2': { ice: '4', point: '6' },
  'M3': { ice: '3', point: '1' },
  'M4': { ice: '1', point: '2' },
  'L1': { ice: '4', point: '8' },
  'L2': { ice: '2', point: '7' },
  'R1': { ice: '3', point: '4' },
  'R2': { ice: '1', point: '3' },
}

const startNewRound = () => {
  // 重置所有状态
  allCrystals.value.forEach(crystal => crystal.isActive = false)
  iceBlocks.value.forEach(ice => ice.isPlaced = false)
  selectedIce.value = null
  selectedPoint.value = null
  showMessage.value = false
  showLine.value = false
  
  // 随机选择一个水晶
  const randomIndex = Math.floor(Math.random() * allCrystals.value.length)
  allCrystals.value[randomIndex].isActive = true
  activeCrystal.value = allCrystals.value[randomIndex]
  
  currentRound.value++
}

const handleIceClick = (index) => {
  if (iceBlocks.value[index].isPlaced) return
  selectedIce.value = index
  checkAnswer()
}

const handleCrystalClick = (crystalId) => {
  if (!activeCrystal.value || activeCrystal.value.id !== crystalId) return
  
  const mapping = crystalMappings[crystalId]
  if (!mapping) return
  
  // 检查选择的冰块和点位是否正确
  if (selectedIce.value !== null && selectedPoint.value !== null) {
    const selectedIceId = iceBlocks.value[selectedIce.value].id
    if (selectedIceId === mapping.ice && selectedPoint.value === mapping.point) {
      // 正确答案
      iceBlocks.value[selectedIce.value].isPlaced = true
      // 可以在这里添加得分或其他反馈
    }
  }
}

const handlePointClick = (pointId) => {
  selectedPoint.value = pointId
  checkAnswer()
}

const drawLine = (crystalId, pointId) => {
  const crystalElement = document.querySelector(`.crystal[data-id="${crystalId}"]`)
  const pointElement = document.querySelector(`.point[data-id="${pointId}"]`)
  const container = document.querySelector('.relative.w-full')
  
  if (crystalElement && pointElement && container) {
    const crystalRect = crystalElement.getBoundingClientRect()
    const pointRect = pointElement.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    
    // 计算相对于容器的位置
    const crystalX = crystalRect.left - containerRect.left + crystalRect.width / 2
    const crystalY = crystalRect.top - containerRect.top + crystalRect.height / 2
    const pointX = pointRect.left - containerRect.left + pointRect.width / 2
    const pointY = pointRect.top - containerRect.top + pointRect.height / 2
    
    // 设置连线起点和终点
    lineStart.value = {
      x: crystalX,
      y: crystalY
    }
    
    lineEnd.value = {
      x: pointX,
      y: pointY
    }
    
    showLine.value = true
  }
}

const checkAnswer = () => {
  if (!activeCrystal.value || selectedIce.value === null || selectedPoint.value === null) return
  
  const mapping = crystalMappings[activeCrystal.value.id]
  if (!mapping) return
  
  const selectedIceId = iceBlocks.value[selectedIce.value].id
  
  // 无论答案正确与否，都显示连线
  drawLine(activeCrystal.value.id, mapping.point)
  
  if (selectedIceId === mapping.ice && selectedPoint.value === mapping.point) {
    // 正确答案
    message.value = '回答正确！'
    showMessage.value = true
  } else {
    // 错误答案
    message.value = `回答错误！正确答案是：冰块${mapping.ice}，点位请查看连线位置`
    showMessage.value = true
  }
}

onMounted(() => {
  // 初始化 refs
  const crystalRefs = document.querySelectorAll('.crystal')
  const pointRefs = document.querySelectorAll('.point')
})
</script> 