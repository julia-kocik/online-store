import React, { useEffect, useState } from 'react'
import { CartContainer, CartCounter, CartCounterWrapper, CartPreview, CartStyledIcon } from './CartIconStyles'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../redux/store'

const CartIcon = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState.cart)
  const [totalCartAmount, setTotalCartAmount] = useState(0)

  const calculateTotalCartItemsAmount = (): void => {
    const totalAmount = cart.reduce((acc, { amount }) => acc + amount, 0)
    setTotalCartAmount(totalAmount)
  }

  useEffect(() => {
    calculateTotalCartItemsAmount()
  }, [cart])

  return (
    <CartContainer>
      <CartCounterWrapper>
        <CartCounter>{totalCartAmount}</CartCounter>
        <CartStyledIcon/>
      </CartCounterWrapper>
      <CartPreview/>
      </CartContainer>
  )
}

export default CartIcon
