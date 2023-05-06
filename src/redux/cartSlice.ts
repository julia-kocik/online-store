
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
      alert('Product successfully added to cart')
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      state.cart = state.cart.filter(item => item.id !== id)
    },
    clearCart: (state) => {
      state.cart = []
    },
    increaseItemQuantity: (state, action) => {
      const id = action.payload
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === id)
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].amount += 1
      }
    },
    decreaseItemQuantity: (state, action) => {
      const id = action.payload
      const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === id)
      if (existingItemIndex !== -1 && state.cart[existingItemIndex].amount > 1) {
        state.cart[existingItemIndex].amount -= 1
      } else {
        state.cart = state.cart.filter(cartItem => cartItem.id !== id)
      }
    }
  }

})

export default cartSlice.reducer
