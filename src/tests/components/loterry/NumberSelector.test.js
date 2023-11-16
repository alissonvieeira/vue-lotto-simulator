import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import NumberSelector from '@/components/loterry/NumberSelector.vue';

describe('NumberSelector', () => {
  const totalNumbers = 60;
  const MAX_SELECTION = 15;

  it('should render the correct number of buttons', () => {
    const { getAllByRole } = render(NumberSelector, {
      props: { totalNumbers }
    });

    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(totalNumbers);
  });

  it('should allow selecting and deselecting numbers', async () => {
    const { getAllByRole, emitted } = render(NumberSelector, {
      props: { totalNumbers }
    });
  
    const buttons = getAllByRole('button');
    await fireEvent.click(buttons[0]);  
    
    expect(emitted()['update:selectedNumbers'][0][0]).toEqual([1]);
  
    await fireEvent.click(buttons[0]);  
    
    expect(emitted()['update:selectedNumbers'][1][0]).toEqual([]);
  });

  it('should disable buttons when max selection is reached', async () => {
    const { getAllByRole } = render(NumberSelector, {
      props: { totalNumbers }
    });

    const buttons = getAllByRole('button');
    
    for (let i = 0; i < MAX_SELECTION; i++) {
      await fireEvent.click(buttons[i]);
    }    
    
    expect(buttons[MAX_SELECTION].disabled).toBe(true);
  });

});
