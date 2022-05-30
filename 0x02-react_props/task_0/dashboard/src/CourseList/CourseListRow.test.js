import { prettyDOM, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CourseListRow } from './CourseListRow';

test('Render CourseListRow', () => {
  const { container } = render(
    <CourseListRow isHeader={true} textFirstCell='un texto principal' />,
  );
  expect(container).toBeTruthy();
});

test('when textSecondCell is null', () => {
  const { container } = render(
    <CourseListRow isHeader={true} textFirstCell='un texto principal' />,
  );
  const th = container.querySelector('th');
  // console.log(prettyDOM(container));
  expect(th.getAttribute('colspan')).toMatch(/2/);
});

test('when textSecondCell is not null', () => {
  const { container } = render(
    <CourseListRow
      isHeader={true}
      textFirstCell='un texto principal'
      textSecondCell='un texto secundario'
    />,
  );
  const ths = container.querySelectorAll('th');
  expect(ths.length).toBe(2);
  expect(ths[0]).toHaveTextContent('un texto principal');
  expect(ths[1]).toHaveTextContent('un texto secundario');
});

test('when header is false', () => {
  const { container } = render(
    <CourseListRow
      isHeader={false}
      textFirstCell='un texto principal'
      textSecondCell='un texto secundario'
    />,
  );
  const tr = container.querySelector('tr');
  const tds = tr.querySelectorAll('td');
  // console.log(prettyDOM(container));
  expect(tr).toBeTruthy();
  expect(tds.length).toBe(2);
});
