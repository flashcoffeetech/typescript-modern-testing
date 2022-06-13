import { render, screen, fireEvent } from '@testing-library/react';
import ColorButton from './ColorButton';

test('Change the button color from red to blue when clicked', () => {
  render(<ColorButton />);
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
});
