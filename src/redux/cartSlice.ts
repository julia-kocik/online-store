
import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  amount: number
  color?: string
}

interface CartState {
  cart: CartItem[]
}

const initialState: CartState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export default cartSlice.reducer
