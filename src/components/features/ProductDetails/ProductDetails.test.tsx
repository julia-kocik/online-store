import React from 'react'
import { renderWithProviders } from '../../../utils/test-utils'
import { testProducts } from '../../../utils/test-products'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductDetails from './ProductDetails'

describe('ProductDetails component', () => {
  it('renders product', async () => {
    const element = renderWithProviders(
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="electronics/9" />} />
            <Route path="/:category/:id" element={<ProductDetails />} />
          </Routes>
        </Router>
      , {
        preloadedState: {
          cartState: {
            cart: [{ id: 0, amount: 2 }, { id: 1, amount: 2 }]
          },
          products: {
            data: testProducts,
            status: 'succeeded',
            error: null,
            searchTerm: ''
          }
        }
      })
    const message = await element.findByText(/Compatibility Fast data transfers Improve PC /i)
    expect(message).toBeInTheDocument()
  })
})