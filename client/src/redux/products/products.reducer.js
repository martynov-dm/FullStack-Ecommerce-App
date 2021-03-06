import AuthActionTypes from '../auth/auth.types'
import productsActionTypes from './products.types'
import { addingProducts } from './products.utils'

const INITIAL_STATE = {
  productsLoading: false,
  productsArr: [],
  currency: 'USD',
  sorting: {
    name: null,
    price: null,
  },
  hasMore: true,
  error: null,
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActionTypes.SORT_NAME:
      return {
        ...state,
        sorting: {
          price: null,
          name: action.payload,
        },
      }
    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return INITIAL_STATE
    case productsActionTypes.SORT_PRICE:
      return {
        ...state,
        sorting: {
          name: null,
          price: action.payload,
        },
      }

    case productsActionTypes.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }

    case productsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsArr: addingProducts(state.productsArr, action.payload),
        error: null,
      }
    case productsActionTypes.PRODUCTS_OPERATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    case productsActionTypes.TOGGLE_PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: !state.productsLoading,
      }

    case productsActionTypes.HAS_MORE_PRODUCTS_TOGGLE:
      return {
        ...state,
        hasMore: !state.hasMore,
      }
    case AuthActionTypes.REMOVE_ERROR:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}

export default productsReducer
