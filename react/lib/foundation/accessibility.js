import { css } from 'styled-components'
import { focusRadius, focusOffset, focusWidth } from '../tokens/accessibility'

export const visuallyHidden = () => {
  return css`
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    top: 0;
    width: 1px !important;
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
  let focusSize = `calc(100% + (2 * ${focusOffset}))`;

  return css`
    border-color: currentColor;
    border-radius: ${focusRadius};
    border-style: dotted;
    border-width: 1px;
    content: ' ';
    display: block;
    height: ${focusSize};
    left: ${focusPosition};
    pointer-events: none;
    position: absolute;
    top: ${focusPosition};
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
      outline: ${focusWidth} dotted currentColor;
      outline-offset: ${focusOffset};
    }
  `;
}
