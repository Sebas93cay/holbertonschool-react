import { prettyDOM, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('App renders', () => {
  const { container } = render(<App />);
  // console.log('the container is', prettyDOM(container));
  expect(container).toHaveTextContent('School dashboard');
});

test('Render App-body', () => {
  const { container } = render(<App />);
  const body = container.querySelector('.App-body');
  expect(body).toBeTruthy();
});
