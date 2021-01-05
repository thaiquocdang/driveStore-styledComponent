import { CartI, AddressI } from '../type/Cart'

export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
export const CART_REMOVE_ALL_ITEM = 'CART_REMOVE_ALL_ITEM'
export const CART_SAVE_SHIPPING_ADDRESS = 'CART_SAVE_SHIPPING_ADDRESS'
export const CART_SAVE_PAYMENT_METHOD = 'CART_SAVE_PAYMENT_METHOD'

export interface CartAddItemActionI {
  type: typeof CART_ADD_ITEM
  payload: CartI
}

export interface CartRemoveItemActionI {
  type: typeof CART_REMOVE_ITEM
  payload: string
}

export interface CartRemoveAllItemActionI {
  type: typeof CART_REMOVE_ALL_ITEM
}

export interface CartSaveShippingAddressI {
  type: typeof CART_SAVE_SHIPPING_ADDRESS
  payload: AddressI
}

export interface CartSavePaymentMethodI {
  type: typeof CART_SAVE_PAYMENT_METHOD
  payload: string
}
