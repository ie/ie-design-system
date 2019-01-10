import { units } from './units'

const fibonacci = (n) => {
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}

export let spacingBaseUnit = 8;

export let spacingBaseFactor = 2;

export const spacingLinear = {
  none: 0,
  xxs: `${spacingBaseUnit / 4}${units}`,
  xs: `${spacingBaseUnit / 2}${units}`,
  default: `${spacingBaseUnit}${units}`,
  md: `${spacingBaseUnit * 2}${units}`,
  lg: `${spacingBaseUnit * 3}${units}`,
  xl: `${spacingBaseUnit * 4}${units}`,
  xxl: `${spacingBaseUnit * 5}${units}`,
}

export const spacingGeometric = {
  none: 0,
  xxs: `${spacingBaseUnit / 4}${units}`,
  xs: `${spacingBaseUnit / 2}${units}`,
  default: `${spacingBaseUnit}${units}`,
  md: `${spacingBaseUnit * 2}${units}`,
  lg: `${spacingBaseUnit * 4}${units}`,
  xl: `${spacingBaseUnit * 8}${units}`,
  xxl: `${spacingBaseUnit * 16}${units}`
}

export const spacingFibonacci = {
  none: 0,
  xxs: `${spacingBaseFactor * fibonacci(2)}`,
  xs: `${spacingBaseFactor * fibonacci(3)}`,
  default: `${spacingBaseFactor * fibonacci(4)}`,
  md: `${spacingBaseFactor * fibonacci(5)}`,
  lg: `${spacingBaseFactor * fibonacci(6)}`,
  xl: `${spacingBaseFactor * fibonacci(7)}`,
  xxl: `${spacingBaseFactor * fibonacci(8)}`
}

export let spacing = spacingGeometric;

export const setSpacing = (map) => {
  if (typeof map !== 'object') throw new Error('spacing map must be an object');
  spacing = map;
}
