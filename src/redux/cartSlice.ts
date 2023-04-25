
import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  amount: number
  color: string
}

interface CartState {
  cart: CartItem[]
}

const initialState: CartState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id)
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].amount += (+item.amount ?? 0)
      } else {
        state.cart.push(item)
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      state.cart = state.cart.filter(item => item.id !== id)
    },
    clearCart: (state) => {
      state.cart = []
    },
    increaseItemQuantity: (state, action) => {
      const item = action.payload
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id)
      state.cart[existingItemIndex].amount += 1
    }
  }

})

export default cartSlice.reducer
