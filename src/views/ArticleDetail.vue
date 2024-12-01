<template>
  <div class="container mx-auto px-4 py-8 mt-[100px]">
    <div v-if="article" class="bg-white rounded-lg shadow-sm p-8">
      <!-- Article Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ article.title }}</h1>
        <p class="text-gray-500">{{ article.date }}</p>
      </div>
      
      <!-- Article Content -->
      <article
        class="prose lg:prose-xl"
        v-html="articleContent"
      ></article>
    </div>

    <!-- Loading State -->
    <div v-else-if="loading" class="text-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
    </div>

    <!-- Error State -->
    <div v-else class="text-center py-12">
      <p class="text-gray-500">Article not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { getArticleById } from '../data/articles'

interface Article {
  id: number
  title: string
  date: string
  content?: string
}

const route = useRoute()
const article = ref<Article | null>(null)
const articleContent = ref('')
const loading = ref(true)

onMounted(async () => {
  try {
    const articleId = Number(route.params.id)
    const articleData = getArticleById(articleId)
    
    if (!articleData) {
      throw new Error('Article not found')
    }

    article.value = articleData

    // 获取并解析 Markdown 内容
    const response = await fetch(`/articles/${articleId}.md`)
    if (!response.ok) throw new Error('Article not found')
    
    const markdown = await response.text()
    articleContent.value = await marked(markdown)
  } catch (error) {
    console.error('Failed to load article:', error)
    article.value = null
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
