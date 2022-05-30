import { prettyDOM, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NotificationItem } from './NotificationItem';

test('NotificationsItem renders', () => {
  const { container } = render(<NotificationItem />);
  const li = container.querySelector('li');
  // console.log('the container is', prettyDOM(li));
  expect(li).toBeTruthy();
});

test('NotificationsItem with type and value', () => {
  const { container } = render(
    <NotificationItem type='test' value='default'></NotificationItem>,
  );
  const li = container.querySelector('li');
  // console.log('in type and value', prettyDOM(container));
  expect(li.getAttribute('data-notification-type')).toMatch(/test/);
  expect(li).toHaveTextContent(/default/);
});

test('NotificationsItem with html', () => {
  const { container } = render(
    <NotificationItem html='<u>test</u>'></NotificationItem>,
  );
  // console.log('in html', prettyDOM(container));
  const li = container.querySelector('li');
  expect(li).toHaveTextContent(/test/);
});
