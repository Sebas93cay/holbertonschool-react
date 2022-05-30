import { render } from '@testing-library/react';
import { Login } from './Login';

test('Render App-header', () => {
  const { container } = render(<Login />);
  expect(container).toBeTruthy();
});
