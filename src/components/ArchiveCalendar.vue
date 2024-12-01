<template>
  <div class="calendar">
    <!-- Month/Year Selector -->
    <div class="flex items-center justify-between mb-4">
      <button 
        @click="changeMonth(-1)"
        class="p-2 hover:bg-gray-100 rounded-lg"
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <span class="text-gray-700 font-medium">
        {{ formatMonth(currentDate) }}
      </span>
      
      <button 
        @click="changeMonth(1)"
        class="p-2 hover:bg-gray-100 rounded-lg"
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Weekday Headers -->
    <div class="grid grid-cols-7 gap-1 mb-2">
      <div v-for="day in weekDays" 
           :key="day" 
           class="text-center text-sm text-gray-500 py-1">
        {{ day }}
      </div>
    </div>

    <!-- Calendar Grid -->
    <div class="grid grid-cols-7 gap-1">
      <div v-for="{ date, isCurrentMonth, hasPost } in calendarDays" 
           :key="date.toISOString()"
           @click="selectDate(date)"
           class="aspect-square flex items-center justify-center text-sm cursor-pointer rounded-full"
           :class="[
             isCurrentMonth ? 'text-gray-700' : 'text-gray-300',
             hasPost ? 'font-bold' : '',
             isSelected(date) ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
           ]"
      >
        {{ date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Props
interface Props {
  // 包含文章的日期列表，格式：YYYY-MM-DD
  postDates?: string[]
  activeDate?: string | null  // 当前选中的日期，用于高亮显示
}

const props = withDefaults(defineProps<Props>(), {
  postDates: () => [],
  activeDate: null
})

// Emits
const emit = defineEmits<{
  (e: 'select', date: Date): void
}>()

// 状态
const currentDate = ref(new Date())
const selectedDate = ref<Date | null>(null)

// 工具函数
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const isSelected = (date: Date): boolean => {
  if (!props.activeDate) return false
  return formatDate(date) === props.activeDate
}

// 计算当月的所有日期
const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  // 获取当月第一天
  const firstDay = new Date(year, month, 1)
  // 获取当月最后一天
  const lastDay = new Date(year, month + 1, 0)
  
  // 获取上月需要显示的天数
  const prevMonthDays = firstDay.getDay()
  // 获取下月需要显示的天数
  const nextMonthDays = 6 - lastDay.getDay()
  
  const days: { date: Date; isCurrentMonth: boolean; hasPost: boolean }[] = []
  
  // 添加上月的日期
  for (let i = prevMonthDays - 1; i >= 0; i--) {
    const date = new Date(year, month, -i)
    days.push({
      date,
      isCurrentMonth: false,
      hasPost: props.postDates.includes(formatDate(date))
    })
  }
  
  // 添加当月的日期
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i)
    days.push({
      date,
      isCurrentMonth: true,
      hasPost: props.postDates.includes(formatDate(date))
    })
  }
  
  // 添加下月的日期
  for (let i = 1; i <= nextMonthDays; i++) {
    const date = new Date(year, month + 1, i)
    days.push({
      date,
      isCurrentMonth: false,
      hasPost: props.postDates.includes(formatDate(date))
    })
  }
  
  return days
})

// 方法
const changeMonth = (delta: number) => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() + delta)
  currentDate.value = newDate
}

const selectDate = (date: Date) => {
  selectedDate.value = date
  emit('select', date)
}

// Add new format function
const formatMonth = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long'
  })
}
</script> 