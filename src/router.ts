import { createRouter, createWebHistory } from "vue-router";

import systemRoutes from "./apps/system/routes";
import portalRoutes from "./apps/portal/routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [...systemRoutes, ...portalRoutes],
});

export default router;
