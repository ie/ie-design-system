import { css } from 'styled-components'
import { focusRadius, focusOffset, focusWidth } from '../tokens/accessibility'
import { units } from '../tokens/units'

export const visuallyHidden = () => {
  return css`
    border: 0 !important;
    clip: rect(1${units}, 1${units}, 1${units}, 1${units}) !important;
    height: 1${units} !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    top: 0;
    width: 1${units} !important;
  `;
}

export const focusState = (...args) => {
  return css`
    position: relative;

    &:focus {
      outline: none;

      &::after {
        ${focusStateBase`
          ${args}
        `}
      }
    }
  `;
}

export const focusStateBase = (...args) => {
  let focusPosition = focusOffset;
  let focusSize = `calc(100% + (2 * ${focusOffset}${units}))`;

  return css`
    border-color: currentColor;
    border-radius: ${focusRadius}${units};
    border-style: dotted;
    border-width: 1${units};
    content: '';
    display: block;
    height: ${focusSize};
    left: ${focusPosition}${units};
    pointer-events: none;
    position: absolute;
    top: ${focusPosition}${units};
    width: ${focusSize};
    z-index: 9999;

    ${args};
  `;
}

export const focusStateColour = (colour) => {
  return css`
    &:focus {
      &::after {
        border-color: ${colour};
      }
    }
  `;
}

export const focusStateInline = () => {
  return css`
    &:focus {
      outline: ${focusWidth}px dotted currentColor;
      outline-offset: ${focusOffset}${units};
    }
  `;
}
