import React from 'react'
import { renderWithProviders } from '../../../utils/test-utils'
import { testProducts } from '../../../utils/test-products'
import { Routes, Route, Navigate, MemoryRouter } from 'react-router-dom'
import ProductDetails from './ProductDetails'

describe('ProductDetails component', () => {
  it('renders product', async () => {
    const element = renderWithProviders(
      <MemoryRouter initialEntries={['/electronics/9']}>
        <Routes>
            <Route path="/" element={<Navigate to="electronics/9" />} />
            <Route path="/:category/:id" element={<ProductDetails />} />
          </Routes>
        </MemoryRouter>

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
    const message = await element.findByText(/Your perfect pack for everyday use and walks in the forest/i)
    expect(message).toBeInTheDocument()
  })
})
