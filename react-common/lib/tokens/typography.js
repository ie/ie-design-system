import ms from 'modularscale-js'
import { units } from './units'

export let typeSizeBase = 16;

export let typeScale = 1.5;

const typeSettings = {
  base: typeSizeBase,
  ratio: typeScale
}

export const typeScales = {
  minorSecond: 16/15,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 4/3,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.61803398875,
  majorSixth: 5/3,
  minorSeventh: 16/9,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 8/3,
  majorTwelfth: 3,
  doubleOctave: 4,
}

export let typeSizes = {
  tiny: `${ms(-2, typeSettings)}${units}`,
  small: `${ms(-1, typeSettings)}${units}`,
  body: `${ms(0, typeSettings)}${units}`,
  h6: `${ms(0, typeSettings)}${units}`,
  h5: `${ms(1, typeSettings)}${units}`,
  h4: `${ms(2, typeSettings)}${units}`,
  h3: `${ms(3, typeSettings)}${units}`,
  h2: `${ms(4, typeSettings)}${units}`,
  h1: `${ms(5, typeSettings)}${units}`,
}

export const setTypeScale = (map) => {
  if (typeof map !== 'object') throw new Error('type scale map must be an object');
  typeScale = map;
}

export const setTypeSize = (size) => {
  if (typeof map !== 'number') throw new Error('base type size must be a number');
  typeSizeBase = size;
}

export const setTypeSizes = (sizes) => {
  if (typeof map !== 'object') throw new Error('type size map must be an object');
  typeSizes = sizes;
}
