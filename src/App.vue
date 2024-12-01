<script setup lang="ts">
import Menubar from './components/Menubar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-mono">
    <Menubar class="fixed top-0 left-0 w-full"/>
    <div class="flex-grow">
      <RouterView />
    </div>
    <Footer></Footer>
  </div>
</template>