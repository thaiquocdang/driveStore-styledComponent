import { css } from 'styled-components'

export const setColor = {
  primaryColor: '#b8a284',
  mainWhite: '#fff',
  mainBlack: '#000000',
  mainGrey: '#ececec',
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
  large: '1200px',
  desktop: '992px',
  tablet: '768px',
  phone: '576px',
  miniPhone: '320px',
}

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60,
}

//Iterate through the sizes and create a media template
// export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
//   (acc, label) => {
//     acc[label] = ({ ...style }) =>
//       css`
//         @media (max-width: ${sizes[label]}) {
//           ${css({ ...style })}
//         }
//       `
//     return acc
//   },
//   {} as { [index: string]: Function }
// )

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`
}
