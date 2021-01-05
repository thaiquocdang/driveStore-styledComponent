import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
} from '../constants/productConstants'
import { AllState } from '../type/Store'
const initialProductData = {
  name: '',
  image: '',
  description: '',
  brand: '',
  category: '',
  price: 0,
  countInStock: 0,
  rating: 0,
  numReviews: 0,
  id: '',
}
export const productListReducer = (
  state = { products: [] },
  action
): AllState['productList'] => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }

    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return { ...state, loading: false }
  }
}

export const productDetailsReducer = (
  state: AllState['productDetails'] = {
    product: initialProductData,
    loading: false,
    success: false,
  },
  action
): AllState['productDetails'] => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }

    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload }

    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export const productDeleteReducer = (
  state: AllState['productDelete'] = {
    product: initialProductData,
    loading: false,
    success: false,
  },
  action
): AllState['productDelete'] => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { ...state, loading: true }

    case PRODUCT_DELETE_SUCCESS:
      return { ...state, loading: false, success: true }

    case PRODUCT_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export const productCreateReducer = (
  state: AllState['productCreate'] = {
    product: initialProductData,
    loading: false,
    success: false,
  },
  action
): AllState['productCreate'] => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { ...state, loading: true }

    case PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      }

    case PRODUCT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload }

    case PRODUCT_CREATE_RESET:
      return state

    default:
      return state
  }
}

export const productUpdateReducer = (
  state: AllState['productCreate'] = {
    product: initialProductData,
    loading: false,
    success: false,
  },
  action
): AllState['productCreate'] => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { ...state, loading: true }

    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }

    case PRODUCT_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }

    case PRODUCT_UPDATE_RESET:
      return { ...state }

    default:
      return state
  }
}
