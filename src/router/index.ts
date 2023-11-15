import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
