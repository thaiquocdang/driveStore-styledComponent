import { Address } from 'cluster'
import { AddressI, CartI, CartItemI } from './Cart'
import { PaymentI, UserOrderDetailsI, OrderI } from './Order'
import { ProductI, ProductI, ProductI } from './Product'
import { UserI, UserInfo } from './User'
type productReducer = {
  product: ProductI
  loading: boolean
  success: boolean
  error?: string
}
export interface AllState {
  productList: {
    products: ProductI[]
    loading: boolean
    error?: string
  }
  productDetails: productReducer
  productDelete: productReducer
  productCreate: productReducer
  productUpdate: productReducer
  userLogin: {
    userInfo: UserI
    loading: boolean
    error?: string
  }
  userRegister: {
    userInfo: UserI
    loading: boolean
    error?: string
  }

  cart: {
    cartItems: CartItemI[]
    shippingAddress: AddressI
    paymentMethod: string
    itemsPrice: number
    shippingFee: number
    gst: number
    totalPrice: number
  }
  userDetails: {
    user: UserI
    loading: boolean
    error?: string
  }
  userUpdateProfile: {
    loading: boolean
    success: boolean
    userInfo: UserI
    error?: string
  }
  userList: {
    users: UserI[]
    loading: boolean
    error?: string
  }
  userDelete: {
    loading: boolean
    success: boolean
  }
  orderCreate: {
    success: boolean
    loading: boolean
    error?: string
    order: OrderI
  }
  orderDetails: {
    loading: boolean
    order: UserOrderDetailsI
    error?: string
  }
  orderPay: {
    loading: boolean
    success: boolean
  }
  orderList: {
    loading: boolean
    error?: string
    orders: UserOrderDetailsI[]
  }
  myOrdersList: {
    orders: UserOrderDetailsI[]
    loading: boolean
    error?: string
  }
}
