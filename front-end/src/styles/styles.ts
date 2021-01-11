import { css } from 'styled-components'
import { flexProps } from '../type/Types'

export const setColor = {
  primaryColor: '#b8a284',
  mainWhite: '#fff',
  mainBlack: '#000000',
  darkGrey: '#333333',
  lightGrey: '#9ba5a8',
}
export const setFont = {
  main: "font-family: 'Lato', sans-serif; ",
  slanted: "font-family: 'Caveat', cursive;",
}

export const setLetterSpacing = (number: number = 2) => {
  return `letter-spacing: ${number}px`
}

export const setFlex = (props?: flexProps) => {
  props = { direction: 'row', x: 'center', y: 'center', ...props }
  return `display: flex; flex-direction: ${props.direction}; align-items:${props.y}; justify-content: ${props.x} `
}

export const breakpoints = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
  miniPhone: 320,
}

//media queries template
export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`
}
