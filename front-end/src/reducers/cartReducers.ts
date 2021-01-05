import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_REMOVE_ALL_ITEM,
} from '../constants/cartConstants'
import { AllState } from '../type/Store'

export const cartReducer = (
  state: AllState['cart'] = {
    cartItems: [],
    gst: 0,
    itemsPrice: 0,
    paymentMethod: 'paypal',
    shippingFee: 0,
    totalPrice: 0,
    shippingAddress: {
      address: '',
      city: '',
      country: 'AUS',
      postalCode: '',
    },
  },
  action
): AllState['cart'] => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find((i) => i.id === item.id)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.id === existItem.id ? item : i
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id !== action.payload),
      }

    case CART_REMOVE_ALL_ITEM:
      return {
        ...state,
        cartItems: [],
      }

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }

    default:
      return state
  }
}
