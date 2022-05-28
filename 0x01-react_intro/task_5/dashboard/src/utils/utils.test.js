import { getFooterCopy, getFullYear, getLatestNotifications } from './utils';

it('get full year', () => {
  expect(getFullYear()).toEqual(new Date().getFullYear());
});

it('get footer copy', () => {
  expect(getFooterCopy(true)).toEqual('Holberton School');
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});

it('get latest notifications', () => {
  expect(getLatestNotifications()).toEqual(
    '<strong>Urgent requirement</strong> - complete by EOD',
  );
});
