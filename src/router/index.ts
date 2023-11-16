import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Sena from '../views/Sena.vue';
import Quina from '../views/Quina.vue';
import Payment from '../views/Payment.vue';

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
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    props: route => ({
      selectedNumbers: route.query.numbers.split(',').map(Number),
      totalPrice: Number(route.query.totalPrice),
      selectedCount: Number(route.query.selectedCount)
    })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
