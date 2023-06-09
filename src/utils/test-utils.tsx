import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import { cartSlice } from '../../src/redux/cartSlice'
import { productsSlice } from '../redux/productSlice'

export function renderWithProviders (
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { cartState: cartSlice.reducer, products: productsSlice.reducer },
      preloadedState
    }),
    ...renderOptions
  } = {}
): any {
  function Wrapper ({ children }): JSX.Element {
    return (
        <Provider store={store}>
          {children}
        </Provider>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
