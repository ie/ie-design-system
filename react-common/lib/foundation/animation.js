import { css } from 'styled-components'
import { animationDuration, animationEasing } from '../tokens/animation'

export const animation = (animationName, duration = 'default', delay = '0s') => {
  return css`
    animation-delay: ${delay};
    animation-duration: ${animationDuration[duration]};
    animation-name: ${animationName};
  `;
}

export const transition = (prop = 'all', duration = 'default', delay = '0s', easing = 'linear', direction = 'inOut') => {
  if (Array.isArray(prop)) {
    return prop.map((args) => {
      if (typeof args !== 'object') {
        throw new Error(`transition function expects an array of objects: {
          prop: "opacity",
          duration: "default",
          easing: "linear",
          direction: "in"
        }`);
      }

      const direction = animationEasing[args.direction] || animationEasing['inOut'];

      return css`
        transition-delay: ${args.delay || '0s'};
        transition-duration: ${animationDuration[args.duration]};
        transition-easing: ${direction[args.easing] || 'linear'};
        transition-property: ${args.prop};
      `;
    });
  }

  return css`
    transition-delay: ${delay || '0s'};
    transition-duration: ${animationDuration[duration]};
    transition-easing: ${animationEasing[direction][easing]};
    transition-property: ${prop};
  `;
}
