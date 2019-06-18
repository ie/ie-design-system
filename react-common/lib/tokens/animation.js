export let animationDuration = {
  short: '100ms',
  default: '200ms',
  medium: '300ms',
  long: '400ms'
}

export let animationEasing = {
  in:  {
    linear: 'linear',
    ease: 'ease-in',
    cubic: 'cubic-bezier(.55, .055, .675, .19)',
    quint: 'cubic-bezier(.755, .05, .855, .06)',
    circ: 'cubic-bezier(.6, .04, .98, .335)',
    exp: 'cubic-bezier(0, 1, .33, 1)',
    elastic: 'cubic-bezier(.52, 1.64, .58, .82)',
    bounce: 'cubic-bezier(.5, 1.41, .74, .84)',
  },
  out: {
    linear: 'linear',
    ease: 'ease-out',
    cubic: 'cubic-bezier(.215, .61, .355, 1)',
    quint: 'cubic-bezier(.23, 1, .32, 1)',
    circ: 'cubic-bezier(.075, .82, .165, 1)',
    exp: 'cubic-bezier(1, 0, 1, .75)',
    elastic: 'cubic-bezier(.31, -.28, .28, 1)',
    bounce: 'cubic-bezier(.59, -.31, .65, 1)',
  },
  inOut: {
    linear: 'linear',
    ease: 'ease-in-out',
    cubic: 'cubic-bezier(.645, .045, .355, 1)',
    quint: 'cubic-bezier(.86, 0, .07, 1)',
    circ: 'cubic-bezier(.785, .135, .15, .86)',
    exp: 'cubic-bezier(0, .66, 1, .33)',
    elastic: 'cubic-bezier(.4, -.32, .53, 1.33)',
    bounce: 'cubic-bezier(.69, 1.41, .74, .84)',
  }
}

export const setAnimationDuration = (map) => {
  if (typeof map !== 'object') throw new Error('duration map must be an object');
  animationDuration = map;
}

export const setAnimationEasing = (map) => {
  if (typeof map !== 'object') throw new Error('easing map must be an object');
  animationEasing = map;
}
