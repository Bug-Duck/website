<script setup lang="ts">
import { ref } from 'vue';

const members = ref([
  {
    name: 'Acbox Liu',
    avatar: 'https://avatars.githubusercontent.com/u/78635021?v=4',
    description: 'Founder of BugDuck, Creator of VueMotion',
    age: '15',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/sheepbox8646'
      },
      {
        icon: 'fa-x-twitter',
        url: 'https://twitter.com/AcboxLiu'
      }
    ]
  },
  {
    name: 'Howard Zhang',
    avatar: 'https://avatars.githubusercontent.com/u/75195784?v=4',
    description: 'AI Developer, Core member of BugDuck',
    age: '18',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/Howardzhangdqs'
      }
    ]
  },
  {
    name: '27Onion Nebell',
    avatar: 'https://avatars.githubusercontent.com/u/57032603?v=4',
    description: 'Full Stack Developer, Core member of BugDuck, From Hangzhou, China',
    age: '16',
    language: 'zh-CN | en-US | ja-JP | fr-FR',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/onion108'
      },
      {
        icon: 'fa-x-twitter',
        url: 'https://twitter.com/2Nebell'
      }
    ]
  },
  {
    name: 'Thomas Wang',
    avatar: 'https://avatars.githubusercontent.com/u/55052188?v=4',
    description: 'Frontend Developer, Core member of BugDuck',
    age: '16',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/cxzlw'
      },
      {
        icon: 'fa-x-twitter',
        url: 'https://x.com/enocxzlw'
      }
    ]
  },
  {
    name: 'Linesoft',
    avatar: 'https://avatars.githubusercontent.com/u/25446947?v=4',
    description: 'Full Stack Developer, Core member of BugDuck',
    age: '26',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/linesoft2'
      },
      {
        icon: 'fa-x-twitter',
        url: 'https://twitter.com/linesoft_zyl'
      }
    ]
  },
  {
    name: 'XiaoDong',
    avatar: 'https://avatars.githubusercontent.com/u/84657208?v=4',
    description: 'Full Stack Developer, Core member of BugDuck & VueMotion, From Hong Kong.',
    age: '15',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/xiaodong2008'
      },
      {
        icon: 'fa-x-twitter',
        url: 'https://twitter.com/dy_xiaodong'
      }
    ]
  },
  {
    name: 'jiwangyihao',
    avatar: 'https://avatars.githubusercontent.com/u/51940778?v=4',
    description: 'AI Developer from Harbin Institute of Technology',
    age: '20',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/jiwangyihao'
      },
      {
        icon: { svg: '<svg viewBox="0 0 940 940" xmlns="http://www.w3.org/2000/svg"><path d="M410.665 49.79c108.643-20.313 224.414 2.546 317.783 61.449 75.755 47.551 136.848 118.316 172.23 200.536 45.005 102.993 48.62 223.243 10.488 328.933-32.175 90.57-95 169.685-175.336 222.224-73.922 48.874-162.812 74.737-251.396 73.108-96.22-0.56-191.678-34.008-267.636-92.86-81.202-62.315-139.8-153.242-162.506-253.077-22.554-95.762-11.658-198.652 29.63-287.848C143.232 171.62 269.185 74.025 410.665 49.79m-164.34 302.917c-62.772 42.256-88.889 129.415-59.717 199.214 19.193 49.077 63.027 87.565 114.192 100.242 58.751 14.153 122.899-1.833 169.736-39.66 67.762-53.353 105.18-132.977 150.695-204.049 21.179 38.743 43.579 76.876 64.707 115.67-22.298-15.58-43.783-32.176-65.674-48.213-16.75 11.608-34.212 22.197-50.096 35.078 62.162 46.48 124.934 92.147 187.146 138.578 12.627 10.894 35.74 9.774 44.242-5.754 5.6-10.385 4.989-23.826-1.273-33.804-51.47-91.231-102.584-182.667-153.852-274.05-8.756-17.667-36.502-19.347-47.091-2.649-36.25 56.104-66.185 116.23-105.64 170.245-25.76 34.925-56.613 68.933-97.9 85.122-34.467 13.237-75.603 14.154-108.237-4.683-33.702-18.786-56.51-56.358-55.492-95.151 0.102-38.388 23.165-75.094 56.816-93.014 33.092-18.328 73.77-16.495 108.643-4.48 37.674 13.033 66.54 41.695 97.647 65.368 16.443-11.505 34.212-21.483 49.433-34.415-23.774-21.382-49.84-40.932-75.652-60.074-63.69-45.26-156.753-56.51-222.632-9.52z" p-id="3162"></path></svg>' },
        url: 'http://www.coolapk.com/u/1399429'
      },
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill-rule="evenodd" d="M3.73252 2.67094c-.40023-.3861-.40023-1.02721 0-1.4133.38039-.366956.983-.366956 1.36339 0l2.12132 2.04639c.06026.05815.11146.12207.15358.19004h3.20809c.0422-.06797.0934-.13189.1536-.19004l2.1213-2.04639c.3804-.366956.983-.366956 1.3634 0 .4003.38609.4003 1.0272 0 1.4133l-.8532.82313H14c2.2091 0 4 1.79086 4 4v5.50553c0 2.2091-1.7909 4-4 4H4c-2.20914 0-4-1.7909-4-4V7.49406c0-2.20914 1.79086-3.99999 4-3.99999h.58579l-.85327-.82313ZM4 5.42343c-1.10457 0-2 .89543-2 2v5.64677c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2V7.42343c0-1.10457-.8954-2-2-2H4Zm1 3.89404c0-.55228.44772-1 1-1s1 .44772 1 1v.89403c0 .5523-.44772 1-1 1s-1-.4477-1-1v-.89403Zm7-1c-.5523 0-1 .44772-1 1v.89403c0 .5523.4477 1 1 1s1-.4477 1-1v-.89403c0-.55228-.4477-1-1-1Z" clip-rule="evenodd"/></svg>' },
        url: 'https://space.bilibili.com/449671034'
      }
    ]
  },
  {
    name: 'Dylan Su',
    avatar: 'https://avatars.githubusercontent.com/u/87633881?v=4',
    description: 'Full Stack Developer, Core member of BugDuck',
    age: '16',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/xs10|3'
      }
    ]
  },
  {
    name: 'Steven Xiang',
    avatar: 'https://avatars.githubusercontent.com/u/94696950?v=4',
    description: 'Full Stack Developer, Core member of BugDuck, Love Rust',
    age: '17',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/wgxh-cli'
      }
    ]
  },
  {
    name: 'Hydration',
    avatar: 'https://avatars.githubusercontent.com/u/29159838?v=4',
    description: 'Full Stack Developer, Core member of BugDuck',
    age: '16',
    language: 'zh-CN | en-US',
    links: [
      {
        icon: 'fa-github',
        url: 'https://github.com/hydrati'
      }
    ]
  }
])
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl pt-[100px]">
    <h1 class="text-4xl sm:text-5xl font-bold text-center mb-12">Our Team</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div v-for="member in members" 
           :key="member.name" 
           class="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2">
        <img 
          :src="member.avatar" 
          :alt="member.name"
          class="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 object-cover"
        >
        
        <div class="text-center">
          <h2 class="text-xl sm:text-2xl font-semibold mb-2">{{ member.name }}</h2>
          <p class="text-gray-600 mb-4">{{ member.description }}</p>
          
          <div class="flex items-center justify-center gap-4 mb-4 text-sm text-gray-500">
            <span>{{ member.age }} years old</span>
            <span>{{ member.language }}</span>
          </div>
          
          <div class="flex justify-center gap-4">
            <a v-for="link in member.links" 
               :key="link.url" 
               :href="link.url" 
               target="_blank"
               class="text-gray-600 hover:text-primary transition-colors duration-300">
              <i :class="['fa', link.icon, 'text-2xl']"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>