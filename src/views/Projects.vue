<script setup lang="ts">
import { ref } from 'vue';
import Project from '../components/Project.vue'

const projects = ref([
  {
    title: 'VueMotion',
    description: 'An animation engine like Manim for the VueJS Ecosystem. Create stunning animations and videos using JavaScript and Vue components.',
    tags: ['Vue', 'Animation'],
    link: 'https://github.com/Bug-Duck/vuemotion',
    linkText: 'View on GitHub'
  },
  {
    title: 'Newcar',
    description: 'An animation engine like Manim based on Skia WebAssembly.',
    tags: ['Animation', 'JavaScript', 'Typescript', 'Public Acheived'],
    link: 'https://github.com/dromara/newcar',
    linkText: 'View on GitHub'
  },
  {
    title: 'LLMVision',
    description: 'AI-powered Mathematical animation generator based on VueMotion.',
    tags: ['LLM', 'AI', 'Vue', 'VueMotion'],
    link: 'https://github.com/Bug-Duck/LLMVision',
    linkText: 'View on GitHub'
  },
  {
    title: 'MetroJs',
    description: 'A JavaScript library for rendering the metro map.',
    tags: ['JavaScript', 'TypeScript', 'Open Source', 'SVG'],
    link: 'https://github.com/Bug-Duck/metrojs',
    linkText: 'View on GitHub'
  },
  {
    title: 'GitPro',
    description: 'The unoffical GitHub App for Android and iOS.',
    tags: ['Flutter', 'Open Source', 'Android', 'iOS'],
    link: 'https://github.com/Bug-Duck/gitpro',
    linkText: 'View on GitHub'
  }
])
</script>

<template>
  <div class="w-full mt-[60px]">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <!-- Header Section -->
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-bold mb-4">Our Projects</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Explore our open-source projects that contribute to the developer community
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Project v-for="project in projects" :key="project.title" :title="project.title"
          :description="project.description" :tags="project.tags" :link="project.link" :link-text="project.linkText" />
      </div>
    </div>
  </div>
</template>