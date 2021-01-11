import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { setColor, setFlex } from '../styles/styles'
import { useDispatch, useSelector } from 'react-redux'
import { AllState } from '../type/Store'

const HeaderWrapper = styled.header`
  background-color: ${setColor.darkGrey};
  height: 10vh;
  ${setFlex({x: 'space-between'})};
  padding: 10px 100px;

  .brand {
    color: ${setColor.mainWhite};
    text-transform: uppercase;
    font-size: 1.25rem;
    padding: 2rem 0;
    text-decoration:none;
  }


  .menu-header{
    display: flex;
    align-items: center;
    justify-content: space-evenly
  }

  .menu-item {
    padding: 0 10px;
    text-transform: uppercase;
    color: ${setColor.lightGrey};
    font-size: 0.8rem;
    text-decoration: none;
    &:hover{
      color: ${setColor.mainWhite};
    }
  }
`

const Nav = styled.nav`
  &:hover{
    color: white
  }
`

const Header2 = () => {
  const dispatch = useDispatch()

  const cart: AllState['cart'] = useSelector((state: AllState) => state.cart)
  const basketItem = cart.cartItems.length
  return (
    <HeaderWrapper>
      <Link to='/' className='brand'>drive</Link>
      <div className='menu-header'>
        <Nav>
          <Link to='/carts' className='menu-item'><i className='fas fa-shopping-cart' />cart{basketItem > 0 && ` (${basketItem})`}</Link>
        </Nav>
        <Link to='/login' className='menu-item'><i className='fas fa-user' />Sign in</Link>
        <Link to='/register' className='menu-item'><i className='fas fa-user-plus'></i>Sign Up</Link>
      </div>
    </HeaderWrapper>
  )
}

export default Header2
