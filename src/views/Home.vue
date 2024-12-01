<script setup lang="ts">
import { ref, onMounted } from 'vue';

const tags = ref([
  "REFACTOR",
  "REDEFINE",
  "REBUILD",
  "RESTART",
  "CHANGE",
]);

const currentIndex = ref(Math.floor(Math.random() * tags.value.length));
const isAnimating = ref(false);

const switchTag = () => {
  isAnimating.value = true;
  setTimeout(() => {
    isAnimating.value = false;
    currentIndex.value = (currentIndex.value + 1) % tags.value.length;
  }, 1000);
};

onMounted(() => {
  setInterval(switchTag, 2000)
});
</script>

<template>
  <div class="w-full min-h-screen bg-amber-50">
    <div class="w-full h-full flex flex-col md:flex-row pt-[20%] px-4 md:px-20">
      <div class="w-full h-full flex flex-grow-[1] flex-col select-none">
        <div class="text-[40px] md:text-[100px]">BugDuck Team</div>
        <div class="text-[20px] md:text-[30px] h-[40px] flex items-center">
          To<span class="inline-flex items-center justify-center w-[200px] overflow-hidden mx-1">
            <div class="relative h-[40px]">
              <span class="absolute left-1/2 -translate-x-1/2" :class="{ 'tag-transition': isAnimating }">
                {{ tags[currentIndex] }}
              </span>
              <span class="absolute left-1/2 -translate-x-1/2" :class="{ 'tag-transition': isAnimating }"
                style="top: 40px;">
                {{ tags[(currentIndex + 1) % tags.length] }}
              </span>
            </div>
          </span>This World
        </div>
      </div>
      <div class="w-full h-full flex flex-grow-[1] md:translate-y-[-100px] mt-8 md:mt-0">
        <div class="w-full md:relative">
          <!-- First Card -->
          <div class="md:absolute md:left-0 md:top-0 
                      w-[90%] mx-auto md:mx-0 md:w-[45%] bg-white p-4 md:p-6 rounded-lg shadow-lg 
                      floating-animation-up mb-6 md:mb-0">
            <h2 class="text-2xl font-bold mb-4">What are we doing?</h2>
            <p class="mb-4">
              Our main project is VueMotion, an animation engine like Manim for the VueJS Ecosystem.
              We support many extensions like chart, code (shikijs), three and more. Our goal is to
              integrate popular front-end tech-stacks into the animation engine, enabling you to create
              diverse animations and videos with the powerful JavaScript Ecosystem.
            </p>
            <a href="https://github.com/Bug-Duck/vuemotion"
              class="inline-block bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">
              Explore more on GitHub
            </a>
          </div>

          <!-- Second Card -->
          <div class="md:absolute md:right-0 md:top-[100px]
                      w-[90%] mx-auto md:mx-0 md:w-[45%] bg-white p-4 md:p-6 rounded-lg shadow-lg 
                      floating-animation-down mb-6 md:mb-0">
            <h2 class="text-2xl font-bold mb-4">What we are?</h2>
            <p class="mb-4">
              We are young open-source developers from China, founded by high school students.
              We firmly believe that the future belongs to the youth.
            </p>
            <a href="https://x.com/bugduckteam"
              class="inline-block bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">
              Follow Us on X
            </a>
          </div>

          <!-- Third Card -->
          <div class="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[400px]
                      w-[90%] mx-auto md:mx-0 md:w-[45%] bg-white p-4 md:p-6 rounded-lg shadow-lg 
                      floating-animation-up">
            <h2 class="text-2xl font-bold mb-4">Want to join us?</h2>
            <p class="mb-4">
              If you want to make contact with us or have a preference to join us, welcome to email
              bugduck@163.com. You will get a reply within two weeks. We are delighted to make more friends!
            </p>
            <a href="mailto:bugduck@163.com"
              class="inline-block bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors">
              Email to Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden h-[800px]"></div>
  </div>
  <div class="w-full p-4 md:p-[100px]">
    <div class="max-w-7xl mx-auto">
      <!-- Projects Section -->
      <div class="mb-10 md:mb-20">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-10">Our Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- VueMotion Project Card -->
          <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="flex items-center mb-4">
              <i class="text-amber-500 text-2xl mr-3"></i>
              <h3 class="text-2xl font-bold">VueMotion</h3>
            </div>
            <p class="text-gray-600 mb-6">
              An animation engine like Manim for the VueJS Ecosystem. Create stunning animations
              and videos using JavaScript and Vue components.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Animation</span>
              <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Open Source</span>
            </div>
            <a href="https://github.com/Bug-Duck/vuemotion" 
               class="inline-flex items-center text-amber-600 hover:text-amber-700">
              <span>View on GitHub</span>
              <i class="fa fa-arrow-right ml-2"></i>
            </a>
          </div>

          <!-- More Projects Card -->
          <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div class="flex items-center mb-4">
              <i class="fa fa-cog text-amber-500 text-2xl mr-3"></i>
              <h3 class="text-2xl font-bold">More</h3>
            </div>
            <p class="text-gray-600 mb-6">
              We have more projects in here!
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Open Source</span>
              <span class="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Innovation</span>
            </div>
            <a href="https://github.com/Bug-Duck" 
               class="inline-flex items-center text-amber-600 hover:text-amber-700">
              <RouterLink to="/projects">Jump to Projects page</RouterLink>
              <i class="fa fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Team Values Section -->
      <div class="mb-10 md:mb-20">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 md:mb-10">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fa fa-code text-amber-500 text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Open Source</h3>
            <p class="text-gray-600">Contributing to the developer community through open-source projects</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fa fa-users text-amber-500 text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Youth-Driven</h3>
            <p class="text-gray-600">Founded by high school students with a passion for technology</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fa fa-rocket text-amber-500 text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Innovation</h3>
            <p class="text-gray-600">Pushing boundaries in web development and animation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tag-transition {
  animation: slideUp 1s;
}

@keyframes slideUp {
  0% {
    transform: translate(-50%, 0);
  }

  100% {
    transform: translate(-50%, -40px);
  }
}

.floating-animation-up {
  animation: floatingUp 4s ease-in-out infinite;
}

.floating-animation-down {
  animation: floatingDown 4s ease-in-out infinite;
}

@keyframes floatingUp {
  0% {
    transform: translateY(16px);
  }

  50% {
    transform: translateY(-16px);
  }

  100% {
    transform: translateY(16px);
  }
}

@keyframes floatingDown {
  0% {
    transform: translateY(-16px);
  }

  50% {
    transform: translateY(16px);
  }

  100% {
    transform: translateY(-16px);
  }
}

.card-glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
