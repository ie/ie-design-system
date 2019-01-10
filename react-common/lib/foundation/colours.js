import { colours } from '../tokens/colours'

export const colour = (hue, value = 'base') => {
  if (typeof colours[hue] === 'undefined') throw new Error(`colour '${hue}' not found`);
  if (typeof colours[hue][value] === 'undefined') throw new Error(`colour '${hue} / ${value}' not found`);

  return colours[hue][value];
}
