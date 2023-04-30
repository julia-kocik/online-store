import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CartContainer, CartCounter } from './CartIconStyles'

const CartIcon = (): JSX.Element => {
  return (
    <CartContainer>
      <CartCounter>1</CartCounter>
      <BsFillCartCheckFill/>
    </CartContainer>
  )
}

export default CartIcon
