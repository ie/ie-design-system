// Tokens
import { breakpoints, pixelRatios } from './tokens/breakpoints';

// Foundation
import { above, below } from './foundation/breakpoints';

// Override functions
const setBreakpoints = (map) => {
  breakpoints = map;
}

const setPixelRatios = (map) => {
  pixelRatios = map;
}

export default {
  // Tokens
  breakpoints,
  pixelRatios,
  setBreakpoints,
  setPixelRatios,

  // Foundation
  above,
  below
}
