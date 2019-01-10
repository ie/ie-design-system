import { css } from 'styled-components'
import { borderRadius } from '../tokens/borders'
import { units } from '../tokens/units'

export const border = (width = 1, type = 'solid', colour = 'currentColor') => {
  return css`
    border-color: ${colour};
    border-style: ${type};
    border-width: ${width}${units};
  `;
}

export const borderOutside = (width = 1, type = 'solid', colour = 'currentColor') => {
  return css`
    position: relative;

    &::after {
      border-color: ${colour};
      border-style: ${type};
      border-width: ${width}${units};
      content: '';
      display: block;
      height: calc(100% + (2 * ${width}${units}));
      left: -${width}${units};
      pointer-events: none;
      position: absolute;
      top: -${width}${units};
      width: calc(100% + (2 * ${width}${units}));
    }
  `
}

export const borderRounded = (radius = 'default') => {
  if (typeof borderRadius[radius] === 'undefined') throw new Error('radius ${radius} not found');

  return css`
    border-radius: ${borderRadius[radius]}${units};

    &::after {
      border-radius: ${borderRadius[radius]}${units};
    }
  `
}

export const borderTriangle = (horizontal, vertical, direction = 'bottom', colour = 'currentColor') => {
  let triangle = '';

  switch(direction) {
  case 'top':
    triangle = `
      border-color: transparent transparent ${colour} transparent;
      border-width: 0 ${vertical}${units} ${horizontal}${units} ${vertical}${units};
      top: -${vertical}${units};
      left: 50%;
      transform: translateX(-50%);
    `
    break;
  case 'bottom':
    triangle = `
      border-color: ${colour} transparent transparent transparent;
      border-width: ${vertical}${units} ${horizontal}${units} 0 ${vertical}${units};
      bottom: -${vertical}${units};
      left: 50%;
      transform: translateX(-50%);
    `
    break;
  case 'left':
    triangle = `
      border-color: transparent ${colour} transparent transparent;
      border-width: ${vertical}${units} ${horizontal}${units} ${vertical}${units} 0;
      left: -${horizontal}${units};
      top: 50%;
      transform: translateY(-50%);
    `
    break;
  case 'right':
    triangle = `
      border-color: transparent transparent transparent ${colour};
      border-width: ${vertical}${units} 0 ${vertical}${units} ${horizontal}${units};
      right: -${horizontal}${units};
      top: 50%;
      transform: translateY(-50%);
    `
    break;
  default:
    triangle = `
      border-color: ${colour} transparent transparent transparent;
      border-width: ${vertical}${units} ${horizontal}${units} 0 ${vertical}${units};
      bottom: -${vertical}${units};
      left: 50%;
      transform: translateX(-50%);
    `
    break;
  }

  return css`
    position: relative;

    &::after {
      border-style: solid;
      content: '';
      display: block;
      height: 0;
      width: 0;
      position: absolute;

      ${triangle}
    }
  `
}
