export let borderRadius = {
  none: 0,
  default: 8,
  small: 4
}

export const setBorderRadius = (map) => {
  if (typeof map !== 'object') throw new Error('radius map must be an object');
  borderRadius = map;
}
