import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import CounterPage from "@/pages/CounterPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Home", path: "/", component: HomePage },
    { name: "Counter", path: "/counterpage", component: CounterPage },
    { name: "Error", path: "/:errorpage(.*)", component: ErrorPage },
  ],
});

export default router;
