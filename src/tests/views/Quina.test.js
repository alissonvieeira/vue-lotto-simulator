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

    
    expect(wrapper.findComponent(Navbar).exists()).toBe(true);
    
    expect(wrapper.find('h1.text-center').text()).toBe('Jogo da Quina');
    
    expect(wrapper.find('p.text-center').text()).toBe('Selecione no mínimo 5 e no máximo 15 números para poder efetivar o jogo.');
    
    expect(wrapper.findComponent(NumberSelector).exists()).toBe(true);
    
    expect(wrapper.findComponent(SelectedNumbersDisplay).exists()).toBe(true);
    
    expect(wrapper.findComponent(NumberCountDisplay).exists()).toBe(true);
    
    expect(wrapper.findComponent(PriceDisplay).exists()).toBe(true);
    
    expect(wrapper.findComponent(Button).exists()).toBe(true);
    
  });

  
});
