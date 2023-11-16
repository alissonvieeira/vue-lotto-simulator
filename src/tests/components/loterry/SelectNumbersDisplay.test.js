import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/vue';
import SelectNumbersDisplay from '@/components/loterry/SelectNumbersDisplay.vue';

describe('SelectNumbersDisplay', () => {

  it('should not display the message when there are no numbers', () => {
    const { queryByText } = render(SelectNumbersDisplay, {
      props: { numbers: [] }
    });

    expect(queryByText('Números escolhidos:')).toBeNull();
  });

  it('should display the message when there are numbers', () => {
    const { getByText } = render(SelectNumbersDisplay, {
      props: { numbers: [1, 2, 3] }
    });

    getByText('Números escolhidos:');
  });

  it('should render numbers correctly', () => {
    const { getAllByTestId } = render(SelectNumbersDisplay, {
      props: { numbers: [1, 2, 3] }
    });
  
    const numbers = getAllByTestId('selected-number');
    expect(numbers).toHaveLength(3);
    expect(numbers[0].textContent).toBe('1');
    expect(numbers[1].textContent).toBe('2');
    expect(numbers[2].textContent).toBe('3');
  });

});
