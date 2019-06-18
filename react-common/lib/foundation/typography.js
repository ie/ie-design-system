import ms from 'modularscale-js'
import { css } from 'styled-components'

export const breakWordWithoutHyphen = () => {
  return css`
    overflow-wrap: break-word;
    word-break: break-word;
    word-wrap: break-word;
  `
}



export const breakWordWithHyphen = () => {
  return css`
    hyphens: auto;
    overflow-wrap: break-word;
    word-break: break-word;
    word-wrap: break-word;
  `
}

export const truncateWithEllipsis = () => {
  return css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

export const getTypeScale = ms;
