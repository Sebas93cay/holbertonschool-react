import { prettyDOM, render } from '@testing-library/react';
import App from './App';

test('App renders', () => {
  const { container } = render(<App />);
  expect(container).toHaveTextContent('School dashboard');
});

test('Render App-header', () => {
  const { container } = render(<App />);
  const header = container.querySelector('.App-header');
  expect(header).toBeTruthy();
});

test('Render App-body', () => {
  const { container } = render(<App />);
  const body = container.querySelector('.App-body');
  expect(body).toBeTruthy();
});

test('Render App-footer', () => {
  const { container } = render(<App />);
  const header = container.querySelector('.App-footer');
  expect(header).toBeTruthy();
});
