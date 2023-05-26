import React from 'react'
import { renderWithProviders } from '../../../utils/test-utils'
import CartPreviewItems from './CartPreviewItems'
import { fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('CartIcon component', () => {
  it('renders cartAmount container with correctly increased value', () => {
    const { getByTestId } = renderWithProviders(<MemoryRouter><CartPreviewItems /></MemoryRouter>, {
      preloadedState: {
        cartState: {
          cart: [{ amount: 2 }]
        }
      }
    })
    const cartAmount = getByTestId('cart-amount')
    const increaseBtn = getByTestId('cart-increase-button')
    expect(cartAmount).toBeInTheDocument()
    expect(cartAmount.textContent).toBe('2')

    fireEvent.click(increaseBtn)
    expect(cartAmount.textContent).toBe('3')
  })

  it('renders cartAmount container with correctly decreased value', () => {
    const { getByTestId } = renderWithProviders(<MemoryRouter><CartPreviewItems /></MemoryRouter>, {
      preloadedState: {
        cartState: {
          cart: [{ amount: 4 }]
        }
      }
    })
    const cartAmount = getByTestId('cart-amount')
    const decreaseBtn = getByTestId('cart-decrease-button')
    expect(cartAmount).toBeInTheDocument()
    expect(cartAmount.textContent).toBe('4')

    fireEvent.click(decreaseBtn)
    expect(cartAmount.textContent).toBe('3')
  })
})
