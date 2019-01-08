import { css } from 'styled-components'
import { breakpoints } from '../tokens/breakpoints'

export const above = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const below = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
