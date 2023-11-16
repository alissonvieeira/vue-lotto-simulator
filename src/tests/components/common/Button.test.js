import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import Button from '@/components/common/Button.vue';

describe('Button', () => {

  it('should render with default text', () => {
    const { getByText } = render(Button);
    getByText('Botão');
  });

  it('should render with slot content', () => {
    const { getByText } = render(Button, {
      slots: { default: 'Clique Aqui' }
    });
    getByText('Clique Aqui');
  });

  it('should apply correct classes based on props', () => {
    const { getByRole } = render(Button, {
      props: { type: 'success', rounded: true }
    });
    const button = getByRole('button');
    expect(button.classList.contains('btn-success')).toBe(true);
    expect(button.classList.contains('rounded')).toBe(true);
  });

  it('should emit click event when clicked', async () => {
    const { getByRole, emitted } = render(Button);
    const button = getByRole('button');
    await fireEvent.click(button);
    expect(emitted().click).toBeTruthy();
  });

});
