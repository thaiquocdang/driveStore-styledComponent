import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CartAddItemActionI,
  CartRemoveItemActionI,
  CartRemoveAllItemActionI,
  CartSaveShippingAddressI,
  CartSavePaymentMethodI,
} from '../constants/cartConstants'
import { AddressI } from '../type/Cart'
import { ProductI } from '../type/Product'

export const addToCart = (id: string, qty: number) => async (
  dispatch: (arg: CartAddItemActionI) => void,
  getState
) => {
  //getState to get entired state

  const { data } = await axios.get<ProductI>(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItem = (id: string) => (
  dispatch: (arg: CartRemoveItemActionI) => void,
  getState
) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeAllItem = () => (
  dispatch: (arg: CartRemoveAllItemActionI) => void,
  getState
) => {
  dispatch({
    type: CART_REMOVE_ALL_ITEM,
  })
  localStorage.removeItem('cartItems')
}

export const saveShippingAddress = (data: AddressI) => (
  dispatch: (arg: CartSaveShippingAddressI) => void
) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data: string) => (
  dispatch: (arg: CartSavePaymentMethodI) => void
) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
