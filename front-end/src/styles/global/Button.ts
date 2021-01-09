import styled from 'styled-components'
import { setColor, setLetterSpacing } from '../styles'

export const PrimaryButton = styled.button`
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
  /* border-radius: 0.4rem; */
  margin-top: 1rem;
`
