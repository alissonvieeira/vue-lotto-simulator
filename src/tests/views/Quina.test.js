import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Quina from '@/views/Quina.vue';
import Navbar from '@/components/common/Navbar.vue';
import NumberSelector from '@/components/loterry/NumberSelector.vue';
import SelectedNumbersDisplay from '@/components/loterry/SelectNumbersDisplay.vue';
import NumberCountDisplay from '@/components/loterry/NumberCountDisplay.vue';
import PriceDisplay from '@/components/loterry/PriceDisplay.vue';
import Button from '@/components/common/Button.vue';
import { ref } from 'vue';

describe('Quina.vue', () => {
  it('renders the Quina view correctly', () => {
    const wrapper = mount(Quina, {
      global: {
        components: {
          Navbar,
          NumberSelector,
          SelectedNumbersDisplay,
          NumberCountDisplay,
          PriceDisplay,
          Button
        },
        provide: {
          router: {
            push: vi.fn()
          }
        }
      }
    });

    // Verifica se o Navbar é renderizado
    expect(wrapper.findComponent(Navbar).exists()).toBe(true);

    // Verifica se o título principal está correto
    expect(wrapper.find('h1.text-center').text()).toBe('Jogo da Quina');

    // Verifica se a descrição está correta
    expect(wrapper.find('p.text-center').text()).toBe('Selecione no mínimo 5 e no máximo 15 números para poder efetivar o jogo.');

    // Verifica se o NumberSelector está renderizado
    expect(wrapper.findComponent(NumberSelector).exists()).toBe(true);

    // Verifica se o SelectedNumbersDisplay está renderizado
    expect(wrapper.findComponent(SelectedNumbersDisplay).exists()).toBe(true);

    // Verifica se o NumberCountDisplay está renderizado
    expect(wrapper.findComponent(NumberCountDisplay).exists()).toBe(true);

    // Verifica se o PriceDisplay está renderizado
    expect(wrapper.findComponent(PriceDisplay).exists()).toBe(true);

    // Verifica se o Button está renderizado
    expect(wrapper.findComponent(Button).exists()).toBe(true);
    
  });

  it('deve retornar falso quando a quantidade de números jogados for menor que 5', () => {
    const wrapper = mount(Quina, {
      global: {
        components: {
          Navbar,
          NumberSelector,
          SelectedNumbersDisplay,
          NumberCountDisplay,
          PriceDisplay,
          Button
        },
        provide: {
          router: {
            push: vi.fn()
          }
        }
      }
    });
    //given - dado que tenho
    
    //when - quando fizer
    //then - então espero que
  })
});
