import styled from 'styled-components'
import { buttonProps } from '../../type/Types'
import { setColor, setLetterSpacing, mediaQueries } from '../styles'

export const PrimaryButton = styled.button<buttonProps>`
  display: inline-block;
  background: ${setColor.mainBlack};
  color: ${setColor.mainWhite};
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0.75rem 2.1rem;
  font-size: 0.77rem;
  font-weight: 600;
  ${setLetterSpacing(1.1)};
  ${(props) =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};

  ${mediaQueries('tablet')(`
    border-radius: 40px;
    background-color: ${setColor.mainWhite};
    color: ${setColor.mainBlack}
  `)};
`

export const SecondaryButton = styled(PrimaryButton)`
  background: ${setColor.darkGrey};

  &:hover {
    background-color: transparent;
    color: ${setColor.darkGrey};
  }
`
