import React from 'react'
import { renderWithProviders } from '../../../utils/test-utils'
import { testProducts } from '../../../utils/test-products'
import Product from './Product'
import { cartSlice } from '../../../redux/cartSlice'
import { MemoryRouter } from 'react-router-dom'
const { addToCart } = cartSlice.actions
const productToAdd =
    {
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
    }

const cartItemToAdd = {
  id: 3,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  color: 'white'
}

describe('CartIcon component', () => {
  it('renders product', async () => {
    const { findByRole, store } = renderWithProviders(<MemoryRouter><Product {...productToAdd}/></MemoryRouter>, {
      preloadedState: {
        cartState: {
          cart: [{ id: 0, amount: 2 }, { id: 1, amount: 2 }]
        },
        products: {
          data: {
            electronics: testProducts
          },
          status: 'succeeded',
          error: null,
          searchTerm: ''
        }
      }
    })

    const addToCartBtn = await findByRole('button', {
      name: /add to cart/i
    })

    expect(addToCartBtn).toBeInTheDocument()
    const cart = store.getState().cartState.cart
    expect(cart).toHaveLength(2)
    store.dispatch(addToCart(cartItemToAdd))
  })
})
