import React from 'react'
import { CartRemoveIcon, CartScreenContainer, CartScreenImage, CartScreenItemContainer } from './CartScreenStyles'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../redux/store'

const CartScreen = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState.cart)
  return (
    <CartScreenContainer>
      {cart.map((cartItem) => (
        <CartScreenItemContainer key={cartItem.id}>
            <CartScreenImage src={cartItem.image} alt={cartItem.title} />
            <div>{cartItem.title}</div>
            <span>{cartItem.amount}</span>
            <div>${cartItem.price.toFixed(2)}</div>
            <CartRemoveIcon/>
        </CartScreenItemContainer>
      ))}
    </CartScreenContainer>
  )
}

export default CartScreen
