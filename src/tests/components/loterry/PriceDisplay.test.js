import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import PriceDisplay from '@/components/loterry/PriceDisplay.vue';

describe('PriceDisplay', () => {
  
    it('should render the formatted price correctly', () => {
        const price = 1500;
        const { getByText } = render(PriceDisplay, {
            props: { price }
        });
    
        expect(getByText(/R\$\s?1\.500,00/)).toBeTruthy();
    });

    it('should display the correct card structure', () => {
        const { getByText } = render(PriceDisplay, {
            props: { price: 500 }
        });
        
        getByText('Preço do Jogo');
        expect(getByText(/R\$\s*\d+,\d+/)).toBeTruthy(); // Verifica se o texto segue o formato de moeda
    });

});
