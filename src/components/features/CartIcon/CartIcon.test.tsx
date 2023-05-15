import React from 'react'
import { render } from '@testing-library/react'
import CartIcon from './CartIcon'
import { Provider } from 'react-redux/lib/alternate-renderers'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'

describe('CartIcon component', () => {
  it('renders the cart counter with the correct length', () => {
    const mockStore = configureStore()
    const cartStore = mockStore({
      cartState: {
        cart: [{ amount: 2 }, { amount: 3 }, { amount: 1 }]
      }
    })
    const { getByTestId } = render(
        <Provider store={cartStore}>
          <MemoryRouter>
            <CartIcon />
          </MemoryRouter>
        </Provider>)
    const cartCounter = getByTestId('cart-counter')

    expect(cartCounter).toBeInTheDocument()
    expect(cartCounter.textContent).toBe('6')
  })
})
