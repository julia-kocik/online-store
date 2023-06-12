import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { testProducts } from '../utils/test-products'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductsState {
  data: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  searchTerm: string
}

const initialState: ProductsState = {
  data: [],
  status: 'idle',
  error: null,
  searchTerm: ''
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  let transformed
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    if (response.data) {
      transformed = response.data.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = []
        }
        acc[product.category].push(product)
        return acc
      }, {})
    }
  } catch (error) {
    console.log(error)
    transformed = testProducts
  }

  // eslint-disable-next-line no-trailing-spaces
  
  return transformed
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
  }
})

export default productsSlice.reducer
