import React from 'react'
import { CartPreviewAmount, CartRemoveIcon, CartScreenInnerContainer, CartScreenImage, CartScreenItemContainer, CartScreenContainer, ButtonContainer } from './CartScreenStyles'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../../redux/store'
import { cartSlice } from '../../../redux/cartSlice'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Button from '../../common/Button/Button'
import { colors } from '../../../colors'
const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } = cartSlice.actions

const CartScreen = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cartState.cart)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <CartScreenContainer>
      <CartScreenInnerContainer>
        {cart.map((cartItem) => (
          <CartScreenItemContainer key={cartItem.id}>
              <CartScreenImage src={cartItem.image} alt={cartItem.title} />
              <div>{cartItem.title}</div>
              <CartPreviewAmount>
                      <div onClick={() => {
                        dispatch(increaseItemQuantity(cartItem.id))
                      }}>
                        <IoIosArrowUp/>
                      </div>
                      <div>{cartItem.amount}</div>
                      <div onClick={() => {
                        dispatch(decreaseItemQuantity(cartItem.id))
                      }}>
                        <IoIosArrowDown/>
                      </div>
                  </CartPreviewAmount>
              <div>${cartItem.price.toFixed(2)}</div>
              <CartRemoveIcon onClick={() => dispatch(removeFromCart(cartItem.id))}/>
          </CartScreenItemContainer>
        ))}
      </CartScreenInnerContainer>
      <ButtonContainer to='/checkout'>
        <Button title='Proceed to chekout' color={colors.white} background={colors.green}/>
      </ButtonContainer>
    </CartScreenContainer>
  )
}

export default CartScreen
