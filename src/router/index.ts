import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sena from '../views/Sena.vue';
import Quina from '../views/Quina.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sena',
    name: 'Sena',
    component: Sena
  },
  {
    path: '/quina',
    name: 'Quina',
    component: Quina
  }
  // Adicione mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
