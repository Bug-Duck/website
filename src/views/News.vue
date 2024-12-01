<template>
  <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 mt-[100px]">
    <!-- 新闻列表 -->
    <div class="md:w-3/4">
      <!-- 添加筛选状态提示和清除按钮 -->
      <div v-if="selectedDate" class="mb-4 flex items-center justify-between bg-blue-50 p-4 rounded-lg">
        <span class="text-blue-600">
          Showing articles from {{ selectedDate }}
        </span>
        <button 
          @click="clearFilter"
          class="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <span>Clear filter</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- 显示筛选后的新闻列表 -->
      <div v-if="newsList.length > 0">
        <div v-for="item in newsList" 
             :key="item.id" 
             class="mb-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
          <router-link 
            :to="`/articles/${item.id}`"
            class="flex flex-col md:flex-row"
          >
            <!-- 新闻图片 -->
            <div class="md:w-64 h-48 flex-shrink-0">
              <img :src="item.coverImg" 
                   :alt="item.title"
                   class="w-full h-full object-cover">
            </div>
            
            <!-- 新闻内容 -->
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl text-gray-800 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-s英m text-gray-500 mb-3">
                {{ item.date }}
              </p>
              <p class="text-gray-600 line-clamp-3">
                {{ item.summary }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
      
      <!-- 无结果提示 -->
      <div v-else class="text-center py-12 bg-white rounded-lg">
        <p class="text-gray-500">No articles found for this date.</p>
      </div>
    </div>

    <!-- 归档日历 -->
    <div class="md:w-1/4">
      <div class="bg-white rounded-lg shadow-sm p-4 sticky top-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          Archive Calendar
        </h3>
        <ArchiveCalendar 
          :post-dates="postDates"
          :active-date="selectedDate"
          @select="handleDateSelect"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ArchiveCalendar from '../components/ArchiveCalendar.vue'
import { type Article, getAllArticles } from '../data/articles'

// 使用数据源
const allNews = ref<Article[]>(getAllArticles())

// 添加选中日期状态
const selectedDate = ref<string | null>(null)

// 根据选中日期筛选新闻
const newsList = computed(() => {
  if (!selectedDate.value) {
    return allNews.value
  }
  return allNews.value.filter(news => news.date === selectedDate.value)
})

// 获取所有新闻日期
const postDates = computed(() => allNews.value.map(news => news.date))

// 添加日期格式化方法
const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 修改处理日期选择的方法
const handleDateSelect = (date: Date) => {
  const formattedDate = formatDate(date)
  // 如果点击已选中的日期，则取消选择
  if (selectedDate.value === formattedDate) {
    selectedDate.value = null
  } else {
    selectedDate.value = formattedDate
  }
}

// 添加清除筛选的方法
const clearFilter = () => {
  selectedDate.value = null
}
</script>

<style scoped>
/* 如果需要一些自定义样式，可以在这里添加 */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 自定义样式类 */
@layer components {
  .calendar-wrapper {
    @apply w-full bg-white rounded-lg overflow-hidden;
  }
}
</style>
