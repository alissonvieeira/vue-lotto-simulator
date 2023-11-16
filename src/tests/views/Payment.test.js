import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import Payment from '@/views/Payment.vue';

describe('Payment', () => {
  const selectedNumbers = [1, 2, 3, 4, 5];
  const totalPrice = 200;
  const selectedCount = 5;
  const gameName = 'Sena';

  it('should render game details correctly', () => {
    const { container } = render(Payment, {
      props: { selectedNumbers, totalPrice, selectedCount, gameName },
      global: {
        stubs: {
          'router-link': true
        }
      }
    });
    
    function checkContainsText(parent, text) {
      const hasText = node => node.textContent === text;
      const nodeHasText = hasText(parent);
      const childrenDontHaveText = Array.from(parent.children).every(child => !hasText(child));
      return nodeHasText && childrenDontHaveText;
    }
    
    const gameDetailElement = Array.from(container.querySelectorAll('li')).find(el => checkContainsText(el, `Jogo: ${gameName}`));
    expect(gameDetailElement).toBeTruthy();

    expect(container.textContent).toContain(`Quantidade de Números Selecionados: ${selectedCount}`);
    expect(container.textContent).toContain(`Números Selecionados: ${selectedNumbers.join(', ')}`);
    expect(container.textContent).toContain(`R$ ${totalPrice.toFixed(2)}`);
  });

  it('should render links to new games correctly', () => {
    const { getByText } = render(Payment, {
      props: { selectedNumbers, totalPrice, selectedCount, gameName },
      global: {
        stubs: {
          'router-link': {
            template: '<a :href="to"><slot></slot></a>',
            props: ['to']
          }
        }
      }
    });
    
    const senaLinkText = getByText('Novo jogo Sena');
    const quinaLinkText = getByText('Novo Jogo Quina');
    
    expect(senaLinkText.closest('a').getAttribute('href')).toBe('/sena');
    expect(quinaLinkText.closest('a').getAttribute('href')).toBe('/quina');
  });

});
