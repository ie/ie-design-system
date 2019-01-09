import { css } from 'styled-components'
import { borderRadius } from '../tokens/borders'

export const border = (width = 1, type = 'solid', colour = 'currentColor') => {
  return css`
    border-color: ${colour};
    border-style: ${type};
    border-width: ${width}px;
  `;
}

export const borderOutside = (width = 1, type = 'solid', colour = 'currentColor') => {
  return css`
    position: relative;

    &::after {
      border-color: ${colour};
      border-style: ${type};
      border-width: ${width}px;
      content: '';
      display: block;
      height: calc(100% + (2 * ${width}px));
      left: -width;
      pointer-events: none;
      position: absolute;
      top: -width;
      width: calc(100% + (2 * ${width}px));
    }
  `
}

export const borderRounded = (radius = 'default') => {
  const rad = borderRadius[radius] || borderRadius.default;

  return css`
    border-radius: ${rad}px;
  `
}

export const borderTriangle = (direction = 'bottom', horizontal, vertical, colour = 'currentColor') => {
  let triangle = '';

  switch(direction) {
  case 'top':
    triangle = `
      border-color: transparent transparent ${colour} transparent;
      border-width: 0 ${vertical} ${horizontal} ${vertical};
    `
    break;
  case 'bottom':
    triangle = `
      border-color: ${colour} transparent transparent transparent;
      border-width: ${vertical} ${horizontal} 0 ${vertical};
    `
    break;
  case 'left':
    triangle = `
      border-color: transparent ${colour} transparent transparent;
      border-width: ${vertical} ${horizontal} ${vertical} 0;
    `
    break;
  case 'right':
    triangle = `
      border-color: transparent transparent transparent ${colour};
      border-width: ${vertical} 0 ${vertical} ${horizontal};
    `
    break;
  case 'topright':
    triangle = `
      border-color: transparent ${colour} transparent transparent;
      border-width: 0 ${horizontal} ${vertical} 0;
    `
    break;
  case 'bottomright':
    triangle = `
      border-color: transparent transparent ${colour} transparent;
      border-width: 0 0 ${vertical} ${horizontal};
    `
    break;
  case 'bottomleft':
    triangle = `
      border-color: transparent transparent transparent ${colour};
      border-width: ${horizontal} 0 0 ${vertical};
    `
    break;
  case 'topleft':
    triangle = `
      border-color: ${colour} transparent transparent transparent;
      border-width: ${vertical} ${horizontal} 0 0;
    `
    break;
  default:
    triangle = `
      border-color: ${colour} transparent transparent transparent;
      border-width: ${vertical} ${horizontal} 0 ${vertical};
    `
    break;
  }

  return css`
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    width: 0;

    ${triangle}
  `
}
