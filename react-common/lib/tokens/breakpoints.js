export let breakpoints = {
  xs: '0px',
  sm: '480px',
  md: '680px',
  lg: '970px',
  xl: '1170px',
  xxl: '1600px'
};

export let pixelRatios = {
  '1.5': {
    ratio: 1.5,
    resolution: '144dpi'
  },
  '2': {
    ratio: 2,
    resolution: '192dpi'
  },
  '3': {
    ratio: 3,
    resolution: '288dpi'
  }
};

// Override functions
export const setBreakpoints = (map) => {
  if (typeof map !== 'object') throw new Error('breakpoint map must be an object');
  breakpoints = map;
}

export const setPixelRatios = (map) => {
  if (typeof map !== 'object') throw new Error('pixel ratio map must be an object');
  pixelRatios = map;
}
