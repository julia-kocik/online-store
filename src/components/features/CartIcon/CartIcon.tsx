import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CartContainer } from './CartIconStyles'

const CartIcon = (): JSX.Element => {
  return (
    <CartContainer>
      <BsFillCartCheckFill/>
    </CartContainer>
  )
}

export default CartIcon
