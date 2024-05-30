import { render, screen } from '@testing-library/react';
import { Button } from '~/ui/Button';

describe('Button component tests', () => {
  it('correct render', () => {
    const BUTTON_TEXT = 'test-button-text';
    render(<Button>{BUTTON_TEXT}</Button>);
    expect(screen.getByText(BUTTON_TEXT)).toBeInTheDocument();
  });
});
