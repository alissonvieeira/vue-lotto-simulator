import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import { createRouter, createWebHistory } from 'vue-router';
import Navbar from '@/components/common/Navbar.vue';

describe('Navbar', () => {

  // Criar um stub do roteador
  const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', name: 'Home' }, { path: '/sena', name: 'Sena' }, { path: '/quina', name: 'Quina' }]
  });

  it('should render the navbar brand link correctly', () => {
    const { getByText } = render(Navbar, {
      global: {
        plugins: [router]
      }
    });

    // Verifica se o link da marca está correto
    const brandLink = getByText('Loterias Umov.me').closest('a');
    expect(brandLink.getAttribute('href')).toBe('/');
  });

  it('should render router links correctly', () => {
    const { getByText } = render(Navbar, {
      global: {
        plugins: [router]
      }
    });

    // Verifica os links do Sena e Quina
    const senaLink = getByText('Sena').closest('a');
    const quinaLink = getByText('Quina').closest('a');
    expect(senaLink.getAttribute('href')).toBe('/sena');
    expect(quinaLink.getAttribute('href')).toBe('/quina');
  });

});
