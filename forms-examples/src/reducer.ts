import { CLEAR_CART_ACTION, DECREASE_QUANTITY_ACTION, DELETE_ITEM_ACTION, GET_TOTAL_ACTION, INCREASE_QUANTITY_ACTION, LOADING_ACTION, TOGGLE_QUANTITY_ACTION, VIEW_ITEMS_ACTION } from "./actions"

export default function reducer(state, action) {
  if (action.type === CLEAR_CART_ACTION) {
    return { ...state, cart: [] }
  }
  if (action.type === DELETE_ITEM_ACTION) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id)
    }
  }
  if (action.type === INCREASE_QUANTITY_ACTION) {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    }).filter((cartItem) => cartItem.quantity !== 0);
    return { ...state, cart: updatedCart }
  }
  if (action.type === DECREASE_QUANTITY_ACTION) {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
      .filter((cartItem) => cartItem.quantity !== 0)
    return { ...state, cart: updatedCart }
  }
  if (action.type === GET_TOTAL_ACTION) {
    let { total, quantity } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem
        const itemTotal = price * quantity

        cartTotal.total += itemTotal
        cartTotal.quantity += quantity
        return cartTotal
      },
      {
        total: 0,
        quantity: 0,
      }
    )
    total = parseFloat(total.toFixed(2))

    return { ...state, total, quantity }
  }
  if (action.type === LOADING_ACTION) {
    return { ...state, loading: true }
  }
  if (action.type === VIEW_ITEMS_ACTION) {
    return { ...state, cart: action.payload, loading: false }
  }
  throw new Error('no matching action type')
}