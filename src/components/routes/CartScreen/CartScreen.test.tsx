import React from 'react'
import { renderWithProviders } from '../../../utils/test-utils'
import CartScreen from './CartScreen'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('CartScreen component', () => {
  const preloadedState = {
    cartState: {
      cart: [
        { amount: 3, color: '', id: 0, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', price: 55.99, title: 'Mens Cotton Jacket' },
        { amount: 2, color: '', id: 1, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', price: 25.99, title: 'Womens Cotton Jacket' }
      ]
    }
  }
  it('Renders cart screen', () => {
    // arrange
    const element = renderWithProviders(<MemoryRouter initialEntries={['/cart']}><CartScreen/></MemoryRouter>, {
      preloadedState
    })
    const noProductsMessage = element.queryByText(/is empty/i)
    const btn = element.getByRole('button', { name: /proceed to checkout/i })
    expect(noProductsMessage).not.toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })
  it('Clear cart after clicking remove icon', () => {
    const { store, queryAllByTestId } = renderWithProviders(<MemoryRouter initialEntries={['/cart']}><CartScreen/></MemoryRouter>, {
      preloadedState
    })
    const cartBeforeRemove = store.getState().cartState.cart
    expect(cartBeforeRemove).toHaveLength(2)
    const removeIcon = queryAllByTestId('cartRemoveIcon')
    expect(removeIcon).toHaveLength(2)
    userEvent.click(removeIcon[0])
    const cartAfterRemove = store.getState().cartState.cart
    expect(cartAfterRemove).toHaveLength(1)
  })
})
