import { createRouter, createWebHashHistory } from "vue-router";
import { routesX, routesY } from "@/router/routers";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routesX, ...routesY]
});

export default router;
