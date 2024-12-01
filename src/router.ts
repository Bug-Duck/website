import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/projects",
      component: () => import("./views/Projects.vue"),
    },
    {
      path: "/news",
      component: () => import("./views/News.vue"),
    },
    {
      path: "/articles/:id",
      component: () => import("./views/ArticleDetail.vue"),
    },
    {
      path: "/members",
      component: () => import("./views/Members.vue"),
    },
  ],
});
