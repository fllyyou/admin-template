import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import guard from './guard';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

function setupRouter(app: App) {
  guard(router);
  app.use(router);
  return router;
}

export { router, setupRouter };
