import { AddressI, OrderItemI } from './Cart'
import { UserI } from './User'

export interface OrderI {
  orderItems: OrderItemI[]
  shippingAddress: AddressI
  gst: number
  itemsPrice: number
  shippingFee: number
  user: UserI
  totalPrice: number
  paymentMethod: string
  createdAt?: string
  isDelivered?: boolean
  isPaid?: boolean
  updatedAt?: string
  _id?: string
}

export interface UserOrderDetailsI extends OrderI {
  paymentResult: PaymentI
  payAt: string
  itemsPrice: number
  paidAt: string
  deliveredAt: string
}

export interface PaymentI {
  id: string
  status: string
  update_time: string
  email_address: string
}
