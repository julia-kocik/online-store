import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CartContainer } from './CartIconStyles'

const CartIcon = (): JSX.Element => {
  return (
    <CartContainer>
      <BsFillCartCheckFill/>
      Helko
    </CartContainer>
  )
}

export default CartIcon
