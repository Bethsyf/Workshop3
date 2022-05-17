import {
  typesProduct
} from "../types/typesProduct"

const initialState = {
  products: []
}

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesProduct.add:
      return {
        products: [action.payload]
      }
      case typesProduct.list:
        return {
          products: [...action.payload]
        }
      case typesProduct.delete:
          return {
              products: state.products.filter(item => item.nombre !== action.payload)
          }
      case typesProduct.edit:
            return {
                ...state
            }
      case typesProduct.search:
        return {
          products: action.payload
        }
      default:
        return state
  }
}