// const { Map } = require('./node_modules/immutable/dist/immutable');

import { Map } from 'immutable';

export const getImmutableObject = (object) => {
  return Map(object);
};
