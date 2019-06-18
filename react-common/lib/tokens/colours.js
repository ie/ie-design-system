export let colours = {
  black: {
    base: '#000',
    text: '#fff'
  },
  white: {
    base: '#fff',
    text: '#000'
  },
  grey: {
    base: '#666',
    text: '#fff',
    dark: '#333',
    light: '#999'
  }
}

export const setColours = (map) => {
  if (typeof map !== 'object') throw new Error('colours map must be an object');
  colours = map;
}
