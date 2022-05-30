import { Header } from './Header';
import { render } from '@testing-library/react';

test('Render App-header', () => {
  const { container } = render(<Header />);
  const header = container.querySelector('.App-header');
  expect(header).toBeTruthy();
});
