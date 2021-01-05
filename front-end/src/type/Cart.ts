export interface CartI {
  id: string
  name: string
  image: string
  price: number
  countInStock: number
  qty: number
}

export interface CartItemI {
  _id: string
  id: string
  name: string
  image: string
  price: number
  countInStock: number
  qty: number
}

export interface AddressI {
  address: string
  city: string
  postalCode: string
  country: string
}

export interface OrderItemI {
  _id: string
  id: string
  name: string
  image: string
  price: number
  qty: number
}
