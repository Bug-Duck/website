<script setup lang="ts">
import { ref } from 'vue';
import BugDuck from './logos/BugDuck.vue';

const options = ref([
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "News", path: "/news" },
]);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="fixed top-0 left-0 w-full bg-amber-50 z-50">
    <!-- 顶部导航栏 -->
    <div class="h-16 flex flex-row items-center justify-between px-4 md:px-5">
      <!-- Logo 部分 -->
      <div class="flex items-center">
        <div class="flex items-center select-none">
          <BugDuck class="h-10 w-10"/>
          <div class="text-xl md:text-[30px] ml-3 md:ml-5">BugDuck</div>
        </div>
      </div>

      <!-- 桌面端导航菜单 -->
      <div class="hidden md:flex items-center">
        <div class="flex flex-row h-full select-none" v-for="op in options" :key="op.path">
          <RouterLink :to="op.path">
            <div class="relative text-[20px] items-center justify-center flex mx-5 hover:text-amber-300 cursor-pointer group">
              {{ op.label }}
              <span class="absolute bottom-0 left-1/2 w-0 h-[2px] bg-amber-300 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- 移动端汉堡菜单按钮 -->
      <button class="md:hidden p-2" @click="toggleMenu">
        <i class="fa fa-bars text-2xl"></i>
      </button>
    </div>

    <!-- 移动端下拉菜单 -->
    <div v-if="isMenuOpen" 
         class="md:hidden bg-amber-50 border-t border-amber-200 absolute w-full shadow-lg">
      <RouterLink v-for="op in options" 
                  :key="op.path" 
                  :to="op.path" 
                  @click="isMenuOpen = false">
        <div class="px-4 py-3 hover:bg-amber-100 transition-colors">
          {{ op.label }}
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* 可以添加过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
