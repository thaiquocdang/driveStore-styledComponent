import { OrderI } from '../type/Order'

export const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST'
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS'
export const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL'

export const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST'
export const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS'
export const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL'

export const ORDER_PAY_REQUEST = 'ORDER_PAY_REQUEST'
export const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS'
export const ORDER_PAY_FAIL = 'ORDER_PAY_FAIL'
export const ORDER_PAY_RESET = 'ORDER_PAY_RESET'

export const GET_MY_ORDERS_REQUEST = 'GET_MY_ORDERS_REQUEST'
export const GET_MY_ORDERS_SUCCESS = 'GET_MY_ORDERS_SUCCESS'
export const GET_MY_ORDERS_FAIL = 'GET_MY_ORDERS_FAIL'
export const GET_MY_ORDERS_RESET = 'GET_MY_ORDERS_RESET'

export interface OrderCreateRequestI {
  type: typeof ORDER_CREATE_REQUEST
}

export interface OrderCreateSuccessI {
  type: typeof ORDER_CREATE_SUCCESS
  payload: OrderI
}
export interface OrderCreateFailI {
  type: typeof ORDER_CREATE_FAIL
  payload: string
}
