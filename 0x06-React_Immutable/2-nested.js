export default function accessImmutableObject(object, array) {
  let result = object;
  for (let key of array) {
    result = result[key];
    if (result === undefined) return undefined;
  }
  if (typeof result === 'object') return new Map(Object.entries(result));
  return JSON.stringify(result);
}
