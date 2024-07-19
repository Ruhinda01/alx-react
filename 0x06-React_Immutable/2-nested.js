import { fromJS } from 'immutable';

export default function accessImmutableObject (object, array) {
  const newObj = fromJS(object);

  return newObj.getIn(array, undefined);
}
