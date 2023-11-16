import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import SelectionCounter from '@/components/loterry/SelectionCounter.vue';

describe('SelectionCounter', () => {

  it('should render the count correctly', () => {
    const count = 5;
    const { getByText } = render(SelectionCounter, {
      props: { count }
    });
    
    getByText(count.toString());
  });

  it('should display the correct card structure', () => {
    const { getByText } = render(SelectionCounter, {
      props: { count: 3 }
    });
    
    getByText('Números Selecionados');
    getByText('3');
  });

});
