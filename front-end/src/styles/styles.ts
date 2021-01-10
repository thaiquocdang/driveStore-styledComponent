import { css } from 'styled-components'

export const setColor = {
  primaryColor: '#b8a284',
  mainWhite: '#fff',
  mainBlack: '#000000',
  mainGrey: 'ececec',
  lightGrey: '#f7f7f7',
}
export const setFont = {
  main: "font-family: 'Lato', sans-serif; ",
  slanted: "font-family: 'Caveat', cursive;",
}

export const setLetterSpacing = (number: number = 2) => {
  return `letter-spacing: ${number}px`
}

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
  miniPhone: 320,
}
//Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (style: String) =>
    `@media (min-width: ${sizes[label]}) { ${style} }`
  return acc
}, {} as { [index: string]: Function })
