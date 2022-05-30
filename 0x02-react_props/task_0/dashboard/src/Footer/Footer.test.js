import { Footer } from './Footer';
import { render } from '@testing-library/react';

test('Render App-footer', () => {
  const { container } = render(<Footer />);
  const header = container.querySelector('.App-footer');
  expect(header).toBeTruthy();
});
