import React, { useState } from 'react'
import { CartPreviewAmount, CartRemoveIcon, CartScreenInnerContainer, CartScreenImage, CartScreenItemContainer, CartScreenContainer, ButtonContainer } from './CartScreenStyles'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { cartSlice } from '../../../redux/cartSlice'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Button from '../../common/Button/Button'
import { colors } from '../../../colors'
import { StyledLink } from '../../../GlobalStyles'
const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } = cartSlice.actions

const CartScreen = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState.cart)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const handleAction = (action, payload): void => {
    setIsLoading(true)
    try {
      dispatch(action(payload))
      setIsLoading(false)
    } catch (error) {
      console.log('Error updating cart:', error)
    }
  }
  if (cart.length === 0) {
    return <h3>
      <StyledLink to='/'>Your cart is empty, please return to homepage</StyledLink>
    </h3>
  }
  return (
    <CartScreenContainer>
      <CartScreenInnerContainer>
        {cart.map((cartItem) => (
          <CartScreenItemContainer key={cartItem.id}>
              <CartScreenImage src={cartItem.image} alt={cartItem.title} />
              <div>{cartItem.title}</div>
              <CartPreviewAmount>
                      <div onClick={() => {
                        if (!isLoading) {
                          handleAction(increaseItemQuantity, cartItem.id)
                        }
                      }}>
                        <IoIosArrowUp/>
                      </div>
                      <div>{cartItem.amount}</div>
                      <div onClick={() => {
                        if (!isLoading) {
                          handleAction(decreaseItemQuantity, cartItem.id)
                        }
                      }}>
                        <IoIosArrowDown/>
                      </div>
                  </CartPreviewAmount>
              <div>${(cartItem.price * cartItem.amount).toFixed(2)}</div>
             <CartRemoveIcon onClick={() => {
               if (!isLoading) {
                 handleAction(removeFromCart, cartItem.id)
               }
             }}/>
          </CartScreenItemContainer>
        ))}
      </CartScreenInnerContainer>
      {cart.length > 0 && (
        <ButtonContainer to='/checkout'>
          <Button title='Proceed to checkout' color={colors.white} background={colors.green} fontSize='1rem' height='3rem'/>
        </ButtonContainer>
      )}
    </CartScreenContainer>
  )
}

export default CartScreen
