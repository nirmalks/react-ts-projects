import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mobiles from "../../mobiles";

export interface AppState {
  loading: boolean;
  cart: typeof mobiles;
  total: number;
  quantity: number;
}
const initialState = {
  cart: mobiles,
  total: 0,
  quantity: 0,
  loading: true
}

type IdPayload = {
  id: string
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state: AppState) => {
      state.cart = []
      // return { cart: [] } //another way to return state
    },
    deleteItem: (state: AppState, action: PayloadAction<IdPayload>) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id)
    },
    increaseQuantity: (state: AppState, { payload }: PayloadAction<IdPayload>) => {
      const id = payload.id
      state.cart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      }).filter((cartItem) => cartItem?.quantity !== 0)

    },
    decreaseQuantity: (state: AppState, { payload }: PayloadAction<IdPayload>) => {
      const id = payload.id
      state.cart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      }).filter((item) => item?.quantity !== 0)

    },
    getTotal: (state: AppState) => {
      const { total, quantity } = state.cart.reduce(
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

      state.total = parseFloat(total.toFixed(2))
      state.quantity = quantity
    }
  }
});

export const { clearCart, increaseQuantity, decreaseQuantity, getTotal, deleteItem } = cartSlice.actions
export default cartSlice.reducer