import { asyncRoutes } from "./modules/index";
import { App } from "vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import guard from "./guard";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

async function setupRouter(app: App) {
  await autoReload();
  guard(router);
  app.use(router);
  return router;
}

async function autoReload(permissions?: string[]) {
  let routes = asyncRoutes;

  routes.forEach((item) => router.addRoute(item));
}

export { router, setupRouter, autoReload };
