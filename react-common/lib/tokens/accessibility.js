export let focusOffset = 1;
export let focusWidth = 1;
export let focusRadius = 0;

export const setFocusOffset = (offset) => {
  if (typeof offset !== 'number') throw new Error('focus offset must be a number');
  focusOffset = offset;
}

export const setFocusWidth = (width) => {
  if (typeof width !== 'number') throw new Error('focus width must be a number');
  focusWidth = width;
}

export const setFocusRadius = (radius) => {
  if (typeof radius !== 'number') throw new Error('focus radius must be a number');
  focusRadius = radius;
}
