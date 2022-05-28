import { prettyDOM, render } from '@testing-library/react';
import { Notifications } from './Notifications';
import '@testing-library/jest-dom/extend-expect';

test('Notifications', () => {
  const { container } = render(<Notifications />);
  expect(container).toBeTruthy();

  const items = container.querySelectorAll('li');
  expect(items.length).toBe(3);

  expect(container).toHaveTextContent('Here is the list of notifications');
});
