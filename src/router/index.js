import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import CounterPage from "@/pages/CounterPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Home", path: "/", component: HomePage },
    { name: "Counter", path: "/counter", component: CounterPage },
    { path: "/404", name: "page-not-found", component: ErrorPage },
    { path: "/:catchAll(.*)", redirect: "/404" },
  ],
});

export default router;
