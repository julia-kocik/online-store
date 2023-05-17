import React from 'react'
import CartIcon from './CartIcon'
import { renderWithProviders } from '../../../utils/test-utils'
import { MemoryRouter } from 'react-router-dom'

describe('CartIcon component', () => {
  it('renders the cart counter with the correct length', () => {
    const { getByTestId } = renderWithProviders(<MemoryRouter><CartIcon /></MemoryRouter>, {
      preloadedState: {
        cartState: {
          cart: [{ amount: 2 }, { amount: 3 }, { amount: 1 }]
        }
      }
    })
    const cartCounter = getByTestId('cart-counter')

    expect(cartCounter).toBeInTheDocument()
    expect(cartCounter.textContent).toBe('6')
  })
})
