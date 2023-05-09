import React, { useEffect, useState } from 'react'
import { CartContainer, CartCounter, CartCounterWrapper, CartPreview, CartStyledIcon } from './CartIconStyles'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../redux/store'
import CartPreviewItems from '../CartPreviewItems/CartPreviewItems'

const CartIcon = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState?.cart)
  const [totalCartAmount, setTotalCartAmount] = useState(0)

  useEffect(() => {
    calculateTotalCartItemsAmount()
  }, [cart])

  const calculateTotalCartItemsAmount = (): void => {
    const totalAmount = cart?.reduce((acc, { amount }) => acc + amount, 0)
    setTotalCartAmount(totalAmount)
  }
  return (
    <CartContainer>
      <CartCounterWrapper>
        {cart?.length > 0 && <CartCounter length={totalCartAmount}>{totalCartAmount}</CartCounter>}
        <CartStyledIcon/>
      </CartCounterWrapper>
      <CartPreview>
        <CartPreviewItems/>
      </CartPreview>
      </CartContainer>
  )
}

export default CartIcon
