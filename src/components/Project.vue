<script setup lang="ts">
interface ProjectCardProps {
  icon?: string;           // Font Awesome icon class
  title: string;          // Project title
  description: string;    // Project description
  tags: string[];         // Array of tags
  link: string;           // Project link
  linkText?: string;      // Link text (optional)
}

withDefaults(defineProps<ProjectCardProps>(), {
  linkText: 'View on GitHub'
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
    <div class="flex items-center mb-4">
      <i :class="[icon, 'text-amber-500 text-2xl mr-3']"></i>
      <h3 class="text-2xl font-bold">{{ title }}</h3>
    </div>
    <p class="text-gray-600 mb-6">
      {{ description }}
    </p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span 
        v-for="tag in tags" 
        :key="tag"
        class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm"
      >
        {{ tag }}
      </span>
    </div>
    <a :href="link" 
       class="inline-flex items-center text-amber-600 hover:text-amber-700">
      <span>{{ linkText }}</span>
      <i class="fa fa-arrow-right ml-2"></i>
    </a>
  </div>
</template>