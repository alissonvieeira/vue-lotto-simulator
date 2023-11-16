import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import NumberCountDisplay from '@/components/loterry/NumberCountDisplay.vue';

describe('NumberCountDisplay', () => {

  it('should render the count correctly', () => {
    const count = 7;
    const { getByText } = render(NumberCountDisplay, {
      props: { count }
    });
    
    getByText(count.toString());
  });

  it('should display the correct card structure', () => {
    const { getByText } = render(NumberCountDisplay, {
      props: { count: 4 }
    });
    
    getByText('Números Selecionados');
    getByText('4');
  });

});
