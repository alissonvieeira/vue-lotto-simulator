import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Home from '@views/Home.vue';
import Navbar from '@components/common/Navbar.vue';

describe('Home.vue', () => {
  it('renders the Navbar and game cards correctly', () => {
    const wrapper = mount(Home, {
      global: {
        components: {
          Navbar
        }
      }
    });

    // Verifica se o Navbar é renderizado
    expect(wrapper.findComponent(Navbar).exists()).toBe(true);

    // Verifica o título principal
    expect(wrapper.find('h1.text-center').text()).toBe('Explore Nossos Jogos');

    // Verifica se existem dois cartões de jogo
    const gameCards = wrapper.findAll('.game-card');
    expect(gameCards.length).toBe(2);

    // Verifica o conteúdo do primeiro cartão (Sena)
    const senaCard = gameCards[0];
    expect(senaCard.find('h2').text()).toBe('Jogar Sena');
    expect(senaCard.find('p').text()).toBe('Participe do Jogo da Sena e concorra a prêmios incríveis!');
    expect(senaCard.findComponent({ ref: 'senaRouterLink' }).props().to).toBe('/sena');

    // Verifica o conteúdo do segundo cartão (Quina)
    const quinaCard = gameCards[1];
    expect(quinaCard.find('h2').text()).toBe('Jogar Quina');
    expect(quinaCard.find('p').text()).toBe('Tente a sorte na Quina e ganhe prêmios em dinheiro!');
    expect(quinaCard.findComponent({ ref: 'quinaRouterLink' }).props().to).toBe('/quina');
  });
});
