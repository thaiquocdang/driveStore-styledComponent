import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckOutSteps from "../components/CheckOutSteps";
import { saveShippingAddress } from '../actions/cartActions'
import { AllState } from "../type/Store";


const ShippingScreen = ({ history }) => {
  const cart: AllState['cart'] = useSelector((state: AllState) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState<string>(shippingAddress.address)
  const [city, setCity] = useState<string>(shippingAddress.city)
  const [postalCode, setPostalCode] = useState<string>(shippingAddress.postalCode)
  const [country, setCountry] = useState<string>(shippingAddress.country)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckOutSteps step1 step2/>
      <h2>Shipping</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='address'
            placeholder='Enter Address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='city'
            placeholder='Enter City'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='postalCode'
            placeholder='Enter Postal Code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='country'
            placeholder='Enter Country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>Countinue</Button>
      </Form>

    </FormContainer>
  )
}

export default ShippingScreen
