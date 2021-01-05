import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { AllState } from '../type/Store'

const Header = () => {
  const dispatch = useDispatch()

  const cart: AllState['cart'] = useSelector((state: AllState) => state.cart)
  const basketItem = cart.cartItems.length

  const userLogin: AllState['userLogin'] = useSelector((state: AllState) => state.userLogin)

  const { userInfo } = userLogin

  const handleLogout = () => {
    dispatch(logout())
    window.location.href = '/'
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Derive</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart' />
                  Cart {basketItem > 0 && `(${basketItem})`}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user' />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo ? null : (
                <LinkContainer to='/register'>
                  <Nav.Link>
                    <i className='fas fa-user-plus'></i>
                    Sign Up
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='admin' id='adminmenu'>
                  <LinkContainer to='/admin/userList'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productList'>
                    <Dropdown.Item>Products</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderList'>
                    <Dropdown.Item>Orders</Dropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
