import React from 'react'
import { renderWithProviders } from '../../../utils/test-utils'
import CartScreen from './CartScreen'
import { MemoryRouter } from 'react-router-dom'

describe('CartScreen component', () => {
  it('renders product', () => {
    // arrange
    const element = renderWithProviders(<MemoryRouter initialEntries={['/cart']}
      ><CartScreen/></MemoryRouter>, {
      preloadedState: {
        cartState: {
          cart: [{
            id: 3,
            title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
            price: 109.95,
            description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
            category: 'mensclothing',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            rating: {
              rate: 3.9,
              count: 120
            }
          }]
        }
      }
    }
    )
    const noProductsMessage = element.queryByText(/is empty/i)
    const btn = element.getByRole('button', { name: /proceed to checkout/i })
    expect(noProductsMessage).not.toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })
})
