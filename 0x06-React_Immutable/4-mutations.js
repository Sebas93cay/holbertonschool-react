export const map = new Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = new Map(map);
map2.set(2, 'Benjamin');
map2.set(4, 'Oliver');

export { map2 };
