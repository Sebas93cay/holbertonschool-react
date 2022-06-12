import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const obj = fromJS(object);
  return obj.getIn(array, undefined);
};

export default accessImmutableObject;
